import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from './pages/Home'
import Sobre from './pages/Sobre'

function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
