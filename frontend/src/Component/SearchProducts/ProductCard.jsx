import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function ProductCard({image, title, price, offers, weight, deliveryBy}) {

    const navigate = useNavigate();
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify([]));
    }
    const addItem = (newImage, newTitle, newPrice, newOffers, newDeliveryBy, newWeight) => {
        let prevItem = JSON.parse(localStorage.getItem('products')) || [];
        let item = {
            image: newImage,
            title: newTitle,
            price: newPrice,
            offers: newOffers,
            deliveryBy: newDeliveryBy,
            weight: newWeight,
        };
        prevItem.push(item);
        localStorage.setItem('products', JSON.stringify(prevItem));
    }
    return (
            <div className='w-[100%] h-[20rem] cursor-pointer text-center m-2 overflow-hidden' style={{boxShadow: '-1px -1px 3px gray', borderRadius: '5px'}} onClick={() => navigate('/show-products')}>
                <div className='w-100 h-[60%]'>
                    <img src={image} alt="" className='w-[100%] h-[100%]' />
                </div>
                <div className='w-100 h-[40%] flex flex-col gap-2 relative'>
                    <h2 className='mt-1 font-semibold' style={{fontSize: '15px'}}>{title}</h2>
                    <p className='text-red-500 font-semibold'>₹ {price} / {weight}</p>
                    <button className='flex justify-center items-center gap-3 bg-black text-white w-[90%] mx-auto p-2 rounded-md' onClick={(e) => { e.stopPropagation(), addItem(image, title, price, offers, deliveryBy, weight)}}><FaShoppingCart /> ADD TO CART</button>
                </div>
            </div>
    )
}

export default ProductCard