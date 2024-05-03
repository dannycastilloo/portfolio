function ProjectCard({ title, poster, logo, description, url }) {
    return (
        <div className='flex flex-col justify-center items-center shadow-md gap-2 project-card rounded-xl'>
            <div>
                <img src={poster} alt={title} title={title} />
            </div>
            <div className='px-4 py-5 flex flex-col gap-4'>
                <div className='flex gap-5'>
                    <img src={logo} alt={title} title={title} />
                    <span className="text-xl font-medium text-neutral800">{title}</span>
                </div>

                <p className="text-neutral600 h-20">{description}</p>

            </div>
        </div>
    )
}

export default ProjectCard