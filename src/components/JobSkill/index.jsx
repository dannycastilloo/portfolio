import './index.scss'

function JobSkill({ skillImg, skillName }) {
  return (
    <div className='skill-card'>
        <img src={skillImg} alt={skillName} title={skillName} />
        <span>{skillName}</span>
    </div>
  )
}

export default JobSkill