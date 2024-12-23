import React from 'react'
import Typewriter from 'typewriter-effect'

function Intro() {

    


    return (
        <div className='relative w-[100%]'>
            <div className='relative w-[100%]'>
                <img src="src/assets/introbg.jpg" alt="" className='w-[100%] h-[20rem] md:h-[38rem]' />
            </div>
            <div className='absolute top-24 left-12'>
                <div>

                    <h1 className='text-white text-2xl md:text-4xl font-bold'>
                        <Typewriter
                            options={{
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Fast Spice Delivery")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Delivery at low price")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Easy Order Process")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Best Quality Delivery")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .start()

                            }}
                        />
                    </h1>
                    <p className='ps-5 text-white'>Very fast and efficient delivery process.</p>
                </div>

                <div className='mt-5 '>
                    <form action="" className='flex gap-5'>
                        <input type="text" placeholder='Search Something here' className='p-2 rounded-full w-[10rem] md:w-[20rem] outline-none' />
                        <button className='btn bg-red-500 text-white px-4 py-2 rounded-full'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Intro