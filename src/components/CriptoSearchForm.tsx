import { useCryptoStore } from "../store";
import { currencies } from "../data";

export default function CriptoSearchForm() {

  const cryptocurriencies = useCryptoStore((state) => state.cryptocurriencies)

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency">
          <option value="">-- Seleccionar --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select name="criptocurrency" id="criptocurrency">
          <option value="">-- Seleccionar --</option>
          {cryptocurriencies.map(cryto => (
            <option>{cryto.CoinInfo.FullName}</option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
}
