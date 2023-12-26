import './index.scss'

function Experience({ role, time, description }) {
    return (
        <div className='experience-card'>
            <div className='experience-info'>
                <h2 className='role'>{role}</h2>
                <p className='time'>{time}</p>
                <p className='description'>{description}</p>
            </div>
        </div>
    )
}

export default Experience