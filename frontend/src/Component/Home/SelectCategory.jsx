import React from 'react'
import CategoryCard from './CategoryCard'

function SelectCategory() {
    return (
        <div className='grid grid-cols-auto-fit md:grid-cols-auto-fill bg-slate-100 w-[90%] rounded-md justify-center gap-4'
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
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