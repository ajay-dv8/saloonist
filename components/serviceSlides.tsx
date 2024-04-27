"use client";

import React, { useEffect, useState } from "react";
import { MovingImageCards } from "./movingImageCards";

import g3 from "@/public/g3.webp";

export function ServiceSlides() {
  return (
    <div className="rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <MovingImageCards
        items={services}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const services = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: {g3}
  },
  {
    Image:{g3},
    name: "William Shakespeare",
    title: "Hamlet",
    image: {g3}
  },
  {
    
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image: {g3}
  },
  {
    image: {g3},
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    image: {g3},
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
