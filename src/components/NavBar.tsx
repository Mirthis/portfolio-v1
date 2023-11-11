"use client";

import { motion } from "framer-motion";

import { useState } from "react";

import CustomLink from "./CustomLink";
import CustomMobileLink from "./CustomMobileLink";
import IconLink from "./IconLink";
import { EmailIcon, GithubIcon, LinkedInIcon } from "./Icons";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  // {
  //   name: "Articles",
  //   path: "/articles",
  // },
];

const socialLinks = [
  {
    name: "Github",
    path: "https://github.com/Mirthis",
    Icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/andrea-cardinale-fullstack",
    Icon: LinkedInIcon,
  },
  {
    name: "Email",
    path: "mailto:andrea.cardinale@proton.me",
    Icon: EmailIcon,
    className: "text-red-500",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuIconClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    // TODO: limite width instead of using big padding
    <header className="px-32 py-8 z-10 lg:px-16 sm:px-8 md:px-12 font-medium flex justify-between items-center relative">
      <button
        className="lg:flex hidden flex-col justify-center items-center space-y-1"
        onClick={handleMenuIconClick}
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all ease-out duration-300 ${
            isOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all ease-out duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all ease-out duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="space-x-8">
          {navLinks.map((link, index) => (
            <CustomLink
              key={`navLink-${index}`}
              href={link.path}
              title={link.name}
            />
          ))}
        </nav>

        <nav className="flex justify-center items-center flex-wrap space-x-6">
          {socialLinks.map((link, index) => (
            <IconLink
              key={index}
              href={link.path}
              Icon={link.Icon}
              className={`${link.className} w-6`}
            />
          ))}
          <ThemeSwitcher />
        </nav>
      </div>

      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] space-y-2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 z-30  flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="space-y-4 flex items-center flex-col justify-center">
            {navLinks.map((link, index) => (
              <CustomMobileLink
                key={`navLink-${index}`}
                href={link.path}
                title={link.name}
                setMenuOpen={setIsOpen}
              />
            ))}
          </nav>

          <nav className="flex justify-center items-center dark:text-dark text-light flex-wrap space-x-6 sm:space-x-2">
            {socialLinks.map((link, index) => (
              <IconLink
                key={index}
                href={link.path}
                Icon={link.Icon}
                className={`${link.className} w-6`}
              />
            ))}
            <ThemeSwitcher />
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
