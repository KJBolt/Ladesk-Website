import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
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

const imageVariant = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const rightVariant = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } },
};

function Project() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='bg-[#222222]'>
            <Navbar />

            <div className='flex flex-col lg:flex-row h-auto relative p-5 md:p-16'>
                {/* Left Side */}
                <div className='lg:w-[70%] w-[100%] overflow-y-auto'>
                    <motion.img variants={imageVariant} initial="initial" animate="animate" src={require('../assets/presentation.jpeg')} alt="" className='rounded-lg w-[100%] h-[600px] object-cover' />
                    <h1 className='font-bold text-[20px] md:text-[35px] text-[#fefefe] mb-[20px] justify-start mt-10'>INTRO OF PROJECT</h1>
                    <p className='text-[#a7a7a7] text-[16px] mb-10 leading-relaxed'>
                        Ladesk Incorporation is an organization committed to delivering innovative, 
                        secure, and customer-focused technology solutions. By addressing critical areas such as cryptocurrency, 
                        IT infrastructure, application development, smart home systems, and global partnerships, the company 
                        strives to become a leader in its industry. 
                        <br />
                        <br />
                        <span className='font-bold text-xl md:text-xl text-[#fefefe] mb-8 justify-start mt-10'>OUR FOCUS AREAS</span>
                        <p className='mt-5 text-[#a7a7a7]'>
                            <span className='text-white text-xl'>1. Crypto Bureau</span> <br />
                            <br />
                            <span className='text-white text-[16px]'>Objective:</span><br />
                                We aim to establish a trusted and innovative platform for cryptocurrency services, ensuring secure exchange, 
                                advisory, and education. By simplifying transactions and enhancing adoption, we make cryptocurrency accessible 
                                and compliant with regulations. <br /> 
                                <br />

                                Key Focus Areas:
                                <br />
                                * Simplifying crypto transactions for businesses and individuals.
                                <br />
                                * Promoting cryptocurrency literacy and security.
                                <br />
                                * Developing partnerships with leading blockchain and crypto platforms.
                        </p>

                        <p className='mt-5 text-[#a7a7a7]'>
                            <span className='text-white text-xl'>2. Network Infrastructure & Support</span> <br />
                            <br />
                            <span className='text-white text-[16px]'>Objective:</span><br />
                                We deliver reliable and scalable IT infrastructure solutions to ensure businesses operate seamlessly and securely. 
                                Our expertise lies in designing, implementing, and maintaining networks tailored to client needs. <br /> 
                                <br />

                                Key Focus Areas:
                                <br />
                                * Building and upgrading secure network systems.
                                <br />
                                * Providing advanced cybersecurity solutions.
                                <br />
                                * Offering 24/7 managed IT services for optimal operations.
                        </p>

                        <p className='mt-5 text-[#a7a7a7]'>
                            <span className='text-white text-xl'>3. Application Development</span> <br />
                            <br />
                            <span className='text-white text-[16px]'>Objective:</span><br />
                            Our team specializes in developing cutting-edge applications that solve real-world problems, enhance user experiences, and drive business growth. <br /> 
                                <br />

                                Key Focus Areas:
                                <br />
                                * Crafting user-friendly, scalable applications.
                                <br />
                                * Integrating AI and data analytics for smarter applications.
                                <br />
                                * Supporting clients from concept to deployment and ongoing maintenance.
                        </p>

                        <p className='mt-5 text-[#a7a7a7]'>
                            <span className='text-white text-xl'>4. Smart Home Optimization</span> <br />
                            <br />
                            <span className='text-white text-[16px]'>Objective:</span><br />
                            We are revolutionizing modern living with smart home solutions that prioritize convenience, energy efficiency, and security. <br /> 
                                <br />

                                Key Focus Areas:
                                <br />
                                * Installing IoT-based systems for seamless automation.
                                <br />
                                * Enhancing energy efficiency with smart appliances.
                                <br />
                                * Providing continuous system updates and troubleshooting support.
                        </p>

                        <p className='mt-5 text-[#a7a7a7]'>
                            <span className='text-white text-xl'>5.  Stop Shop</span> <br />
                            <br />
                            <span className='text-white text-[16px]'>Objective:</span><br />
                            As a one-stop solution provider, we simplify access to essential technology products and services for businesses and individuals. <br /> 
                                <br />

                                Key Focus Areas:
                                <br />
                                * Offering a comprehensive range of hardware, software, and IT accessories.
                                <br />
                                * Providing bundled tech solutions for optimized convenience.
                                <br />
                                * Ensuring competitive pricing and exceptional customer service.
                        </p>

                        <p className='mt-5 text-[#a7a7a7]'>
                            <span className='text-white text-xl'>6.  Global Tech Partnership</span> <br />
                            <br />
                            <span className='text-white text-[16px]'>Objective:</span><br />
                            We foster global collaborations with technology leaders to drive innovation, exchange knowledge, and deliver cutting-edge solutions tailored to diverse client needs. <br /> 
                                <br />

                                Key Focus Areas:
                                <br />
                                * Building strategic alliances with global tech firms.
                                <br />
                                * Expanding our footprint in emerging markets.
                                <br />
                                * Localizing technology to address specific regional demands.
                        </p>
                    </p>
                    <motion.div variants={containerVariants} initial="initial" whileInView='animate' className='flex flex-col md:flex-row justify-center items-center gap-5 overflow-hidden'>
                        <motion.div variants={imageVariant} className='md:w-[50%] w-[100%] object-cover md:h-[350px] h-[250px]'>
                            <img src={require('../assets/team.jpeg')} alt="" className='rounded-lg w-[100%] h-[100%] object-cover' />
                        </motion.div>
                        <motion.div variants={imageVariant} className='md:w-[50%] w-[100%] md:h-[350px] h-[250px] object-cover'>
                            <img src={require('../assets/discussion.jpeg')} alt="" className='rounded-lg w-[100%] h-[100%] object-cover' />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Side */}
                <motion.div variants={rightVariant} initial="initial" whileInView='animate' className='lg:w-[30%] w-[100%] sticky top-[0px] md:top-[120px] h-[calc(100vh-4rem)] border-t-2 border-t-[#bcc9d9] mt-20 lg:mt-0 mx-0 lg:mx-20'>
                    <h1 className='font-bold text-2xl md:text-2xl text-[#fefefe] mb-8 justify-start mt-10'>PROJECT INFO</h1>
                    <p className='text-[#a7a7a7] text-[16px]'>
                        Our mission to bridge innovation and convenience by providing comprehensive technology solutions that 
                        empower businesses and individuals in a rapidly evolving digital world.
                    </p>
                    <div className='mt-8 flex flex-row items-center gap-10 border-b-2 border-b-[#bcc9d9] pb-10'>
                        <div className='text-white font-semibold'><span className='text-[#a7a7a7] me-3'>AUTHOR:</span>MR. RANASEY</div>
                        <div className='text-white font-semibold'><span className='text-[#a7a7a7] me-3'>YEAR:</span>2025</div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h1 className='font-bold text-2xl md:text-2xl text-gray-300 mb-8 justify-start mt-10'>SOCIAL MEDIA</h1>
                        <div className='flex justify-start items-center gap-5'>
                            <div className='rounded-full border border-[#bcc9d9] w-fit p-3 cursor-pointer'>
                                <FaFacebookF className='text-[#bcc9d9] text-xl' />
                            </div>
                            <div className='rounded-full border border-[#bcc9d9] w-fit p-3 cursor-pointer'>
                                <FaTwitter className='text-[#bcc9d9] text-xl' />
                            </div>
                            <div className='rounded-full border border-[#bcc9d9] w-fit p-3 cursor-pointer'>
                                <ImInstagram className='text-[#bcc9d9] text-xl' />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}

export default Project