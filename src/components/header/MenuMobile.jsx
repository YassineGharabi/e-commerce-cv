import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const MenuMobile = ({setMobileMenu}) => {

    // menuLinksListe
    const menuLinksListe = [ "PROMOTION" , "PRODUCT" , "ABOUT" , "CONTACT" ];

    return (
    <motion.div 
    initial={{ x : 200 , opacity : 0 }}
    animate={{ x : 0 , opacity : 1 }}
    transition={{ duration: 0.4 }}
    className="bg-white  fixed top-0 right-0 w-11/12 h-dvh lg:hidden z-50" >

        <div className="flex justify-end px-2 py-3 mb-6" >
            <IoIosClose onClick={()=> setMobileMenu( prevState => !prevState)} className='text-3xl lg:hidden' />
        </div>

        {/* nav links */}
        <ul className=' bg-[#FAEDEB]'>
            {
                menuLinksListe.map(
                    (link,index) => (
                        <li key={index} className="py-4 px-8 border-gray-300 border-b-1" >
                            <Link href={link} className="title-hover-style text-sm" >{link}</Link>
                        </li>
                    )
                )
            }
        </ul>
        
    </motion.div>
  )
}

export default MenuMobile