import { NavLink } from 'react-router-dom';
import Testimonial from '../components/Testimonial';
import testimonialsData from '../data/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function HomeView() {

    return (
        <>
            <section className='w-full flex flex-col justify-between items-center bg-gradient-to-r from-blue-600 to-blue-500 lg:from-blue-600 lg:to-blue-400 pt-32 pb-24 md:pt-40 md:pb-64 lg:pt-56 lg:pb-60'>
                <div className='container flex flex-col gap-16 mx-auto justify-between items-center lg:flex-row lg:gap-0 w-10/12'>
                    <div className='flex flex-col mx-auto items-start gap-10 lg:w-7/12'>
                        <h1 className='font-extrabold text-center text-4xl leading-14 text-white font-raleway md:text-7xl md:leading-28 lg:text-start lg:leading-28'>Web Developer & UX/UI Designer</h1>
                        <p className='text-2xl text-center text-neutral100 lg:text-start'>Unleash the Power of Technology & Elevate Your Digital Presence</p>
                    </div>
                    <div className='mx-auto flex justify-center items-center lg:w-5/12 lg:justify-end'>
                        <img src='./hero.png' alt="Danny Castillo" title='App Developer & Designer' />
                    </div>
                </div>
            </section>

            <div className='hidden container w-5/6 bg-white rounded-xl border border-neutral300 mx-auto shadow-md z-40 -mt-32 lg:-mt-32 lg:w-4/6 md:flex'>
                <div className='flex flex-col gap-5 px-6 py-8 border-r-2 border-neutral300 lg:px-8 lg:py-12'>
                    <strong className='font-semibold font-neutral800 text-3xl text-brand600 lg:text-3xl'>+1</strong>
                    <p className='font-neutral-800 text-md lg:text-lg'>Year crafting diverse web projects with expertise and precision.</p>
                </div>
                <div className='flex flex-col gap-5 px-6 py-8 border-r-2 border-neutral300 lg:px-8 lg:py-12'>
                    <strong className='font-semibold font-neutral800 text-3xl text-brand600 lg:text-3xl'>+100</strong>
                    <p className='font-neutral-800 text-md lg:text-lg'>Projects successfully brought to life, showcasing creativity and technical prowess.</p>
                </div>
                <div className='flex flex-col gap-5 px-6 py-8 lg:px-8 lg:py-12'>
                    <strong className='font-semibold font-neutral800 text-3xl text-brand600 lg:text-3xl'>24/7</strong>
                    <p className='font-neutral-800 text-md lg:text-lg'>Availability to ensure your web development needs are met anytime, anywhere.</p>
                </div>
            </div>

            <section className='w-full flex justify-between items-center bg-white py-20 md:py-32'>
                <div className='container-sm mx-auto flex flex-col gap-16 lg:gap-24 lg:container'>
                    <div className='flex flex-col gap-10 justify-center items-center lg:gap-16'>
                        <h3 className='text-raleway font-extrabold text-4xl text-center text-defaultFont lg:text-5xl'>Services</h3>
                        <p className='text-center text-xl text-neutral600 w-10/12 lg:text-2xl lg:w-6/6'>Elevate your business with my tailored solutions, spanning consultation to execution, across diverse domains.</p>
                    </div>
                    <div className='flex flex-col gap-10 mx-auto justify-center lg:gap-5'>
                        <div className='flex flex-col gap-10 h-6/6 justify-center mx-auto lg:h-4/6 lg:flex-row lg:gap-5'>
                            <div className='rounded-xl bg-lightblue2 shadow-md p-10 flex flex-col gap-10 w-10/12 mx-auto lg:w-5/12 lg:gap-5'>
                                <div className='flex flex-col gap-5'>
                                    <h2 className='font-semibold text-2xl text-neutral-800 text-center lg:text-start'>Web Development</h2>
                                    <p className='text-neutral800 text-center lg:text-start'>Empower your online presence with bespoke web solutions tailored to your needs.</p>
                                    <ul className='text-neutral800 list-disc list-inside hidden lg:block'>
                                        <li>Excellent performance</li>
                                        <li>Regular updates</li>
                                        <li>Personalization</li>
                                    </ul>
                                </div>

                                <img className='w-4/6 mt-auto rounded-md mx-auto' src="./services/web.webp" alt="Web Development" title='Web Development' />
                            </div>
                            <div className='flex flex-col gap-10 w-10/12 justify-center mx-auto lg:w-7/12 lg:gap-5'>
                                <div className='rounded-xl bg-lightblue2 shadow-md mx-auto p-10 flex flex-col h-6/6 gap-10 lg:h-3/6 lg:flex-row'>
                                    <div className='flex flex-col gap-5 w-6/6 lg:w-4/6'>
                                        <h2 className='font-semibold text-2xl text-neutral-800 text-center lg:text-start'>Mobile Development</h2>
                                        <p className='text-neutral800 text-center lg:text-start'>Reach your audience on the go with immersive mobile applications designed for success.</p>
                                    </div>

                                    <div className='w-6/6 lg:w-2/6'>
                                        <img className='w-4/6 mt-auto rounded-md mx-auto' src="./services/mobile.webp" alt="Mobile Development" title='Mobile Development' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-10 h-6/6 mx-auto justify-center lg:flex-row lg:h-3/6 lg:gap-5'>
                                    <div className='rounded-xl bg-lightblue2 shadow-md p-10 flex flex-col gap-10 w-12/12 lg:w-1/2 lg:gap-3'>
                                        <div className='flex flex-col gap-5'>
                                            <h2 className='font-semibold text-2xl text-neutral-800 text-center lg:text-start'>UX/UI Design</h2>
                                            <p className='text-neutral800 text-center lg:text-start'>Elevate user satisfaction and retention.</p>
                                        </div>

                                        <img className='mt-auto rounded-md w-3/6 mx-auto lg:ml-auto' src="./services/ux.webp" alt="UX/UI" title='UX/UI' />
                                    </div>
                                    <div className='rounded-xl bg-lightblue2 shadow-md p-10 flex flex-col gap-10 w-12/12 lg:w-1/2 lg:gap-3'>
                                        <div className='flex flex-col gap-5'>
                                            <h2 className='font-semibold text-2xl text-neutral-800 text-center lg:text-start'>SEO</h2>
                                            <p className='text-neutral800 text-center lg:text-start'>Climb the ranks of search engines and drive traffic.</p>
                                        </div>

                                        <img className='mt-auto rounded-md w-3/6 mx-auto lg:ml-auto' src="./services/seo.webp" alt="SEO" title='SEO' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-10 h-6/6 lg:flex-row lg:h-2/6 lg:gap-5'>
                            <div className='rounded-xl bg-lightblue2 shadow-md py-10 px-0 flex flex-col mx-auto w-10/12 justify-between gap-10 lg:w-8/12 lg:flex-row lg:gap-0 lg:p-10'>
                                <div className='flex flex-col gap-5 w-7/12 mx-auto'>
                                    <h2 className='font-medium text-2xl text-neutral-800 text-center lg:text-start'>Brand Identity</h2>
                                    <p className='text-center lg:text-start'>Resonate with your audience and set yourself apart from the competition.</p>
                                </div>
                                <img className='mt-auto rounded-md w-4/12 mx-auto' src="./services/brand.webp" alt="Brand Identity" title='Brand Identity' />
                            </div>
                            <div className='rounded-xl bg-lightblue2 shadow-md py-10 px-6 flex flex-col justify-center items-center gap-10 mx-auto w-10/12 lg:w-4/12 lg:gap-5 lg:p-10'>
                                <span className='font-semibold text-3xl text-neutral-800 text-center lg:text-2xl'>Ready for the change?</span>
                                <p className='text-center text-lg lg:text-base'>Write me and let's achieve our goals together!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full flex justify-between items-center bg-gradient-to-r from-lightpurple to-lightblue py-24 md:py-32'>
                <div className='container mx-auto flex flex-col gap-28 w-10/12 lg:w-12/12 lg:gap-36'>
                    <div className='flex flex-col gap-10 justify-center items-center lg:gap-16'>
                        <h3 className='text-raleway font-extrabold text-4xl text-center text-white lg:text-5xl'>Check my projects</h3>
                        <p className='text-center text-xl text-neutral100 w-10/12 lg:text-2xl lg:w-6/6'>Explore my portfolio of innovative endeavors and successful collaborations that highlight my expertise and commitment to excellence.</p>
                    </div>
                    <div className='flex mx-auto'>
                        <img src="./projects/website.png" alt="Website" title='Website' />
                        <img className='hidden lg:block' src="./projects/mobile.png" alt="Mobile" title='Mobile' />
                    </div>
                    <NavLink to='/projects' className='flex gap-2 text-defaultFont bg-white hover:bg-neutral-50 w-3/6 mx-auto justify-center items-center text-xl font-medium text-center py-4 rounded-xl transition-all duration-100'>
                        See Projects
                    </NavLink>
                </div>
            </section>

            <section className='w-full flex flex-col justify-between items-center bg-white py-20 lg:py-28'>
                <div className='container flex flex-col mx-auto justify-between items-center gap-6 md:gap-14'>
                    <div className='flex flex-col gap-16 justify-center items-center'>
                        <h3 className='text-raleway font-extrabold text-4xl text-center text-defaultFont lg:text-5xl'>Featured partnerships</h3>
                        <p className='text-center text-xl text-neutral700 w-10/12 lg:text-2xl'>Trusted organizations we've collaborated with to deliver outstanding results.</p>
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
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}

                        className="mySwiper container py-4 mx-auto my-10 lg:my-16"
                    >
                        <SwiperSlide>
                            <img className='mx-auto w-8/12 md:w-10/12 lg:w-12/12' src="./companies/devdatep.jpg" alt="Devdatep Consulting" title='Devdatep Consulting' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto w-8/12 md:w-10/12 lg:w-12/12' src="./companies/tecnovedades.jpg" alt="Tecnovedades Web" title='Tecnovedades Web' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto w-8/12 md:w-10/12 lg:w-12/12' src="./companies/marfa.jpg" alt="Grupo Marfa Perú" title='Grupo Marfa Perú' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto w-8/12 md:w-10/12 lg:w-12/12' src="./companies/crecemos.jpg" alt="Crecemos Juntos" title='Crecemos Juntos' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto w-8/12 md:w-10/12 lg:w-12/12' src="./companies/gaotek.jpg" alt="GaoTek" title='GaoTek' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto w-8/12 md:w-10/12 lg:w-12/12' src="./companies/marketing.jpg" alt="Marketing 70" title='Marketing 70' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='mx-auto w-8/12 md:w-10/12 lg:w-12/12' src="./companies/ventas.jpg" alt="Consigue Ventas Inversiones" title='Consigue Ventas Inversiones' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className='w-full flex flex-col justify-between items-center bg-brand100 py-32'>
                <div className='container flex flex-col mx-auto justify-center items-center w-10/12 lg:w-12/12'>
                    <div className='flex flex-col gap-10 justify-center items-center lg:gap-16'>
                        <h3 className='text-raleway font-extrabold text-4xl text-center text-defaultFont lg:text-5xl'>Testimonials</h3>
                        <p className='text-center text-xl text-neutral700 lg:text-2xl'>Real stories from satisfied customers who have experienced the impact of my exceptional service.</p>
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
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 0,
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
                    <div className='flex flex-col mx-auto gap-3 justify-center items-center lg:flex-row'>
                        <span className='font-light'>Need a good experience, too?</span>
                        <a href="mailto:dannycastillootiniano@gmail.com" className='underline'>Contact Me</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeView