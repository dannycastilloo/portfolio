import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <div className='shadow-md w-full bg-neutral50 px-4 py-4 lg:px-0'>
            <header className="container w-11/12 md:w-10/12 mx-auto flex justify-between items-center gap-8 lg:gap-6">
                <NavLink aria-current="page" className="flex justify-between items-center gap-2.5 bg-neutral100 hover:bg-neutral200 transition-all duration-300 px-3 py-1.5 rounded active" to="/">
                    <img className="rounded" src="./logo.svg" alt="Danny" title="Danny" />
                    <span className="hidden md:flex text-neutral800 font-extrabold text-base font-raleway">Danny Castillo</span>
                </NavLink>

                <div className='flex justify-between items-center ml-auto md:gap-4 lg:flex lg:gap-6'>
                    <nav className='hidden gap-2 lg:gap-4 md:flex lg:justify-between lg:items-center mr-auto'>
                        <NavLink title="Projects" className="text-neutral900 py-3 px-2 hover:text-black transition-all duration-300 rounded text-sm" to="/projects">Projects</NavLink>
                    </nav>
                    <a href="mailto:dannycastillootiniano@gmail.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand500 text-neutral100 hover:bg-blue-600 hover:text-neutral50 rounded-full font-semibold text-sm flex justify-center items-center cursor-pointer transition-all duration-300">Contact Me</a>
                </div>
            </header>
        </div>
    )
}

export default Navbar