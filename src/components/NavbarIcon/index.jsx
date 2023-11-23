import './index.css'

function NavbarIcon({ icon, title }) {
  return (
      <img className='navbar-icon' src={icon} alt={title} />
  )
}

export default NavbarIcon