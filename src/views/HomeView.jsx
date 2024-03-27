import { NavLink } from 'react-router-dom';
import Testimonial from '../components/Testimonial';
import testimonialsData from '../data/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function HomeView() {

    return (
        <>
            <section className='w-full h-screen flex flex-col justify-between items-center presentation m-auto'>
                <div className='container flex flex-col gap-16 mx-auto justify-between items-center mt-32 md:mt-36 lg:mt-0 lg:flex-row lg:gap-0 w-10/12 h-screen'>
                    <div className='flex flex-col mx-auto items-start gap-10'>
                        <h1 className='font-extrabold text-start text-white font-archivo lg:text-center text-6xl leading-18 md:text-7xl lg:text-8xl md:leading-24'>Web Developer & UX/UI Designer</h1>
                        <p className='text-start text-gray1 text-neutral100 lg:text-center lg:mx-auto subtitle'>Unleash the Power of Technology & Elevate Your Digital Presence</p>
                        <div className='flex flex-col gap-6 lg:mx-auto justify-start items-start md:flex-row md:justify-center md:items-center md:gap-5'>
                            <a href="mailto:dannycastillootiniano@gmail.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple1 hover:bg-purple2 text-white rounded font-semibold text-sm flex justify-center items-center cursor-pointer transition-all duration-300">Hire Me!</a>
                            <div className='flex gap-5'>
                                <a className='px-3 py-3 rounded-full hover:bg-black transition-all duration-30' href="https://www.linkedin.com/in/dannycastilloo/" title="Linkedin">
                                    <img className="w-10/12 lg:w-12/12 m-auto" src="./icons/linkedin.svg" alt="Linkedin" title="Linkedin" />
                                </a>
                                <a className='px-3 py-3 rounded-full hover:bg-black transition-all duration-30' href="https://github.com/dannycastilloo" title="Github">
                                    <img className="w-10/12 lg:w-12/12 m-auto" src="./icons/github.svg" alt="Github" title="Github" />
                                </a>
                                <a className='px-3 py-3 rounded-full hover:bg-black transition-all duration-30' href="https://www.facebook.com/profile.php?id=61551768310042" title="Facebook">
                                    <img className="w-10/12 lg:w-12/12 m-auto" src="./icons/facebook.svg" alt="Facebook" title="Facebook" />
                                </a>
                                <a className='px-3 py-3 rounded-full hover:bg-black transition-all duration-300' href="https://dribbble.com/dannycastillo" title="Dribble">
                                    <img className="w-10/12 lg:w-12/12 m-auto" src="./icons/dribble.svg" alt="Dribble" title="Dribble" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full flex justify-between items-center bg-backgroundBlack py-20 md:py-32'>
                <div className='container-sm mx-auto flex flex-col gap-16 w-10/12 lg:w-12/12 lg:gap-24 lg:container'>
                    <div className='flex flex-col gap-10 justify-center items-center lg:gap-16'>
                        <h3 className='text-archivo font-extrabold text-3xl md:text-4xl lg:text-5xl text-white text-center lg:text-start'>Services</h3>
                        <p className='text-center text-lg text-neutral600 w-12/12 md:text-xl lg:text-2xl lg:w-10/12 text-gray3'>Elevate your business with my tailored solutions, spanning consultation to execution, across diverse domains.</p>
                    </div>
                    <div className='flex flex-col gap-10 mx-auto justify-center lg:gap-5'>
                        <div className='flex flex-col gap-10 h-6/6 justify-center mx-auto lg:h-4/6 lg:flex-row lg:gap-5'>
                            <div className='rounded-xl shadow-md p-10 flex flex-col gap-10 w-10/12 mx-auto lg:w-5/12 lg:gap-5 bento'>
                                <div className='flex flex-col gap-5'>
                                    <h2 className='font-semibold text-2xl text-white text-center lg:text-start'>Web Development</h2>
                                    <p className='text-white text-center lg:text-start'>Empower your online presence with bespoke web solutions tailored to your needs.</p>
                                    <ul className='list-disc text-white list-inside hidden lg:block'>
                                        <li>Excellent performance</li>
                                        <li>Regular updates</li>
                                        <li>Personalization</li>
                                    </ul>
                                </div>

                                <img className='mt-auto rounded-md mx-auto lg:ml-auto lg:mx-0' src="./services/desktop.svg" alt="Web Development" title='Web Development' />
                            </div>
                            <div className='flex flex-col gap-10 w-10/12 justify-center mx-auto lg:w-7/12 lg:gap-5'>
                                <div className='w-full rounded-xl items-center shadow-md mx-auto p-10 flex flex-col h-6/6 gap-10 lg:h-3/6 lg:flex-row bento'>
                                    <div className='flex flex-col gap-5 w-6/6 lg:w-4/6'>
                                        <h2 className='font-semibold text-2xl text-white text-center lg:text-start'>Mobile Development</h2>
                                        <p className='text-white text-center lg:text-start'>Reach your audience on the go with immersive mobile applications designed for success.</p>
                                    </div>

                                    <div className='w-6/6 lg:w-2/6'>
                                        <img className='mt-auto rounded-md mx-auto' src="./services/mobile.svg" alt="Mobile Development" title='Mobile Development' />
                                    </div>
                                </div>
                                <div className='w-full flex flex-col gap-10 h-6/6 mx-auto justify-center lg:flex-row lg:h-3/6 lg:gap-5'>
                                    <div className='rounded-xl shadow-md p-10 flex flex-col gap-10 w-12/12 lg:w-1/2 lg:gap-3 bento'>
                                        <div className='flex flex-col gap-5'>
                                            <h2 className='font-semibold text-2xl text-white text-center lg:text-start'>UX/UI Design</h2>
                                            <p className='text-white text-center lg:text-start'>Elevate user satisfaction and retention.</p>
                                        </div>

                                        <img className='mt-auto rounded-md mx-auto lg:ml-auto lg:mx-0' src="./services/design.svg" alt="UX/UI" title='UX/UI' />
                                    </div>
                                    <div className='rounded-xl shadow-md p-10 flex flex-col gap-10 w-12/12 lg:w-1/2 lg:gap-3 bento'>
                                        <div className='flex flex-col gap-5'>
                                            <h2 className='font-semibold text-2xl text-white text-center lg:text-start'>SEO</h2>
                                            <p className='text-white text-center lg:text-start'>Climb the ranks of search engines and drive traffic.</p>
                                        </div>

                                        <img className='mt-auto rounded-md mx-auto  lg:ml-auto lg:mx-0' src="./services/seo.svg" alt="SEO" title='SEO' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-10 h-6/6 lg:flex-row lg:h-2/6 lg:gap-5'>
                            <div className='rounded-xl shadow-md py-10 px-0 flex flex-col mx-auto w-10/12 justify-between gap-10 lg:w-8/12 lg:flex-row lg:gap-0 lg:p-10 bento'>
                                <div className='flex flex-col gap-5 w-7/12 mx-auto py-4'>
                                    <h2 className='font-medium text-2xl text-white text-center lg:text-start'>Brand Identity</h2>
                                    <p className='text-white text-center lg:text-start'>Resonate with your audience and set yourself apart from the competition.</p>
                                </div>
                                <img className='mt-auto rounded-md mx-auto' src="./services/brand.svg" alt="Brand Identity" title='Brand Identity' />
                            </div>
                            <div className='rounded-xl shadow-md py-10 px-6 flex flex-col justify-center items-center gap-10 mx-auto w-10/12 lg:w-4/12 lg:gap-5 lg:p-10 bento'>
                                <span className='font-semibold text-3xl text-white text-center lg:text-2xl'>Ready for the change?</span>
                                <p className='text-white text-center text-lg lg:text-base'>Write me and let's achieve our goals together!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full flex justify-between items-center bg-gradient-to-b from-project1 to-project2 py-20 md:py-32'>
                <div className='container mx-auto flex flex-col w-10/12 lg:w-12/12 gap-16 md:gap-20 lg:gap-24'>
                    <div className='flex flex-col gap-10 justify-center items-center lg:gap-16'>
                        <h3 className='text-archivo font-extrabold text-3xl text-center text-white md:text-4xl lg:text-5xl'>Check my projects</h3>
                        <p className='text-center text-lg text-gray1 w-12/12 md:text-xl lg:text-2xl lg:w-10/12'>Explore my portfolio of innovative endeavors and successful collaborations that highlight my expertise and commitment to excellence.</p>
                    </div>
                    <div className='flex mx-auto'>
                        <img className='w-96 hover:w-112 transition-all duration-500' src="./projects/website.png" alt="Website" title='Website' />
                        <img className='w-96 hover:w-112 transition-all duration-500 hidden lg:block' src="./projects/mobile.png" alt="Mobile" title='Mobile' />
                    </div>
                    <NavLink to='/projects' className='flex gap-2 text-defaultFont bg-white w-3/6 mx-auto justify-center items-center text-xl font-medium text-center py-4 rounded-xl hover:bg-gradient-to-r hover:from-gradient1 hover:to-gradient2 hover:text-white transition-all duration-300'>
                        See Projects
                    </NavLink>
                </div>
            </section>

            <section className='w-full flex flex-col justify-between items-center bg-gradient-to-b from-project2 to-backgroundBlack py-20 md:py-32'>
                <div className='container flex flex-col mx-auto justify-between items-center gap-6 md:gap-14 w-10/12 lg:w-12/12'>
                    <div className='flex flex-col gap-16 justify-center items-center'>
                        <h3 className='text-archivo font-extrabold text-4xl text-center text-white lg:text-5xl'>Featured partnerships</h3>
                        <p className='text-center text-gray1 text-lg w-12/12 md:text-xl lg:text-2xl lg:w-10/12'>Trusted organizations we've collaborated with to deliver outstanding results.</p>
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
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}

                        className="mySwiper container py-4 mx-auto my-10 lg:my-16"
                    >
                        <SwiperSlide>
                            <img className='mx-auto' src="./companies/devdatep.png" alt="Devdatep Consulting" title='Devdatep Consulting' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src="./companies/tecnovedades.png" alt="Tecnovedades Web" title='Tecnovedades Web' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src="./companies/marfa.png" alt="Grupo Marfa Perú" title='Grupo Marfa Perú' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src="./companies/crecemos.png" alt="Crecemos Juntos" title='Crecemos Juntos' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src="./companies/gaotek.png" alt="GaoTek" title='GaoTek' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src="./companies/marketing.png" alt="Marketing 70" title='Marketing 70' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto' src="./companies/ventas.png" alt="Consigue Ventas Inversiones" title='Consigue Ventas Inversiones' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className='w-full flex flex-col justify-between items-center bg-backgroundBlack py-10 md:py-16'>
                <div className='container flex flex-col mx-auto justify-center items-center w-10/12 lg:w-12/12'>
                    <div className='flex flex-col gap-10 justify-center items-center lg:gap-16'>
                        <h3 className='text-archivo font-extrabold text-4xl text-center text-white lg:text-5xl'>Testimonials</h3>
                        <p className='text-center text-xl text-gray1 lg:text-2xl'>Real stories from satisfied customers who have experienced the impact of my exceptional service.</p>
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
                    <div className='flex flex-col mx-auto gap-3 justify-center items-center text-gray1 lg:flex-row md:text-lg'>
                        <span>Need a good experience, too?</span>
                        <a href="mailto:dannycastillootiniano@gmail.com" className='font-semibold hover:text-white transition-all duration-300'>Contact Me</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeView