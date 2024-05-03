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
                <div className='container flex flex-col gap-10 md:gap-16 lg:gap-24 mx-auto justify-center items-center w-10/12 py-10 md:py-16 lg:py-20'>
                    <div className='flex flex-col lg:flex-row mx-auto items-start justify-between'>
                        <div className='lg:w-7/12'>
                            <div className='flex flex-col lg:flex-row gap-8 lg:gap-4 justify-center lg:justify-start items-center mb-8 lg:mb-4'>
                                <hr className='w-1 h-6 bg-blue-500 hidden lg:flex' />
                                <h2 className='text-neutral500 md:text-lg lg:text-xl'>SOFTWARE DEVELOPER & DESIGNER</h2>
                                <hr className='w-6 h-1 bg-blue-500 flex lg:hidden' />
                            </div>
                            <h1 className='font-extrabold text-neutral700 font-raleway text-6xl leading-18 md:text-8xl md:leading-36 text-center lg:text-start'>Danny Castillo</h1>
                            <p className='text-neutral500 lg:mx-auto text-xl md:text-2xl py-5 text-center lg:text-start'>Redefine your digital presence, where innovation meets design, and every click sparks a sensation.</p>
                        </div>
                        <div className='rounded-full bg-neutral800 h-64 mx-auto my-10 lg:my-0'>
                            <img className='h-64 mx-auto' src="./photo.svg" alt="Danny Castillo" title='Danny Castillo' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center w-full lg:h-64'>
                        <div className='flex flex-col md:flex-row justify-between items-center gap-10 w-full lg:w-6/12'>
                            <div className='p-8 rounded-lg bg-brand300 flex flex-col justify-between items-center md:items-start h-64 w-full md:w-6/12'>
                                <img src="./presentation/experience.svg" alt="Experience" title='Experience' className='mx-auto md:mx-0 w-14 md:w-auto' />
                                <div className='flex flex-col gap-5 md:gap-3'>
                                    <span className='text-neutral700 text-3xl md:text-2xl font-semibold text-center md:text-start'>+1</span>
                                    <p className='text-neutral700 text-2xl font-semibold text-center md:text-start'>Year of Experience</p>
                                </div>
                            </div>
                            <div className='p-8 rounded-lg bg-neutral200 flex flex-col justify-between items-center md:items-start h-64 w-full md:w-6/12'>
                                <img src="./presentation/availability.svg" alt="Availability" title='Availability' className='mx-auto md:mx-0 w-14 md:w-auto' />
                                <div className='flex flex-col gap-5 md:gap-3'>
                                    <span className='text-neutral700 text-3xl md:text-2xl font-semibold text-center md:text-start'>24/7</span>
                                    <p className='text-neutral700 text-2xl font-semibold text-center md:text-start'>Availability</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row lg:flex-col justify-center items-center w-full lg:w-5/12 gap-10 md:gap-6 lg:h-64'>
                            <div className='flex justify-center items-center m-auto rounded-lg gap-6 h-full lg:h-4/6 md:w-3/6 lg:w-full'>
                                <NavLink className='rounded-full px-4 py-4 bg-white hover:bg-neutral200 transition-all duration-300'>
                                    <img src="./icons/linkedin.svg" alt="Linkedin" title='Linkedin' />
                                </NavLink>
                                <NavLink className='rounded-full px-4 py-4 bg-white hover:bg-neutral200 transition-all duration-300'>
                                    <img src="./icons/instagram.svg" alt="Instagram" title='Instagram' />
                                </NavLink>
                                <NavLink className='rounded-full px-4 py-4 bg-white hover:bg-neutral200 transition-all duration-300'>
                                    <img src="./icons/github.svg" alt="Github" title='Github' />
                                </NavLink>
                                <NavLink className='rounded-full px-4 py-4 bg-white hover:bg-neutral200 transition-all duration-300'>
                                    <img src="./icons/youtube.svg" alt="YouTube" title='YouTube' />
                                </NavLink>
                            </div>
                            <div className='w-3/6 lg:w-full h-full lg:h-2/6 flex justify-center items-center'>
                                <a href="mailto:dannycastillootiniano@gmail.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-neutral700 text-neutral100 hover:bg-neutral800 transition-all duration-500 rounded-full font-bold lg:text-lg flex justify-center items-center cursor-pointer w-full">Hire Me Now!</a>
                            </div>
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

                        className="mySwiper container flex mx-auto mt-8 pb-5 md:mt-0"
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
                        <p className='text-lg text-gray1 lg:text-2xl text-center text-neutral600'>Real stories from satisfied customers who have experienced the impact of my exceptional service.</p>
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

            <section className='w-full flex flex-col justify-between items-center bg-brand400 py-20 md:py-24 lg:py-32'>
                <div className='container flex flex-col mx-auto justify-center items-center gap-16 w-10/12 lg:w-12/12'>
                    <div className='flex flex-col gap-10'>
                        <h5 className='font-raleway text-neutral50 text-3xl md:text-4xl lg:text-5xl font-bold text-center'>Transform your online presence today</h5>
                        <p className='text-neutral100 text-lg md:text-2xl lg:text-2xl text-center'>This is the moment to change everything in your brand.
                            Embark on your journey towards stunning web design and seamless development.</p>
                    </div>

                    <div className='flex gap-4 md:gap-5 lg:gap-10 py-4'>
                        <a href='mailto:dannycastillootiniano@gmail.com' target='_blank' className='px-8 py-2 flex justify-center items-center md:px-10 md:py-5 neutral-lg rounded-full text-center bg-neutral800 font-medium text-neutral100 hover:bg-neutral900 hover:text-neutral50 transition-all duration-300 lg:text-lg'>Contact Me</a>
                        <NavLink to='/about' className='px-8 py-6 flex justify-center items-center rounded-full text-center bg-neutral100 text-neutral800 hover:bg-neutral100 hover:text-neutral900 transition-all duration-300 lg:text-lg'>Learn More</NavLink>
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