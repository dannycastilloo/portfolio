import './index.scss'

function JobCard({ logo, role }) {
    return (
        <figure className='job-card'>
            <img className='logo' src={logo} />
            <span className='role'>{role}</span>
        </figure>
    )
}

export default JobCard