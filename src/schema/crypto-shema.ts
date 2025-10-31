import z from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencyResponseShema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  }),
});

export const CryptoCurrenciesResponseShema = z.array(CryptoCurrencyResponseShema);

export const PairShema = z.object({
  currency: z.string(),
  criptocurrency: z.string()
})