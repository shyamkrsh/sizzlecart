import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

function ShowProductPage() {


  const { id } = useParams()

  useEffect(() => {
    console.log(id)
  })

  return (
    <div>ShowProductPage</div>
  )
}

export default ShowProductPage