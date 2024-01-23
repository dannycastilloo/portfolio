import './index.scss'

function Education({ img, title, career, time, description }) {
  return (
    <>
      <h2 className='subtitle'>Education</h2>
      <div className='education-card'>
        <img src={img} alt={title} />
        <div>
          <h3 className='education-career'>{career}</h3>
          <h3 className='education-time'>{time}</h3>
          <p className='education-desc'>{description}</p>
        </div>
      </div>
    </>
  )
}

export default Education