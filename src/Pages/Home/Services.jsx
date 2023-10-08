import { useEffect, useState } from "react";
import Service from "./Service";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch("/service.json")
        .then(result=>result.json())
        .then(data => setServices(data))
        AOS.init({duration: 2000})
    },[])
    return (
        <div className="space-y-4 py-10">
            <div data-aos="fade-right"
		data-aos-offset="300"
		data-aos-easing="ease-in-sine">
            <h1 className="font-bold text-center text-2xl">Services</h1>
            <h1 className="font-bold text-center text-4xl">Event Service We Provide</h1>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
                services?.map(service=><Service key={service.id} service={service} />)
            }
           </div>
        </div>
    );
};

export default Services;