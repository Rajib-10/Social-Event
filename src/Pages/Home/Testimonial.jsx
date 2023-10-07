import profile1 from "../../../src/assets/profile/men1.jpg"
import profile2 from "../../../src/assets/profile/men2.jpg"
import profile3 from "../../../src/assets/profile/men3.jpg"
import profile11 from "../../../src/assets/profile/women.jpg"

const Testimonial = () => {
    return (
        <section className="my-8  ">
	<div className="container flex flex-col items-center mx-auto mb-4 md:p-4 md:px-12">
		<h1 className="p-4 text-4xl font-semibold  text-center">What our customers are saying about us</h1>
	</div>
	<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-base-100">
				<p className="relative px-6 py-1 text-lg italic text-center">
                The team at Social Event orchestrated an unforgettable birthday celebration for my son. The attention to detail and creativity were outstanding. A big thank you!.
					
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-base-300">
				<img src={profile2} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold ">Ahmed Khan</p>
				<p className="text-sm uppercase"> Business Consultant, Chittagong</p>
			</div>
		</div>
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-base-100">
				<p className="relative px-6 py-1 text-lg italic text-center ">
                Our engagement party was truly magical, all thanks to Social Event! The decorations and ambiance were breathtaking. Highly recommend them for any special occasion..
					
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-base-300">
				<img src={profile3} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold ">Farhan Ahmed</p>
				<p className="text-sm uppercase">HR Manager, Dhaka</p>
			</div>
		</div>
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-base-100">
				<p className="relative px-6 py-1 text-lg italic text-center ">
                Our wedding was a dream come true, and Social Event played a pivotal role. The coordination and execution were flawless. We could not be happier with the results..
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-base-300">
				<img src={profile11} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold ">Ayesha Khan</p>
				<p className="text-sm uppercase">Marketing Executive, Dhaka</p>
			</div>
		</div>
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-base-100">
				<p className="relative px-6 py-1 text-lg italic text-center ">
                The baby shower organized by Social Event was simply delightful. The themes, games, and arrangements were top-notch. They made our special day truly memorable..
					
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-base-300">
				<img src={profile1} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold ">Hasan Mahmud</p>
				<p className="text-sm uppercase">IT Professional, Khulna</p>
			</div>
		</div>
	</div>
</section>
    );
};

export default Testimonial;