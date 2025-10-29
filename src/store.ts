import { create } from 'zustand'
import axios from 'axios';
import { CrytoCurrenciesResponseShema } from './schema/crypto-shema';

async function getCrytos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = CrytoCurrenciesResponseShema.safeParse(Data)
    console.log(result);
}

export const useCryptoStore = create(() => ({
    fetchCrytos: () => {
        getCrytos()
    }
}))