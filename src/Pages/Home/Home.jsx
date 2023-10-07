import Service from "./Services";
import Slider from "./Slider";
import SomeService from "./SomeService";
import Testimonial from "./Testimonial";



const Home = () => {
    return (
        <div>
           <Slider  />
           <Service />
           <SomeService />
           <Testimonial />
        </div>
    );
};

export default Home;