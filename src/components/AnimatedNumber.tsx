"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";

import { MutableRefObject, useEffect, useRef } from "react";

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest: number) => {
      if (ref.current && Math.round(latest) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>{value}</span>;
};

export default AnimatedNumber;
