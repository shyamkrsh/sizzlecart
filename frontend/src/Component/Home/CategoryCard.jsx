import React from 'react'

function CategoryCard() {
  return (
    <div className='flex flex-col items-center cursor-pointer'>
        <img src="src/assets/img1.jpg" alt="" className='w-[4rem] h-[4rem]' />
        <p className=' text-slate-800 font-semibold' style={{fontSize: '1rem'}}>Grocery</p>
    </div>
  )
}

export default CategoryCard