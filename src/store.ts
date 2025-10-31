import { create } from 'zustand'
import { devtools } from 'zustand/middleware';
import { getCrytos, fetchCurrentCryptoPrice } from './services/CryptoServices';
import type { CryptoCurrency, Pair } from './types';

type CryptoStore = {
    cryptocurriencies: CryptoCurrency[],
    fetchCrytos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurriencies: [],
    fetchCrytos: async () => {
        const cryptocurriencies = await getCrytos();
        set(() => ({
            cryptocurriencies
        }))
    },

    fetchData: async (pair) => {
        const result = await fetchCurrentCryptoPrice(pair)
        console.log(result);
    }
})))