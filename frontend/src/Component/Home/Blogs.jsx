import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import BlogsCard from './BlogsCard';

function Blogs() {

    let blogs = [
        {
            id: 1,
            image: "https://i.ibb.co/k6dZwJr/img1.jpg",
            heading: 'Benefits of Turmeric',
            content: 'What is it?  " Turmeric is bright yellow spice that is typically for flavor and color Asian cuisine'
        },
        {
            id: 2,
            image: "https://i.ibb.co/vzGRT5b/img2.jpg",
            heading: 'Benefits of Turmeric',
            content: 'What is it?  " Turmeric is bright yellow spice that is typically for flavor and color Asian cuisine'
        },
        {
            id: 3,
            image: "https://i.ibb.co/k6dZwJr/img1.jpg",
            heading: 'Benefits of Turmeric',
            content: 'What is it?  " Turmeric is bright yellow spice that is typically for flavor and color Asian cuisine'
        },
    ]
    return (
        <div className='bg-slate-100 py-12 '>
            <h1 className='text-2xl md:text-4xl ps-5 md:text-center mt-5'>𝐌𝐨𝐬𝐭 𝐑𝐞𝐚𝐝𝐚𝐛𝐥𝐞 𝐁𝐥𝐨𝐠𝐬</h1>

            <div className="card-container md:px-[10%] mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
                
                {
                    blogs.map((blog, i) => {
                        return <BlogsCard key={i} image={blog?.image} heading={blog?.heading} content={blog?.content}/>
                    })
                }
            </div>
        </div>
    )
}

export default Blogs