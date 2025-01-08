import React, { useEffect } from 'react'
import axios from 'axios'
import Product from './Product';

function TrendingProducts() {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/trending`).then((res) => {
            setProducts(res.data);
        })
    }, [])
    
    return (
        <div className='mt-16 border bg-white py-5'>
            <h1 className='text-3xl md:text-4xl text-center'>𝐓𝐫𝐞𝐧𝐝𝐢𝐧𝐠 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</h1>
            <div className='card-container px-[5%] md:px-[10%] grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12 place-items-center'>
                {
                    products?.map((product, index) => {
                        return <Product key={index} image={product?.thumbnail} title={product?.name} price={product?.price} offers={"20% off"} weight={product?.weight} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"}/>
                    })
                }
            </div>
        </div>
    )
}

export default TrendingProducts