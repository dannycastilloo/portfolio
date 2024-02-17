import './index.scss'

function Profile() {
    return (
        <>
            <div className='profile-content'>
                <div className='profile-info'>
                    <div className='profile-text'>
                        <span>Hello there! I'm a</span>
                        <h2>Web Developer & UX/UI Designer</h2>
                        <p>Passionate software developer with strong problem-solving skills and a consistent participation in projects.</p>
                    </div>
                    <div className='profile-actions'>
                        <a href="mailto:dannycastillootiniano@gmail.com" className='hire-me'>Hire Me Now!</a>
                        <a href="/Danny_Castillo.pdf" className='cv'>Read CV</a>
                    </div>
                </div>
                <div className='profile-photo'>
                    <img src='/Danny.svg' alt="Danny Castillo" />
                </div>
            </div>
        </>
    )
}

export default Profile