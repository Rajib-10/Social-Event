import { useEffect, useState } from "react";
import SingleUpcoming from "./SingleUpcoming";


const Event = () => {
    const [upcoming,setUpcoming] = useState([])
    useEffect(()=>{
        fetch("/upcoming.json")
        .then(result=>result.json())
        .then(data => setUpcoming(data))
    },[])
    return (
        <div className="py-10">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-6">Our Upcoming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    upcoming?.map(singleUpcoming=> <SingleUpcoming key={singleUpcoming.id} singleUpcoming={singleUpcoming} />)
                }
            </div>
        </div>
    );
};

export default Event;