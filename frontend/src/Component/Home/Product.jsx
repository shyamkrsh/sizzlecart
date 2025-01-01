import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Product({image, title, price, offers, weight, deliveryBy}) {

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
            <div className='card w-[20rem] h-[25rem] md:w-[15rem] md:h-[20rem] border p-2 text-center shadow-md bg-white cursor-pointer' onClick={() => navigate('/show-product')}>
                <div className='w-100 h-[60%]'>
                    <img src={image} alt="" className='w-[100%] h-[100%]' />
                </div>
                <div className='w-100 h-[40%] flex flex-col gap-2'>
                    <h2 className='mt-4 font-semibold text-xl'>{title}</h2>
                    <p className='text-red-500 font-semibold'>₹ {price} / {weight} Kg</p>
                    <button className='flex justify-center items-center gap-3 bg-black text-white w-[100%] p-2' onClick={() => addItem(image, title, price, offers, deliveryBy, weight)}><FaShoppingCart /> ADD TO CART</button>
                </div>
            </div>
    )
}

export default Product