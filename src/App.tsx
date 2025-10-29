import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"

function App() {
  const fetchCrytos = useCryptoStore((state) => state.fetchCrytos)

  useEffect(() => {
    fetchCrytos()
  }, [fetchCrytos]);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm />
        </div>
      </div>
    </>
  )
}

export default App