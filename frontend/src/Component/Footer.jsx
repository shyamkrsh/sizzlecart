import React from 'react'
import { BsGlobe } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className=' bg-black text-white pt-24 md:py-10 px-10'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div>
                    <ul>
                        <li className='text-xl font-semibold'>Become our Sales Partner</li>
                    </ul>
                    {/* <p>Start up your profitable journey with us in your own territory .. <a href="/">click</a></p> */}
                </div>
                <div>
                    <ul>
                        <li className='text-xl font-semibold'>Contact Us</li>
                        <li className='mt-3 flex items-center'><BsGlobe className='text-2xl' /> &nbsp; sizzlecart.com</li>
                        <li className='mt-3 flex items-center'> <CgMail className='text-2xl' /> &nbsp; info@sizzlecart.com</li>
                        <li className='mt-3 flex items-center gap-5'>
                            <div className='bg-blue-500 w-[40px] h-[40px] flex items-center justify-center rounded-full'>
                                <FaFacebookF className='text-xl' />
                            </div>
                            <div className='bg-purple-700 w-[40px] h-[40px] flex items-center justify-center rounded-full'>
                                <FaInstagram className='text-xl' />
                            </div>
                            <div className='bg-blue-400 w-[40px] h-[40px] flex items-center justify-center rounded-full'>
                                <FaTwitter className='text-xl' />
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='text-xl font-semibold'>Quick Links</li>
                        <li className='mt-3'>website.com</li>
                        <li className='mt-3'>gmail.com</li>
                        <li className='mt-3'>socials</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='text-xl font-semibold'>For Blogs</li>
                        <p className='mt-3'>Subscribe for informative blogs about spices and recipes.</p>
                        <li className='mt-3 gap-2 hidden lg:flex'>
                            <input type="text" placeholder='Enter email' className='rounded-md p-1 w-[8rem]' />
                            <button className='bg-yellow-500 text-white md:text-xl px-2 py-2 rounded-md'>Subscribe</button>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <hr className='mt-5 text-gray-800' />
            <p className='text-center text-white mt-2'>All rights Reserved</p>
        </div>
    )
}

export default Footer