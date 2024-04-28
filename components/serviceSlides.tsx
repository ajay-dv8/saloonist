"use client";

import React, { useEffect, useState } from "react";
import { MovingImageCards } from "./movingImageCards";

import g3 from "@/public/g3.webp";
import g2 from "@/public/g2.webp";
import g1 from "@/public/g1.webp";
import g4 from "@/public/g4.webp";

export function ServiceSlides() {
  
  return (
    <div className="rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center  overflow-hidden">
      <MovingImageCards
        items={images}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const images = [
  {
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: g1,
  },
  {
    name: "William Shakespeare",
    title: "Hamlet",
    image: "https://www.freepik.com/free-photo/smiling-young-afro-american-male-barber-wearing-uniform-looking-pointing-front-stretching-out-scissors-comb-towards_17053927.htm#fromView=search&page=1&position=11&uuid=68504536-2cae-4378-8b2c-818cab00c926",
  },
  {
    
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image: g3,
  },
  {
    image: g4,
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    image: g3,
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
