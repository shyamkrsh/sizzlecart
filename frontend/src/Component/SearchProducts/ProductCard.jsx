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
            <div className='w-[100%] h-[23rem] cursor-pointer text-center overflow-hidden' style={{boxShadow: '-1px -1px 3px gray', borderRadius: '5px'}} onClick={() => navigate('/show-products')}>
                <div className='w-100 h-[55%]'>
                    <img src={image} alt="" className='w-[100%] h-[100%]' />
                </div>
                <div className='w-100 h-[40%] flex flex-col gap-2 text-left ps-3'>
                    <h2 className='mt-1 font-semibold' style={{fontSize: '1.1rem'}}>{title}</h2>
                    <p className='text-slate-500 text-sm -mt-2'>Pure quality guranteed</p>
                    <p className='text-slate-900 font-semibold -mt-2' style={{fontSize: '1.2rem'}}>₹ {price} / {weight}</p>
                    <p className='text-green-700 font-semibold -mt-2' style={{fontSize: '1.1rem'}}>{offers}</p>
                    <p className='text-green-700 text-sm font-semibold -mt-2'>⭐⭐⭐⭐</p>
                    <p className='text-slate-900 text-sm -mt-1'>{deliveryBy}</p>
                </div>
            </div>
    )
}

export default ProductCard