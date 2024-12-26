import React from 'react'
import { IoSearch } from "react-icons/io5";
import SelectCategory from './SelectCategory';

function Intro() {




    return (
        <div className='relative w-[100%] bg-slate-200 border'>
            <div className=''>
                <div className='mt-5 md:hidden w-[90%] mx-auto'>
                    <div className='w-[100%] h-[2.5rem] flex items-center justify-center bg-white rounded-md ps-2'>
                        <IoSearch className='text-2xl text-slate-700' />
                        <input type="text"
                            placeholder='search products, spices'
                            className='w-[100%] h-[2.5rem] px-2 rounded-md outline-none text-slate-600 font-semibold'
                        />
                    </div>
                </div>
                <div className='mt-2 hidden md:block'>
                    <SelectCategory/>
                </div>
            </div>
        </div>
    )
}

export default Intro