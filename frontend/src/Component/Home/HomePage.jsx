import React from 'react'
import Intro from './Intro'
import TrendingProducts from './TrendingProducts'
import BestProducts from './BestProducts'
import GetDeal from './GetDeal'
import Blogs from './Blogs'
import Demo from './Demo'

function HomePage() {
  return (
    <>
      <div className='bg-slate-100'>
        <Intro />
        <Demo/>
        <TrendingProducts />
        <BestProducts />
        <GetDeal />
        <Blogs />
      </div>
    </>
  )
}

export default HomePage