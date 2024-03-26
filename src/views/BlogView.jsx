import BlogCard from "../components/BlogCard"
import blogData from "../data/blog"

function BlogView() {
  return (
    <div className='py-36 bg-backgroundBlack lg:py-44'>
      <div className='container mx-auto flex flex-col gap-20 w-11/12 md:w-10/12 lg:w-12/12'>
        <h2 className='text-center font-archivo font-extrabold text-white text-4xl lg:text-5xl'>Blog</h2>

        <div className='bg-white container mx-auto w-11/12 lg:w-12/12'>
          <section className='flex flex-col py-20 px-10 gap-16'>
            {blogData.map((blog, index) => (
              <BlogCard
                key={index}
                poster={blog.poster}
                title={blog.title}
                description={blog.description}
                views={blog.views}
                category={blog.category}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

export default BlogView