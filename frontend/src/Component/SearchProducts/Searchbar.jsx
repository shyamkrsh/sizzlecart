import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Searchbar({setValue, value}) {
    
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className='flex items-center justify-start gap-5 w-full fixed top-0 left-0 z-50 bg-slate-50 h-14 px-5 shadow-md'>
            <FaArrowLeftLong className='text-2xl text-slate-600 cursor-pointer' onClick={() => navigate("/")}/>
            <input type="text" placeholder='Search for products...' className='bg-transparent text-slate-800 outline-none h-full flex-1 ' value={value} onChange={handleChange} style={{fontSize: '1.2rem'}} />
        </div>
    )
}

export default Searchbar