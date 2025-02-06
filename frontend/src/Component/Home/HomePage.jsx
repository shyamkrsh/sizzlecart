import React from 'react'
import Intro from './Intro'
import TrendingProducts from './TrendingProducts'
import BestProducts from './BestProducts'
import GetDeal from './GetDeal'
import Blogs from './Blogs'
import Search from './Search'
import Footer from '../Footer.jsx'
import SelectCategory from './SelectCategory'

function HomePage() {
  return (
    <>
      <div className='bg-cyan-100'>
        <Search />
        <SelectCategory />
        <Intro />
        <TrendingProducts />
        <BestProducts />
        <GetDeal />
        <Blogs />
        <Footer />
      </div>
    </>
  )
}

export default HomePage