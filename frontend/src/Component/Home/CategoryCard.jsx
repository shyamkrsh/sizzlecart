import React from 'react'

function CategoryCard({image, title, link}) {
  return (
    <div className='flex flex-col items-center cursor-pointer  p-2 rounded-lg '>
      <div className='w-[3.2rem] h-[3.2rem] rounded-full shadow-lg grid place-content-center'>
        <img src={image} alt="" className='w-[3rem] h-[3rem] ' />
      </div>
      <p className=' text-sm text-slate-800'>{title}</p>
    </div>
  )
}

export default CategoryCard