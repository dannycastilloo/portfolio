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
        <div className={`shadow-md w-full top-0 bg-white z-50 fixed px-4 py-4 lg:px-0 ${isOpen ? 'pb-8' : 'py-4'}`}>
            <header className="container w-11/12 md:w-10/12 mx-auto flex flex-col lg:flex-row z-50 justify-between items-center gap-8 lg:gap-5">
                <div className="flex justify-between items-center gap-3 w-full lg:w-auto">
                    <NavLink onClick={closeMenu} aria-current="page" className="flex justify-between items-center gap-2.5 bg-neutral100 px-3 py-2 rounded active" to="/">
                        <img className="rounded" src="./logo.svg" alt="Danny" title="Danny" />
                        <span className="text-defaultFont font-extrabold text-base font-raleway">Danny Castillo</span>
                    </NavLink>
                    <button onClick={toggleMenu} className="text-gray-600 bg-neutral100 px-2 py-2 focus:outline-none lg:hidden">
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
                    <NavLink onClick={closeMenu} title="Projects" className="py-3 px-2 hover:bg-gray-100 rounded text-sm" to="/projects">Projects</NavLink>
                    <NavLink onClick={closeMenu} title="Curriculum" className="py-3 px-2 hover:bg-gray-100 rounded text-sm" to="/curriculum">Curriculum</NavLink>
                    <NavLink onClick={closeMenu} title="Blog" className="py-3 px-2 hover:bg-gray-100 rounded text-sm" to="/blog">Blog</NavLink>
                </nav>
                <div className={`flex justify-between ml-auto gap-3 lg:flex lg:gap-1.5 ${isOpen ? 'flex' : 'hidden'}`}>
                    <a href="./cv.pdf" target="_blank" className="px-4 py-4 bg-brand100 text-brand600 rounded font-semibold text-sm justify-center items-center cursor-pointer text-center hover:px-5 hover:py-5 transition-all duration-300">Read CV</a>
                    <a href="mailto:dannycastillootiniano@gmail.com" target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-brand600 text-white rounded font-semibold text-sm flex justify-center items-center cursor-pointer hover:px-5 hover:py-5 transition-all duration-300">Contact Me</a>
                </div>
            </header>
        </div>
    )
}

export default Navbar