import './index.scss'
import JobCard from "../JobCard"

function Experience() {
    return (
        <div className="experience-content">
            <h2>Laboral Experience</h2>
            
            <div className='jobs-container'>
                <JobCard
                    logo='./exp/tecnovedades.svg'
                    role='Full Stack Developer'
                />
                <JobCard
                    logo='./exp/consigueventas.svg'
                    role='Web Developer'
                />
                <JobCard
                    logo='./exp/devdatep.svg'
                    role='Web Designer'
                />
            </div>
        </div>
    )
}

export default Experience