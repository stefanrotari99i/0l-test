"use client";

import { TbBrandDiscord, TbBrandGithub } from "react-icons/tb";
import { animated, useSpring } from "@react-spring/web";

import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/menu";
import { useState } from "react";

const navItems = [
  {
    children: "Home",
    href: "/",
  },
  {
    children: <TbBrandDiscord size={22} />,
    href: "/about",
    small: true,
  },
  {
    children: <TbBrandGithub size={22} />,
    href: "/download",
    small: true,
  },
  {
    children: "Download Carpe",
    href: "/contact",
  },
];

const Header = () => {
  return (
    <header className="w-full p-10 flex items-center h-[144px] z-20 fixed top-0 left-0">
      <div className="bg-white/10 flex items-start justify-start flex-1 backdrop-blur-lg w-full h-full">
        <div className="h-full bg-white flex items-center justify-center w-[70px]">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={20}
            className=""
          />
        </div>
      </div>
      <nav className="w-[60vw] h-full flex items-center">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} order={index} />
        ))}
        <Menu />
      </nav>
    </header>
  );
};

export const NavItem = ({
  href,
  children,
  small,
  order,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  small?: boolean;
  order?: number;
  onClick?: () => void;
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
      className={`uppercase aspect-square backdrop-blur-lg text-neutral-300 relative border-white/5 h-full border-[1px]
        ${small ? "w-[40%] " : "w-full"}`}
    >
      <animated.div
        style={props}
        className="bg-white absolute bottom-0 left-0 w-full "
      ></animated.div>
      {onClick && (
        <button
          onClick={onClick}
          className="relative h-full w-full  flex items-center justify-center py-2 "
        >
          <span className="text-[10px] p-2 font-semibold text-neutral-500 absolute bottom-0 left-0">
            00{order || 1}
          </span>{" "}
          {children}
        </button>
      )}
      {href && (
        <Link
          href={href}
          className="relative h-full w-full  flex items-center justify-center py-2 "
        >
          <span className="text-[10px] p-2 font-semibold text-neutral-500 absolute bottom-0 left-0">
            00{order || 1}
          </span>{" "}
          {children}
        </Link>
      )}
    </animated.div>
  );
};

export default Header;
