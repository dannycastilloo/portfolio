import './index.scss'

function Profile() {
    return (
        <>
            <div className='profile-info'>
                <h1 className='name'>Danny <span>Castillo</span></h1>
                <h2 className='career'>Frontend Developer and UI/UX Designer</h2>
                <div className='profile-actions'>
                    <a href="/Danny_Castillo_CV.pdf">
                        <button className='button-cv'>
                            Download CV
                        </button>
                    </a>
                    <div className='icons-social'>
                        <a href="https://www.linkedin.com/in/dannycastilloo/">
                            <button className='button-contact'>
                                <img src='/contact/Linkedin.svg' alt='Linkedin' />
                            </button>
                        </a>
                        <a href="https://github.com/dannycastilloo">
                            <button className='button-contact'>
                                <img src='/contact/Github.svg' alt='Github' />
                            </button>
                        </a>
                        <a href="mailto:dannycastillootiniano@gmail.com">
                            <button className='button-contact'>
                                <img src='/contact/Email.svg' alt='Email' />
                            </button>
                        </a>
                        <a href="https://wa.link/zvm7kf">
                            <button className='button-contact'>
                                <img src='/contact/WhatsApp.svg' alt='WhatsApp' />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='my-photo'>
                <img className='photo' src='/Danny.png' alt="Danny Castillo" />
            </div>
        </>
    )
}

export default Profile