import React from 'react'
import Intro from './Intro'
import TrendingProducts from './TrendingProducts'
import BestProducts from './BestProducts'
import GetDeal from './GetDeal'
import Blogs from './Blogs'

function HomePage() {
  return (
    <>
      <Intro/>
      <TrendingProducts/>
      <BestProducts />
      <GetDeal/>
      <Blogs/>
    </>
  )
}

export default HomePage