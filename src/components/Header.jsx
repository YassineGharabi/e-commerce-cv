import { useState } from 'react';
import logo from '../assets/logo.jpg'
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
const Header = () => {

    const [mobileMenu,setMobileMenu] = useState(false);

  return (
    <header>
        <nav className='flex items-center justify-between px-4' >

            {/* nav links */}
            <ul className='hidden lg:flex ' >
                <li>
                    <a href="#">Test</a>
                </li>
                <li>
                    <a href="#">Test</a>
                </li>
                <li>
                    <a href="#">Test</a>
                </li>
                <li>
                    <a href="#">Test</a>
                </li>
            </ul>

            {/* logo */}
            <a href="#">
                <img src={logo} alt={logo} className='w-32' />
            </a>


            {/* icons */}
            <div className='flex space-x-4' >

            {/* cart */}
            <p className='flex items-center text-sm font-semibold space-x-2 relative' >
                <span> 00.00 $ </span>
                <CiShoppingCart className='text-3xl ' />
                <span className='bg-black text-white rounded-full w-5 h-5 flex items-center justify-center font-light absolute right-[-3px] top-[-3px]' >2</span>
            </p>

            {/* burger menu */}
            { mobileMenu ?
            <IoIosClose onClick={()=> setMobileMenu( prevState => !prevState)} className='text-3xl lg:hidden' /> :
            <IoIosMenu onClick={()=> setMobileMenu( prevState => !prevState)} className='text-3xl lg:hidden' />  }

            </div>
            
            
        </nav>
    </header>
  )
}

export default Header