import React from 'react'
import CategoryCard from './CategoryCard'

function SelectCategory() {
    return (
        <div className='w-[100%] flex overflow-hidden flex-wrap flex-center items-center px-3'>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
    )
}

export default SelectCategory