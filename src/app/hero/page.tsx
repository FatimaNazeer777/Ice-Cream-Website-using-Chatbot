"use client"
import Image from "next/image";
import herobackimg from "../../../herobackimg.jpg";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div className="relative w-full h-[320px]" id="home" data-aos="fade-right" data-aos-duration="3000">
      <div className="absolute inset-0 opacity-70">
        <Image src={herobackimg} alt="back image" className="object-cover object-center w-full h-full" />
      </div>
      <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
            <Typewriter
              options={{
                strings: ['IceCream Bliss', 'IceCream Bliss'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="font-regular text-xl mb-8 mt-4">
            Indulge in Sweet Happiness
          </p>
          <a
            href="#contactUs"
            className="px-6 py-3  text-white font-medium rounded-full bg-[#c09858] hover:bg-pink-800 transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}