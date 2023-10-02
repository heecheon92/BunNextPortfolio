"use client";

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <header className="sticky top-0 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <SocialIcon
          url="https://www.github.com/heecheon92"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.github.com/heecheon92"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.github.com/heecheon92"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        className="fex-row flex cursor-pointer items-center text-gray-300"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
