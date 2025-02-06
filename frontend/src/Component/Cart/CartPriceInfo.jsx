import React from 'react'

function CartPriceInfo() {
  return (
    <div className='w-[100%] md:w-[30%] h-[22rem] bg-white border-slate-800 text-black'>
      <div className='w-[100%] p-3 border-b-2 border-gray-400'>
        <h2 className='text-slate-500 font-semibold'>PRICE DETAILS</h2>
      </div>
      <div>
        <p className='flex justify-between px-5 py-2'>
          <p className=' text-slate-600' style={{ fontWeight: '600', fontSize: '1rem' }}>Price (2 items)</p>
          <p className='  text-slate-600' style={{ fontWeight: '600', fontSize: '1rem' }}>₹91,993</p>
        </p>
        <p className='flex justify-between px-5 py-2'>
          <p className=' text-slate-600' style={{ fontWeight: '600', fontSize: '1rem' }}>Discount</p>
          <p className=' text-green-600' style={{ fontWeight: '600', fontSize: '1rem' }}> - ₹37,993</p>
        </p>
        <p className='flex justify-between px-5 py-2'>
          <p className=' text-slate-600' style={{ fontWeight: '600', fontSize: '1rem' }}>Deliver Charges</p>
          <p className=' text-green-600' style={{ fontWeight: '600', fontSize: '1rem' }}> ₹280Free</p>
        </p>
        <p className='flex justify-between px-5 py-2'>
          <p className=' text-slate-600' style={{ fontWeight: '600', fontSize: '1rem' }}>Secured Packaging Fee</p>
          <p className=' text-green-600' style={{ fontWeight: '600', fontSize: '1rem' }}> ₹275</p>
        </p>
      </div>
      <div className='flex items-center justify-between px-5 py-3 mt-5 ' style={{ borderTop: '1px dashed #d3dbd5', borderBottom: '1px dashed #d3dbd5' }}>
        <h2 className='text-xl font-semibold'>Total Amount</h2>
        <h2 className='text-xl font-semibold'>₹54,756</h2>
      </div>
      <div>
        <p className='text-green-600 font-semibold px-5 py-5'>You will save ₹37,237 on this order</p>
      </div>
      <div className='w-[100%] h-[4rem] px-5 bg-white flex justify-between items-center md:hidden'>
        <h2 className='text-2xl font-semibold'>₹ 5099</h2>
        <button className='text-white px-12 py-3 font-semibold' style={{ backgroundColor: '#fb641b' }}>PLACE ORDER</button>
      </div>
    </div>
  )
}

export default CartPriceInfo