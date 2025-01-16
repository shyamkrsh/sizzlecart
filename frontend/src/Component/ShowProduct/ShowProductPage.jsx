import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


function ShowProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`).then((res) => {
      setProduct(res?.data?.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className='pb-20'>
      <div className='flex items-center justify-start gap-5 w-full fixed top-0 left-0 z-50 bg-slate-50 h-14 px-5 shadow-md'>
        <FaArrowLeftLong className='text-2xl text-slate-600 cursor-pointer' onClick={() => navigate("/")} />
      </div>
      <div className='w-[100%] px-3 flex items-center justify-start gap-2 border-b-2 py-1'>
        <div className='w-[20%] h-[7vh]'>
          <img src={product?.thumbnail} className='w-[100%] h-[100%]' />
        </div>
        <div>
          <h1 className='text-xl text-slate-700 font-semibold'>{product?.name}</h1>
          <p className='text-slate-700' style={{ fontSize: '13px' }}>{product?.description?.slice(0, 35) + "..."}</p>
        </div>
      </div>
      <div className='w-[100%] h-[15rem] mt-1 grid place-content-center'>
        <img src={product?.thumbnail} className='w-[95%] h-[13rem] rounded-md' />
      </div>

      <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center cursor-pointer shadow-lg p-2 bg-white rounded-lg m-3 w-[5rem] h-[5rem] mx-auto border-2 border-blue-300' >
          <img src="https://i.ibb.co/k6dZwJr/img1.jpg" alt="" className='w-[4rem] h-[3rem]' />
        </div>
        <div className='flex flex-col items-center cursor-pointer shadow-lg p-2 bg-white rounded-lg m-3 w-[5rem] h-[5rem] mx-auto'>
          <img src="https://i.ibb.co/k6dZwJr/img1.jpg" alt="" className='w-[4rem] h-[3rem]' />
        </div>
        <div className='flex flex-col items-center cursor-pointer shadow-lg p-2 bg-white rounded-lg m-3 w-[5rem] h-[5rem] mx-auto'>
          <img src="https://i.ibb.co/k6dZwJr/img1.jpg" alt="" className='w-[4rem] h-[3rem]' />
        </div>
      </div>

      <div>
        <div className='w-100 h-[40%] flex flex-col gap-2 text-left ps-3 mt-5'>
          <h2 className='mt-1 font-semibold' style={{ fontSize: '1.1rem' }}>{product?.name}</h2>
          <p className='text-slate-500 text-sm -mt-2'>Pure quality guranteed</p>
          <p className='text-slate-900 font-semibold -mt-2' style={{ fontSize: '1.2rem' }}>₹ {product?.price} / {product?.weight}</p>
          <p className='text-green-700 font-semibold -mt-2' style={{ fontSize: '1.1rem' }}>{product?.offers}</p>
          <p className='text-green-700 text-sm font-semibold -mt-2'>⭐⭐⭐⭐</p>
          <p className='text-slate-900 text-sm -mt-1'>{product?.deliveryBy}</p>
        </div>
      </div>

      <div className='review px-[5%] mt-10'>
        <h1 className='text-xl font-semibold py-3'>Reviews & Ratings</h1>
        <div>
          <div className='flex items-center justify-start gap-2 w-[100%]'>
            <img src="https://i.ibb.co/Zm6qmB9/user.png" className='w-[10%]' />
            <h1 className='text-xl font-semibold'>sharmashyam717</h1>
          </div>
          <div className='mt-2'>
            <p>⭐⭐⭐⭐⭐</p>
            <p className='text-slate-700'>This very tasty spice i love it.</p>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-start gap-2 w-[100%]'>
            <img src="https://i.ibb.co/Zm6qmB9/user.png" className='w-[10%]' />
            <h1 className='text-xl font-semibold'>sharmashyam717</h1>
          </div>
          <div className='mt-2'>
            <p>⭐⭐⭐⭐⭐</p>
            <p className='text-slate-700'>This very tasty spice i love it.</p>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-start gap-2 w-[100%]'>
            <img src="https://i.ibb.co/Zm6qmB9/user.png" className='w-[10%]' />
            <h1 className='text-xl font-semibold'>sharmashyam717</h1>
          </div>
          <div className='mt-2'>
            <p>⭐⭐⭐⭐⭐</p>
            <p className='text-slate-700'>This very tasty spice i love it.</p>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-start gap-2 w-[100%]'>
            <img src="https://i.ibb.co/Zm6qmB9/user.png" className='w-[10%]' />
            <h1 className='text-xl font-semibold'>sharmashyam717</h1>
          </div>
          <div className='mt-2'>
            <p>⭐⭐⭐⭐⭐</p>
            <p className='text-slate-700'>This very tasty spice i love it.</p>
          </div>
        </div>
      </div>

    </div >
  )
}

export default ShowProductPage