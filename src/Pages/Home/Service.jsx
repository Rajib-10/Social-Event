/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Service = ({service}) => {
  const {id,name,image,price,shortDescription} = service || {}
    return (
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img className="h-96 w-full object-cover" src={image}/>
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {shortDescription}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/details/${id}`}>
          <button
            className="btn btn-primary w-full"
            type="button"
          >
            Details
          </button>
          </Link>
        </div>
      </div>
    );
};

export default Service;