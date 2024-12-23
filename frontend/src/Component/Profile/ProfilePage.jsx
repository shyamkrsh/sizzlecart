import React from 'react'

function ProfilePage() {
    return (
        <div className='mt-[3rem]'>
            <div className='flex items-center justify-center'>
                <img src="src/assets/profile.jpeg" alt="" className='w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] rounded-full' />
            </div>
            <div className='px-[5%]'>
                <div className='flex items-center justify-start gap-5 mt-5'>
                    <h2 className='text-xl font-semibold'>Name : </h2>
                    <p className='text-xl'>Shyam Kumar Sharma</p>
                </div>
                <div className='flex items-center justify-start gap-5 mt-3'>
                    <h2 className='text-xl font-semibold'>Phone No : </h2>
                    <p className='text-xl'>+91 8200732962</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage