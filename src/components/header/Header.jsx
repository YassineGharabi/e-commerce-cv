import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import { IoIosMenu } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import MenuMobile from './MenuMobile';

const Header = () => {

    const [mobileMenu,setMobileMenu] = useState(false);

    // Change background color when menu opens
    useEffect(() => {
    if (mobileMenu) {
      document.body.style.backgroundColor = "#999999";
    } else {
      document.body.style.backgroundColor = "";
    }
    }, [mobileMenu]);

    // Reset mobileMenu when window resizes above breakpoint (lg: 1024px)
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setMobileMenu(false); // Close menu on desktop view
        }
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);


  return (
    <header>
        <nav className='flex items-center justify-between lg:px-8 px-4 ' >

            {/* nav links */}
            <ul className='hidden lg:flex lg:space-x-4 lg:w-1/3 '>
                <li>
                    <a href="#" className="title-hover-style" >PROMOTION</a>
                </li>
                <li>
                    <a href="#" className="title-hover-style">PRODUCT</a>
                </li>
                <li>
                    <a href="#" className="title-hover-style">ABOUT</a>
                </li>
                <li>
                    <a href="#" className="title-hover-style">CONTACT</a>
                </li>
            </ul>


            {/* logo */}
            <div className=' lg:flex lg:justify-center lg:w-1/3 '>
                <a href="#">
                    <img src={logo} alt={logo} className='w-32' />
                </a>
            </div>


            {/* icons */}
            <div className='flex space-x-2 lg:w-1/3 lg:justify-end' >

            {/* cart */}
            <p className='flex items-center text-sm text-secondary font-semibold space-x-2 relative' >
                <span> 00.00 $ </span>
                <CiShoppingCart className='text-3xl ' />
                <span className='bg-black text-white rounded-full w-5 h-5 flex items-center justify-center font-light absolute right-[-3px] top-[-3px]' >2</span>
            </p>

            {/* burger menu */}
            <IoIosMenu onClick={()=> setMobileMenu( prevState => !prevState)} className='text-3xl lg:hidden' />

            </div>
        </nav>


        {/* mobile menu */}

        {
            mobileMenu && <MenuMobile setMobileMenu={setMobileMenu} /> 
        }
        



    </header>
  )
}

export default Header