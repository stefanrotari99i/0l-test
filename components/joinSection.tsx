import Button from "@/components/button";
import Image from "next/image";

const JoinSection = () => {
  return (
    <div className="mx-10  grid grid-cols-1 md:grid-cols-2 gap-20 border border-white/10">
      <div className="w-[50vw] aspect-square relative">
        <Image
          src="/img1.webp"
          alt="hero"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col  justify-around p-10">
        <h2 className="text-6xl text-neutral-100  font-medium text-left max-w-screen-sm">
          Join the Move ecosystem in our open community
        </h2>
        <p className="text-lg font-semibold  ml-auto  text-neutral-500 max-w-screen-sm leading-9 text-right">
          The 0L network is an open source fork of Diem and uses the Move
          programming language. This is a language that is designed to be
          extremely safe in adversarial environments, and accessible to even
          less experienced developers. In terms of safety, which is a core
          concern in Web3 applications, it has built-in formal verification.
        </p>
        <Button className="w-[240px] mt-10 ml-auto" href="/download">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default JoinSection;
