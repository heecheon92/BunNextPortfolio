"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Heecheon Park",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
