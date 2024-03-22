import jobsData from '../data/jobs'

function ExperienceInfo({ company, role }) {

    const jobData = jobsData.find(job => job.company === company && job.role === role);

    if (!jobData) {
        return null;
    }

    const { tasks, date, location } = jobData;

    return (
        <div className='exp-info-container'>
            <div className='exp-header'>
                <div className='exp-main'>
                    <img src="./icons/job.svg" alt="Job" title='Job' />
                    <div className='exp-info'>
                        <h3>{role}, {company}</h3>
                        <span>{date}</span>
                    </div>
                </div>
                <div className='exp-location'>
                    <h3>{location}</h3>
                </div>
            </div>
            <div className='exp-description'>
                <p>{tasks}</p>
            </div>
        </div>
    )
}

export default ExperienceInfo