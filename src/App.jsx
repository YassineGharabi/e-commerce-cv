import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { BrowserRouter } from "react-router-dom"
import Hero from "./components/hero/Hero"
import HeroSlider from "./components/hero/HeroSlider"
import ProductsSection from "./components/products/ProductsSection"
import BlogSection from "./components/blog/BlogSection"

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Hero/>
      <HeroSlider/>
      <ProductsSection/>
      <BlogSection/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
