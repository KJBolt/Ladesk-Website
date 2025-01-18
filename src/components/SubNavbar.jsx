import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";

export default function SubNavbar() {
    return (
    <div className='border-b border-b-slate-600 hidden lg:flex items-center justify-center px-3'>
        <div className='flex items-center p-2 gap-1 w-[24%] border-r border-r-slate-600'>
            <CiLocationOn className='text-xl' />
            <p>Dansoman-Accra</p>
        </div>
        <div className='flex items-center p-2 gap-1 w-[24%]'>
            <IoIosMail className='text-xl' />
            <p>info@ladesk.com</p>
        </div>
        <div className='flex items-center p-2 gap-1 w-[24%] border-r border-r-slate-600'>
            <FaPhoneFlip className='text-xl' />
            <p>+233 24 000 000</p>
        </div>
        <div className='flex items-center pl-2 gap-2 w-[24%]'>
            <FaFacebookF className='text-xl' />
            <TiSocialInstagram className='text-xl' />
            <FaTwitter className='text-xl' />
        </div>
    </div>
    )
}
