import { useState } from 'react'
import JobCard from "../JobCard"
import jobsData from '../../data/jobs'
import ExperienceInfo from '../ExperienceInfo'
import './index.scss'

function Experience() {

    const [selectedJob, setSelectedJob] = useState(null);

    const handleJobCardClick = (index) => {
        setSelectedJob(index);
    };

    const handleBackClick = () => {
        setSelectedJob(null);
    };

    return (
        <div className="experience-content">
            <h2>Laboral Experience</h2>

            {selectedJob !== null ? (
                <ExperienceInfo
                    {...jobsData[selectedJob]}
                    onBackClick={handleBackClick}
                />
            ) : (
                <div className='jobs-container'>
                    {jobsData.map((job, index) => (
                        <JobCard
                            key={index}
                            logo={job.companyImg}
                            role={job.jobRole}
                            onClick={() => handleJobCardClick(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Experience