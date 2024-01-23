import Technology from '../Technology'
import './index.scss'

function Project({ screenshot, title, description, repo, page, technologies }) {
    return (
        <div className='project-card'>
            <div className='project-img'>
                <img src={screenshot} alt={title} />
            </div>
            <div className='project-info'>
                <h2 className='project-name'>{title}</h2>
                <p>{description}</p>
                <div className='technologies'>
                    {technologies.map((tech, index) => (
                        <Technology
                            key={index} {...tech} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project