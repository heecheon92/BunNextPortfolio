"use client";

import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200 }}
        transition={{ duration: 1.0 }}
        whileInView={{ x: 0, opacity: 1 }}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
        className="h-24 w-24 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
      />

      <div className="absolute z-0 h-24 w-24 rounded-2xl opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
        <div className="flex h-full items-center justify-center">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
