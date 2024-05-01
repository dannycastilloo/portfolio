import { NavLink } from 'react-router-dom'
import projectsData from '../data/projects'
import Testimonial from '../components/Testimonial'
import testimonialsData from '../data/testimonials'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import ProjectPreview from '../components/ProjectPreview'

function HomeView() {

    return (
        <>
            <section className='w-full flex flex-col justify-between items-center m-auto bg-neutral50'>
                <div className='container flex flex-col gap-16 mx-auto justify-between items-center lg:mt-0 lg:flex-row lg:gap-0 w-10/12 h-screen'>
                    <div className='flex flex-col mx-auto items-center justify-center gap-10 h-full'>
                        <div className='flex flex-col gap-8 justify-center items-center'>
                            <h2 className='text-neutral600 md:text-lg lg:text-2xl text-center'>SOFTWARE DEVELOPER & DESIGNER</h2>
                            <hr className='w-6 h-1 bg-brandPrimary' />
                        </div>
                        <h1 className='font-extrabold text-center text-neutral700 font-raleway text-7xl leading-26 md:text-8xl md:leading-36'>Danny Castillo</h1>
                        <p className='text-neutral500 text-center lg:mx-auto text-xl md:text-2xl md:mb-5'>Redefine your digital presence, where innovation meets design, and every click sparks a sensation.</p>
                        <div className='flex gap-6 lg:mx-auto justify-center items-center flex-row md:gap-5 mt-5 md:mt-0'>
                            <a href="mailto:dannycastillootiniano@gmail.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-neutral700 text-neutral100 hover:bg-neutral800 transition-all duration-500 rounded-full font-bold text-sm lg:text-lg flex justify-center items-center cursor-pointer mb-4 md:mb-0">Hire Me!</a>
                            
                            <a href="./Danny_Castillo.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-neutral100 text-neutral800 hover:bg-neutral200 transition-all duration-500 rounded-full font-bold text-sm flex justify-center items-center cursor-pointer mb-4 lg:text-lg md:mb-0">Read CV</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full flex justify-between items-center bg-neutral100 py-20 md:py-32'>
                <div className='container-sm mx-auto flex flex-col gap-14 lg:gap-16 w-10/12 md:w-10/12 lg:w-12/12 lg:container'>
                    <div className='flex flex-col gap-10 lg:gap-16'>
                        <h3 className='font-raleway font-extrabold text-3xl md:text-4xl lg:text-5xl text-neutral800 text-center'>Services</h3>
                    </div>

                    <div className='flex flex-col gap-10 mx-auto justify-center lg:gap-5'>
                        <div className='flex flex-col gap-10 h-6/6 justify-center mx-auto lg:h-4/6 lg:flex-row lg:gap-5'>
                            <div className='rounded-xl p-10 flex flex-col md:flex-row lg:flex-col gap-10 w-12/12 mx-auto lg:w-4/12 lg:gap-5 bg-white'>
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
                                <div className='w-full rounded-xl mx-auto p-10 flex flex-col md:flex-row lg:flex-col h-6/6 gap-10 lg:gap-5 lg:h-3/6 bg-white'>
                                    <img className='w-10' src="./services/mobile.svg" alt="Mobile Development" title='Mobile Development' />
                                    <div className='flex flex-col gap-4'>
                                        <h2 className='font-semibold text-2xl text-neutral800'>Mobile Development</h2>
                                        <p className='text-neutral700'>Reach your audience on the go with immersive mobile applications designed for success.</p>
                                    </div>
                                </div>
                                <div className='w-full flex flex-col gap-10 h-6/6 mx-auto justify-center lg:flex-row lg:h-3/6 lg:gap-5'>
                                    <div className='rounded-xl p-10 flex flex-col md:flex-row lg:flex-col gap-10 w-12/12 lg:w-1/2 lg:gap-3 bg-white'>
                                        <img className='w-10' src="./services/design.svg" alt="UX/UI" title='UX/UI' />
                                        <div className='flex flex-col gap-4'>
                                            <h2 className='font-semibold text-2xl text-neutral800'>UX/UI Design</h2>
                                            <p className='text-neutral700'>Elevate user satisfaction and retention.</p>
                                        </div>
                                    </div>
                                    <div className='rounded-xl p-10 flex flex-col md:flex-row lg:flex-col gap-10 w-12/12 lg:w-1/2 lg:gap-3 bg-white'>
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

            <section className='w-full flex justify-between items-center bg-neutral50 py-20 md:py-32'>
                <div className='container mx-auto flex flex-col w-10/12 lg:w-12/12 gap-0 md:gap-16 lg:gap-20'>
                    <div className='flex gap-10 justify-between items-center'>
                        <h3 className='font-raleway font-extrabold text-3xl text-neutral800 md:w-4/6 md:text-4xl lg:text-5xl'>Check my projects</h3>
                        <NavLink to='/projects' className='text-neutral600 hidden md:flex w-2/6 lg:w-1/6 justify-end items-center text-2xl font-medium text-end underline transition-all duration-300 hover:text-neutral700'>
                            See more
                        </NavLink>
                    </div>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={5}
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
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                        }}

                        className="mySwiper container flex mx-auto mt-10 py-4 md:mt-0"
                    >
                        {projectsData.map((project, index) => (
                            <SwiperSlide key={index}>
                                <ProjectPreview
                                    title={project.title}
                                    poster={project.poster}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <NavLink to='/projects' className='text-neutral600 flex md:hidden justify-end items-center text-xl ml-auto font-medium text-end underline transition-all duration-300 hover:text-neutral700'>
                        See more
                    </NavLink>
                </div>
            </section>

            <section className='w-full flex flex-col justify-between items-center bg-neutral100 py-20 md:py-28 lg:py-32'>
                <div className='container flex flex-col m-auto justify-between items-start gap-16 md:gap-20 lg:gap-26 w-10/12 lg:w-12/12'>
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

            <section className='w-full flex flex-col justify-between items-center bg-neutral50 py-20 md:py-24 lg:py-32'>
                <div className='container flex flex-col mx-auto justify-center items-center w-10/12 lg:w-12/12'>
                    <div className='flex flex-col gap-10 justify-center items-center lg:gap-16'>
                        <h3 className='font-raleway font-extrabold text-4xl text-center text-neutral800 lg:text-5xl'>Testimonials</h3>
                        <p className='text-xl text-gray1 lg:text-2xl text-center text-neutral600'>Real stories from satisfied customers who have experienced the impact of my exceptional service.</p>
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

                        className="mySwiper container flex py-4 mx-auto my-10 lg:my-16"
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
                    <div className='flex flex-col mx-auto gap-3 justify-center items-center text-gray1 md:text-lg'>
                        <span>Need a good experience, too?</span>
                        <a href="mailto:dannycastillootiniano@gmail.com" className='font-semibold hover:text-white transition-all duration-300'>Contact Me</a>
                    </div>
                </div>
            </section>

            <section className='w-full flex flex-col justify-between items-center bg-blue3 py-20 md:py-24 lg:py-32'>
                <div className='container flex flex-col mx-auto justify-center items-center gap-16 w-10/12 lg:w-12/12'>
                    <div className='flex flex-col gap-10'>
                        <h5 className='font-raleway text-neutral50 text-3xl md:text-4xl lg:text-5xl font-medium text-center'>Transform your online presence today</h5>
                        <p className='text-neutral100 text-lg md:text-2xl lg:text-3xl text-center'>This is the moment to change everything in your brand.
                            Embark on your journey towards stunning web design and seamless development.</p>
                    </div>

                    <div className='flex gap-4 md:gap-5 lg:gap-10'>
                        <a href='mailto:dannycastillootiniano@gmail.com' target='_blank' className='px-8 py-2 flex justify-center items-center md:px-10 md:py-6 neutral-lg rounded-full text-center bg-neutral800 font-medium text-neutral100 hover:bg-neutral900 hover:text-neutral50 transition-all duration-300'>Contact Me</a>
                        <NavLink to='/about' className='px-8 py-6 flex justify-center items-center rounded-full text-center bg-neutral100 text-neutral800 hover:bg-neutral100 hover:text-neutral900 transition-all duration-300'>Learn More</NavLink>
                    </div>

                    <div className='flex gap-2'>
                        <span className='text-neutral100 text-lg'>Wanna get in touch?</span>
                        <a className='text-neutral50 underline text-lg' href='https://www.linkedin.com/in/dannycastilloo/' target='_blank'>Follow Me</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeView