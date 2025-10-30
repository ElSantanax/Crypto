import { create } from 'zustand'
import { devtools } from 'zustand/middleware';
import axios from 'axios';
import { CryptoCurrenciesResponseShema } from './schema/crypto-shema';
import type { CryptoCurrency } from './types';

type CryptoStore = {
    cryptocurriencies: CryptoCurrency[],
    fetchCrytos: () => Promise<void>
}

async function getCrytos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = CryptoCurrenciesResponseShema.safeParse(Data)

    if (result.success) {
        return result.data
    }
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurriencies: [],
    fetchCrytos: async () => {
        const cryptocurriencies = await getCrytos();
        set(() => ({
            cryptocurriencies
        }))
    }
})))