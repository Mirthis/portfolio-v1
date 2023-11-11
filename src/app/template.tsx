"use client";

import { AnimatePresence, motion } from "framer-motion";

import React from "react";

import { usePathname } from "next/navigation";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={path}>{children}</div>
    </AnimatePresence>
  );
};

export default RootTemplate;
