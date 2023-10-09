"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceCard() {
  return (
    <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        src="/sesame-logo.png"
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-lg object-cover object-center xl:h-[200px] xl:w-[200px]"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Dev at SesameLab</h4>
        <p className="mt-1 text-2xl font-bold">SesameLab</p>
        <div className="my-2 flex space-x-2">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react"
            width={0}
            height={0}
            className="h-10 w-10"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react"
            width={0}
            height={0}
            className="h-10 w-10"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react"
            width={0}
            height={0}
            className="h-10 w-10"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react"
            width={0}
            height={0}
            className="h-10 w-10"
          />
        </div>
        <p className="py-5 uppercase text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="ml-5 list-disc space-y-4 text-lg">
          <li>Summary...</li>
          <li>Summary...</li>
          <li>Summary...</li>
          <li>Summary...</li>
          <li>Summary...</li>
        </ul>
      </div>
    </article>
  );
}
