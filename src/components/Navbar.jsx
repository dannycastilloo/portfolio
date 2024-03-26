import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className={`shadow-md w-full top-0 z-50 absolute px-4 py-4 lg:px-0 ${isOpen ? 'pb-8 bg-black' : 'py-4'}`}>
            <header className="container w-11/12 md:w-10/12 mx-auto flex flex-col lg:flex-row z-50 justify-between items-center gap-8 lg:gap-6">
                <div className="flex justify-between items-center gap-3 w-full lg:w-auto">
                    <NavLink onClick={closeMenu} aria-current="page" className="flex justify-between items-center gap-2.5 bg-gray2 px-3 py-1.5 rounded active" to="/">
                        <img className="rounded" src="./logo.svg" alt="Danny" title="Danny" />
                        <span className="text-defaultFont font-extrabold text-base font-archivo">Danny Castillo</span>
                    </NavLink>
                    <button onClick={toggleMenu} className="text-gray2 px-2 py-2 focus:outline-none lg:hidden">
                        {isOpen ? (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
                <nav className={`gap-2 lg:gap-4 lg:flex lg:flex-row lg:justify-between lg:items-center flex-col mr-auto ${isOpen ? 'flex' : 'hidden'}`}>
                    <NavLink onClick={closeMenu} title="Projects" className="text-gray1 py-3 px-2 hover:text-white transition-all duration-300 rounded text-sm" to="/projects">Projects</NavLink>
                    <NavLink onClick={closeMenu} title="Curriculum" className="text-gray1 py-3 px-2 hover:text-white transition-all duration-300 rounded text-sm" to="/curriculum">Curriculum</NavLink>
                    <NavLink onClick={closeMenu} title="Blog" className="text-gray1 py-3 px-2 hover:text-white transition-all duration-300 rounded text-sm" to="/blog">Blog</NavLink>
                </nav>
                <div className={`flex justify-between ml-auto gap-3 lg:flex lg:gap-6 ${isOpen ? 'flex' : 'hidden'}`}>
                    <a href="./Danny_Castillo.pdf" target="_blank" className="px-6 py-2 bg-brand100 text-brand600 rounded font-semibold text-sm justify-center items-center cursor-pointer text-center text-gray1 hover:text-white transition-all duration-300">Read CV</a>
                    <a href="mailto:dannycastillootiniano@gmail.com" target="_blank" rel="noopener noreferrer" className="px-6 bg-brand600 text-black1 bg-gray2 hover:bg-purple1 hover:text-white rounded font-semibold text-sm flex justify-center items-center cursor-pointer transition-all duration-300">Contact Me</a>
                </div>
            </header>
        </div>
    )
}

export default Navbar