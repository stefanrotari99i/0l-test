import Button from "@/components/button";
import Link from "next/link";

const Contribute = () => {
  return (
    <div className="px-20 flex flex-col items-center justify-center my-40">
      <p className="text-md text-neutral-400 uppercase font-medium text-center max-w-screen-sm">
        Contribute to the 0L Network
      </p>
      <h2 className="text-6xl text-neutral-100  font-semibold text-center max-w-screen-sm">
        Decide the future of the protocol and build it
      </h2>
      <p className="text-md mt-6 text-neutral-400 font-semibold max-w-screen-lg leading-8 text-center">
        We focus on collective contributions and building things together. That
        means you can join our{" "}
        <Link href="/discord" className="text-white font-semibold underline">
          Discord
        </Link>
        , find a group designing the future, and work together to create a
        network for all of us. The opportunity is ahead of us, and we need your
        help to make it happen.
        <br />
        <br />
        Do you have a passion for blockchain technology?{" "}
        <span className="text-white">
          Are you a developer, a designer, or a writer?
        </span>{" "}
        We have a place for you. Join us and help us build the future of
        decentralized finance.
      </p>
      <Button className="w-[300px] mt-10" href="/download">
        how to contribute
      </Button>
    </div>
  );
};

export default Contribute;
