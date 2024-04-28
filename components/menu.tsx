"use client";

import { a, useSpring } from "@react-spring/web";

import { CgClose } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import { NavItem } from "@/components/header";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavItem small order={4} onClick={() => setOpen(!open)}>
        <CiMenuBurger size={22} />
      </NavItem>
      <OpenedMenu open={open} setOpen={setOpen} />
    </>
  );
};

const OpenedMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const { x } = useSpring({
    x: open ? 0 : 320,
    config: { mass: 1, tension: 210, friction: 20 },
  });

  const close = () => {
    setOpen(false);
  };

  return (
    <a.div
      className="fixed right-0 top-0 w-[320px] h-screen p-6  bg-neutral-950"
      style={{ x }}
    >
      <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-3">
        <h3 className="text-2xl uppercase text-neutral-300">Menu</h3>
        <button className="text-2xl text-neutral-600" onClick={close}>
          <CgClose size={26} />
        </button>
      </div>
      <nav className="flex flex-col gap-4 w-full">
        <Link
          className="text-neutral-400 uppercase text-lg font-semibold"
          href="/"
        >
          ABOUT
        </Link>
        <div className="flex flex-col gap-2">
          <Link
            className="text-neutral-400 uppercase text-lg font-semibold"
            href="/"
          >
            Community
          </Link>
          <div className="flex flex-col gap-2 ml-4">
            <Link
              className="text-neutral-400 uppercase text-sm font-semibold"
              href="/"
            >
              <span className="text-rose-500 mr-2">&gt;</span> Gouvernance
            </Link>
            <Link
              className="text-neutral-400 uppercase text-sm font-semibold"
              href="/"
            >
              <span className="text-rose-500 mr-2">&gt;</span> Hustle Karma
            </Link>
            <Link
              className="text-neutral-400 uppercase text-sm font-semibold"
              href="/"
            >
              <span className="text-rose-500 mr-2">&gt;</span> Community
              Programs
            </Link>
            <Link
              className="text-neutral-400 uppercase text-sm font-semibold"
              href="/"
            >
              <span className="text-rose-500 mr-2">&gt;</span> Proposale Archive
            </Link>
            <Link
              className="text-neutral-400 uppercase text-sm font-semibold"
              href="/"
            >
              <span className="text-rose-500 mr-2">&gt;</span> Chat on Discord
            </Link>
            <Link
              className="text-neutral-400 uppercase text-sm font-semibold"
              href="/"
            >
              <span className="text-rose-500 mr-2">&gt;</span> Chat on Telegram
            </Link>
          </div>
        </div>
        <Link
          className="text-neutral-400 uppercase text-lg font-semibold"
          href="/"
        >
          Tehnology
        </Link>
        <Link
          className="text-neutral-400 uppercase text-lg font-semibold"
          href="/"
        >
          Economics
        </Link>
        <Link
          className="text-neutral-400 uppercase text-lg font-semibold"
          href="/"
        >
          Learn More
        </Link>
      </nav>
    </a.div>
  );
};

export default Menu;
