import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReviewCard from './ReviewCard.jsx'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Badge from '@mui/material/Badge';

function ShowProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const [displayImage, setDisplayImage] = useState(product?.thumbnail);
  const [showIndex, setShowIndex] = useState(0);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const products = JSON.parse(localStorage.getItem('products'));
      setProductsCount(products?.length);
    })
  }, []);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`).then((res) => {
      setProduct(res?.data?.data);
      setDisplayImage(res?.data?.data?.images[0])
      console.log(res.data.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  let style = `flex flex-col items-center cursor-pointer shadow-lg p-2 bg-white rounded-lg w-[4rem] h-[4rem]`

  return (
    <div className='pb-20'>
      <div className='flex items-center justify-between gap-5 w-full fixed top-0 left-0 z-50 bg-slate-50 h-14 px-5 shadow-md'>
        <FaArrowLeftLong className='text-2xl text-slate-600 cursor-pointer' onClick={() => navigate("/")} />
        <div className='flex gap-5 items-center'>
          <CiSearch className='text-2xl text-slate-600 cursor-pointer' onClick={() => navigate("/search-products")} />
          <Badge badgeContent={productsCount} color="error"  onClick={() => navigate("/cartPage")}>
            <BsCart3 className='text-2xl text-slate-600' />
          </Badge>
          <FaRegUserCircle className='text-2xl text-slate-600 cursor-pointer' onClick={() => navigate("/profilePage")} />
        </div>
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
        <img src={displayImage} className='w-[95%] h-[13rem] rounded-md' />
      </div>

      <div className='w-[100%] flex items-center justify-center gap-3'>
        <div className={showIndex == 0 ? `${style} border-2 border-blue-300` : `${style}`} onClick={() => { setShowIndex(0), setDisplayImage(product?.images[1]) }} >
          <img src="https://i.ibb.co/k6dZwJr/img1.jpg" alt="" className='w-[3rem] h-[3rem]' />
        </div>
        <div className={showIndex == 1 ? `${style} border-2 border-blue-300` : `${style}`} onClick={() => { setShowIndex(1), setDisplayImage(product?.images[0]) }}>
          <img src="https://i.ibb.co/k6dZwJr/img1.jpg" alt="" className='w-[3rem] h-[3rem]' />
        </div>
        <div className={showIndex == 2 ? `${style} border-2 border-blue-300` : `${style}`} onClick={() => { setShowIndex(2), setDisplayImage(product?.images[1]) }}>
          <img src="https://i.ibb.co/k6dZwJr/img1.jpg" alt="" className='w-[3rem] h-[3rem]' />
        </div>
        <div className={showIndex == 3 ? `${style} border-2 border-blue-300` : `${style}`} onClick={() => { setShowIndex(3), setDisplayImage(product?.images[0]) }}>
          <img src="https://i.ibb.co/k6dZwJr/img1.jpg" alt="" className='w-[3rem] h-[3rem]' />
        </div>
      </div>

      <div>
        <div className='w-100 h-[40%] flex flex-col gap-2 text-left ps-3 mt-5'>
          <h2 className='mt-1 font-semibold' style={{ fontSize: '1.1rem' }}>{product?.name}</h2>
          <p className='text-slate-500 text-sm -mt-2'>Pure quality guranteed</p>
          <p className='text-slate-900 font-semibold -mt-2' style={{ fontSize: '1.2rem' }}>₹ {product?.price} / {product?.weight}</p>
          <p className='text-green-700 font-semibold -mt-2' style={{ fontSize: '1.1rem' }}>{product?.offers}</p>
          <p className='text-green-700 text-sm font-semibold -mt-2 flex items-center gap-0.5'>
            {Array.from({ length: product?.rating }, (_, index) => (
              <BsFillStarFill key={index} />
            ))
            }
          </p>
          <p className='text-slate-900 text-sm -mt-1'>{product?.description}</p>
        </div>
      </div>

      <div className='review px-[5%] mt-10'>
        <h1 className='text-xl font-semibold py-3'>Reviews & Ratings</h1>
        <div>
          <ReviewCard image={"https://i.ibb.co/Zm6qmB9/user.png"} username={"shashisharma"} ratings={4} content={"This very tasty spice i love it."} />
          <ReviewCard image={"https://i.ibb.co/Zm6qmB9/user.png"} username={"shashisharma"} ratings={4} content={"This very tasty spice i love it."} />
        </div>
      </div>
    </div >
  )
}

export default ShowProductPage