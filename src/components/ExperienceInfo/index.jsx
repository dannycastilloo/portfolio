import JobSkill from '../JobSkill'
import './index.scss'

function ExperienceInfo({ companyImg, companyName, jobRole, jobTasks, jobDate, jobSkills, certificate, onBackClick }) {
    return (
        <div className='exp-info-container'>
            <div className='exp-info-row'>
                <div className='exp-main'>
                    <img src={companyImg} alt={companyName} title={companyName} />
                    <h2>{jobRole}</h2>
                </div>
                <div className='exp-activities'>
                    <h3>Activities</h3>
                    <hr />
                    <ul>
                        {jobTasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='exp-info-row'>
                <div className='exp-skills'>
                    <h3>Main Skills</h3>
                    <hr />
                    <div className='exp-skills-container'>
                        {jobSkills.map((skill, index) => (
                            <JobSkill key={index} skillName={skill.skillName} skillImg={skill.skillImg} />
                        ))}
                    </div>
                </div>
                <div className='exp-date-actions'>
                    <div className='exp-date'>{jobDate}</div>
                    <div className='exp-actions'>
                        <div className='exp-certificate'>
                            <img src='./icons/document.svg' alt='Certificate' title='See certificate' />
                            <a href={certificate} title='Job Certificate'>View Certificate</a>
                        </div>
                        <div className='exp-back' onClick={onBackClick}>
                            <img src='./icons/back.svg' alt='Back' title='Go back' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceInfo