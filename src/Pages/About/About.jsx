import vision from "../../../src/assets/About/vision.jpg"
import approach from "../../../src/assets/About/approach.jpg"
import process from "../../../src/assets/About/process.jpg"

const About = () => {
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={vision} className="w-[100vh] rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Our Vision</h1>
                <p className="py-6 ">At Social Event, our vision is to redefine the art of event planning and execution. We strive to create a world where every event is not just a gathering, but a story to be told and cherished. We envision celebrations that reflect the unique dreams and personalities of our clients, leaving an indelible mark on their hearts and minds. Our aspiration is to consistently exceed expectations, delivering exceptional events that stand as a testament to creativity, dedication, and an unwavering commitment to client satisfaction. We believe in a future where each event is an expression of joy, love, and the beauty of togetherness.</p>
                </div>
            </div>
            </div>

        {/* second hero  */}

        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={approach} className="w-[100vh] rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Our Approach</h1>
            <p className="py-6">Our approach is deeply rooted in collaboration and understanding. We embark on a journey with our clients, immersing ourselves in their aspirations, preferences, and ideas. Through attentive listening and open communication, we gain valuable insights into their vision. We then blend our creativity, expertise, and attention to detail to craft a tailor-made event experience. Our goal is to translate their dreams into reality by curating every element with precision. We believe in flexibility and agility, ensuring that our approach adapts to evolving needs and desires, making the event planning journey enjoyable and fulfilling.</p>
            </div>
        </div>
        </div>

        {/* third hero  */}

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={process} className="w-[100vh] rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Our Process</h1>
                <p className="py-6">Our process begins with a comprehensive consultation where we delve into the desires, expectations, and logistical considerations of our clients. We carefully analyze the scope of the event, considering themes, budget, and timelines. Following this, we develop a detailed event plan, incorporating creative concepts and innovative ideas. Collaborating closely with our clients, we iterate and refine the plan until it aligns perfectly with their vision. Once approved, we initiate the meticulous execution phase, liaising with trusted vendors and overseeing all arrangements. On the day of the event, our dedicated team ensures a seamless and magical experience, leaving our clients and their guests with cherished memories to last a lifetime.</p>
                </div>
            </div>
            </div>


            {/* meet with team  */}
        
            <section className="py-6 ">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
    <h1 className="text-center font-bold text-3xl">Meet With Our Team expert</h1>
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
				<p className="text-xl font-semibold ">Aisha Rahman</p>
				<p className="dark:text-gray-400">Event Director</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
				<p className="text-xl font-semibold ">Farid Ahmed</p>
				<p className="dark:text-gray-400">Creative Design Lead</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
				<p className="text-xl font-semibold ">Nusrat Khan</p>
				<p className="dark:text-gray-400">Logistics Coordinator</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
				<p className="text-xl font-semibold ">Shafiqul Islam</p>
				<p className="dark:text-gray-400">Marketing Manager</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
				<p className="text-xl font-semibold ">Yasmin Chowdhury</p>
				<p className="dark:text-gray-400">Client Relations Specialist</p>
			</div>
		</div>
	</div>
</section>


        {/* last part of about  */}
        <div className="flex items-center justify-evenly bg-gray-200 p-5 my-5">
            <div className="text-center">
                <h1 className="text-2xl font-bold">4+</h1>
                <p className="font-semibold">Years Experience</p>
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-bold">96%</h1>
                <p className="font-semibold">Happy Client</p>
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-bold">200+</h1>
                <p className="font-semibold">Completed Event</p>
            </div>
        </div>
        </div>
    );
};

export default About;