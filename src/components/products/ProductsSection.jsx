import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const ProductsSection = () => {

    const [product,setProduct] = useState({});
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/14')
        .then( response => response.json() )
        .then( product => setProduct(product));
    },[]);


  return (
    <div className="lg:px-20 px-8 pt-20" >
        {/* title section */}
        <div >
            <h1 className='title-decoration' >DAILY DEALS</h1>
        </div>
        {/* product grid */}
        <div className="pt-15 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center" >
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
        </div>
    </div>
  )
}

export default ProductsSection