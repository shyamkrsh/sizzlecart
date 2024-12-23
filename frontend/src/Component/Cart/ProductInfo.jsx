import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function ProductInfo({ image, title, price, offers, deliveryBy }) {

    


    return (
        <div className='bg-white flex flex-col border-b-2 my-5 px-10 shadow-md py-5'>
            <div className='flex justify-between '>
                <div>
                    <img src={image} alt="" className='w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]' />
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>{title}</h2>
                    <p className='mb-5'>Weight : 5 Kg.</p>
                    <p className='flex'>
                        <p>₹ {price} &nbsp;&nbsp;&nbsp; </p>
                        <p className='text-green-700 text-xl font-semibold'>{offers}</p>
                    </p>
                </div>
                <div className='hidden md:block'>{deliveryBy}</div>
            </div>
            <div className='flex flex-col md:flex-row justify-start md:gap-12 items-center'>
                <div className='flex items-center py-5 gap-3'>
                    <div>
                        <CiCircleMinus className='text-3xl font-semibold text-slate-500 cursor-pointer' />
                    </div>
                    <div>
                        <input type="number" value={1} name='count' className='border w-[3rem] h-[2rem] font-semibold  text-center outline-none' />
                    </div>
                    <div>
                        <CiCirclePlus className='text-3xl font-semibold text-slate-500 cursor-pointer' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <button className='text-[1.1rem] font-semibold hover:text-blue-800'>SAVE FOR LATER</button>
                    <button className='text-[1.1rem] font-semibold hover:text-blue-800'>REMOVE</button>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo