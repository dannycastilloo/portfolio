
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div className="bg-backgroundBlack py-14">
            <footer className='container flex flex-col mx-auto gap-6 w-10/12 lg:w-12/12'>
                <div className='container flex flex-col justify-between items-center md:flex-row'>
                    <div className="flex flex-col gap-6 md:gap-5 w-6/6 md:w-3/6 lg:w-2/6">
                        <NavLink aria-current="page" className="mx-auto flex justify-between items-center gap-2.5 bg-gray2 px-3 py-2 rounded active w-44 md:mx-0" to="/">
                            <img className="rounded" src="./logo.svg" alt="Danny" title="Danny" />
                            <span className="text-defaultFont font-extrabold text-base font-archivo">Danny Castillo</span>
                        </NavLink>
                        <p className="text-white font-base text-sm text-center md:text-start md:text-sm lg:text-base md:font-light">Redefine your digital presence, where innovation meets design, and every click sparks a sensation.</p>
                    </div>

                    <div className='flex flex-col gap-3 text-white font-light text-sm'>
                        <a className="hidden gap-2 md:flex">
                            <img src="./icons/map_pin.svg" alt="Location" title="Location" />
                            <span>VA, United States</span>
                        </a>
                        <a className="hidden gap-2 md:flex" href="https://wa.link/zvm7kf">
                            <img src="./icons/message_circle.svg" alt="Chat" title="Chat" />
                            <span>+51 992 975 372</span>
                        </a>
                        <a className="hidden gap-2 md:flex" href="mailto:dannycastillootiniano@gmail.com">
                            <img src="./icons/mail.svg" alt="Mail" title="Mail" />
                            <span>dannycastillootiniano@gmail.com</span>
                        </a>
                    </div>
                </div>
                <hr className="w-full bg-white" />
                <div className='flex flex-col gap-6 justify-between items-center md:flex-row md:gap-0'>
                    <p className='font-light text-white text-sm lg:text-base'>Designed & Developed by Danny Castillo</p>
                    <div className='flex gap-5'>
                        <a target="_blank" href="https://www.behance.net/dannycastillo8" title="Behance">
                            <img className="w-10/12 lg:w-12/12" src="./icons/behance.svg" alt="Behance" title="Behance" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/dannycastilloo/" title="Linkedin">
                            <img className="w-10/12 lg:w-12/12" src="./icons/linkedin.svg" alt="Linkedin" title="Linkedin" />
                        </a>
                        <a target="_blank" href="https://github.com/dannycastilloo" title="Github">
                            <img className="w-10/12 lg:w-12/12" src="./icons/github.svg" alt="Github" title="Github" />
                        </a>
                        <a target="_blank" href="https://dribbble.com/dannycastillo" title="Dribble">
                            <img className="w-10/12 lg:w-12/12" src="./icons/dribble.svg" alt="Dribble" title="Dribble" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer