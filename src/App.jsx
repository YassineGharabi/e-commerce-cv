import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { BrowserRouter } from "react-router-dom"
import Hero from "./components/hero/Hero"

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Hero/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
