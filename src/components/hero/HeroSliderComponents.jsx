

const HeroSliderComponents = ({icon,header,description}) => {
  return (
    <div className="flex items-center space-x-6 py-2 group" >
        {/* icon section */}
        <div className=" group-hover:rotate-12 duration-300" >
            {icon}
        </div>
        {/* details section */}
        <div>
            <h1 className="text-xl" >{header}</h1>
            <h3 className="text-gray-600 text-sm " >{description}</h3>
        </div>
    </div>
  )
}

export default HeroSliderComponents