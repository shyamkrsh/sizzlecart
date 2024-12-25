import React from 'react';
import Product from '../Home/Product';


function WishlistPage() {
    return (
        <div className='mt-5'>
            <h1 className='text-3xl md:text-4xl text-center'>𝐌𝐲 𝐖𝐢𝐬𝐡𝐥𝐢𝐬𝐭𝐬𝐭</h1>
            <div className='card-container px-[5%] md:px-[10%] grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12 place-content-center'>
                <Product image={"https://i.ibb.co/k6dZwJr/img1.jpg"} title={"Red Chili Powder"} price={200} offers={"20% off"} weight={1} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                <Product image={"https://i.ibb.co/vzGRT5b/img2.jpg"} title={"Red Chili Powder"} price={200} offers={"20% off"} weight={1} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                <Product image={"https://i.ibb.co/k6dZwJr/img1.jpg"} title={"Red Chili Powder"} price={200} offers={"20% off"} weight={1} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                <Product image={"https://i.ibb.co/vzGRT5b/img2.jpg"} title={"Red Chili Powder"} price={200} offers={"20% off"} weight={1} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
            </div>
        </div>
    )
}

export default WishlistPage