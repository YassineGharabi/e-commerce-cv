import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";


const MenuMobile = ({setMobileMenu}) => {
  return (
    <motion.div 
    initial={{ x : 200 , opacity : 0 }}
    animate={{ x : 0 , opacity : 1 }}
    transition={{ duration: 0.4 }}
    className="bg-white  absolute top-0 right-0 w-11/12 h-dvh lg:hidden" >

        <div className="flex justify-end px-2 py-3 mb-6" >
            <IoIosClose onClick={()=> setMobileMenu( prevState => !prevState)} className='text-3xl lg:hidden' />
        </div>

        <ul className=' bg-[#FAEDEB]'>
            <li className="py-4 px-8 border-gray-300 border-b-1" >
                <a href="#" className="title-hover-style text-sm" >PROMOTION</a>
            </li>
            <li className="py-4 px-8 border-gray-300 border-b-1" >
                <a href="#" className="title-hover-style text-sm">PRODUCT</a>
            </li>
            <li className="py-4 px-8 border-gray-300 border-b-1" >
                <a href="#" className="title-hover-style text-sm">ABOUT</a>
            </li>
            <li className="py-4 px-8 border-gray-300 border-b-1" >
                <a href="#" className="title-hover-style text-sm">CONTACT</a>
            </li>
        </ul>
    </motion.div>
  )
}

export default MenuMobile