import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Blogs() {
    return (
        <div className='bg-slate-100 py-12 '>
            <h1 className='text-3xl md:text-4xl text-center mt-5'>𝐌𝐨𝐬𝐭 𝐑𝐞𝐚𝐝𝐚𝐛𝐥𝐞 𝐁𝐥𝐨𝐠𝐬</h1>

            <div className="card-container md:px-[10%] mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center">
                <div className='card w-[20rem] h-[30rem] border p-2  shadow-sm bg-white rounded-sm'>
                    <div className='w-100 h-[60%]'>
                        <img src="https://i.ibb.co/k6dZwJr/img1.jpg" alt="" className='w-[100%] h-[100%]' />
                    </div>
                    <div className='content px-5'>
                        <h2 className='mt-3 text-xl font-semibold'>Benefits of Turmeric</h2>
                        <p className='mt-3'>What is it?  " Turmeric is bright yellow spice that is typically for flavor and color Asian cuisine</p>
                        <button className='mt-3 flex items-center justify-center border border-red-600 rounded-full px-5 py-2 hover:bg-red-600 hover:text-white'>Read &nbsp; <FaLongArrowAltRight /></button>
                    </div>
                </div>
                <div className='card w-[20rem] h-[30rem] border p-2  shadow-sm bg-white rounded-sm'>
                    <div className='w-100 h-[60%]'>
                        <img src="https://i.ibb.co/vzGRT5b/img2.jpg" alt="" className='w-[100%] h-[100%]' />
                    </div>
                    <div className='content px-5'>
                        <h2 className='mt-3 text-xl font-semibold'>Benefits of Turmeric</h2>
                        <p className='mt-3'>What is it?  " Turmeric is bright yellow spice that is typically for flavor and color Asian cuisine</p>
                        <button className='mt-3 flex items-center justify-center border border-red-600 rounded-full px-5 py-2 hover:bg-red-600 hover:text-white'>Read &nbsp; <FaLongArrowAltRight /></button>
                    </div>
                </div>
                <div className='card w-[20rem] h-[30rem] border p-2  shadow-sm bg-white rounded-sm'>
                    <div className='w-100 h-[60%]'>
                        <img src="https://i.ibb.co/k6dZwJr/img1.jpg" alt="" className='w-[100%] h-[100%]' />
                    </div>
                    <div className='content px-5'>
                        <h2 className='mt-3 text-xl font-semibold'>Benefits of Turmeric</h2>
                        <p className='mt-3'>What is it?  " Turmeric is bright yellow spice that is typically for flavor and color Asian cuisine</p>
                        <button className='mt-3 flex items-center justify-center border border-red-600 rounded-full px-5 py-2 hover:bg-red-600 hover:text-white'>Read &nbsp; <FaLongArrowAltRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs