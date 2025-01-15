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
        <div className='mt-2 bg-white pt-3 w-[100%] h-[27rem] px-[3%]'>
            <h1 className='text-2xl md:text-4xl ps-4 md:ps-0 md:text-center '>𝐓𝐫𝐞𝐧𝐝𝐢𝐧𝐠 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</h1>
            <div className='mt-1  flex items-center overflow-y-hidden overflow-x-scroll  w-[100%] h-[80%] cards-container'>
                {
                    products?.map((product, index) => (
                        <div>
                            <Product key={index} pId={product?._id} image={product?.thumbnail} title={product?.name} price={product?.price} offers={"20% off"} weight={product?.weight} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingProducts