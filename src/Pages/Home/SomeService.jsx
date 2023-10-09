import { useEffect } from "react";
import { useState } from "react";
import SingleService from "./SingleService";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SomeService = () => {
    const [someService,setSomeService] = useState([])
    useEffect(()=>{
        fetch("/someService.json")
        .then(result=>result.json())
        .then(data => setSomeService(data))
        AOS.init({duration: 2000})
        AOS.refresh()
    },[])
    return (
        <div>
            <div data-aos="fade-down"
     data-aos-easing="linear">
            <h1 className="text-4xl text-center font-bold mt-5">some of our services</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    someService?.map(singleService=><SingleService key={singleService.id} singleService={singleService} />)
                }
            </div>
        </div>
    );
};

export default SomeService;