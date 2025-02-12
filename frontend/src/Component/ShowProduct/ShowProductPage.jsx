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
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { PiShareFatThin } from "react-icons/pi";

function ShowProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const [displayImage, setDisplayImage] = useState(product?.thumbnail);
  const [showIndex, setShowIndex] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [wish, setWish] = useState(false);

  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify([]));
  }
  const addItem = (pId) => {
    let prevItem = JSON.parse(localStorage.getItem('products')) || [];
    let item = {
      product_id: pId,
    };
    prevItem.push(item);
    localStorage.setItem('products', JSON.stringify(prevItem));
  }

  useEffect(() => {
    setInterval(() => {
      const products = JSON.parse(localStorage.getItem('products'));
      setProductsCount(products?.length);
    })
  }, []);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`).then((res) => {
      setProduct(res?.data?.data);
      setDisplayImage(res?.data?.data?.thumbnail)
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  let style = `flex flex-col items-center cursor-pointer shadow-lg p-1 bg-white rounded-lg w-[3.5rem] h-[3.5rem]`

  return (
    <div className='pb-20 bg-cyan-100 text-black'>
      <div className='flex items-center justify-between gap-5 w-full fixed top-0 left-0 z-50 bg-white h-[3.8rem] px-5 shadow-md'>
        <FaArrowLeftLong className='text-xl text-slate-900 cursor-pointer' onClick={() => window.history.back()} />
        <div className='flex gap-5 items-center'>
          <CiSearch className='text-2xl text-slate-600 cursor-pointer' onClick={() => navigate("/search-products")} />
          <Badge badgeContent={productsCount} color="error" onClick={() => navigate("/cartPage")}>
            <BsCart3 className='text-2xl text-slate-600' />
          </Badge>
          <FaRegUserCircle className='text-2xl text-slate-600 cursor-pointer' onClick={() => navigate("/profilePage")} />
        </div>
      </div>

      <div className='w-[100%] px-3 flex items-center justify-start gap-2 py-1'>
        <div className='w-[3.5rem] h-[3.5rem]'>
          <img src={product?.thumbnail} className='w-[100%] h-[100%] rounded-md' />
        </div>
        <div>
          <h1 className='text-xl text-slate-700 font-semibold'>{product?.name}</h1>
          <p className='text-slate-700' style={{ fontSize: '13px' }}>{product?.description?.slice(0, 35) + "..."}</p>
        </div>
      </div>

      {/* Display product's image */}
      <div className='w-[100%] h-[15rem] mt-1 grid place-content-center'>
        <div className='w-[95vw] h-[15rem] rounded-md mx-auto relative'>
          <img src={displayImage} className='w-[100%] h-[15rem] rounded-md ' />
          <div className='absolute top-1 right-1' onClick={(e) => e.stopPropagation()}>
            {
              wish ? <div className='p-3  rounded-md cursor-pointer'> <GoHeart className='text-4xl ' onClick={() => setWish(!wish)} /></div>
                : <div className='p-3  rounded-md cursor-pointer'><GoHeartFill className='text-4xl text-red-600' onClick={() => setWish(!wish)} /></div>
            }

            <div className='p-3 rounded-md mt-1'>
              <PiShareFatThin className='text-4xl' />
            </div>
          </div>

        </div>
      </div>

      {/* Change images on click */}
      <div className='w-[100%] flex items-center justify-center gap-3 mt-1'>
        <div className={showIndex == 0 ? `${style} border-2 border-blue-300` : `${style}`} onClick={() => { setShowIndex(0), setDisplayImage(product?.images[0]) }} >
          <img src={"https://i.ibb.co/k6dZwJr/img1.jpg"} alt="" className='w-[3rem] h-[3rem] rounded-md' />
        </div>
        <div className={showIndex == 1 ? `${style} border-2 border-blue-300` : `${style}`} onClick={() => { setShowIndex(1), setDisplayImage(product?.images[1]) }}>
          <img src={"https://i.ibb.co/vzGRT5b/img2.jpg"} alt="" className='w-[3rem] h-[3rem] rounded-md' />
        </div>
        <div className={showIndex == 2 ? `${style} border-2 border-blue-300` : `${style}`} onClick={() => { setShowIndex(2), setDisplayImage(product?.images[0]) }}>
          <img src={"https://i.ibb.co/k6dZwJr/img1.jpg"} alt="" className='w-[3rem] h-[3rem] rounded-md' />
        </div>
        <div className={showIndex == 3 ? `${style} border-2 border-blue-300` : `${style}`} onClick={() => { setShowIndex(3), setDisplayImage(product?.images[1]) }}>
          <img src={"https://i.ibb.co/vzGRT5b/img2.jpg"} alt="" className='w-[3rem] h-[3rem] rounded-md' />
        </div>
      </div>

      {/* product details */}
      <div>
        <div className='w-100 h-[40%]  text-left ps-3 mt-5 relative'>
          <h2 className='mt-1 font-semibold' style={{ fontSize: '1.1rem' }}>{product?.name}</h2>
          <p className='text-sm  bg-green-600 text-white inline px-2 py-1 rounded-full ' style={{ fontWeight: '500' }}>Pure quality guranteed</p>
          <p className='text-slate-900 font-semibold mt-1' style={{ fontSize: '1.2rem' }}>₹ {product?.price} / {product?.weight}</p>
          <p className='text-green-700 font-semibold' style={{ fontSize: '1.1rem' }}>{product?.offers}</p>
          <p className='text-green-700 text-xl font-semibold flex items-center gap-0.5 mt-1'>
            {Array.from({ length: product?.rating }, (_, index) => (
              <BsFillStarFill key={index} />
            ))
            }
            &nbsp;&nbsp;&nbsp;
            <span className='text-xl '>
              {
                product?.rating
              }
            </span>
          </p>
          <p className='text-slate-900  mt-1'>{product?.description}</p>
          <p className='text-green-700 mt-1' style={{ fontSize: '1rem', fontWeight: '500' }}>Delivery Fee only ₹ 10</p>
        </div>
      </div>

      {/* Delivery details */}
      <div className='px-3 mt-3 py-2 text-center shadow-md'>
        <p className='text-green-700 font-semibold'>Delivery by - <span className='text-black'>Today</span></p>
        <p>Patna - 800013</p>
      </div>

      {/* Review & ratings */}
      <div className='review px-[5%] mt-10'>
        <h1 className='text-xl font-semibold py-1 text-black'>Reviews & Ratings</h1>

        <h1 className='text-5xl font-semibold py-1 text-slate-800 flex items-center gap-2'>{product?.rating} <BsFillStarFill className='text-green-700 text-2xl' /></h1>
        <div>
          <ReviewCard image={"https://i.ibb.co/Zm6qmB9/user.png"} username={"shashisharma"} ratings={4} content={"This very tasty spice i love it."} />
          <ReviewCard image={"https://i.ibb.co/Zm6qmB9/user.png"} username={"shashisharma"} ratings={4} content={"This very tasty spice i love it."} />
        </div>
      </div>


      {/* Buy button or add to cart button */}
      <div className='w-[100%] h-[3.5rem]  fixed bottom-0 bg-yellow-700 flex justify-between' style={{ boxShadow: '1px 0px 8px gray' }}>
        <div className='w-[50%] bg-white grid place-content-center  cursor-pointer' onClick={(e) => { e.stopPropagation(), addItem(id) }}><p className='font-semibold'>Add to cart</p></div>
        <div className='w-[50%] bg-yellow-500 grid place-content-center cursor-pointer' onClick={() => navigate(`/products/${id}/buynow`)}><p className='font-semibold' >But now</p></div>
      </div>


    </div >
  )
}

export default ShowProductPage