import './index.scss'

function JobCard({ logo, role, onClick }) {
    return (
        <figure className='job-card' onClick={onClick}>
            <img className='logo' src={logo} />
            <span className='role'>{role}</span>
        </figure>
    )
}

export default JobCard