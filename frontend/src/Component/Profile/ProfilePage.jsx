import React from 'react'

function ProfilePage() {
    return (
        <div className=' bg-cyan-100 w-[100%] h-[90vh] text-black'>
            <div className='flex items-center justify-center flex-col pt-5'>
                <img src="src/assets/profile.jpeg" alt="" className='w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] rounded-full' />
                <button className='bg-white shadow-md px-3 py-1 text-sm mt-3 rounded-md'>Edit Photo</button>
            </div>
            <div className='px-[20%] flex flex-col justify-center items-center'>
                <div>
                    <div className='mt-5 text-left'>
                        <p><span className='font-semibold text-slate-700'>Name</span> : &nbsp; <span>Shyam Kumar</span></p>
                    </div>
                    <div className='mt-5'>
                        <p><span className='font-semibold text-slate-700'>Email</span> : &nbsp; <span>sharma@gmail.com</span></p>
                    </div>
                    <div className='mt-5'>
                        <p><span className='font-semibold text-slate-700'>Phone</span> : &nbsp; <span>+91 8200732962</span></p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-3 mt-8'>
                <button className='bg-slate-100 shadow-md px-4 py-2 font-semibold rounded-md'>Change Password</button>
            </div>
            <div className='flex items-center justify-center gap-3 mt-8'>
                <button className='bg-red-900 text-white shadow-md px-4 py-2 font-semibold rounded-md'>Logout</button>
            </div>
            <div className='mt-10'>

            </div>
        </div>
    )
}

export default ProfilePage