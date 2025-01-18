import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';
import { IoCallSharp } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";
import Footer from '../components/Footer';
import { motion } from "motion/react";
import { useLocation } from 'react-router-dom';

const containerVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.15, // Stagger the animation of child components
        },
    }    
}

const childVariant = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const leftImage = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
}

const rightForm = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } },
}


function Contact() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
    <div>
        <Navbar />

        <div className='bg-[#222222] h-auto lg:h-[600px] py-20 px-5 md:px-20'>
            <motion.div variants={containerVariants} initial="initial" animate="animate" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                <motion.div variants={childVariant} className='border-[#222222] border py-32 hover:border-[#bcc9d9] rounded-xl flex flex-col justify-center items-center bg-[#1d1d1d]'>
                    <IoCallSharp className='text-white md:text-5xl text-4xl mb-5' />
                    <p className='text-2xl text-white font-bold mb-3'>+233 265 876 087</p>
                    <p className='text-md text-[#a7a7a7] font-semibold'>PHONE NUMBER</p>
                </motion.div>
                <motion.div variants={childVariant} className='border-[#222222] border py-32 hover:border-[#bcc9d9] rounded-xl flex flex-col justify-center items-center bg-[#1d1d1d]'>
                    <HiOutlineMailOpen className='text-white md:text-5xl text-4xl mb-5' />
                    <p className='text-2xl text-white font-bold mb-3'>Info@ladesk.com</p>
                    <p className='text-md text-[#a7a7a7] font-semibold'>EMAIL ADDRESS</p>
                </motion.div>
                <motion.div variants={childVariant} className='border-[#222222] border py-32 hover:border-[#bcc9d9] rounded-xl flex flex-col justify-center items-center bg-[#1d1d1d]'>
                    <GrMapLocation className='text-white md:text-5xl text-4xl mb-5' />
                    <p className='text-2xl text-white font-bold mb-3'>Dansoman Estate</p>
                    <p className='text-md text-[#a7a7a7] font-semibold'>GREATER ACCRA</p>
                </motion.div>
            </motion.div>
        </div>

        <div className='bg-[#222222] w-100% h-auto flex flex-col lg:flex-row justify-center items-center p-5 md:p-20 overflow-hidden'>
            <motion.div variants={leftImage} initial="initial" whileInView="animate" className='lg:w-[50%] w-[100%] h-[100%]'>
                <h5 className='text-white font-semibold mb-3'>[ CONTACT US ]</h5>
                <h1 className='font-bold text-3xl md:text-5xl text-gray-300 mb-20 justify-start'>GET IN TOUCH </h1>
                <img src={require('../assets/customer.jpeg')} alt="" className='w-[100%] h-[500px] object-cover' />
            </motion.div>
            <motion.div variants={rightForm} initial="initial" whileInView="animate" className='lg:w-[50%] w-[100%] h-[100%]'>
                <div className='bg-white py-20 rounded-lg px-10'>
                    <div className='w-[100%] mb-5'>
                        <p className='mb-3 text-sm font-semibold'>[ YOUR NAME ]</p>
                        <input type="text" className='w-[100%] outline-none border px-3 py-5 rounded-lg bg-[#f8f8f8]' placeholder='ENTER HERE...' />
                    </div>

                    <div className='w-[100%] mb-5'>
                        <p className='mb-3 text-sm font-semibold'>[ BUSINESS EMAIL ]</p>
                        <input type="text" className='w-[100%] outline-none border px-3 py-5 rounded-lg bg-[#f8f8f8]' placeholder='ENTER HERE...' />
                    </div>

                    <div className='w-[100%] mb-8'>
                        <p className='mb-3 text-sm font-semibold'>[MESSAGE ]</p>
                        <textarea name="" id="" cols={80} rows={5} className='border bg-[#f8f8f8] w-[100%] outline-none'></textarea>
                    </div>

                    <div className='flex justify-start items-start'>
                        <button className='bg-black text-white w-[40%] py-3 px-5 rounded-lg text-lg'>Submit</button>
                    </div>
                </div>
                
            </motion.div>
        </div>
        <Footer />
    </div>
    )
}

export default Contact