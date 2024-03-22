import CertificateCard from '../components/CertificateCard';
import EducationCard from '../components/EducationCard';
import JobCard from '../components/JobCard';
import Skill from '../components/Skill';
import certificatesData from '../data/certificates';
import educationData from '../data/education';
import jobsData from '../data/jobs';
import skillsData from '../data/skills';

function CurriculumView() {
  return (
    <div className='py-44 bg-neutral100'>
      <div className='container mx-auto flex flex-col gap-20 w-10/12'>
        <h2 className='text-center font-raleway font-extrabold text-defaultFont text-5xl'>Curriculum</h2>

        <div className='bg-white container'>
          <section className='flex flex-col py-16 px-10 gap-10'>
            <h3 className='font-medium text-3xl text-defaultFont'>Education</h3>
            <div>
              {educationData.map((education, index) => (
                <EducationCard
                  key={index}
                  career={education.career}
                  date={education.date}
                  description={education.description}
                />
              ))}
            </div>
          </section>

          <section className='flex flex-col py-16 px-10 gap-12'>
            <h3 className='font-medium text-3xl text-defaultFont'>Experience</h3>
            <div className='flex flex-wrap gap-14 items-center'>
              {jobsData.map((job, index) => (
                <JobCard
                  key={index}
                  role={job.role}
                  company={job.company}
                  description={job.tasks}
                  date={job.date}
                  location={job.location}
                />
              ))}
            </div>
          </section>

          <section className='flex flex-col py-16 px-10 gap-12'>
            <h3 className='font-medium text-3xl text-defaultFont'>Skills</h3>
            <div className='flex flex-wrap gap-8 justify-between items-center'>
              {skillsData.map((skill, index) => (
                <Skill
                  key={index}
                  technology={skill.technology}
                  icon={skill.icon}
                />
              ))}
            </div>
          </section>

          <section className='flex flex-col py-16 px-10 gap-10'>
            <h3 className='font-medium text-3xl text-defaultFont'>Certificates</h3>
            <div className='flex flex-wrap gap-10 justify-between items-center'>
              {certificatesData.map((certificate, index) => (
                <CertificateCard
                  key={index}
                  image={certificate.image}
                  title={certificate.title}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CurriculumView