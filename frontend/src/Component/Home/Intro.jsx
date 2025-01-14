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
            <div className='relative w-[100%] h-[33vh] md:h-[50vh] py-3 bg-white overflow-hidden md:mt-10'>
                    <Slider {...settings}>
                        <div className="w-[100%] h-full rounded-lg ">
                            <img src="https://i.ibb.co/vQsDb33/slide-1.webp" className="w-[90%] h-full rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div className="w-[100%] h-full rounded-lg ">
                            <img src="https://i.ibb.co/sq6NDFy/slide-2.jpg" className="w-[90%] h-full rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div className="w-[100%] h-full rounded-lg">
                            <img src="https://i.ibb.co/3FtH8Tm/slide-3.png" className="w-[90%] h-full rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div className="w-[100%] h-full rounded-lg ">
                            <img src="https://i.ibb.co/vQJSkCW/slide-4.jpg" className="w-[90%] h-full rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div className="w-[100%] h-full rounded-lg ">
                            <img src="https://i.ibb.co/3NcB4Dm/slide-5.jpg" className="w-[90%] h-full rounded-lg shadow-lg mx-auto" />
                        </div>
                        <div className="w-[100%] h-full rounded-lg ">
                            <img src="https://i.ibb.co/VSh12MS/slide-6.jpg" className="w-[90%] h-full rounded-lg shadow-lg mx-auto" />
                        </div>
                    </Slider >
            </div>

        </>
    )
}

export default Intro