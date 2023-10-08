import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const [details,setDetails] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        fetch("/service.json")
        .then(result=>result.json())
        .then(data => {
            const findData = data.find(item=>item.id==id)
            setDetails(findData)
        })
    },[id])
    
    return (
       <div className="flex items-center justify-center h-screen">
         <div className="max-w-lg p-4 shadow-md bg-base-100 dark:text-gray-100">
            <div className="space-y-4">
                <div className="space-y-2">
                    <img className="h-[70vh] w-full object-cover" src={details.image} />
                    
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-400">{details.name}</h3>
                    </a>
                    <p className=" dark:text-gray-400">{details.shortDescription}</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Details;