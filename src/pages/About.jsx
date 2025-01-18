import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import Footer from '../components/Footer';
import { motion } from "motion/react";
import { useLocation } from 'react-router-dom';

const imageVariant = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariant2 = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
};

const rightSectionVariant = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
};



function About() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
    <div className='bg-[#222222]'>
        <Navbar />

        {/* First Section */}
        <div className='md:h-[100vh] h-auto bg-[#222222] flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-[50%] w-[100%] h-[100%] relative flex-col justify-center items-center md:mt-0 mt-20 px-5 md:px-16'>
                <motion.img variants={imageVariant} initial="initial" animate='animate' src={require('../assets/discussion.jpeg')} alt="" className='md:absolute md:block hidden relative md:top-10 top-0 md:left-10 left-0 z-0 w-[350px] rounded-lg h-[300px] object-cover' />
                <motion.img variants={imageVariant2} initial="initial" animate='animate' src={require('../assets/team.jpeg')} alt="" className='md:absolute relative md:bottom-10 bottom-0 md:right-10 right-0 z-0 w-[500px] rounded-lg h-[500px] object-cover' />
            </div>
            <motion.div variants={rightSectionVariant} initial="initial" animate='animate' className='md:w-[50%] w-[100%] h-[100%] flex-col flex justify-center items-start md:items-center px-5 lg:px-20 pt-20 md:pb-0 pb-20'>
                <h5 className='text-white font-semibold mb-5'>[ ABOUT US ]</h5>
                <h1 className='font-bold text-3xl md:text-5xl mt-3 text-gray-300 mb-10 justify-start'>WE PROVIDE QUALITY SOLUTIONS </h1>
                <p className='text-[#a7a7a7] text-md'>
                    At Ladesk, we specialize in delivering innovative and reliable IT solutions tailored to meet the unique needs of your business
                    </p>
                <div className='w-[100%] mt-10 mb-10'>
                    <div className='flex justify-between items-center border-b-[5px] border-b-[#a7a7a7] w-[100%] py-3'>
                        <p className='text-[#a7a7a7] font-semibold'>QUALITY SERVICES</p>
                        <p className='text-[#a7a7a7] font-bold'>90%</p>
                    </div>
                </div>
                <p className='text-[#a7a7a7] text-md'>With a commitment to quality and customer satisfaction, we bring your technology goals to life.</p>
                <div className='w-[100%] flex justify-start'>
                    <button
                        onClick={() => navigate('/contact-us')}
                        className="relative border mt-8 py-4 px-10  font-semibold overflow-hidden group"
                    >
                        <span className="z-20 group-hover:text-black text-white transition-colors duration-300">Get In Touch</span>
                        <span className="absolute inset-0 w-full h-full bg-white  text-black transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom z-0 flex justify-center items-center overflow-hidden">Get In Touch</span>
                    </button>
                </div>
                
                
            </motion.div>
        </div>

        {/* Who We Are */}
        <div className='md:h-[100vh] h-auto bg-[#1e1d1d] flex flex-col md:flex-row justify-between items-start md:items-center'>
            <motion.div variants={rightSectionVariant} initial="initial" whileInView='animate' className='md:w-[50%] w-[100%] h-[100%] flex-col flex justify-center items-start md:items-center px-5 lg:px-20 md:pt-0 pt-20'>
                <h5 className='text-white font-semibold mb-5'>[ WHO WE ARE ]</h5>
                <p className='text-[#a7a7a7] md:text-lg text-md'>
                    Ladesk is a technology company dedicated to driving innovation and delivering tailored solutions.
                    It promotes cryptocurrency adoption through secure exchange and advisory services, enhances business
                    efficiency with scalable IT infrastructure and cybersecurity, and develops cutting-edge, AI-powered 
                    applications. <br /> <br /> It modernizes living with smart home automation, simplifies access to technology as 
                    a one-stop provider, and fosters global partnerships to expand its reach and localize advanced solutions.
                </p>
                <div className='w-[100%] flex justify-start'>
                    <button
                        onClick={() => navigate('/contact-us')}
                        className="relative border mt-8 py-4 px-10  font-semibold overflow-hidden group"
                    >
                        <span className="z-20 group-hover:text-black text-white transition-colors duration-300"> Contact Us </span>
                        <span className="absolute inset-0 w-full h-full bg-white  text-black transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom z-0 flex justify-center items-center overflow-hidden">Contact Us</span>
                    </button>
                </div>
            </motion.div>
            <div className='md:w-[50%] w-[100%] h-[100%] relative flex flex-col justify-center items-center md:mt-0 mt-20 px-8 md:px-16 md:pt-28 pt-0'>
                <motion.img variants={imageVariant2} initial="initial" whileInView='animate' src={require('../assets/laptop.jpeg')} alt="" className=' relative md:bottom-10 bottom-0 md:right-10 right-0 z-0 w-[500px] rounded-lg h-[500px] object-cover' />
            </div>
        </div>

        {/* History Section */}
        <div className='h-[100vh] bg-[#222222] px-5 md:px-20 py-20'>
            <h5 className='text-white font-semibold mb-3 text-start'>[ HISTORY ]</h5>
            <h1 className='font-bold text-4xl md:text-4xl mt-3 text-gray-300 mb-16 text-start'>OUR JOURNEY</h1>

            <div className='h-[400px]'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                    className="mySwiper h-[100%]"
                >
                    <SwiperSlide className='rounded-lg overflow-hidden'>
                        <img src={require('../assets/team1.jpeg')} alt="Image1" className='object-cover h-[100%] w-[100%]' />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-lg overflow-hidden'>
                        <img src={require('../assets/discussion.jpeg')} alt="Image1" className='object-cover h-[100%] w-[100%]' />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-lg overflow-hidden'>
                        <img src={require('../assets/ladesk.jpg')} alt="Image1" className='object-cover h-[100%] w-[100%]' />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-lg overflow-hidden'>
                        <img src={require('../assets/presentation.jpeg')} alt="Image1" className='object-cover h-[100%] w-[100%]' />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-lg overflow-hidden'>
                        <img src={require('../assets/ideas.jpeg')} alt="Image1" className='object-cover h-[100%] w-[100%]' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <Footer />
    </div>
    )
}

export default About