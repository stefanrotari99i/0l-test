"use client";

import { animated, useSpring } from "@react-spring/web";

import Link from "next/link";
import { useState } from "react";

const Button = ({
  href,
  children,
  small,
  icon,
  className,
}: {
  href: string;
  children: React.ReactNode;
  small?: boolean;
  icon?: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const props = useSpring({
    height: hovered ? "100%" : "0%",
    config: {
      mass: 1,
      tension: 210,
      friction: 20,
    },
  });
  const mainProps = useSpring({
    color: hovered ? "#000" : "#fff",
    config: {
      mass: 1,
      tension: 210,
      friction: 20,
    },
  });
  return (
    <animated.div
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      style={mainProps}
      className={`${className} uppercase aspect-square text-neutral-300 relative bg-neutral-900 h-14 px-16
      `}
    >
      <animated.div
        style={props}
        className="bg-white absolute bottom-0  left-0 w-full "
      ></animated.div>
      <Link
        href={href}
        className="relative h-full w-full  flex items-center  gap-4 justify-center py-2 "
      >
        {icon}
        {children}
      </Link>
    </animated.div>
  );
};

export default Button;
