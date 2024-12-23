import React, { useState } from 'react'
import ProductInfo from './ProductInfo'

function CartProductInfo() {

    const [products, setProducts] = useState(null);

    useState(() => {
        let item = JSON.parse(localStorage.getItem('products'));
        setProducts(item);
    })


    return (
        <div className='w-[100%] md:w-[55%]  border '>
            <div className="location w-[100%] h-[4rem] bg-white hidden md:flex justify-between px-5 md:px-10 items-center shadow-sm">
                <p>From Saved Addresses</p>
                <button className='text-blue-700 p-1 md:py-2 md:px-3 font-semibold border rounded-md'>Delivery Pin Code</button>
            </div>
            
            <div className='pt-3'>
                {
                    products?.map((item, index) => (
                        <ProductInfo key={index} image={item.image} title={item.title} price={item.price} offers={item.offers} deliveryBy={item.deliveryBy} />
                    ))
                }

            </div>
            <div>
                <div className='w-[100%] h-[4rem] md:flex justify-between items-center px-10 bg-white mb-5 -mt-5 hidden '>
                    <h2 className='text-2xl font-semibold'>₹ 5099</h2>
                    <button className='text-white px-12 py-3 font-semibold' style={{ backgroundColor: '#fb641b' }}>PLACE ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default CartProductInfo