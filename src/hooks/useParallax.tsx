import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, RefObject } from "react";

interface UseParallaxOptions {
  offset?: number;
  direction?: "up" | "down";
}

interface UseParallaxReturn {
  ref: RefObject<HTMLDivElement>;
  y: MotionValue<number>;
  opacity?: MotionValue<number>;
}

export const useParallax = (options: UseParallaxOptions = {}): UseParallaxReturn => {
  const { offset = 50, direction = "up" } = options;
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = direction === "up" ? [offset, -offset] : [-offset, offset];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return { ref, y };
};

export const useParallaxWithOpacity = (options: UseParallaxOptions = {}) => {
  const { offset = 50, direction = "up" } = options;
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = direction === "up" ? [offset, -offset] : [-offset, offset];
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return { ref, y, opacity };
};
