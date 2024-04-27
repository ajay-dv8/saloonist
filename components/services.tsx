import Image from "next/image"
import { ServiceCards } from "./serviceCards"
import AOS from 'aos';
import 'aos/dist/aos.css'

import g1 from "@/public/g1.webp"
import g2 from "@/public/g2.webp"
import g3 from "@/public/g3.webp"
import g4 from "@/public/g4.webp"
import gmain from "@/public/gmain.webp"
import { useEffect } from "react";

const Services = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <>
    <div className='w-full pt-20 px-20 pb-10'>
      <span data-aos="zoom-in" className="w-full text-7xl text-gray-800 py-8 font-light drop-shadow-xl ">
        {/* Checkout Our <span className="underline text-indigo-500">Services</span> */}

        What we do.
      </span>

      <div className="flex flex-row pt-16">
        <div className="flex flex-[50%]">
          <Image data-aos="fade-right" src={gmain} alt="" 
            className=""/>
        </div>

        <div className="flex flex-[50%] flex-col">

          <div className="flex flex-col">
            <Image data-aos="fade-left" src={g1} alt="" 
              className=""/>
            <Image data-aos="fade-right" src={g2} alt=""/>
          </div>

          <div className="flex flex-row xs:">
            <Image data-aos="fade-left" src={g3} alt="" className=""/>
            <Image data-aos="fade-left" src={g4} alt="" className="sm:block hidden"/>
          </div>

          {/* <div className="w-full h-[20rem] bg-blue-500 relative">
            call btn
          </div> */}
        </div>
      </div>
    </div>
    <ServiceCards/>
    </>
  )
}

export default Services