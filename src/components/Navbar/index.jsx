import './index.scss'

function Navbar() {
    return (
        <>
            <header>
                <div className='nav-content'>
                    <div className="nav-main">
                        <img src="./navbar/icon.svg" alt="Danny" />
                        <h1>Danny Castillo</h1>
                    </div>
                    <nav className="nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About Me</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#education">Education</a>
                    </nav>
                    <div className="nav-social">
                        <a href="https://www.linkedin.com/in/dannycastilloo/">
                            <img src="./navbar/linkedin.svg" alt="Linkedin" />
                        </a>
                        <a href="https://github.com/dannycastilloo">
                            <img src="./navbar/github.svg" alt="Github" />
                        </a>
                        <a href="mailto:dannycastillootiniano@gmail.com">
                            <img src="./navbar/email.svg" alt="Email" />
                        </a>
                        <a href="https://wa.link/zvm7kf">
                            <img src="./navbar/whatsapp.svg" alt="WhatsApp" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar