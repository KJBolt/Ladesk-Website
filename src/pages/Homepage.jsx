import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import Footer from '../components/Footer'
import ScrollIcon from '../components/ScrollIcon'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom';
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


export default function Homepage() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const navigate = useNavigate();
    return (
        <div className='bg-[#222222]'>
            <Navbar />

            {/* Hero Page */}
            <div className='hero1 h-[100vh] flex flex-col justify-center px-10 md:px-20 items-start'>
                <motion.div variants={containerVariants} initial="initial" animate="animate" className='text-white w-[100%] md:w-[60%] lg:w-[60%]'>
                    <motion.h3 variants={childVariant}>WELCOME TO LADESK</motion.h3>
                    <motion.h1 variants={childVariant} className='font-extrabold text-4xl md:text-6xl mt-3 uppercase'>Empowering Innovation, Shaping the Future.</motion.h1>
                    {/* <p className='mt-5'>Delivering innovative solutions, simplifying access to technology, and driving growth in a rapidly evolving digital landscape</p> */}
                    <motion.button
                        onClick={() => navigate('/project')}
                        variants={childVariant}
                        className="relative border mt-8 py-4 px-10  font-semibold overflow-hidden group"
                    >
                        <span className="z-20 group-hover:text-black transition-colors duration-300">Learn More</span>
                        <span className="absolute inset-0 w-full h-full bg-white  text-black transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom z-0 flex justify-center items-center overflow-hidden">Learn More</span>
                    </motion.button>

                    
                </motion.div>
            </div>

            <div className='hero2 h-[100vh] flex flex-col justify-center px-10 md:px-20 items-start'>
                <motion.div variants={containerVariants} initial="initial" whileInView='animate' className='text-white w-[100%] md:w-[60%] lg:w-[53%]'>
                    <motion.h3 variants={childVariant}>WHAT WE DO</motion.h3>
                    <motion.h1 variants={childVariant} className='font-extrabold text-4xl md:text-6xl mt-3 uppercase'>Driving Tomorrow’s Solutions Today.</motion.h1>
                    {/* <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa molestias perspiciatis beatae nam, dolorum nemo ex asperiores eveniet magni.</p> */}
                    <motion.button
                        onClick={() => navigate('/project')}
                        variants={childVariant}
                        className="relative border mt-8 py-4 px-10  font-semibold overflow-hidden group"
                    >
                        <span className="z-20 group-hover:text-black transition-colors duration-300">Learn More</span>
                        <span className="absolute inset-0 w-full h-full bg-white  text-black transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom z-0 flex justify-center items-center overflow-hidden">Learn More</span>
                    </motion.button>
                </motion.div>
            </div>

            <div className='hero3 h-[100vh] flex flex-col justify-center px-10 md:px-20 items-start'>
                <motion.div variants={containerVariants} initial="initial" whileInView='animate' className='text-white w-[100%] md:w-[60%] lg:w-[60%]'>
                    <motion.h3 variants={childVariant}>WHAT WE DO</motion.h3>
                    <motion.h1 variants={childVariant} className='font-extrabold text-4xl md:text-6xl mt-3 uppercase'>Empowering Technology, Elevating Lives.</motion.h1>
                    {/* <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa molestias perspiciatis beatae nam, dolorum nemo ex asperiores eveniet magni.</p> */}
                    <motion.button
                        onClick={() => navigate('/project')}
                        variants={childVariant}
                        className="relative border mt-8 py-4 px-10  font-semibold overflow-hidden group"
                    >
                        <span className="z-20 group-hover:text-black transition-colors duration-300">Learn More</span>
                        <span className="absolute inset-0 w-full h-full bg-white  text-black transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom z-0 flex justify-center items-center overflow-hidden">Learn More</span>
                    </motion.button>
                </motion.div>
            </div>

            <div className='hero4 h-[100vh] flex flex-col justify-center px-10 md:px-20 items-start'>
                <motion.div variants={containerVariants} initial="initial" whileInView='animate' className='text-white w-[100%] md:w-[60%] lg:w-[60%]'>
                    <motion.h3 variants={childVariant}>WHAT WE DO</motion.h3>
                    <motion.h1 variants={childVariant} className='font-extrabold text-4xl md:text-6xl mt-3 uppercase'>Simplifying Complexity, Inspiring Innovation.</motion.h1>
                    {/* <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa molestias perspiciatis beatae nam, dolorum nemo ex asperiores eveniet magni.</p> */}
                    <motion.button
                        onClick={() => navigate('/project')}
                        variants={childVariant}
                        className="relative border mt-8 py-4 px-10  font-semibold overflow-hidden group"
                    >
                        <span className="z-20 group-hover:text-black transition-colors duration-300">Learn More</span>
                        <span className="absolute inset-0 w-full h-full bg-white  text-black transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom z-0 flex justify-center items-center overflow-hidden">Learn More</span>
                    </motion.button>
                </motion.div>
            </div>

            <div className='hero5 h-[100vh] flex flex-col justify-center px-10 md:px-20 items-start'>
                <motion.div variants={containerVariants} initial="initial" whileInView='animate' className='text-white w-[100%] md:w-[60%] lg:w-[60%]'>
                    <motion.h3 variants={childVariant}>WHAT WE DO</motion.h3>
                    <motion.h1 variants={childVariant} className='font-extrabold text-4xl md:text-6xl mt-3 uppercase'>Building Bridges Between Technology and Possibility.</motion.h1>
                    {/* <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa molestias perspiciatis beatae nam, dolorum nemo ex asperiores eveniet magni.</p> */}
                    <motion.button
                        onClick={() => navigate('/project')}
                        variants={childVariant}
                        className="relative border mt-8 py-4 px-10  font-semibold overflow-hidden group"
                    >
                        <span className="z-20 group-hover:text-black transition-colors duration-300">Learn More</span>
                        <span className="absolute inset-0 w-full h-full bg-white  text-black transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom z-0 flex justify-center items-center overflow-hidden">Learn More</span>
                    </motion.button>
                </motion.div>
            </div>

            <ScrollIcon />

            <Footer />
        </div>
    )
}
