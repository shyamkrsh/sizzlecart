import React, { useState } from 'react'
import ProductInfo from './ProductInfo'
import axios from 'axios'

function CartProductInfo() {

    const [products, setProducts] = useState(null);
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify([]));
    }
    let item = JSON.parse(localStorage.getItem('products'));
    useState(() => {
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/products/get-carts`, {
            data : item
        }).then((res) => {
            setProducts(res.data.data);
        })
    }, [])

    return (
        <div className='w-[100%] md:w-[55%]  border text-black'>
            <div className="location w-[100%] h-[4rem] bg-white hidden md:flex justify-between px-5 md:px-10 items-center shadow-sm">
                <p>From Saved Addresses</p>
                <button className='text-blue-700 p-1 md:py-2 md:px-3 font-semibold border rounded-md'>Delivery Pin Code</button>
            </div>

            <div className='pt-3'>
                {
                    products?.map((item, index) => (
                        
                        <ProductInfo key={index} productId={item?._id} image={item?.thumbnail} title={item?.name} price={item?.price} offers={item?.discount} deliveryBy={"Today"} />
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