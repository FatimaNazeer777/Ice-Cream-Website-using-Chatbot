import Image from "next/image";
import image1 from "../../../gallery1.jpg"
import image2 from "../../../galley2.jpg"
import image3 from "../../../gallery3.jpg"
import image4 from "../../../gallery4.jpg"

export default function Gallery() {
    return (
      <div>
       <section className="text-gray-700 body-font" id="gallery">
  <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
    Gallery
  </div>
  <div data-aos-duration="3000" data-aos="zoom-in" className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 pb-12">
    <div className="group relative">
      <Image src={image1} alt="gallery" className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
    </div>
    <div data-aos-duration="3000" data-aos="zoom-in" className="group relative">
    <Image src={image2} alt="gallery" className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
    </div>
    <div data-aos-duration="3000" data-aos="zoom-in" className="group relative">
    <Image src={image3} alt="gallery" className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
    </div>
    <div data-aos-duration="3000" data-aos="zoom-in" className="group relative">
    <Image src={image4} alt="gallery" className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
    </div>
  </div>
</section>
      </div>
    );
  }