import './index.scss'

function About() {
    return (
        <div className='about-content'>
            <div className='about-info'>
                <h2>Who am I?</h2>
                <p>
                    I'm a passionate software developer with strong <strong>problem-solving</strong> skills. My commitment as a professional is evident through my consistent participation in projects.
                    <br /><br />
                    Throughout my journey, I've developed a fervor for crafting <strong>innovative and efficient solutions</strong> in software development. My dedication to excellence and ongoing refinement drives me to make meaningful contributions in every project I undertake.
                </p>
            </div>
            <div className='about-image'>
                <img src="./about/development.svg" alt="Web Development" />
            </div>
        </div>
    )
}

export default About