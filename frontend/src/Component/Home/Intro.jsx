import React from 'react'
import { IoSearch } from "react-icons/io5";
import SelectCategory from './SelectCategory';
import { FaLocationDot } from "react-icons/fa6";

function Intro() {




    return (
        <>
            <div className='relative w-[100%] bg-slate-100 border'>
                <div>
                    <div className='w-[100%] h-[25rem]'>
                        <img src="https://i.ibb.co/8sJMHmb/introbg.jpg" alt="" className='w-[100%] h-[100%]' />
                    </div>
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center w-[90%] md:w-[50%] mx-auto'>
                        <div className='flex items-center justify-center gap-2 text-2xl text-white font-semibold'>
                            <p className='md:text-4xl font-bold'>Get Healthy & Pure massala in Patna</p>
                        </div>
                        <div className='mt-1 md:hidden w-[90%] mx-auto'>
                            <div className='w-[100%] h-[3rem] flex items-center justify-center bg-white rounded-md ps-2'>
                                <IoSearch className='text-2xl text-slate-700 ' />
                                <input type="text"
                                    placeholder='search products, spices'
                                    className='w-[100%] h-[2.5rem] px-2 rounded-md outline-none text-slate-600 font-semibold'
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-[100%] flex items-center justify-center absolute top-[23rem]'>
                <SelectCategory />
            </div>
        </>
    )
}

export default Intro