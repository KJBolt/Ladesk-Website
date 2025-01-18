import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import Hamburger from 'hamburger-react';
import { useNavigate } from 'react-router-dom';
// import '../styles.css';
import {AnimatePresence, motion } from "motion/react";

// Animation variants for the container and children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between child animations
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export default function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) { // Assuming 768px is the medium breakpoint
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);

    const handleLinkClick = (route) => {
        navigate(route); // Navigate to the route
        setOpen(false); // Close the menu
    };

    const path = location.pathname.split('/')[1];
    console.log(path);

    return (
        <>
        <div className='flex justify-center items-center bg-black sticky w-[100%] top-0 z-50'>
            <div className='w-[100%] pt-5 pb-2 rounded-lg h-auto flex justify-between items-center font-bold px-5 md:px-10'>
                <div onClick={() => navigate('/')} className='flex items-center gap-3 cursor-pointer'>
                    <img src={require('../assets/logo.png')} className='rounded-full md:h-[60px] h-[80px] md:w-[60px] w-[100px]' alt="Logo" />
                </div>

                <div className='md:flex hidden gap-10 items-center text-white'>
                    <Link
                        to={'/'}
                        className={`${path === '' ? 'text-sm font-sans font-bold cursor-pointer py-3 uppercase' : 'text-sm font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                    >
                        HOME
                        <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </Link>
                    <Link
                        to={'/project'}
                        className={`${path === 'project' ? 'text-sm font-sans font-bold cursor-pointer py-2 uppercase' : 'text-sm font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                    >
                        PROJECT
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </Link>
                    <Link
                        to={'/about-us'}
                        className={`${path === 'about-us' ? 'text-sm font-sans font-bold cursor-pointer py-2 uppercase' : 'text-sm font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                    >
                        ABOUT US
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </Link>
                    <Link
                        to={'/contact-us'}
                        className={`${path === 'contact-us' ? 'text-sm font-sans font-bold cursor-pointer py-2 uppercase' : 'text-sm font-sans font-bold py-2 cursor-pointer uppercase'} relative group`}
                    >
                        CONTACT US
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </Link>
                </div>

                <div className='md:flex hidden gap-3 text-white'>
                    <FaTwitter className='text-lg cursor-pointer' />
                    <FaFacebookF className='text-lg cursor-pointer' />
                    <ImInstagram className='text-lg cursor-pointer' />
                </div>

                <div className='text-white md:hidden flex'>
                    <Hamburger toggled={isOpen} toggle={setOpen} className={'text-white'} />
                </div>
            </div>
        </div>





        {/* Mobile Menu */}
        <AnimatePresence>
            {isOpen && (
                <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden" className='bg-black w-[100%] h-screen fixed top-0 left-0 z-20 flex flex-col justify-center items-center text-white'>
                    <motion.div variants={itemVariants} className='mb-5'>
                        <div
                            onClick={() => handleLinkClick('/')}
                            className={`${path === 'about-us' ? 'text-xl font-sans font-bold cursor-pointer py-2 uppercase' : 'text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                        >
                            HOME
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className='mb-5'>
                        <div
                            onClick={() => handleLinkClick('/project')}
                            className={`${path === 'about-us' ? 'text-xl font-sans font-bold cursor-pointer py-2 uppercase' : 'text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                        >
                            PROJECT
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className='mb-5'>
                        <div
                            onClick={() => handleLinkClick('/about-us')}
                            className={`${path === 'about-us' ? 'text-xl font-sans font-bold cursor-pointer py-2 uppercase' : 'text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                        >
                            ABOUT
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className='mb-5'>
                        <div
                            onClick={() => handleLinkClick('/contact-us')}
                            className={`${path === 'about-us' ? 'text-xl font-sans font-bold cursor-pointer py-2 uppercase' : 'text-xl font-sans py-2 font-bold cursor-pointer uppercase'} relative group`}
                        >
                            CONTACT US
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        
        </>
    )
}
