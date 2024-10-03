import Image from "next/image"
import img1 from "../../../service1.jpg"
import img2 from "../../../service2.jpg"
import img3 from "../../../service3.jpg"
import img4 from "../../../service4.jpg"
import img5 from "../../../service5.jpg"
import img6 from "../../../service6.jpg"

export default function Services() {
    return (
      <div>
       <section className="py-10" id="services">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
      Our Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-pink-200 rounded-lg shadow-md overflow-hidden" data-aos="flip-right" data-aos-duration="3000">
        <Image src={img1} alt="service 1" className="w-full h-64 object-cover"/>
        <div className="p-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2" >
          Honey Lavender Bliss
          </h3>
          <p className="text-gray-700 text-base">
          Honey Lavender Bliss combines the soothing floral notes of lavender with the delicate sweetness of honey. The creamy vanilla base creates an elegant balance between fragrant and sweet. It is the perfect choice for those seeking a light, sophisticated treat.          </p>
        </div>
      </div>
      <div className="bg-pink-200 rounded-lg shadow-md overflow-hidden" data-aos="flip-right" data-aos-duration="3000">
      <Image src={img2} alt="service 2" className="w-full h-64 object-cover"/>

        <div className="p-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
          Midnight Mocha Crunch
          </h3>
          <p className="text-gray-700 text-base">
          Midnight Mocha Crunch is crafted for lovers of both coffee and chocolate. This rich mocha ice cream blends the robust flavor of dark chocolate with the boldness of freshly brewed coffee. Chocolate-covered espresso beans add a delightful crunch to every bite.
          </p>
        </div>
      </div>
      <div className="bg-pink-200 rounded-lg shadow-md overflow-hidden" data-aos="flip-right" data-aos-duration="3000">
      <Image src={img3} alt="service 3" className="w-full h-64 object-cover"/>

        <div className="p-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
          Strawberry Cheesecake Swirl
          </h3>
          <p className="text-gray-700 text-base">
          Indulge in the creamy decadence of Strawberry Cheesecake Swirl, a perfect blend of tangy cheesecake and sweet strawberry sauce. The chunks of buttery graham cracker crust bring a delightful texture. This ice cream offers all the flavors of classic cheesecake in every spoonful.
          </p>
          <details>
            <summary>Read More</summary>
            <p>
            Treat yourself to the luscious, dessert-like flavors of Strawberry Cheesecake Swirl, where creamy cheesecake ice cream meets a swirl of sweet strawberry sauce. This indulgent ice cream captures the essence of a classic strawberry cheesecake, with a tangy, velvety cheesecake base filled with chunks of buttery graham cracker crust. The ripples of strawberry sauce are made from ripe, juicy strawberries, adding a burst of fruity sweetness to every bite. Perfect for anyone who loves a rich and creamy dessert with just the right balance of tartness and sweetness, this flavor will transport your taste buds straight to a cozy slice of cheesecake heaven.
            </p>
          </details>
          <p />
        </div>
      </div>
      <div className="bg-pink-200 rounded-lg shadow-md overflow-hidden" data-aos="flip-right" data-aos-duration="3000">
      <Image src={img4} alt="service 4" className="w-full h-64 object-cover"/>

        <div className="p-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
          Salted Caramel Pretzel Crunch
          </h3>
          <p className="text-gray-700 text-base">
          Salted Caramel Pretzel Crunch combines a rich, buttery caramel ice cream with a hint of sea salt. Crunchy pieces of pretzel add a satisfying texture and contrast to the creamy base. This sweet and salty combination will satisfy all your cravings.
          </p>
          <details>
            <summary>Read More</summary>
            <p>
              {" "}
              For those who love a balance of sweet and salty, Salted Caramel Pretzel Crunch is a match made in ice-cream heaven. This decadent flavor starts with a rich, buttery caramel ice cream, infused with a hint of sea salt to enhance its complexity. Throughout the creamy base, you all find crunchy pieces of salted pretzel, providing a delightful contrast in both flavor and texture. The saltiness of the pretzels perfectly complements the sweet caramel, making every bite a symphony of flavors that dance on your palate. Whether you are a fan of salty snacks or a caramel enthusiast, this ice cream is sure to satisfy all your cravings.
            </p>
          </details>
          <p />
        </div>
      </div>
      {/* special card */}
      <div data-aos="flip-right" data-aos-duration="3000" className="bg-pink-200 rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
        <div className="text-center text-white font-medium">
          Special product
        </div>
        <Image src={img5} alt="service 5" className="w-full h-64 object-cover"/>
        <div className="p-6 bg-pink-200 text-center rounded-b-lg md:min-h-full">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
          Peanut Butter Fudge Swirl
          </h3>
          <p className="text-gray-700 text-base">
            <span className="font-medium underline">Our speciality is</span>
            Peanut Butter Fudge Swirl is made with creamy peanut butter ice cream and luscious chocolate fudge ribbons. The salty creaminess of peanut butter perfectly balances the rich sweetness of the fudge. It is a dream come true for peanut butter enthusiasts.
          </p>
        </div>
      </div>
      <div className="bg-pink-200 rounded-lg shadow-md overflow-hidden" data-aos="flip-right" data-aos-duration="3000">
      <Image src={img6} alt="service 6" className="w-full h-64 object-cover"/>
        <div className="p-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">Lemon Basil Sorbet
          </h3>
          <p className="text-gray-700 text-base">
          Lemon Basil Sorbet offers a refreshing and invigorating flavor with the perfect balance of citrus and herbs. Freshly squeezed lemons bring tangy brightness, while basil adds an aromatic twist. It as a light, dairy-free option that’s perfect for summer.
          </p>
          <details>
            <summary>Read More</summary>
            <p>
              {" "}
              Refresh your senses with Lemon Basil Sorbet, a light and invigorating treat that’s perfect for a hot day. This unique sorbet is crafted from freshly squeezed lemons for a bright, zesty flavor, combined with just a touch of fresh basil for an herbal twist. The result is a refreshing, palate-cleansing dessert that strikes the perfect balance between tangy and aromatic. Unlike traditional creamy ice creams, our Lemon Basil Sorbet is light and crisp, making it an ideal choice for those seeking a dairy-free option that’s bursting with flavor. Each spoonful offers a burst of summer in your mouth, keeping you cool and revitalized.            </p>
          </details>
          <p />
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    );
  }