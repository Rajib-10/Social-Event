import bannerIMG  from "../../../src/assets/banner.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {
    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    },[])
    return (
        <div >
            <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" 
            className="hero min-h-[70vh]" style={{backgroundImage: `url(${bannerIMG})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-xl lg:text-5xl font-bold">Warm Welcome To Social Event</h1>
                <p className="mb-5 font-semibold">Begin your journey of unforgettable celebrations with us!</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;