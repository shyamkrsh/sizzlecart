import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import Badge from '@mui/material/Badge';
import { LiaUserCircle } from "react-icons/lia";

function Searchbar({ setValue, value }) {

    const navigate = useNavigate();
    const [productsCount, setProductsCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const products = JSON.parse(localStorage.getItem('products'));
            setProductsCount(products?.length);
        })
    }, []);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className='flex items-center justify-between gap-5 w-full fixed top-0 left-0 z-50 bg-white h-[3.8rem] px-5' >
            <FaArrowLeftLong className='text-xl text-slate-900 cursor-pointer' onClick={() => navigate("/")} />
            <input type="text" placeholder='Search for products...' className='bg-transparent text-slate-800 text-sm outline-none h-full w-[70%]' value={value} onChange={handleChange} style={{ fontSize: '1.2rem' }} />
            <div className='flex gap-5 items-center'>
                <Badge badgeContent={productsCount} color="error" onClick={() => navigate("/cartPage")}>
                    <BsCart3 className='text-2xl text-slate-600' />
                </Badge>
                <LiaUserCircle className='text-3xl text-slate-600 cursor-pointer' onClick={() => navigate("/user-profile")} />
            </div>
        </div>
    )
}

export default Searchbar