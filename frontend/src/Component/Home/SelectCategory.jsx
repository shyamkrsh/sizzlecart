import React from 'react'
import CategoryCard from './CategoryCard'

function SelectCategory() {
  return (
    <div className='flex justify-between scrollbar-hide -z-20 mt-1 bg-white py-2 px-10 '>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
    </div>
  )
}

export default SelectCategory