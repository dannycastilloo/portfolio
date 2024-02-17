import './index.scss'

function ProjectCard({ title, poster, logo, imgtype, type, onClick }) {
    return (
        <figure className='project-card' onClick={onClick}>
            <div className='poster-container'>
                <div className='poster-overlay'>
                    <span className='see-more-text'>See More</span>
                </div>
                <img className='project-image' src={poster} alt={title} />
            </div>
            <div className='project-info'>
                <div className='project-name'>
                    <img src={logo} alt={title} />
                    <span>{title}</span>
                </div>
                <div className='project-type'>
                    <img src={imgtype} alt={type} />
                    <span>{type}</span>
                </div>
            </div>
        </figure>
    )
}

export default ProjectCard