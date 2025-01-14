import React from 'react'
import { IoSearch } from "react-icons/io5";

function Search() {
    return (
        
            <div className='mt-1 md:hidden w-[100%] mx-auto sticky top-0 left-0 z-50 bg-slate-100 items-center pb-2'>
                <div className='w-[90%] h-[3rem] flex items-center justify-center bg-white rounded-md ps-2 border-2 mx-auto' onClick={() => navigate("/search-products")}>
                    <IoSearch className='text-2xl text-slate-700 ' />
                    <input type="text"
                        placeholder='search products, spices'
                        className='w-[100%] h-[2.5rem] px-2 rounded-md outline-none text-slate-600 font-semibold'
                    />
                </div>
            </div>
     
    )
}

export default Search