import Technology from '../Technology'
import './index.css'

function Project({ screenshot, title, description, repo, page, technologies }) {
    return (
        <div className='project-card'>
            <div className='project-left'>
                <img src={screenshot} alt={title} />
                <div className='project-actions'>
                    <a href={repo}>
                        <button className='project-button'>
                            <img src='./contact/Github.svg' alt='Github' />
                            <span>Github</span>
                        </button>
                    </a>
                    <a href={page}>
                        <button className='project-button'>
                            <img src='./icons/Visit.svg' alt='Visit' />
                            <span>Visit</span>
                        </button>
                    </a>
                </div>
            </div>
            <div className='project-right'>
                <h2>{title}</h2>
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