import React from 'react'
import { BsFillStarFill } from "react-icons/bs";

function ReviewCard({ image, username, ratings, content }) {


    return (
        <div className='my-2 py-2'>
            <div className='flex items-center justify-start gap-2 w-[100%]'>
                <img src={image} className='w-[5%]' />
                <h1 className='text-slate-700' style={{fontSize: '15px'}}>{username}</h1>
            </div>
            <div className='mt-2'>
                <p className='text-sm text-green-600 flex items-center gap-0.5'>

                    {Array.from({ length: ratings }, (_, index) => (
                        <BsFillStarFill key={index} />
                    ))
                    }
                </p>
                <div className='flex flex-col mt-2 justify-start gap-3'>
                    <div className='flex gap-3'>
                        <img src={"https://i.ibb.co/vzGRT5b/img2.jpg"} alt="" className='w-[3rem] h-[3rem]' />
                        <img src={"https://i.ibb.co/vzGRT5b/img2.jpg"} alt="" className='w-[3rem] h-[3rem]' />
                        <img src={"https://i.ibb.co/vzGRT5b/img2.jpg"} alt="" className='w-[3rem] h-[3rem]' />
                    </div>
                    <p className='text-slate-800 '>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard