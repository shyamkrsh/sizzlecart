import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";

function ProductCard({ pId, image, title, price, offers, weight, deliveryBy }) {

    const navigate = useNavigate();
 
    return (
        <div className='w-[100%] h-[22rem] cursor-pointer text-center overflow-hidden bg-white rounded-md shadow-md' onClick={() => navigate(`/show-product/${pId}`)}>
            <div className='w-100 h-[55%]'>
                <img src={image} alt="" className='w-[100%] h-[100%]' />
            </div>
            <div className='w-100 h-[40%] flex flex-col gap-2 text-left ps-3'>
                <h2 className='mt-1 font-semibold'>{title}</h2>
                <p className='text-slate-500 text-sm -mt-2'>Pure quality guranteed</p>
                <p className='text-slate-900 -mt-2' style={{ fontSize: '1.2rem' }}> <span className='text-green-700 font-semibold text-[1rem]'>{offers}</span> &nbsp;&nbsp;  <span className='text-xl font-semibold text-slate-800'>₹</span> {price}/<span className='text-sm'>{weight}</span></p>
                <p className='text-green-700 text-sm font-semibold -mt-1 flex items-center'>
                    {Array.from({ length: 5 }, (_, index) => (
                        <BsFillStarFill key={index} />
                    ))
                    }
                </p>
                <p className='text-slate-900 text-sm -mt-1'>{deliveryBy}</p>
            </div>
        </div>
    )
}

export default ProductCard