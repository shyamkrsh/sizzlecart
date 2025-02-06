import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Product({ productId, image, title, price, offers, weight, deliveryBy }) {
    console.log(productId)
    const navigate = useNavigate();
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify([]));
    }
    const addItem = (pId) => {
        let prevItem = JSON.parse(localStorage.getItem('products')) || [];
        let item = {
            product_id: productId,
        };
        prevItem.push(item);
        localStorage.setItem('products', JSON.stringify(prevItem));
    }
    return (
        <div className='w-[10rem] h-[15rem] cursor-pointer text-center m-1 overflow-hidden rounded-md shadow-lg bg-white' onClick={() => navigate(`/show-product/${productId}`)}>
            <div className='w-100 h-[60%]'>
                <img src={image} alt="" className='w-[100%] h-[100%]' />
            </div>
            <div className='w-100 h-[40%] flex flex-col'>
                <p className='mt-1 font-semibold text-black '>{title}</p>
                <p className='text-red-500 font-semibold'>₹ {price} / {weight}</p>
                <button className='flex justify-center items-center gap-3 bg-black text-white w-[90%] mx-auto px-2 py-1 rounded-md text-sm' onClick={(e) => { e.stopPropagation(), addItem(image, title, price, offers, deliveryBy, weight) }}><FaShoppingCart /> ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product