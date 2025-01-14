import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Intro() {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <>
            <div className='relative w-[100%] h-[50vh] py-3 gb-slate-50 overflow-hidden md:mt-10'>
                    <Slider {...settings}>
                        <div className="w-[100%] h-full rounded-lg ">
                            <img src="./src/assets/slide-1.jpg" className="w-[90%] h-full rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div className="w-[100%] h-full rounded-lg  overflow-hidden">
                            <img src="./src/assets/slide-2.jpg" className="w-[90%] h-full rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div className="w-[100%] h-full rounded-lg  overflow-hidden">
                            <img src="./src/assets/slide-3.jpg" className="w-[90%] h-full rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div className="w-[100%] h-full rounded-lg ">
                            <img src="./src/assets/slide-4.jpeg" className="w-[90%] h-full rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div className="w-[100%] h-full rounded-lg ">
                            <img src="./src/assets/slide-5.jpg" className="w-[90%] h-full rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div className="w-[100%] h-full rounded-lg ">
                            <img src="./src/assets/slide-6.jpg" className="w-[90%] h-full rounded-lg shadow-lg mx-auto" />
                        </div>
                    </Slider >
            </div>

        </>
    )
}

export default Intro