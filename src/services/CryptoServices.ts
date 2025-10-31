import axios from 'axios';
import { CryptoCurrenciesResponseShema, CryptoPriceSchema } from '../schema/crypto-shema';
import type { Pair } from '../types';

export async function getCrytos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = CryptoCurrenciesResponseShema.safeParse(Data)

    if (result.success) {
        return result.data
    }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    const { data: { DISPLAY } } = await axios(url)
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])

    if (result.success) {
        return result.data;
    }
}