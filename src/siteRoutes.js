import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import CalcularIngresso from './pages/calcularIngresso'
import CorPrimaria from './pages/corPrimaria'
import Frequecia from './pages/frequencia'
import MaiorNumero from './pages/maiorNumero'

export default function SiteRoutes() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calcularIngresso" element={<CalcularIngresso />} />
      <Route path="/corPrimaria" element={<CorPrimaria />} />
      <Route path="/frequencia" element={<Frequecia />} />
      <Route path="/maiorNumero" element={<MaiorNumero />} />
    </Routes>
    </BrowserRouter>
)
}
