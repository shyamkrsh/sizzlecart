import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Searchbar({setValue, value}) {
    
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className='flex items-center justify-start gap-5 w-full fixed top-0 left-0 z-50 bg-slate-100 h-[4rem] px-5'>
            <FaArrowLeftLong className='text-2xl text-slate-600 cursor-pointer' onClick={() => navigate("/")}/>
            <input type="text" placeholder='Search for products, brand, quality ' className='bg-transparent text-slate-400 outline-none h-full flex-1' value={value} onChange={handleChange} />
        </div>
    )
}

export default Searchbar