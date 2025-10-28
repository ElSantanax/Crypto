import { create } from 'zustand'

export const useCryptoStore = create(() => ({
    fetchCrytos: () => {
        console.log('Desde fetchCryto');
    }
}))