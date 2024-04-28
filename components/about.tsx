const About = () => {
  return (
    <section className="mx-10 flex flex-col mt-10 items-center justify-center">
      <span className="text-md text-neutral-500 font-semibold uppercase">
        0L Network
      </span>
      <h2 className="text-5xl text-neutral-400 uppercase font-black text-center">
        A new opportunity in
        <span className="text-white"> Web3 </span>
        <br /> & <span className="text-white">
          Decentralization
        </span> <br /> is here.
      </h2>
      <p className="text-lg mt-6 text-neutral-300 max-w-screen-lg leading-8 text-center">
        Welcome to 0L, a new Layer 1 blockchain protocol. 0L is open,
        permissionless, and community governed. 0L combines state of the art
        blockchain technology with truly decentralized governance. This is a
        community-driven project with a meaningful commitment to social impact
        and democratic decision-making. If you are looking for a blockchain that
        does things differently, with priorities that reflect your values, join
        0L and help us realize the transformative power of decentralized
        architecture.
      </p>
    </section>
  );
};

export default About;
