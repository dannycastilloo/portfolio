function ProjectPreview({ title, poster }) {
    return (
        <div className='flex flex-col justify-center items-start shadow-md w-full md:w-11/12 rounded-xl'>

            <img src={poster} alt={title} title={title} />
            <span className="ml-4 py-4 text-xl font-semibold text-neutral800">{title}</span>

        </div>
    )
}

export default ProjectPreview