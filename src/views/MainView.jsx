import '../App.scss'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import About from '../components/About'
import Project from '../components/Project'
import Education from '../components/Education'
import Experience from '../components/Experience'

function MainView() {

    return (
        <>
            <Navbar />

            <div className='profile-container' id='home'>
                <Profile />
            </div>

            <div className='about-container' id='about'>
                <About />
            </div>

            <div className='experience-container' id='experience'>
                <Experience />
            </div>

            <div className='project-container' id='projects'>
                <Project />
            </div>

            <div className='education-container' id='education'>
                <Education />
            </div>

            <div className='copyright'>
                <span>Designed & Developed by Danny Castillo</span>
            </div>
        </>
    )
}

export default MainView