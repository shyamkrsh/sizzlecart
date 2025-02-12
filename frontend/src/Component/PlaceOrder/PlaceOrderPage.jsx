import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

function PlaceOrderPage() {
    const { id } = useParams();

    const [formData, setFormData] = useState({name: '', phone: '', address: ''})

    let handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name] : value});
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({name: '', phone: '', address: ''})
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
                        <input type="text" name='name' value={formData?.name} onChange={handleChange}    placeholder='Enter you full name' id='name' className='bg-white shadow-md h-[3rem] px-3 w-[100%] rounded-md outline-none' />
                    </div>
                    <div className=' flex flex-col w-[85%] mt-4'>
                        <label htmlFor="phone" className='text-slate-700'>Mobile Number :</label>
                        <input type="text" name='phone' value={formData?.phone} onChange={handleChange}   placeholder='Enter your mobile number' id='phone' className='bg-white shadow-md h-[3rem] px-3 w-[100%] rounded-md outline-none' />
                    </div>
                    <div className=' flex flex-col w-[85%] mt-4'>
                        <label htmlFor="address" className='text-slate-700'>Address : </label>
                        <textarea type="text" name='address' value={formData?.address}  onChange={handleChange}  placeholder='Write your address' id='address' rows={4} className='bg-white shadow-md  px-3 w-[100%] rounded-md outline-none'>

                        </textarea>
                    </div>
                   
                    <div className='mt-4 p-2 '>
                        <h1 className='text-3xl font-semibold text-green-600'>₹ 550 /-</h1>
                    </div>
                    <button type='submit' className='bg-blue-500 text-white py-2 px-3 w-[50%] rounded-md mt-5 text-xl font-semibold shadow-md'>PAY & ORDER</button>
                </form>
            </div>

        </>
    )
}

export default PlaceOrderPage