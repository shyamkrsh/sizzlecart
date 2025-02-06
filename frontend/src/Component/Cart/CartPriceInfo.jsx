import React, { useState } from 'react'
import axios from 'axios'

function CartPriceInfo() {

  const [products, setProducts] = useState(null);
  let totalPrice = 0;
  products?.forEach((item, index) => {
    totalPrice += item?.price;
  })

  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify([]));
  }
  let item = JSON.parse(localStorage.getItem('products'));
  useState(() => {
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/products/get-carts`, {
      data: item
    }).then((res) => {
      setProducts(res.data.data);
    })
  }, [])


  return (
    <div  style={{ minHeight: 'calc(100vh - 3.8rem)' }}>
      <div className={products?.length == 0 ? "block" : "hidden"}>
        <div className='w-[100vw] h-[20rem] grid place-content-center'>
          <h2 className='text-center font-semibold text-black'>Not Item Available</h2>
        </div>
      </div>
      <div className={products?.length == 0 ? "hidden" : "block"}>
        <div className='w-[100%] md:w-[100%] h-[22rem] bg-white border-slate-800 text-black' >
          <div className='w-[100%] p-3 border-b-2 border-gray-400'>
            <h2 className='text-slate-500 font-semibold'>PRICE DETAILS</h2>
          </div>
          <div>
            <p className='flex justify-between px-5 py-2'>
              <p className=' text-slate-600' style={{ fontWeight: '600', fontSize: '1rem' }}>Price (2 items)</p>
              <p className='  text-slate-600' style={{ fontWeight: '600', fontSize: '1rem' }}>₹ {totalPrice}</p>
            </p>
            <p className='flex justify-between px-5 py-2'>
              <p className=' text-slate-600' style={{ fontWeight: '600', fontSize: '1rem' }}>Discount</p>
              <p className=' text-green-600' style={{ fontWeight: '600', fontSize: '1rem' }}> - ₹ {totalPrice * 5 / 100}</p>
            </p>
            <p className='flex justify-between px-5 py-2'>
              <p className=' text-slate-600' style={{ fontWeight: '600', fontSize: '1rem' }}>Deliver Charges</p>
              <p className=' text-green-600' style={{ fontWeight: '600', fontSize: '1rem' }}> Free</p>
            </p>
            <p className='flex justify-between px-5 py-2'>
              <p className=' text-slate-600' style={{ fontWeight: '600', fontSize: '1rem' }}>Secured Packaging Fee</p>
              <p className=' text-green-600' style={{ fontWeight: '600', fontSize: '1rem' }}>+ ₹ 10</p>
            </p>
          </div>
          <div className='flex items-center justify-between px-5 py-3 mt-5 ' style={{ borderTop: '1px dashed #d3dbd5', borderBottom: '1px dashed #d3dbd5' }}>
            <h2 className='text-xl font-semibold'>Total Amount</h2>
            <h2 className='text-xl font-semibold'>₹ {products?.length == 0 ? 0 : ((totalPrice - totalPrice * 5 / 100) + 10)}</h2>
          </div>
          <div>
            <p className='text-green-600 font-semibold px-5 py-5'>You will save ₹ {products?.length == 0 ? 0 : ((totalPrice * 5 / 100) - 10)} on this order</p>
          </div>
          <div className='w-[100%] h-[4rem] px-5 bg-white flex justify-between items-center md:hidden'>
            <h2 className='text-2xl font-semibold'>₹ {products?.length == 0 ? 0 : ((totalPrice - totalPrice * 5 / 100) + 10)}</h2>
            <button className='text-white px-12 py-3 font-semibold' style={{ backgroundColor: '#fb641b' }}>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPriceInfo