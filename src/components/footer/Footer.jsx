import logo from "../../assets/logo.png"

const Footer = () => {

    const footerLinksAbout = [
            "About us",
            "Store location",
            "Contact",
            "Orders tracking"
    ];

    const footerLinksUseful = [
            "Returns",
            "Suport policy",
            "Size guide",
            "FAQs"
    ];

    const footerLinksFollow = [
            "Facebook",
            "Twitter",
            "Instagram",
            "Youtube"
    ];

  return (
    <footer className="bg-[#F6F6F8] text-[#606060] sm:grid sm:grid-cols-3 lg:grid-cols-5 lg:h-80 lg:flex lg:items-center lg:justify-between" >
        <div className="py-8 px-4">
            <img src={logo} alt={logo} className='w-32' />
            <p className="text-sm" >&copy; 2025 Click & Collect</p>
            <p className="text-sm" >All Rights Reserved</p>
        </div>
        <div className="py-8 px-4">
            <ul className="space-y-3">
                <li className="text-secondary uppercase font-semibold cursor-pointer" >about us</li>
                {
                    footerLinksAbout.map(
                        (link,index)=><li key={index} className="text-sm cursor-pointer" >{link}</li>
                    )
                }
            </ul>
        </div>
        <div className="py-8 px-4">
            <ul className="space-y-3">
                <li className="text-secondary uppercase font-semibold cursor-pointer" >useful links</li>
                {
                    footerLinksUseful.map(
                        (link,index)=><li key={index} className="text-sm cursor-pointer" >{link}</li>
                    )
                }
            </ul>
        </div>
        <div className="py-8 px-4" >
            <ul className="space-y-3">
                <li className="text-secondary uppercase font-semibold cursor-pointer" >follow us</li>
                {
                    footerLinksFollow.map(
                        (link,index)=><li key={index} className="text-sm cursor-pointer" >{link}</li>
                    )
                }
            </ul>
        </div>
        <div className="py-8 px-4 sm:col-span-2 lg:col-span-1 space-y-3" >
            <ul className="space-y-3">
                <li className="text-secondary uppercase font-semibold cursor-pointer" >subscribe</li>
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