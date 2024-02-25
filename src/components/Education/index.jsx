import './index.scss'

function Education() {
  return (
    <>
      <div className='education-content'>
        <h2 className='subtitle'>Education</h2>

        <div className='education-card'>
          <div className='education-desc'>
            <p>I graduated from the <strong>Software Design and Development</strong> career in 2023. Throughout my academic journey, I actively participated in numerous events, including <strong>hackathons</strong>. My consistent academic performance placed me in the <strong>top third</strong> of my graduating class. Additionally, I am proud to have been awarded the 2022 Pronabec <strong>Scholarship</strong>.</p>
          </div>
          <hr />
          <div className='education-photo'>
            <img src='./education/TECSUP.svg' alt='TECSUP' title='Graduated in TECSUP' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Education