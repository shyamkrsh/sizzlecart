import React from 'react'

function CategoryCard() {
  return (
    <div className='flex flex-col items-center cursor-pointer shadow-md p-5 bg-white rounded-md m-3'>
        <img src="https://i.ibb.co/k6dZwJr/img1.jpg" alt="" className='w-[5rem] h-[5rem]' />
        <p className=' text-slate-800 font-semibold' style={{fontSize: '1rem'}}>Grocery</p>
    </div>
  )
}

export default CategoryCard