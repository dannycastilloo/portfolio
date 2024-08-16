import { useState } from 'react'

import projectsData from '../data/projects'
import Testimonial from '../components/Testimonial'
import testimonialsData from '../data/testimonials'
import ProjectCard from '../components/ProjectCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

function HomeView() {

    const [selectedProject, setSelectedProject] = useState(null)
    const [projectTypeFilter, setProjectTypeFilter] = useState(null)
    const [search, setSearch] = useState('')
    const [activeFilters, setActiveFilters] = useState([])

    const handleProjectClick = (project) => {
        setSelectedProject(project)
    }

    const handleFilterClick = (type) => {
        if (projectTypeFilter === type) {
            handleClearFilter(type);
        } else {
            setProjectTypeFilter(type);
            setActiveFilters([type]);
        }
    };

    const handleClearFilter = (type) => {
        setProjectTypeFilter(null);
        setActiveFilters((prevFilters) => prevFilters.filter((filter) => filter !== type));
    };

    const isFilterActive = (type) => activeFilters.includes(type);

    const filteredProjects = projectTypeFilter
        ? projectsData.filter((project) => project.type === projectTypeFilter)
        : projectsData;

    const searchedProjects = search
        ? filteredProjects.filter((project) =>
            project.title.toLowerCase().includes(search.toLowerCase())
        )
        : filteredProjects;

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6; // Number of projects per page

    // Calculate total pages
    const totalPages = Math.ceil(searchedProjects.length / projectsPerPage);

    // Slice projects to display only the ones for the current page
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = searchedProjects.slice(indexOfFirstProject, indexOfLastProject);

    // Pagination handler functions
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <>
            <section id='home' className='w-full flex flex-col justify-between items-center m-auto'>
                <div className='container flex flex-col gap-10 md:gap-16 lg:gap-20 mx-auto justify-center items-center w-11/12 py-10 md:py-16'>
                    <div className='flex flex-col lg:flex-row mx-auto items-center justify-between rounded-xl'>
                        <div className='lg:w-7/12 flex flex-col justify-between items-center lg:items-start gap-5 md:gap-8'>
                            <div className='flex flex-col lg:flex-row gap-8 lg:gap-4 justify-center lg:justify-start items-center mb-2'>
                                <hr className='w-1 h-6 bg-blue-500 hidden lg:flex' />
                                <h2 className='text-neutral500 md:text-lg lg:text-xl'>SOFTWARE DEVELOPER & DESIGNER</h2>
                                <hr className='w-6 h-1 bg-blue-500 flex lg:hidden' />
                            </div>

                            <div className='flex flex-col gap-4 md:gap-8 lg:gap-5'>
                                <h1 className='font-extrabold text-neutral700 font-raleway text-6xl leading-18 md:text-7xl text-center lg:text-start'>Danny Castillo</h1>
                                <p className='text-neutral500 lg:mx-auto text-xl md:text-2xl py-5 text-center lg:text-start'>Redefine your digital presence, where innovation meets design, and every click sparks a sensation.</p>
                            </div>

                            <div className='flex flex-col md:flex-row justify-start items-center gap-10 md:gap-8'>
                                <a href="mailto:dannycastillootiniano@gmail.com" target="_blank" rel="noopener noreferrer" className="px-8 py-5 md:px-8 md:py-4 lg:px-10 lg:py-4 bg-neutral700 text-neutral100 hover:bg-neutral800 transition-all duration-500 rounded-full font-bold lg:text-lg flex justify-center items-center cursor-pointer">Hire Me Now!</a>
                                <div className='flex justify-center items-center md:justify-start gap-6'>
                                    <a href='https://www.linkedin.com/in/dannycastilloo/' target='_blank' title='Linkedin' className='rounded-full px-4 py-4 hover:bg-neutral200 transition-all duration-300'>
                                        <img src="./icons/linkedin.svg" alt="Linkedin" title='Linkedin' />
                                    </a>
                                    <a href='https://www.instagram.com/dannycastillo.o/' target='_blank' title='Instagram' className='rounded-full px-4 py-4 hover:bg-neutral200 transition-all duration-300'>
                                        <img src="./icons/instagram.svg" alt="Instagram" title='Instagram' />
                                    </a>
                                    <a href='https://github.com/dannycastilloo' target='_blank' title='Github' className='rounded-full px-4 py-4 hover:bg-neutral200 transition-all duration-300'>
                                        <img src="./icons/github.svg" alt="Github" title='Github' />
                                    </a>
                                    <a href='https://www.youtube.com/channel/UCUKb3-8nupEbRym3HLbZMOg' target='_blank' title='YouTube' className='rounded-full px-4 py-4 hover:bg-neutral200 transition-all duration-300'>
                                        <img src="./icons/youtube.svg" alt="YouTube" title='YouTube' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center lg:justify-end my-20 lg:my-0'>
                            <div className='rounded-full bg-neutral800 w-auto'>
                                <img src="./photo.svg" alt="Danny Castillo" title='Danny Castillo' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10 md:flex-row justify-between items-center w-full lg:gap-6 flex-wrap lg:flex-nowrap'>
                        <div className='p-8 rounded-lg bg-brand300 flex flex-col justify-between items-center md:items-start h-64 w-full md:w-7/12 lg:w-3/12'>
                            <img src="./presentation/experience.svg" alt="Experience" title='Experience' className='mx-auto md:mx-0 w-14 md:w-auto' />
                            <div className='flex flex-col gap-5 md:gap-3'>
                                <span className='text-neutral700 text-3xl md:text-2xl font-medium text-center md:text-start'>+1</span>
                                <p className='text-neutral700 text-2xl font-medium text-center md:text-start'>Year of Experience</p>
                            </div>
                        </div>
                        <div className='p-8 rounded-lg bg-error300 flex flex-col justify-between items-center md:items-start h-64 w-full md:w-4/12 lg:w-3/12'>
                            <img src="./presentation/availability.svg" alt="Availability" title='Availability' className='mx-auto md:mx-0 w-14 md:w-auto' />
                            <div className='flex flex-col gap-5 md:gap-3'>
                                <span className='text-neutral700 text-3xl md:text-2xl font-medium text-center md:text-start'>24/7</span>
                                <p className='text-neutral700 text-2xl font-medium text-center md:text-start'>Availability</p>
                            </div>
                        </div>
                        <div className='p-8 rounded-lg bg-success300 flex flex-col justify-between items-center md:items-start h-64 w-full md:w-4/12 lg:w-3/12'>
                            <img src="./presentation/code.svg" alt="Experience" title='Experience' className='mx-auto md:mx-0 w-14 md:w-auto' />
                            <div className='flex flex-col gap-5 md:gap-3'>
                                <span className='text-neutral700 text-3xl md:text-2xl font-medium text-center md:text-start'>+100</span>
                                <p className='text-neutral700 text-2xl font-medium text-center md:text-start'>Projects</p>
                            </div>
                        </div>
                        <div className='p-8 rounded-lg bg-warning200 flex flex-col justify-between items-center md:items-start h-64 w-full md:w-7/12 lg:w-3/12'>
                            <img src="./presentation/file.svg" alt="Experience" title='Experience' className='mx-auto md:mx-0 w-14 md:w-auto' />
                            <div className='flex flex-col gap-5 md:gap-3'>
                                <span className='text-neutral700 text-3xl md:text-2xl font-medium text-center md:text-start'>Need more info?</span>
                                <a href='./Danny_Castillo.pdf' target='_blank' className='text-neutral700 underline text-2xl font-medium text-center md:text-start'>Download resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='services' className='w-full flex justify-between items-center py-10'>
                <div className='container rounded-xl mx-auto flex flex-col bg-neutral200 px-6 md:px-10 lg:px-20 py-20 gap-14 lg:gap-16 w-11/12'>
                    <div className='flex flex-col gap-10 lg:gap-16'>
                        <h3 className='font-raleway font-extrabold text-3xl md:text-4xl lg:text-5xl text-neutral800 text-center'>Services</h3>
                    </div>

                    <div className='flex flex-col gap-10 mx-auto justify-center lg:gap-5'>
                        <div className='flex flex-col gap-10 h-6/6 justify-center mx-auto lg:h-4/6 lg:flex-row lg:gap-5'>
                            <div className='rounded-xl p-10 flex flex-col md:flex-row lg:flex-col gap-10 w-12/12 mx-auto lg:w-4/12 lg:gap-5 bg-white hover:bg-neutral50 transition-all duration-300'>
                                <img className='w-10' src="./services/desktop.svg" alt="Web Development" title='Web Development' />
                                <div className='flex flex-col gap-4'>
                                    <h2 className='font-semibold text-2xl text-neutral800'>Web Development</h2>
                                    <p className='text-neutral700'>Empower your online presence with bespoke web solutions tailored to your needs.</p>
                                    <ul className='list-disc text-neutral700 list-inside hidden lg:block'>
                                        <li>Excellent performance</li>
                                        <li>Regular updates</li>
                                        <li>Personalization</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex flex-col gap-10 w-12/12 justify-center mx-auto lg:w-8/12 lg:gap-5'>
                                <div className='w-full rounded-xl mx-auto p-10 flex flex-col md:flex-row lg:flex-col h-6/6 gap-10 lg:gap-5 lg:h-3/6 bg-white hover:bg-neutral50 transition-all duration-300'>
                                    <img className='w-10' src="./services/mobile.svg" alt="Mobile Development" title='Mobile Development' />
                                    <div className='flex flex-col gap-4'>
                                        <h2 className='font-semibold text-2xl text-neutral800'>Mobile Development</h2>
                                        <p className='text-neutral700'>Reach your audience on the go with immersive mobile applications designed for success.</p>
                                    </div>
                                </div>
                                <div className='w-full flex flex-col gap-10 h-6/6 mx-auto justify-center lg:flex-row lg:h-3/6 lg:gap-5'>
                                    <div className='rounded-xl p-10 flex flex-col md:flex-row lg:flex-col gap-10 w-12/12 lg:w-1/2 lg:gap-3 bg-white hover:bg-neutral50 transition-all duration-300'>
                                        <img className='w-10' src="./services/design.svg" alt="UX/UI" title='UX/UI' />
                                        <div className='flex flex-col gap-4'>
                                            <h2 className='font-semibold text-2xl text-neutral800'>UX/UI Design</h2>
                                            <p className='text-neutral700'>Elevate user satisfaction and retention.</p>
                                        </div>
                                    </div>
                                    <div className='rounded-xl p-10 flex flex-col md:flex-row lg:flex-col gap-10 w-12/12 lg:w-1/2 lg:gap-3 bg-white hover:bg-neutral50 transition-all duration-300'>
                                        <img className='w-10' src="./services/seo.svg" alt="SEO" title='SEO' />
                                        <div className='flex flex-col gap-4'>
                                            <h2 className='font-semibold text-2xl text-neutral800'>SEO</h2>
                                            <p className='text-neutral700'>Climb the ranks of search engines and drive traffic.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='projects' className='w-full flex justify-between items-center py-10'>
                <div className='container mx-auto flex flex-col px-6 md:px-10 lg:px-20 py-20 bg-backgroundBlack rounded-xl gap-14 lg:gap-24 w-11/12'>
                    <h2 className='text-center font-raleway font-extrabold text-neutral100 text-4xl lg:text-5xl'>Check my projects</h2>

                    <div className='flex flex-wrap justify-between items-center gap-12 md:justify-between md:gap-20 lg:gap-20'>
                        {currentProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project)}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center items-center gap-6">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="bg-neutral500 hover:bg-neutral600 text-white font-bold py-2 px-4 rounded-md"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="bg-neutral500 hover:bg-neutral600 text-white font-bold py-2 px-7 rounded-md"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>

            <section id='partners' className='w-full flex flex-col justify-between items-center py-10'>
                <div className='container px-6 md:px-10 lg:px-20 py-20 flex flex-col m-auto justify-between items-start gap-16 md:gap-20 lg:gap-26 w-11/12 bg-brand200 rounded-xl'>
                    <div className='flex flex-col gap-10 md:gap-12 lg:gap-16 w-full justify-center items-center'>
                        <h3 className='font-raleway font-extrabold text-4xl text-neutral800 lg:text-5xl text-center'>Featured partnerships</h3>
                        <p className='text-center text-neutral600 text-lg md:text-2xl lg:text-3xl'>Trusted organizations we've collaborated with to deliver outstanding results.</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between lg:justify-center gap-10 md:gap-14">

                        <img className='w-5/12 md:w-5/12 lg:w-3/12' src="./companies/devdatep.svg" alt="Devdatep Consulting" title='Devdatep Consulting' />

                        <img className='w-5/12 md:w-5/12 lg:w-3/12' src="./companies/tecnovedades.svg" alt="Tecnovedades Web" title='Tecnovedades Web' />

                        <img className='w-5/12 md:w-5/12 lg:w-3/12' src="./companies/marfa.svg" alt="Grupo Marfa Perú" title='Grupo Marfa Perú' />

                        <img className='w-5/12 md:w-5/12 lg:w-3/12' src="./companies/crecemos.svg" alt="Crecemos Juntos" title='Crecemos Juntos' />

                        <img className='w-5/12 md:w-5/12 lg:w-3/12' src="./companies/gaotek.svg" alt="GaoTek" title='GaoTek' />

                        <img className='w-5/12 md:w-5/12 lg:w-3/12' src="./companies/marketing.svg" alt="Marketing 70" title='Marketing 70' />

                        <img className='w-5/12 md:w-5/12 lg:w-3/12' src="./companies/ventas.svg" alt="Consigue Ventas Inversiones" title='Consigue Ventas Inversiones' />

                        <a className='w-5/12 md:w-5/12 lg:w-3/12' href="mailto:dannycastillootiniano@gmail.com" title='Become a Partner!'>
                            <img className='w-full' src="./companies/action.svg" alt="Become a Partner!" title='Become a Partner!' />
                        </a>
                    </div>
                </div>
            </section>

            <section id='testimonials' className='w-full flex flex-col justify-between items-center py-10'>
                <div className='container px-6 md:px-10 lg:px-20 py-20 flex flex-col m-auto justify-between items-start gap-12 w-11/12 rounded-xl bg-success300'>
                    <div className='flex flex-col gap-10 justify-center items-center w-full lg:gap-16'>
                        <h3 className='font-raleway font-extrabold text-4xl text-center text-neutral800 lg:text-5xl'>Testimonials</h3>
                        <p className='text-lg md:text-2xl lg:text-3xl text-center text-neutral700'>Real stories from satisfied customers who have experienced the impact of my exceptional service.</p>
                    </div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}

                        className="mySwiper container flex py-4 mx-auto my-6"
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <Testimonial
                                    photo={testimonial.photo}
                                    names={testimonial.name}
                                    role={testimonial.company}
                                    message={testimonial.message}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className='w-full flex flex-col justify-between items-center py-10'>
                <div className='container px-6 md:px-10 lg:px-20 py-20 flex flex-col m-auto lg:justify-center lg:items-center gap-16 w-11/12 rounded-xl bg-brand400'>
                    <div className='flex flex-col gap-10'>
                        <h5 className='font-raleway text-neutral50 text-3xl md:text-4xl lg:text-5xl font-bold text-center'>Transform your online presence today</h5>
                        <p className='text-neutral100 text-lg md:text-2xl lg:text-2xl text-center'>This is the moment to change everything in your brand.
                            Embark on your journey towards stunning web design and seamless development.</p>
                    </div>

                    <div className='flex flex-col md:flex-row gap-6 lg:gap-10 py-4 justify-center items-center'>
                        <a href='mailto:dannycastillootiniano@gmail.com' target='_blank' className='px-8 py-4 flex justify-center items-center md:px-10 md:py-5 neutral-lg rounded-full text-center bg-neutral800 font-medium text-neutral100 hover:bg-neutral900 hover:text-neutral50 transition-all duration-300 lg:text-lg'>Contact Me</a>
                        <a href='./Danny_Castillo.pdf' target='_blank' className='px-8 py-4 flex justify-center items-center rounded-full text-center bg-neutral100 text-neutral800 hover:bg-neutral100 hover:text-neutral900 transition-all duration-300 lg:text-lg'>Learn More</a>
                    </div>

                    <div className='flex gap-2 justify-center items-center'>
                        <span className='text-neutral100 text-lg'>Wanna get in touch?</span>
                        <a className='text-neutral50 underline text-lg' href='https://www.linkedin.com/in/dannycastilloo/' target='_blank'>Follow Me</a>
                    </div>
                </div>
            </section>

            <section className='w-full flex flex-col justify-between items-center py-10'>
                <div className='container flex flex-col md:flex-row m-auto lg:justify-center lg:items-center gap-16 w-11/12'>
                    <div className='flex flex-col justify-center items-center rounded-lg m-auto bg-neutral200 w-full md:w-1/2 h-72 py-16 px-4 gap-10 lg:gap-12'>
                        <p className='text-neutral700 text-center font-semibold text-3xl'>Let's connect!</p>
                        <div className='flex justify-center items-center gap-4'>
                            <a href='https://www.linkedin.com/in/dannycastilloo/' target='_blank' title='' className='rounded-full px-4 py-4 hover:bg-white transition-all duration-300'>
                                <img src="./icons/linkedin.svg" alt="Linkedin" title='Linkedin' />
                            </a>
                            <a href='https://www.instagram.com/dannycastillo.o/' target='_blank' title='' className='rounded-full px-4 py-4 hover:bg-white transition-all duration-300'>
                                <img src="./icons/instagram.svg" alt="Instagram" title='Instagram' />
                            </a>
                            <a href='https://github.com/dannycastilloo' target='_blank' title='' className='rounded-full px-4 py-4 hover:bg-white transition-all duration-300'>
                                <img src="./icons/github.svg" alt="Github" title='Github' />
                            </a>
                            <a href='https://www.youtube.com/channel/UCUKb3-8nupEbRym3HLbZMOg' target='_blank' title='' className='rounded-full px-4 py-4 hover:bg-white transition-all duration-300'>
                                <img src="./icons/youtube.svg" alt="YouTube" title='YouTube' />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center m-auto rounded-lg gap-10 lg:gap-12 w-full md:w-1/2 bg-backgroundBlack h-72 py-16 px-4'>
                        <p className='text-neutral50 text-center font-semibold text-3xl'>Check my musician website</p>
                        <a href="https://linktr.ee/dannycastillo" target='_blank' className='py-4 px-6 rounded-full text-neutral50 font-bold bg-warning400 hover:bg-warning500 transition-all duration-300' title='Danny Castillo'>Visit Website</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeView
