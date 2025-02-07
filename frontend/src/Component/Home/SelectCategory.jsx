import React from 'react'
import CategoryCard from './CategoryCard'

function SelectCategory() {
    return (
        <div className='category w-[100%] flex justify-start gap-1 ps-3 md:ps-5 overflow-x-scroll overflow-y-hidden' style={{scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <CategoryCard image={"https://i.ibb.co/k63DrGD6/chili.png"} title={"Chili"} link={"/"}/>
            <CategoryCard image={"https://i.ibb.co/j9RxZsw2/turmeric.png"} title={"Turmeric"} link={"/"}/>
            <CategoryCard image={"https://i.ibb.co/0R5Fdq5b/garlic.png"} title={"Garlic"} link={"/"}/>
            <CategoryCard image={"https://i.ibb.co/HD3KRJ3v/cardamom.png"} title={"Cardamom"} link={"/"}/>
            <CategoryCard image={"https://i.ibb.co/rfxvSkyz/coriander.png"} title={"Coriander"} link={"/"}/>
            <CategoryCard image={"https://i.ibb.co/XZLrNHTr/cloves.png"} title={"Cloves"} link={"/"}/>
        </div>
    )
}

export default SelectCategory