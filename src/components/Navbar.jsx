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
        <div className={`shadow-md w-full top-0 z-50 absolute bg-white px-4 py-4 lg:px-0 ${isOpen ? 'pb-8' : 'py-4'}`}>
            <header className="container w-11/12 md:w-10/12 mx-auto flex flex-col lg:flex-row z-50 justify-between items-center gap-8 lg:gap-6">
                <div className="flex justify-between items-center gap-3 w-full lg:w-auto">
                    <NavLink onClick={closeMenu} aria-current="page" className="flex justify-between items-center gap-2.5 bg-neutral50 hover:bg-neutral100 transition-all duration-300 px-3 py-1.5 rounded active" to="/">
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
                    <NavLink onClick={closeMenu} title="Projects" className="text-neutral900 py-3 px-2 hover:text-black transition-all duration-300 rounded text-sm" to="/projects">Projects</NavLink>
                    <NavLink onClick={closeMenu} title="Blog" className="text-neutral900 hover:text-black py-3 px-2 transition-all duration-300 rounded text-sm" to="/blog">Blog</NavLink>
                </nav>
                <div className={`flex justify-between ml-auto gap-3 lg:flex lg:gap-6 ${isOpen ? 'flex' : 'hidden'}`}>
                    <a href="mailto:dannycastillootiniano@gmail.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand600 text-neutral100 bg-blue-600 hover:bg-blue-700 hover:text-neutral50 rounded-full font-semibold text-sm flex justify-center items-center cursor-pointer transition-all duration-300">Contact Me</a>
                </div>
            </header>
        </div>
    )
}

export default Navbar