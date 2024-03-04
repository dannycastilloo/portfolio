import './index.scss'

function Education() {
  return (
    <>
      <div className='education-content'>
        <div className='education-card'>
          <img src="./education/TECSUP.svg" alt="TECSUP" title="TECSUP" />
          <h3>Software Design & Development</h3>
          <hr />
          <span>March 2021 - December 2023</span>
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