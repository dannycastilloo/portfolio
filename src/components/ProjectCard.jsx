function ProjectCard({ title, poster, logo, description, url }) {
    return (
        <div className='flex flex-col justify-start items-start gap-2 project-card'>
            <div>
                <img src={poster} alt={title} title={title} />
            </div>
            <div className='px-2 py-5 flex gap-4'>
                    <img className="w-6" src={logo} alt={title} title={title} />
                    <span className="text-xl font-medium text-neutral200">{title}</span>
            </div>
        </div>
    )
}

export default ProjectCard