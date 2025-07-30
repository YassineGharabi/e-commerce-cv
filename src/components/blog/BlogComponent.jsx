import { FaArrowRight } from "react-icons/fa"


const BlogComponent = ({blog}) => {
  return (
        <div >
         {/* image section */}
        <div className='flex flex-col items-center' >
            <div className='relative'>
                <img src={blog.image} alt="image" className='rounded-md ' />
                <span className='absolute text-white font-light bg-primary px-4 py-1 rounded-md top-0'>{blog.date}</span>
            </div>
             {/* details section */}
            <div className='text-center bg-white px-8 py-5 space-y-2  border border-gray-400 w-11/12 rounded-md hover:scale-105 duration-500 relative bottom-5'>
                <h4 className='font-light text-[#97757D] ' >{blog.work}</h4>
                <h2 className='text-lg font-light '>{blog.title}</h2>
                <p className='font-light text-sm leading-7 text-[#97757D]'>{blog.desc}</p>
                <p className=' flex items-center justify-center py-2 gap-2 border-dashed border-b  border-t border-gray-300 text-primary group cursor-pointer'>Read more <FaArrowRight className='text-sm hidden group-hover:block duration-500' /> </p>
            </div>
        </div>
    </div>
  )
}

export default BlogComponent