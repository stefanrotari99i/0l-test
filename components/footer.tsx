import { FaDiscord, FaGithub, FaX } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t flex items-start justify-between gap-10 border-white/10 py-10 px-10 text-center text-neutral-500">
      <Link href="/about">
        <Image src="/Logo-and-mark.png" alt="Logo" width={70} height={40} />
      </Link>
      <nav className="flex items-center gap-10">
        <Link
          className="text-neutral-400 text-sm uppercase font-semibold"
          href="/"
        >
          HOME
        </Link>
        <Link
          className="text-neutral-400 text-sm uppercase font-semibold"
          href="/"
        >
          ECONOMICS
        </Link>
        <Link
          className="text-neutral-400 text-sm uppercase font-semibold"
          href="/"
        >
          HUSTLE KARMA BOUNTIES
        </Link>
        <Link
          className="text-neutral-400 text-sm uppercase font-semibold"
          href="/"
        >
          TECHNOLOGY
        </Link>
        <Link
          className="text-neutral-400 text-sm uppercase font-semibold"
          href="/"
        >
          BLOG
        </Link>
        <Link
          className="text-neutral-400 text-sm uppercase font-semibold"
          href="/"
        >
          COMMUNITY
        </Link>

        <Link
          className="text-neutral-400 text-sm uppercase font-semibold"
          href="/"
        >
          MEDIA ENQUIRIES
        </Link>
      </nav>
      <div className="flex items-center gap-10">
        <Link href="https://twitter.com/0LNetwork">
          <FaGithub size={20} className="text-neutral-400" />
        </Link>
        <Link href="https://twitter.com/0LNetwork">
          <FaDiscord size={20} className="text-neutral-400" />
        </Link>
        <Link href="https://twitter.com/0LNetwork">
          <FaX size={20} className="text-neutral-400" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
