"use client";
import About from "@/components/about";
import BookingForm from "@/components/bookingForm";
import Hero from "@/components/hero";
import { GeminiEffect } from "@/components/ui/geminiEffect";

import img8 from "@/public/img8.webp"
import { useEffect, useRef } from "react";
import { useAnimation, useScroll, useTransform } from "framer-motion";
import Services from "@/components/services";
import Contact from "@/components/contact";
import BecomeCustomer from "@/components/becomeCustomer";
import Footer from "@/components/footer";
import { ServiceSlides } from "@/components/serviceSlides";

export default function Home() {

  const controls = useAnimation();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);


  return (
    <main className="flex flex-col items-center justify-between transition-all duration-500">
      <Hero/>

      <BookingForm/>

      <div className="py-32">
        <About
          title="Your Sanctuary for Beauty"
          description={"Step into our Nail & Beauty Sanctuary, where we firmly believe that each person should experience the joy of feeling stunning and self-assured. Whether you desire a professional hair style, basic nail treatment or an elaborate masterpiece on your fingertips, our squad of skilled experts is committed to translating your unique character into captivating nail designs."}
          image={img8}
          className="flex-col-reverse sm:flex-row"
        />
        <About
          title="Your Sanctuary for Beauty"
          description={"Step into our Nail & Beauty Sanctuary, where we firmly believe that each person should experience the joy of feeling stunning and self-assured. Whether you desire a professional hair style, basic nail treatment or an elaborate masterpiece on your fingertips, our squad of skilled experts is committed to translating your unique character into captivating nail designs."}
          image={img8}
          className="sm:flex-row-reverse pt-16 flex-col-reverse"
        />
      </div>
      
      <div className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative overflow-clip py-8">
        <GeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          title="Try Saloonist"
          description="We are ere to give you te best services, no matter your style"
          className="w-full"
        />
      </div>

      <ServiceSlides/>
      <Services/>

      <BecomeCustomer/>

      <Contact/>

      <Footer/>

    </main>
  );
}
