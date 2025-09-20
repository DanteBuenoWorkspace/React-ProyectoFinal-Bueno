import { useEffect } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { RouterPrincipal } from './routers/RouterPrincipal'
import { BrowserRouter } from "react-router-dom"
import { Footer } from './components/Footer'
import { getProductos } from './services/products'

function App() {

  useEffect(() => {
    getProductos()
  }, [])

  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <main className="main-content">
          <RouterPrincipal />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
