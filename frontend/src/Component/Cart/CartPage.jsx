import React, { useState } from 'react'
import CartProductInfo from './CartProductInfo'
import CartPriceInfo from './CartPriceInfo'
import axios from 'axios'

function CartPage() {

  const [products, setProducts] = useState(null);
  let totalPrice = 0;
  products?.forEach((item, index) => {
    totalPrice += item?.price;
  })

  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify([]));
  }
  let item = JSON.parse(localStorage.getItem('products'));
  useState(() => {
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/products/get-carts`, {
      data: item
    }).then((res) => {
      setProducts(res.data.data);
    })
  }, [])

  return (
    <div className='mt-0  md:pt-10  bg-cyan-100'>
      <div className={products?.length != 0 ? 'flex flex-col md:flex-row justify-around' : 'hidden'}>
        <CartProductInfo />
        <CartPriceInfo />
      </div>
    </div>
  )
}

export default CartPage