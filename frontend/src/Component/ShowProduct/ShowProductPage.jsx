import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function ShowProductPage() {
  const { id } = useParams()
  useEffect(() => {

    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err);
    })

    console.log(id)
  })

  return (
    <div>ShowProductPage</div>
  )
}

export default ShowProductPage