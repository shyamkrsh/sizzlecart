import React from 'react'

function ProfilePage() {
    return (
        <div className='mt-[3rem]'>
            <div className='flex items-center justify-center flex-col'>
                <img src="src/assets/profile.jpeg" alt="" className='w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] rounded-full' />
                <button className='border px-3 py-1 font-semibold mt-3 rounded-md'>Edit Profile</button>
            </div>
            <div className='px-[20%]'>
                <div className='mt-5'>
                    <h2 className='text-xl font-semibold'>Name : </h2>
                    <p className='text-xl'>Shyam Kumar Sharma</p>
                </div>
                <div className='mt-3'>
                    <h2 className='text-xl font-semibold'>Phone No : </h2>
                    <p className='text-xl'>+91 8200732962</p>
                </div>
                <div className='mt-3'>
                    <h2 className='text-xl font-semibold'>Email : </h2>
                    <p className='text-xl'>shyamkrcse@gmail.com</p>
                </div>
                <div className='mt-3'>
                    <h2 className='text-xl font-semibold'>Phone No : </h2>
                    <p className='text-xl'>+91 8200732962</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-3 mt-8'>
                <button className='border px-4 py-2 font-semibold rounded-md'>Change Password</button>
                <button className='border px-4 py-2 font-semibold rounded-md'>Delete Account</button>
            </div>
            <div className='flex items-center justify-center gap-3 mt-8'>
                <button className='border px-4 py-2 font-semibold rounded-md'>Logout</button>
            </div>
           <div className='mt-10'>

           </div>
        </div>
    )
}

export default ProfilePage