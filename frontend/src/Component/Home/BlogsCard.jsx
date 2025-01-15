import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function BlogsCard({image, heading, content, link}) {
    return (
        <div className='card w-[20rem] h-[30rem] border p-2  shadow-sm bg-white rounded-sm'>
            <div className='w-100 h-[60%]'>
                <img src={image} alt="" className='w-[100%] h-[100%]' />
            </div>
            <div className='content px-5'>
                <h2 className='mt-3 text-xl font-semibold'>{heading}</h2>
                <p className='mt-3'>{content}</p>
                <button className='mt-3 flex items-center justify-center border border-red-600 rounded-full px-5 py-2 hover:bg-red-600 hover:text-white'>Read &nbsp; <FaLongArrowAltRight /></button>
            </div>
        </div>
    )
}

export default BlogsCard