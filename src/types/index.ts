import z from "zod";
import { CurrencySchema, CryptoCurrencyResponseShema } from "../schema/crypto-shema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseShema>