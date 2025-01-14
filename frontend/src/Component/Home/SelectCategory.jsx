import React from 'react'
import CategoryCard from './CategoryCard'

function SelectCategory() {
    return (
        <div className='w-[100%] flex items-center justify-center px-[20%]'>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            
        </div>
    )
}

export default SelectCategory