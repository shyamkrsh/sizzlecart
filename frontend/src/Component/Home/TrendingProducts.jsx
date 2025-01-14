import React, { useEffect } from 'react'
import axios from 'axios'
import Product from './Product';

function TrendingProducts() {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/trending`).then((res) => {
            setProducts(res?.data);
        })
    }, [])

    return (
        <div className='mt-1 bg-white py-5'>
            <h1 className='text-2xl md:text-4xl ps-4 md:ps-0 md:text-center'>𝐓𝐫𝐞𝐧𝐝𝐢𝐧𝐠 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</h1>
            <div className='flex overflow-x-scroll overflow-y-hidden'>
                {
                    products?.map((product, index) => (
                            <Product key={index} image={product?.thumbnail} title={product?.name} price={product?.price} offers={"20% off"} weight={product?.weight} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingProducts