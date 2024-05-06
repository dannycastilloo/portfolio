import { useState } from "react"
import Sidebar from "./Sidebar"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className='flex justify-center items-center w-full bg-white py-4'>
            <div className="w-11/12 md:10/12 flex justify-between items-center">

                {/* Logo */}
                <a href='#home' title="Home" className="flex justify-start items-center gap-4 px-5 py-2 lg:h-full rounded-md bg-neutral100">
                    <img className="rounded" src="./logo.svg" alt="Danny Castillo" title='Danny Castillo' />
                    <span className="text-neutral700 font-extrabold font-raleway">Danny Castillo</span>
                </a>

                {/* Navigation Links (Hidden on Small Devices) */}
                <nav className={`hidden lg:flex justify-end items-center gap-1 ${menuOpen ? 'hidden' : ''}`}>
                    <a className="px-5 py-2 rounded-md text-neutral700 text-end hover:bg-neutral100 transition-all duration-300 md:text-md lg:h-full" href='#services' title='Services'>Services</a>
                    <a className="px-5 py-2 rounded-md text-neutral700 text-end hover:bg-neutral100 transition-all duration-300 md:text-md lg:h-full" href='#projects' title='Projects'>Projects</a>
                    <a className="px-5 py-2 rounded-md text-neutral700 text-end hover:bg-neutral100 transition-all duration-300 md:text-md lg:h-full" href='#partners' title='Partners'>Partners</a>
                    <a className="px-5 py-2 rounded-md text-neutral700 text-end hover:bg-neutral100 transition-all duration-300 md:text-md lg:h-full" href='#testimonials' title='Testimonials'>Testimonials</a>
                </nav>

                {/* Hamburger Menu Button */}
                <button className="lg:hidden p-2 rounded-md h-full bg-neutral100" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#2A2A2A">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>

            {/* Sidebar */}
            <Sidebar isOpen={menuOpen} onClose={toggleMenu} />
        </header>
    )
}

export default Navbar