"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
};

const EASE = [0.76, 0, 0.24, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 36,
  duration = 0.65,
  className,
  style,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  text,
  delay = 0,
  className,
  style,
}: {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={{ display: "inline-block", ...style }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-block", marginRight: "0.25em", whiteSpace: "nowrap" }}>
          {word.split("").map((char, charIndex) => (
            <span key={charIndex} style={{ display: "inline-block", overflow: "hidden" }}>
              <motion.span
                style={{ display: "inline-block", transformOrigin: "bottom left" }}
                initial={{ y: "110%", skewY: 5, rotateZ: 5 }}
                animate={inView ? { y: 0, skewY: 0, rotateZ: 0 } : { y: "110%", skewY: 5, rotateZ: 5 }}
                transition={{ 
                  duration: 0.7, 
                  delay: delay + (wordIndex * 0.1) + (charIndex * 0.03), 
                  ease: [0.25, 1, 0.5, 1] 
                }}
              >
                {char}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  style,
  stagger = 0.1,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  delayChildren?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren } },
        hidden: {},
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function Reveal3D({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotateX: -45, scale: 0.9, transformPerspective: 1000 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : { opacity: 0, y: 100, rotateX: -45, scale: 0.9 }}
      transition={{ duration: 0.85, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
      style={{ transformStyle: "preserve-3d", ...style }}
    >
      {children}
    </motion.div>
  );
}
