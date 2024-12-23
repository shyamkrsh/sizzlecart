import React from 'react'

function GetDeal() {
    return (
        <div className='bg-slate-100 relative'>
            <div className='h-[30rem] w-[100%]'>
                <img src="src/assets/midbg.jpg" alt="" className='h-[100%] w-[100%]' />
            </div>
            <div className='h-[30rem] w-[100%] bg-black opacity-60 absolute top-0 flex items-center justify-center'>
            </div>
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-between'>
                <h1 className='text-yellow-500 text-2xl md:text-4xl font-bold text-center'>Get Your Monthly Spices with us and save  upto ₹ 1000 on order upto ₹ 15000</h1>
                <p className='text-white mt-5 text-center'>coupon will be applicable sitewide</p>
                <button className='bg-yellow-500 text-black rounded-full border border-red-800 mt-5 px-5 py-3 font-semibold'>Get Deal Now</button>
            </div>
        </div>
    )
}

export default GetDeal