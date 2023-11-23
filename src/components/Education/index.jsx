import './index.css'

function Education({ img, title, description }) {
  return (
    <>
        <h2 className='subtitle'>Education</h2>
        <div className='education-card'>
          <img src={img} alt={title} />
          <p>{description}</p>
        </div>
    </>
  )
}

export default Education