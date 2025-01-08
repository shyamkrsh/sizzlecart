import React, { useEffect } from 'react'
import axios from 'axios'
import Product  from '../Home/Product'

function ProductContainer({ value }) {

    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/all`).then((res) => {
            setProducts(res.data);
            console.log(res.data)
        })
    }, [])


    return (
        <div className='w-full py-10'>
            <div className='card-container px-[5%] md:px-[10%] grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12 place-items-center'>
                {
                    products?.map((product, index) => (
                        value === '' ? <Product key={index} image={product?.thumbnail} title={product?.name} price={product?.price} offers={"20% off"} weight={product?.weight} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                        : product?.name?.toLowerCase().split(" ").some((word) => word?.includes(value?.toLowerCase().replaceAll(" ", "")))
                        ? <Product key={index} image={product?.thumbnail} title={product?.name} price={product?.price} offers={"20% off"} weight={product?.weight} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                        : ""
                        
                    ))
                }
            </div>
        </div>
    )
}

export default ProductContainer