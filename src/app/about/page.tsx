import Image from "next/image";
import img from "../about/about.jpg"

export default function About() {
    return (
      <div>
       <section className="" id="aboutus">
  <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="max-w-lg" data-aos="fade-right" data-aos-duration="3000">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
        At IceCream Bliss, we are dedicated to crafting extraordinary ice-cream experiences that spread joy and happiness. Our commitment to quality begins with using only the freshest, all-natural ingredients—from ripe fruits to premium chocolates—ensuring every flavor is authentic and delicious. Our talented artisans blend traditional techniques with innovative ideas, resulting in both classic favorites and exciting seasonal flavors. We believe that ice cream is more than just a dessert; it is a way to create memorable moments with friends and family. Whether you are indulging in a scoop by yourself or sharing a sundae with loved ones, we aim to make each experience blissful. Join us on this delicious journey and taste the happiness in every scoop!</p>
      </div>
      <div className="mt-12 md:mt-0" data-aos="fade-left" data-aos-duration="3000">
        <Image src={img} alt="about img" className="object-cover rounded-lg shadow-md"/>
      </div>
    </div>
  </div>
</section>
      </div>
    );
  }