"use client"
import About from "./about/page";
import Gallery from "./gallery/page";
import Hero from "./hero/page";
import Services from "./services/page";
import Testimonials from "./testimonials/page";
import Visit from "./visit/page";
import Why from "./why";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import Chat from "./../chat"
import Footer from "./footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div>
     <Hero/>
     <Services/>
     <About/>
     <Why/>
     <Gallery/>
     <Testimonials/>
     <Visit/>
     <Footer/>
     <Chat/>
    </div>
  );
}
