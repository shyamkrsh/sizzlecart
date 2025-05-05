import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function PlaceOrderPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', phone: '', address: '' })
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`).then((res) => {
            setProduct(res?.data?.data);

        }).catch((err) => {
            console.log(err);
        })
    }, [])

    let handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}/order`, {
            data: formData
        },
            {
                withCredentials: true
            }
        ).then((res) => {
            console.log(res?.data?.data);
            handlePaymentVerify(res?.data?.data)
            setFormData({ name: '', phone: '', address: '' })
            navigate("/");
        }).catch((err) => {
            console.log(err);
        })

    }

    async function handlePaymentVerify(data) {
        try {
            const options = {
                key: import.meta.env.VITE_API_RAZORPAY_KEY_ID,
                amount: data.amount,
                currency: "INR",
                name: product?.name,
                description: "Payment",
                order_id: data.id,
                handler: async (response) => {
                    try {
                        const verifyResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}/verify`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            credentials: 'include',
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                inputData: formData,
                            })
                        })
                        const verifyData = await verifyResponse.json();
                        console.log(verifyData)
                    } catch (err) {
                        console.log(err)
                    }
                },
                theme: {
                    color: '#686CFD'
                }
            }

            const rzp1 = new window.Razorpay(options);
            rzp1.open();

        } catch (err) {
            console.log(err)
        }

    }


    console.log(id)
    return (
        <>
            <div className='flex items-center justify-start w-[100vw] pt-10 h-[100vh] bg-cyan-50'>

                <form onSubmit={handleSubmit} className='w-[100%] flex items-center flex-col  h-[100%]'>
                    <div>
                        <h1 className='text-slate-600 font-semibold text-2xl'>Place your Order</h1>
                    </div>
                    <div className=' flex flex-col w-[85%] mt-5'>
                        <label htmlFor="name" className='text-slate-700'>Full Name :</label>
                        <input type="text" name='name' required value={formData?.name} onChange={handleChange} placeholder='Enter you full name' id='name' className='bg-white shadow-md h-[3rem] px-3 w-[100%] rounded-md outline-none' />
                    </div>
                    <div className=' flex flex-col w-[85%] mt-4'>
                        <label htmlFor="phone" className='text-slate-700'>Mobile Number :</label>
                        <input type="number" name='phone' required value={formData?.phone} onChange={handleChange} placeholder='Enter your mobile number' id='phone' className='bg-white shadow-md h-[3rem] px-3 w-[100%] rounded-md outline-none' />
                    </div>
                    <div className=' flex flex-col w-[85%] mt-4'>
                        <label htmlFor="address" className='text-slate-700'>Address : </label>
                        <textarea type="text" name='address' required value={formData?.address} onChange={handleChange} placeholder='Write your address' id='address' rows={4} className='bg-white shadow-md  px-3 w-[100%] rounded-md outline-none'>

                        </textarea>
                    </div>

                    <div className='mt-4 p-2 '>
                        <h1 className='text-3xl font-semibold text-green-600'>₹ {product?.price} /-</h1>
                    </div>
                    <button type='submit' className='bg-blue-500 text-white py-2 px-3 w-[50%] rounded-md mt-5 text-xl font-semibold shadow-md'>PAY & ORDER</button>
                </form>
            </div>

        </>
    )
}

export default PlaceOrderPage
