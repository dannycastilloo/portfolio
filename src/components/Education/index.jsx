import './index.scss'

function Education() {
  return (
    <>
      <div className='education-content'>
        <div className='education-card'>
          <div className='education-main'>
            <div className='education-info'>
              <h3>Software Design & Development</h3>
              <p>Versatile professional skilled in UX/UI design, web/mobile development, IT, and cloud services. Proven track record in creating user-centric interfaces, executing responsive solutions, and optimizing system functionalities. Proficient in cloud services, driving efficiency and innovation in digital landscapes.</p>
            </div>
            <div className='education-image'>
              <img src="./education/TECSUP.svg" alt="TECSUP" title="TECSUP" />
            </div>
          </div>
          <hr />
          <div className='achievements-container'>
            <button className='achievement'>
              <img src="./education/top.svg" alt="Top thrid" title=' Top third' />
              <span>Top third</span>
            </button>
            <button className='achievement'>
              <img src="./education/scolarship.svg" alt="Scolarship" title='Scolarship' />
              <span>Scolarship</span>
            </button>
            <button className='achievement'>
              <img src="./education/hackathon.svg" alt="Hackathon" title='Hackathon' />
              <span>Hackathons</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education