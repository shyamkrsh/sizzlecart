import React, { useEffect } from 'react'
import axios from 'axios'
import Product from '../Home/Product'
import ProductCard from './ProductCard';

function ProductContainer({ value , setSearch}) {

    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/all`).then((res) => {
            setSearch(false);
            setProducts(res.data);
        })
    }, [])


    return (
        <div className='w-{100%} py-10 bg-cyan-100 ' style={{ minHeight: 'calc(100vh - 3.8rem)' }}>
            <div className='card-container w-[100%] px-[3%] md:px-[10%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 mt-12 place-items-center'>
                {
                    products?.map((product, index) => (
                        value === '' ? <ProductCard key={index} pId={product?._id} image={product?.thumbnail} title={product?.name} price={product?.price} offers={"20% off"} weight={product?.weight} deliveryBy={"Delivery by Sat Dec 28"} />
                            : product?.name?.toLowerCase().split(" ").some((word) => word?.includes(value?.toLowerCase().replaceAll(" ", "")))
                                ? <ProductCard key={index} pId={product?._id} image={product?.thumbnail} title={product?.name} price={product?.price} offers={"20% off"} weight={product?.weight} deliveryBy={"Delivery by Sat Dec 28"} />
                                : ""
                    ))
                }
            </div>
        </div>
    )
}

export default ProductContainer