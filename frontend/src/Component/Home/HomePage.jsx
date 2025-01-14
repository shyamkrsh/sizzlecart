import React from 'react'
import Intro from './Intro'
import TrendingProducts from './TrendingProducts'
import BestProducts from './BestProducts'
import GetDeal from './GetDeal'
import Blogs from './Blogs'
import Search from './Search'
import Location from './Location'

function HomePage() {
  return (
    <>
      <div className=''>
        <Location/>
        <Search />
        <Intro />
        <TrendingProducts />
        <BestProducts />
        <GetDeal />
        <Blogs />
      </div>
    </>
  )
}

export default HomePage