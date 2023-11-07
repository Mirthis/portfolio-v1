"use client";

// import { Variants, motion } from "@/lib/framer-motion";
import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";

const fullText: Variants = {
  animate: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWod: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className="w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={cn([
          "w-full inline-block font-bold capitalize text-8xl",
          className,
        ])}
        variants={fullText}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWod}
            key={`word-${index}`}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
