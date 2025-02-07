import React from 'react';
import Product from '../Home/Product';


function WishlistPage() {
    return (
        <div className='mt-5' style={{minHeight: 'calc(100vh - 3.8rem)'}}>
            <h1 className='text-3xl md:text-4xl text-center text-black'>𝐌𝐲 𝐖𝐢𝐬𝐡𝐥𝐢𝐬𝐭𝐬𝐭</h1>
            <p className='text-black text-center'>This is demo data...</p>
            <div className='card-container w-[100%] px-[3%] md:px-[10%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 mt-12 place-items-center'>
                <Product image={"https://i.ibb.co/k6dZwJr/img1.jpg"} title={"Red Chili Powder"} price={200} offers={"20% off"} weight={1} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                <Product image={"https://i.ibb.co/vzGRT5b/img2.jpg"} title={"Red Chili Powder"} price={200} offers={"20% off"} weight={1} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                <Product image={"https://i.ibb.co/k6dZwJr/img1.jpg"} title={"Red Chili Powder"} price={200} offers={"20% off"} weight={1} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
                <Product image={"https://i.ibb.co/vzGRT5b/img2.jpg"} title={"Red Chili Powder"} price={200} offers={"20% off"} weight={1} deliveryBy={"Delivery by Sat Dec 28 | ₹40Free"} />
            </div>
        </div>
    )
}

export default WishlistPage