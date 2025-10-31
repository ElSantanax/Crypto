import { useState, type ChangeEvent } from "react";
import { useCryptoStore } from "../store";
import { currencies } from "../data";
import type { Pair } from "../types";

export default function CriptoSearchForm() {

  const cryptocurriencies = useCryptoStore((state) => state.cryptocurriencies)

  const [pair, setPair] = useState<Pair>({
    currency: '',
    criptocurrency: ''
  })

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
        >
          <option value="">-- Seleccionar --</option>
          {currencies.map((currency) => (
            <option
              key={currency.code}
              value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select
          name="criptocurrency"
          id="criptocurrency"
          onChange={handleChange}
        >
          <option value="">-- Seleccionar --</option>
          {cryptocurriencies.map(cryto => (
            <option
              key={cryto.CoinInfo.FullName}
              value={cryto.CoinInfo.Name}
            >
              {cryto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
}
