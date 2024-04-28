import About from "@/components/about";
import Contribute from "@/components/contributeSection";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import JoinSection from "@/components/joinSection";
import Links from "@/components/links";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Links />
      <h3 className="text-8xl my-20 text-neutral-400 uppercase font-black text-center">
        A new opportunity in
        <span className="text-gradient">Web3</span> &{" "}
        <span className="text-gradient">Decentralization</span> is here.
      </h3>
      <FAQ />
      <JoinSection />
      <Contribute />
    </main>
  );
}
