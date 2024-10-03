import Image from "next/image"
import img1 from "../../../testimonials1.webp"
import img2 from "../../../testimonials2.jpg"
import img3 from "../../../testimonials3.jpg"

export default function Testimonials() {
    return(
        <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos="flip-left" data-aos-duration="3000">
        <div className="h-full text-center">
          <Image src={img1} alt="img" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          />
          <p className="leading-relaxed">
          IceCream Bliss is my new favorite ice cream shop! The flavors are unique and delicious—especially the Honey Lavender Bliss! I love knowing that I’m enjoying high-quality, natural ingredients. Highly recommend!
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 title-font tracking-wider text-2xl font-serif font-bold">
          Shams RK
          </h2>
          <p className="text-gray-500">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos="flip-left" data-aos-duration="3000">
        <div className="h-full text-center">
        <Image src={img2} alt="img" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          />
          <p className="leading-relaxed">
          I had the Strawberry Cheesecake Swirl, and it was amazing! The creaminess and the texture were spot on. Plus, the staff is super friendly and always eager to help with recommendations!
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-bold title-font tracking-wider text-2xl font-serif">
          Dr. Hania 
          </h2>
          <p className="text-gray-500">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4" data-aos="flip-left" data-aos-duration="3000">
        <div className="h-full text-center">
        <Image src={img3} alt="img" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          />
          <p className="leading-relaxed">
          Every visit to IceCream Bliss is a delightful experience! Their seasonal flavors keep things exciting, and I can’t get enough of the Midnight Mocha Crunch. Perfect for coffee lovers!
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-bold title-font tracking-wider text-2xl font-serif">
         Mr. Ahad
          </h2>
          <p className="text-gray-500">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}