import React, { useEffect } from 'react'
import axios from 'axios'
import Product from './Product';

function TrendingProducts() {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/trending`, {
            withCredentials: true,
        }).then((res) => {
            setProducts(res?.data);
        })
    }, [])
    return (
        <div className='pt-1 w-[100%] h-[20rem] px-[3%] '>
            <h1 className='text-2xl md:text-4xl ps-4 md:ps-0 md:text-center font-semibold text-slate-900'>Trending Products</h1>
            <div className='mt-1  flex items-center overflow-y-hidden overflow-x-scroll  w-[100%] h-[16rem] cards-container md:justify-center' style={{scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {
                    products?.map((product, index) => (
                        <div>
                            <Product key={product?._id} productId={product?._id} image={product?.thumbnail} title={product?.name} price={product?.price} offers={"20% off"} weight={product?.weight} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingProducts