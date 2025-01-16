import React from 'react'
import { BsFillStarFill } from "react-icons/bs";

function ReviewCard({ image, username, ratings, content }) {


    return (
        <div className='my-2 py-2'>
            <div className='flex items-center justify-start gap-2 w-[100%]'>
                <img src={image} className='w-[5%]' />
                <h1 className='text-sm text-slate-700'>{username}</h1>
            </div>
            <div className='mt-2'>
                <p className='text-sm text-green-600 flex items-center gap-0.5'>

                    {Array.from({ length: ratings }, (_, index) => (
                        <BsFillStarFill key={index}/>
                    ))
                    }
                </p>
                <p className='text-slate-800 text-sm'>{content}</p>
            </div>
        </div>
    )
}

export default ReviewCard