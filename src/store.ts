import { create } from 'zustand'
import { devtools } from 'zustand/middleware';
import { getCrytos } from './services/CryptoServices';
import type { CryptoCurrency } from './types';

type CryptoStore = {
    cryptocurriencies: CryptoCurrency[],
    fetchCrytos: () => Promise<void>
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