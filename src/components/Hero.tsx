"use client";

import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";

export default function Hero() {
  const [text, _count] = useTypewriter({
    words: [
      "Hi, The Name's Heecheon Park",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        src="/catlion.jpg"
        width={128}
        height={128}
        style={{
          width: "8rem",
          height: "8rem",
          borderRadius: 100,
          paddingLeft: "auto",
          paddingRight: "auto",
        }}
        quality={100}
        alt={"kyouma"}
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          Software Engineer
        </h2>
        <h1 className="scroll-px-10 overflow-hidden text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div>
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
