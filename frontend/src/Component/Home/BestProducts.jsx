import React from 'react'
import Product from './Product';

function BestProducts() {

    return (
        <div className='mt-12 bg-white py-5'>
            <h1 className='text-3xl md:text-4xl text-center'>𝐎𝐮𝐫 𝐁𝐞𝐬𝐭 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</h1>
            <div className='card-container px-[10%] grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12 place-content-center'>
                <Product image={"https://i.ibb.co/k6dZwJr/img1.jpg"} title={"Red Chili Powder"} price={200} offers={"20% off"} weight={1} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                <Product image={"https://i.ibb.co/vzGRT5b/img2.jpg"} title={"Red Chili Powder"} price={200} offers={"20% off"} weight={1} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                <Product image={"https://i.ibb.co/k6dZwJr/img1.jpg"} title={"Red Chili Powder"} price={200} offers={"20% off"} weight={1} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                <Product image={"https://i.ibb.co/vzGRT5b/img2.jpg"} title={"Red Chili Powder"} price={200} offers={"20% off"} weight={1} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
            </div>
        </div>
    )
}

export default BestProducts