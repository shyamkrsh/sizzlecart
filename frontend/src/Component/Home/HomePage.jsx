import React from 'react'
import Intro from './Intro'
import TrendingProducts from './TrendingProducts'
import BestProducts from './BestProducts'
import GetDeal from './GetDeal'
import Blogs from './Blogs'

function HomePage() {
  return (
    <>
      <div className='bg-slate-100'>
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