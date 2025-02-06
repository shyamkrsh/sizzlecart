import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function ProductInfo({productId, image, title, price, offers, deliveryBy }) {

    const removeItem = (pId) => {
        let prevItem = JSON.parse(localStorage.getItem('products')) || [];
        let items = prevItem.filter(item => item.product_id != pId);
        localStorage.setItem('products', JSON.stringify(items));
        location.href = "/cartPage"
    }

    return (
        <div className='bg-white flex flex-col  my-2 px-10 py-2 text-black'>
            <div className='flex justify-between '>
                <div className='w-[7rem] h-[7rem] md:w-[8rem] md:h-[8rem]'>
                    <img src={image} alt="" className='w-[100%] h-[100%]' />
                </div>
                <div>
                    <h2 className='text-xl'>{title}</h2>
                    <p className='mb-5'>Weight : 5 Kg.</p>
                    <p className='flex'>
                        <p className='font-semibold'>₹ {price} &nbsp;&nbsp;&nbsp; </p>
                        <p className='text-green-700 text-xl font-semibold'>{offers + " % OFF"} </p>
                    </p>
                </div>
                <div className='hidden md:block'>{deliveryBy}</div>
            </div>
            <div className='flex justify-start gap-12 items-center'>
                <div className='flex items-center py-5 gap-3'>
                    <div>
                        <CiCircleMinus className='text-3xl font-semibold text-slate-500 cursor-pointer' />
                    </div>
                    <div>
                        <input type="number" value={1} name='count' className='border w-[3rem] h-[2rem] font-semibold  text-center outline-none bg-white' />
                    </div>
                    <div>
                        <CiCirclePlus className='text-3xl font-semibold text-slate-500 cursor-pointer' />
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <button className='text-x font-semibold hover:text-blue-800' onClick={() => removeItem(productId)}>REMOVE</button>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo