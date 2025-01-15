import React, { useEffect } from 'react'
import Product from './Product';
import axios from 'axios';

function BestProducts() {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/best`).then((res) => {
            setProducts(res?.data);
        })
    }, [])

    return (
        <div className='mt-2 bg-white w-[100%] h-[30rem] px-[3%]'>
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

export default BestProducts