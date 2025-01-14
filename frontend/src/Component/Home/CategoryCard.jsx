import React from 'react'

function CategoryCard() {
  return (
    <div className='flex flex-col items-center cursor-pointer shadow-lg p-2 bg-white rounded-lg m-3 w-[5rem] h-[5rem] mx-auto'>
        <img src="https://i.ibb.co/k6dZwJr/img1.jpg" alt="" className='w-[4rem] h-[3rem]' />
        <p className=' text-slate-800 font-semibold text-[10px] md:text-[15px]'>Haldi</p>
    </div>
  )
}

export default CategoryCard