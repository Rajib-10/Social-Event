/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { FaCalendar,FaLocationArrow } from 'react-icons/fa';

const SingleUpcoming = ({singleUpcoming}) => {
    const {name,date,time,image,description,location} = singleUpcoming || {}
    return (
        <div className="relative  flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className="h-[300px] w-full object-cover rounded-xl"
      src={image}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    <h4 className="block  text-lg md:text-xl font-semibold   text-blue-gray-900 antialiased">
      {name}
    </h4>
    <p className="mt-3 block  font-normal leading-relaxed text-gray-700 antialiased">
     {description}
    </p>
  </div>
  
  <div className="flex items-center justify-between p-2 mx-4">
    <div className="flex items-center">
      
      

      <h1 className="md:font-medium flex items-center gap-2 text-sm"><FaLocationArrow />{location}</h1>
     
    </div>
    <p className="  text-sm md:font-medium leading-relaxed text-inherit antialiased flex items-center gap-2">
      <FaCalendar />{date}
    </p>
  </div>
  <div className="avatar indicator absolute top-3 right-8">
  <span className="indicator-item badge badge-secondary">New…</span> 
  <div className="w-20 h-20 rounded-lg">
    <span className='font-medium text-xl text-zinc-200'>{time}</span>
  </div>
</div>
  
</div>
    );
};

export default SingleUpcoming;