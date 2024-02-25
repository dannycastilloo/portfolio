import './index.scss'

function Navbar() {
    return (
        <>
            <header>
                <div className='nav-content'>
                    <div className="nav-main">
                        <img src="./navbar/icon.svg" alt="Danny" title='Web Portfolio' />
                        <h2>Danny Castillo</h2>
                    </div>
                    <nav className="nav-links">
                        <a href="#home" title='Home'>Home</a>
                        <a href="#about" title='About Me'>About Me</a>
                        <a href="#experience" title='Job Experience'>Experience</a>
                        <a href="#projects" title='Web Projects'>Projects</a>
                        <a href="#education" title='Developer Career'>Education</a>
                    </nav>
                    <div className="nav-social">
                        <a href="https://www.linkedin.com/in/dannycastilloo/" target="_blank" title="Linkedin Profile">
                            <img src="./navbar/linkedin.svg" alt="Linkedin" title='Linkedin' />
                        </a>
                        <a href="https://github.com/dannycastilloo" target="_blank" title="GitHub Profile">
                            <img src="./navbar/github.svg" alt="Github" title='Github' />
                        </a>
                        <a href="mailto:dannycastillootiniano@gmail.com" target="_blank" title="Email">
                            <img src="./navbar/email.svg" alt="Email" title='Email' />
                        </a>
                        <a href="https://wa.link/zvm7kf" target="_blank" title="WhatsApp">
                            <img src="./navbar/whatsapp.svg" alt="WhatsApp" title='WhatsApp' />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar