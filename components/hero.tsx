import Button from "@/components/button";
import Scene from "@/components/model/scene";
import { TbDownload } from "react-icons/tb";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col  items-start justify-center px-10">
      <Scene />
      <h1 className="text-8xl font-black">
        Open, <span className="text-gradient">Transparent</span>
        <br /> & Community Driven.
      </h1>
      <p className="text-md mt-10 text-neutral-300">
        <span className="text-rose-500 font-bold">&gt;</span> 0L Network, an
        open source fork of Diem. <br />
      </p>
      <p className="text-md mt-2 text-neutral-300">
        {" "}
        <span className="text-rose-500 font-bold">&gt;</span> Truly
        decentralized.
      </p>
      <p className="text-md mt-2 text-neutral-300">
        <span className="text-rose-500 font-bold">&gt;</span> Truly community
        governed.
      </p>
      <Button className="mt-10 w-[310px]" href="/download">
        <TbDownload size={20} />
        Download Carpe
      </Button>
    </section>
  );
};

export default Hero;
