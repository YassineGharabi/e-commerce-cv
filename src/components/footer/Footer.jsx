import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F8] text-[#606060] sm:grid sm:grid-cols-3 lg:grid-cols-5 lg:h-80 lg:flex lg:items-center lg:justify-between" >
        <div className="py-8 px-4">
            <img src={logo} alt={logo} className='w-32' />
            <p className="text-sm" >&copy; 2025 Click & Collect</p>
            <p className="text-sm" >All Rights Reserved</p>
        </div>
        <div className="py-8 px-4">
            <ul className="space-y-3">
                <li className="text-secondary uppercase font-semibold" >about us</li>
                <li className="text-sm" >About us</li>
                <li className="text-sm" >Store location</li>
                <li className="text-sm" >Contact</li>
                <li className="text-sm" >Orders tracking</li>
            </ul>
        </div>
        <div className="py-8 px-4">
            <ul className="space-y-3">
                <li className="text-secondary uppercase font-semibold" >useful links</li>
                <li className="text-sm" >Returns</li>
                <li className="text-sm" >Suport policy</li>
                <li className="text-sm" >Size guide</li>
                <li className="text-sm" >FAQs</li>
            </ul>
        </div>
        <div className="py-8 px-4" >
            <ul className="space-y-3">
                <li className="text-secondary uppercase font-semibold" >follow us</li>
                <li className="text-sm" >Facebook</li>
                <li className="text-sm" >Twitter</li>
                <li className="text-sm" >Instagram</li>
                <li className="text-sm" >Youtube</li>
            </ul>
        </div>
        <div className="py-8 px-4 sm:col-span-2 lg:col-span-1 space-y-3" >
            <ul className="space-y-3">
                <li className="text-secondary uppercase font-semibold" >subscribe</li>
                <li className="text-sm" >Get E-mail updates our latest shop and special offers.</li>
            </ul>
            <div className="flex flex-col items-start space-y-3" >
                <input className="w-9/12 p-3 border outline-none text-sm focus:border-b-primary" type="text" placeholder="Enter your email address..." />
                <p className="title-hover-style" >SUBSCRIBE</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer