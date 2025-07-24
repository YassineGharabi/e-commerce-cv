// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import hero1 from "../../assets/hero-1.png";
import hero2 from "../../assets/hero-2.png";

const Hero = () => {

    const heroData = [
        {
            season : "Winter",
            image : hero1
        },
        {
            season : "Summer",
            image : hero2
        }
    ]

  return (
    <Swiper className=''
      modules={[Navigation]}
      navigation
      slidesPerView={1}
    >
    {
        heroData.map(
            (item,index)=>(
                <SwiperSlide key={index} className="bg-[#F0E0FF] sm:pt-0 pt-20 sm:px-20" >
                    <div className="grid sm:grid-cols-2 ">

                        {/* text section */}
                        <div className="flex flex-col sm:items-start justify-center items-center space-y-2 md:space-y-4 lg:space-y-6">
                            <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold' >Smart Products</h3>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl sm:text-start text-center font-semibold md:leading-11 lg:leading-16' >{item.season} <span className='text-primary' >Offer</span> 2024 Collection</h1>
                            <button className='border lg:w-1/3 w-1/2 py-3 hover:bg-primary hover:text-white hover:border-primary duration-300' >SHOP NOW</button>
                        </div>
                
                        {/* image section */}
                        <div className="flex justify-center items-end pt-20">
                            <img src={item.image} alt={item.image} />
                        </div>


                    </div>
                </SwiperSlide>
            )
        )
    }

    </Swiper>
  )
}

export default Hero