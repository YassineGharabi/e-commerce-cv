import blogImage1 from '../../assets/blog-img1.jpg';
import blogImage2 from '../../assets/blog-img2.jpg';
import blogImage3 from '../../assets/blog-img3.jpg';
import BlogComponent from './BlogComponent';

const BlogSection = () => {


    const blogData = [
        {
            id: 1,
            date: '01 Jan 2019',
            image: blogImage1,
            work: 'ui/ux designer',
            title: 'Quis autem reprehenderit',
            desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis deleniti corrupti.'
        },
        {
            id: 2,
            date: '02 Jan 2019',
            image: blogImage2,
            work: 'web developer',
            title: 'At vero eos accusamus',
            desc: 'Et harum quidem rerum it facilis est et expedita distinctio a libero tempore cumsoluta '
        },
        {
            id: 3,
            date: '03 Jan 2019',
            image: blogImage3,
            work: 'web designer',
            title: 'Et harum quidem rerum',
            desc: 'Temporibus autemes quibusdam et aut offici debitis rerum necessitatibus recusandae.'
        },
    ];



  return (
    <div className="lg:px-20 px-8 pt-20" >
        {/* title section */}
        <div >
            <h1 className='title-decoration' >OUR BLOG</h1>
        </div>
        {/* blog grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-16' >
            {
                blogData.map( (blog,index) => <BlogComponent key={index} blog={blog} /> )
            }
        </div>
    </div>
  )
}

export default BlogSection