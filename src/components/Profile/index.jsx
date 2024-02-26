import './index.scss'

function Profile() {
    return (
        <>
            <div className='profile-content'>
                <div className='profile-info'>
                    <div className='profile-text'>
                        <h1>Web Developer & UX/UI Designer</h1>
                        <p>Passionate software developer with strong problem-solving skills and a consistent participation in projects.</p>
                    </div>
                    <div className='profile-actions'>
                        <a href="./Danny_Castillo.pdf" target="_blank" className='cv'>Read CV</a>
                        <a href="mailto:dannycastillootiniano@gmail.com" className='hire-me'>Hire Me Now!</a>
                    </div>
                </div>
                <div className='profile-photo'>
                    <img src='/Danny.png' alt="Danny Castillo" title='App Developer & Designer' />
                </div>
            </div>
        </>
    )
}

export default Profile