import React from 'react'
import CartProductInfo from './CartProductInfo'
import CartPriceInfo from './CartPriceInfo'

function CartPage() {
  return (
      <div className='mt-0  md:pt-10 flex flex-col md:flex-row justify-around bg-cyan-100'>
        <CartProductInfo />
        <CartPriceInfo />
      </div>
  )
}

export default CartPage