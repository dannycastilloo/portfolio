import { Link } from 'react-scroll'

import NavbarIcon from '../components/NavbarIcon'
import Profile from '../components/Profile'
import Experience from '../components/Experience'
import Project from '../components/Project'
import Education from '../components/Education'

import '../App.css'

function MainView() {

    const htmlColor = { r: 255, g: 112, b: 67 };
    const cssColor = { r: 23, g: 52, b: 89 };
    const jsColor = {r: 234, g: 181, b: 18 };
    const reactColor = { r: 85, g: 95, b: 102 };
    const firebaseColor = {r: 3, g: 155, b: 229 };
    const figmaColor = {r: 0, g: 0, b: 0 };
    const tailwindColor = {r: 14, g: 211, b: 207 };
    const bootstrapColor = {r: 86, g: 61, b: 124 };

    return (
        <>
            <header className='navbar'>
                <Link to='profile' spy={true} smooth={true}>
                    <NavbarIcon
                        icon='./navbar/Profile.svg' title='Profile' />
                </Link>
                <Link to='experience' spy={true} smooth={true}>
                    <NavbarIcon
                        icon='./navbar/Experience.svg' title='Experience' />
                </Link>
                <Link to='projects' spy={true} smooth={true}>
                    <NavbarIcon
                        icon='./navbar/Projects.svg' title='Projects' />
                </Link>
                <Link to='education' spy={true} smooth={true}>
                    <NavbarIcon
                        icon='./navbar/Education.svg' title='Education' />
                </Link>
            </header>

            <div className='main'>

                <div className='profile-container' id='profile'>
                    <Profile />
                </div>

                <div className='experience-container' id='experience'>
                    <h2 className='subtitle'>Experience</h2>
                    <Experience
                        role='Web Design Lead'
                        time='September 2023 - Present'
                        description='I lead my work team, supervising and managing projects, guaranteeing punctual deliveries and exceptional quality. I collaborate in the design and prototyping of the aesthetics and the flow of interactive applications, encouraging creativity and cooperation.'
                        logo='./jobs/Devdatep.svg'
                        title='Devdatep' />

                    <Experience
                        role='Full Stack Developer'
                        time='October 2023 - Present'
                        description='I contribute to the design of the application flows to be implemented. Additionally, I am skilled in creating interactive prototypes for proposed solutions and developing fully functional web applications using a collaborative approach.'
                        logo='./jobs/Tecnovedades.svg'
                        title='Tecnovedades' />
                </div>

                <div className='project-container' id='projects'>
                    <h2 className='subtitle'>Projects</h2>
                    <Project
                        screenshot='./projects/SmartReserve.svg'
                        title='Smart Reserve'
                        description='Computer reservation system with a statistical graph generator and warehouse management.'
                        repo='https://github.com/dannycastilloo/Smart-Reserve'
                        page=''
                        technologies={[
                            { img: './icons/HTML.svg', name: 'HTML', backgroundColor: htmlColor },
                            { img: './icons/CSS.svg', name: 'CSS', backgroundColor: cssColor },
                            { img: './icons/JavaScript.svg', name: 'JS', backgroundColor: jsColor },
                            { img: './icons/React.svg', name: 'React', backgroundColor: reactColor },
                            { img: './icons/Firebase.svg', name: 'Firebase', backgroundColor: firebaseColor },
                            { img: './icons/Bootstrap.svg', name: 'Bootstrap', backgroundColor: bootstrapColor },
                            { img: './icons/Figma.svg', name: 'Figma', backgroundColor: figmaColor },
                        ]} />
                    <Project
                        screenshot='./projects/MusicShop.svg'
                        title='Music Shop'
                        description='Marketplace application that allows users to sell and buy instruments around the world.'
                        repo='https://github.com/dannycastilloo/Music-Shop'
                        page=''
                        technologies={[
                            { img: './icons/HTML.svg', name: 'HTML', backgroundColor: htmlColor },
                            { img: './icons/CSS.svg', name: 'CSS', backgroundColor: cssColor },
                            { img: './icons/JavaScript.svg', name: 'JS', backgroundColor: jsColor },
                            { img: './icons/React.svg', name: 'React', backgroundColor: reactColor },
                            { img: './icons/Bootstrap.svg', name: 'Bootstrap', backgroundColor: bootstrapColor },
                            { img: './icons/Figma.svg', name: 'Figma', backgroundColor: figmaColor },
                        ]} />
                    <Project
                        screenshot='./projects/SciLink.svg'
                        title='SciLink'
                        description='NASA hackaton project that allows users to share their projects and receive support from investors.'
                        repo='https://github.com/dannycastilloo/SciLink'
                        page=''
                        technologies={[
                            { img: './icons/HTML.svg', name: 'HTML', backgroundColor: htmlColor },
                            { img: './icons/CSS.svg', name: 'CSS', backgroundColor: cssColor },
                            { img: './icons/JavaScript.svg', name: 'JS', backgroundColor: jsColor },
                            { img: './icons/React.svg', name: 'React', backgroundColor: reactColor },
                            { img: './icons/Bootstrap.svg', name: 'Bootstrap', backgroundColor: bootstrapColor },
                            { img: './icons/Figma.svg', name: 'Figma', backgroundColor: figmaColor },
                        ]} />
                    <Project
                        screenshot='./projects/Shopi.svg'
                        title='Shopi'
                        description='Clothing store that allows purchasing products, filtering and saving them in their shopping cart.'
                        repo='https://github.com/dannycastilloo/Shopi'
                        page=''
                        technologies={[
                            { img: './icons/HTML.svg', name: 'HTML', backgroundColor: htmlColor },
                            { img: './icons/CSS.svg', name: 'CSS', backgroundColor: cssColor },
                            { img: './icons/JavaScript.svg', name: 'JS', backgroundColor: jsColor },
                            { img: './icons/React.svg', name: 'React', backgroundColor: reactColor },
                            { img: './icons/Tailwind.svg', name: 'Figma', backgroundColor: tailwindColor },
                        ]} />
                </div>

                <div className='education-container' id='education'>
                    <Education
                        img='./education/TECSUP.svg'
                        title='TECSUP'
                        description='My performance as a student of the Software Design and Development career positioned me in the top third and made me obtain the 2022 Pronabec Scholarship.' />
                </div>
            </div>
        </>
    )
}

export default MainView