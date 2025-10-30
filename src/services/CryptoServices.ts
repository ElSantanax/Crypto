import axios from 'axios';
import { CryptoCurrenciesResponseShema } from '../schema/crypto-shema';

export async function getCrytos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = CryptoCurrenciesResponseShema.safeParse(Data)

    if (result.success) {
        return result.data
    }
}
