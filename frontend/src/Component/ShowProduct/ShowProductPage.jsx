import React, { useEffect, useRef } from 'react'

function ShowProductPage() {

  const productId = useRef();

  useEffect(() => {
    console.log(productId)
  })

  return (
    <div>ShowProductPage</div>
  )
}

export default ShowProductPage