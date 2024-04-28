import { GrApple, GrWindows } from "react-icons/gr";

import Button from "@/components/button";
import Link from "next/link";

const Links = () => {
  return (
    <div className="flex  my-20 flex-col items-start max-w-screen-xl mx-auto justify-center border p-10 border-white/10 w-full h-full">
      <h2 className="text-2xl text-neutral-400 uppercase font-black">
        Download Wallet
      </h2>
      <p className="text-md mt-6 text-neutral-400 max-w-screen-lg leading-8">
        Establish your identity and get rewards with your desktop or notebook
        computer. Download the 0L wallet for Windows or Mac and start earning
        rewards today.
      </p>
      <div className="flex gap-4 mt-6 w-full">
        <Button href="/download" className="w-1/2" icon={<GrWindows />}>
          Download for Windows
        </Button>
        <Button href="/download" className="w-1/2" icon={<GrApple />}>
          Download for Mac
        </Button>
      </div>

      <h2 className="text-2xl text-neutral-400 uppercase font-black mt-10">
        Join the Discussion
      </h2>
      <p className="text-md mt-6 text-neutral-400 max-w-screen-lg leading-8">
        We live 24/7 on our{" "}
        <Link
          className="text-white font-semibold underline"
          href="https://discord.gg/0l"
        >
          Discord
        </Link>
        . Join us there. We are a community of developers, designers, and
        blockchain enthusiasts. We are building the future of decentralized
        finance. Join us and help us build the future.
      </p>

      <h2 className="text-2xl text-neutral-400 uppercase font-black mt-10">
        Proof of Labor
      </h2>
      <p className="text-md mt-6 text-neutral-400 max-w-screen-lg leading-8">
        <Link href={"#"} className="text-white font-semibold underline">
          Help build the 0L community
        </Link>{" "}
        by contributing your time and skills. Whether you are a developer,
        designer, or writer, we have a place for you.{" "}
        <Link href={"#"} className="text-white font-semibold underline">
          Join us
        </Link>{" "}
        o and help us build the future of decentralized finance.
      </p>
    </div>
  );
};

export default Links;
