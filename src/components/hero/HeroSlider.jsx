import HeroSliderComponents from "./HeroSliderComponents"
import { LiaShippingFastSolid } from "react-icons/lia";
import { Ri24HoursFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdHistoryToggleOff } from "react-icons/md";

const HeroSlider = () => {

    const HeroSliderInfos = [
        {
            icon : <LiaShippingFastSolid className="text-4xl hover:rotate-12" /> ,
            header : "Free Shipping",
            description : "Free shipping on all order"
        },
        {
            icon : <Ri24HoursFill className="text-4xl hover:rotate-12" /> ,
            header : "Support 24/7",
            description : "Free shipping on all order"
        },
        {
            icon : <RiMoneyDollarCircleFill className="text-4xl hover:rotate-12" /> ,
            header : "Money Return",
            description : "Free shipping on all order"
        },
        {
            icon : <MdHistoryToggleOff className="text-4xl hover:rotate-12" /> ,
            header : "Order Discount",
            description : "Free shipping on all order"
        },
    ];

  return (
    <div className="lg:px-20 px-4 py-4 grid lg:grid-cols-4 sm:grid-cols-2 sm:justify-items-center grid-cols-1 " >
        {
            HeroSliderInfos.map( (item,index) => <HeroSliderComponents key={index} icon={item.icon} header={item.header} description={item.description} /> )
        }
    </div>
  )
}

export default HeroSlider