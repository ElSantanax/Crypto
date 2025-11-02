import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCrytos, fetchCurrentCryptoPrice } from "./services/CryptoServices";
import type { CryptoCurrency, CryptoPrice, Pair } from "./types";

type CryptoStore = {
	cryptocurriencies: CryptoCurrency[];
	result: CryptoPrice;
	loading: boolean;
	fetchCrytos: () => Promise<void>;
	fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
	devtools((set) => ({
		cryptocurriencies: [],
		result: {
			IMAGEURL: "",
			PRICE: "",
			HIGHDAY: "",
			LOWDAY: "",
			CHANGE24HOUR: "",
			LASTUPDATE: "",
		},

		loading: false,

		fetchCrytos: async () => {
			const cryptocurriencies = await getCrytos();
			set(() => ({
				cryptocurriencies,
			}));
		},

		fetchData: async (pair) => {
			set(() => ({
				loading: true,
			}));
			const result = await fetchCurrentCryptoPrice(pair);
			set(() => ({
				result,
				loading: false,
			}));
		},
	})),
);
