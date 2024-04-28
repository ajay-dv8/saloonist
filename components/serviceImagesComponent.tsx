"use client";
import { ParallaxScroll } from "./ui/parallaxScroll";

import g1 from "@/public/g1.webp";
import g2 from "@/public/g2.webp";
import g3 from "@/public/g3.webp";
import g4 from "@/public/g4.webp";
import gmain from "@/public/gmain.webp";

import b1 from "@/public/b1.webp";
import b2 from "@/public/b2.webp";
import b3 from "@/public/b3.webp";

export function ServiceImageComponent() {
  return <ParallaxScroll images={images} />;
}

const images = [
  g1,
  b3,
  g3,
  b2,
  g2,
  b1,
  g4,
  gmain,

];
