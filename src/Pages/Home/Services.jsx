import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch("/service.json")
        .then(result=>result.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="space-y-4 py-10">
            <h1 className="font-bold text-center text-2xl">Services</h1>
            <h1 className="font-bold text-center text-4xl">Event Service We Provide</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
                services?.map(service=><Service key={service.id} service={service} />)
            }
           </div>
        </div>
    );
};

export default Services;