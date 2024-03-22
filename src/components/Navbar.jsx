import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="shadow-md w-full top-0 bg-white z-50 fixed px-4 lg:px-0">
            <header className="container w-11/12 md:w-10/12 mx-auto flex z-50 justify-between items-center py-4">
                <nav className="flex justify-between items-center gap-3">
                    <NavLink aria-current="page" className="flex justify-between items-center gap-2.5 bg-neutral100 px-3 py-2 rounded active lg:mx-auto" to="/">
                        <img className="rounded" src="./logo.svg" alt="Danny" title="Danny" />
                        <span className="text-defaultFont font-extrabold text-base font-raleway">Danny Castillo</span>
                    </NavLink>
                    <NavLink title="Projects" className="py-3 px-2 hover:bg-gray-100 rounded text-sm hidden lg:block" to="/projects">Projects</NavLink>
                    <NavLink title="Curriculum" className="py-3 px-2 hover:bg-gray-100 rounded text-sm hidden lg:block" to="/curriculum">Curriculum</NavLink>
                    <NavLink title="Blog" className="py-3 px-2 hover:bg-gray-100 rounded text-sm hidden lg:block" to="/blog">Blog</NavLink>
                </nav>
                <div className="flex gap-1.5">
                    <a href="" className="px-4 py-4 bg-brand100 text-brand600 rounded font-semibold text-sm justify-center items-center cursor-pointer hidden m-auto md:block">Read CV</a>
                    <a href="mailto:dannycastillootiniano@gmail.com" target="_blank" className="px-4 py-3 md:py-4 bg-brand600 text-white rounded font-semibold text-sm m-auto flex justify-center items-center cursor-pointer">Contact Me</a>
                </div>
            </header>
        </div>
    )
}

export default Navbar