"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function MagneticButton({
  children,
  href,
  className = "",
  style,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18 });
  const sy = useSpring(y, { stiffness: 180, damping: 18 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.38);
    y.set((e.clientY - cy) * 0.38);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy, ...style }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
}
