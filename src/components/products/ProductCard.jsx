import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import StarRating from "./StarRating";

const ProductCard = ({product}) => {
    // data for buttons that shows while hover
    const ButtonsData = [
        {
            icon : <CiShoppingCart className="text-2xl text-white" />,
            position : 'top-1'
        },
        {
            icon : <CiHeart className="text-2xl text-white" />,
            position : 'top-13'
        },
        {
            icon : <IoEyeOutline className="text-2xl text-white" />,
            position : 'top-25'
        },
    ];

  return (
    <div className="group lg:w-full sm:w-10/12 w-full" >
        {/* product image section */}
        <div className="h-80 flex items-center justify-center relative " >
            <img src={product.image} alt={product.title} className="w-40" />
            {
                ButtonsData.map( (item,index) => <span className={`absolute opacity-0 group-hover:opacity-100 duration-300 hover:scale-105 cursor-pointer flex items-center justify-center bg-primary w-10 h-10 rounded-sm ${item.position} right-1`} >{item.icon}</span> )
            }
            <span className="absolute text-sm font-light flex items-center gap-1 bg-primary text-white justify-center w-15 h-6 rounded-sm top-1 left-1" >
                Sale!
            </span>
        </div>
        {/* details card */}
        <div className="py-2 px-1 space-y-1" >
            <h1 className="font-semibold" >{product.title?.length > 25 ? `${product.title.slice(0,25)}...` : product.title }</h1>
            <h1 className="text-sm text-gray-600" >{product.price} $</h1>
            <StarRating rating={product.rating?.rate || 0} />
        </div>
    </div>
  )
}

export default ProductCard