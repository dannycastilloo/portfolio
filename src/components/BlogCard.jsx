function BlogCard({ poster, title, description, views, category }) {
    return (
        <div className='flex flex-col shadow-md gap-5 justify-center w-6/6 rounded md:w-5/6 mx-auto lg:flex-row'>
            <div className="mx-auto w-12/12 md:w-10/12 lg:w-4/12">
                <img className="mx-auto w-full" src={poster} alt={title} title={title} />
            </div>

            <div className="flex flex-col gap-6 px-5 py-5 mx-auto w-12/12 md:w-10/12 lg:w-8/12 lg:gap-4">
                <h3 className="font-semibold text-lg text-neutral800 text-center md:text-xl lg:text-start">{title}</h3>
                <p className="text-neutral700 text-center lg:text-start text-sm md:text-base">{description}</p>
                <div className="mt-6 flex flex-col gap-4 lg:mt-auto">
                    <hr className="bg-black w-full" />
                    <div className='flex justify-between'>
                        <span className="text-sm text-neutral600">{views} views</span>
                        <div className="bg-gray2 rounded py-1 px-3">
                            <h5 className="text-sm text-black1">{category}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard