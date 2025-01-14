import React from 'react'

function CategoryCard() {
  return (
    <div className='flex flex-col items-center cursor-pointer shadow-md p-2 bg-white rounded-md m-3 w-[25%]'>
        <img src="https://i.ibb.co/k6dZwJr/img1.jpg" alt="" className='w-[90%] h-[90%]' />
        <p className=' text-slate-800 font-semibold text-[10px] md:text-[15px]'>Grocery</p>
    </div>
  )
}

export default CategoryCard