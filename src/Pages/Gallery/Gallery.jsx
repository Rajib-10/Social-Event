import image1 from '../../../src/assets/Gallery/annivarsary2.jpg'
import image2 from '../../../src/assets/Gallery/annivarsary3.jpg'
import image3 from '../../../src/assets/Gallery/baby2.jpg'
import image4 from '../../../src/assets/Gallery/baby3.jpg'
import image5 from '../../../src/assets/Gallery/engagement3.jpg'
import image6 from '../../../src/assets/Gallery/engagement5.jpg'
import image7 from '../../../src/assets/Gallery/hb1.jpg'
import image8 from '../../../src/assets/Gallery/hb5.jpg'
import image9 from '../../../src/assets/Gallery/wedding2.jpg'
import image10 from '../../../src/assets/Gallery/wedding5.jpg'

const Gallery = () => {
    return (
        <section className="py-6 bg-base-100 ">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={image1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image2} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image3} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image4} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image5} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image6}/>
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image7} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image8} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={image9} />
		<img src={image10} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
    );
};

export default Gallery;