import './index.css'

function Experience({ role, time, description, logo, title }) {
    return (
        <div className='experience-card'>
            <div className='experience-info'>
                <h2 className='role'>{role}</h2>
                <p className='time'>{time}</p>
                <p className='description'>{description}</p>
            </div>
            <div className='company-image'>
                <img src={logo} alt={title} />
            </div>
        </div>
    )
}

export default Experience