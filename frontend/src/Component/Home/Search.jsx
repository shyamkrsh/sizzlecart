import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Search() {

    const navigate = useNavigate();

    return (
        
            <div className='w-[100%] md:w-[70%] mx-auto sticky top-0 left-0 z-10  items-center py-2'>
                <div className='w-[90%] h-[2.5rem] flex items-center justify-center bg-white rounded-lg ps-2  mx-auto shadow-md' onClick={() => navigate("/search-products")}>
                    <IoSearch className='text-xl text-slate-600 ' />
                    <input type="text"
                        placeholder='search products, spices'
                        className='w-[100%] h-[2.5rem] px-2 rounded-md outline-none bg-white'
                    />
                </div>
            </div>
     
    )
}

export default Search