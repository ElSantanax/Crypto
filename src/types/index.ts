import z from "zod";
import { CurrencySchema } from "../schema/crypto-shema";

export type Currency = z.infer<typeof CurrencySchema>
