"use client";

import { motion } from "framer-motion";

import { ReactIcon, TailWindIcon } from "./Icons";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-pointer gap-x-1 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold absolute  flex lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 items-center justify-center rounded-full font-semibold bg-dark text-light dark:text-dark dark:bg-light py-3 px-6 shadow-dark"
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl md:text-6xl md:mt-32 mt-64 w-full text-center">
        Skills
      </h2>
      <div className="w-full lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer flex lg:p-6 md:p-4 xs:text-xs xs:p-2 items-center justify-center rounded-full font-semibold bg-dark text-light dark:text-dark dark:bg-light  p-8 shadow-dark"
        >
          Web
        </motion.div>

        <Skill name="NextJs" x="-20vw" y="2vw" />
        <Skill name="React" x="-5vw" y="-10vw" />
      </div>
    </>
  );
};

export default Skills;
