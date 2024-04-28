"use client";

import { a, animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useMeasure from "react-use-measure";

const faqItems = [
  {
    question: "Who are you?",
    answer:
      "0L is a community-driven open source project. There is no corporate sponsor, no venture capital, no foundation. Everyone involved in this project is here because we believe in the power of decentralized architecture and community governance.",
  },
  {
    question: "How is this project governed?",
    answer:
      "The community will set the path for the project. If you want a voice in the project, all you need to do is participate. If you don’t like what’s happening with 0L, don’t sit on the sidelines. Get involved, use your influence, help us build a better project. ",
  },
  {
    question: "How did 0L get started?",
    answer:
      "0L is a fork of the open source codeset that was created by the Diem Association for the Diem network (previously known as “Libra.”). Work on the project began in 2019. You can learn more about the technology and how it has been modified for use as a public network by visiting the Technology Overview page.",
  },
  {
    question: "Why were you working privately for so long?",
    answer:
      "This is not true. We actually worked publicly the whole time since we forked the project. We were never private, just quiet. Some people joined early, and volunteered time, others checked it out and decided not to contribute.",
  },
  {
    question: "What’s with the emphasis on labor?",
    answer:
      "This project is experimenting with a more labor centric approach to rewards; it might be an utter failure, but it also could work out that the funds distribute more widely then you see in other networks as that labor ramps up. Given that its an experiment, analytics matter a lot. We have a number of people working toward making whole thing more transparent; in practice if we want a community driven project then we need to a) make the state of the system observable and b) make it possible for the community to make changes (by building stuff)",
  },
  {
    question: "When was Genesis?",
    answer: "Genesis occurred on 21 October 2021.",
  },
  {
    question: "Why did you wait two weeks before opening up?",
    answer:
      "We wanted to make sure the network would actually stay up. Since by the protocol no validator could be onboarded within 14 days anyways, we took that as an opportunity to test. The network actually had to abort 3 times before this final genesis worked. So, that’s the reason",
  },
];

const FAQ = () => {
  return (
    <div className="px-10 my-40">
      <h2 className="text-8xl text-neutral-500 font-semibold uppercase ">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <h3 className="text-5xl uppercase text-neutral-200 font-semibold">
          Community &gt;
        </h3>
        <div className="col-span-2 flex flex-col items-start gap-4 w-full">
          {faqItems.map((item, i) => (
            <FaqItem key={i} {...item} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 mt-20 md:grid-cols-3 gap-10 mt-10">
        <h3 className="text-5xl uppercase text-neutral-200 font-semibold">
          Validators &gt;
        </h3>
        <div className="col-span-2 flex flex-col items-start gap-4 w-full">
          {faqItems.map((item, i) => (
            <FaqItem key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

const FaqItem = ({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y, background, color, rotate } = useSpring({
    from: {
      height: 0,
      opacity: 0,
      y: 0,
      background: "transparent",
      color: "white",
      rotate: 0,
    },
    to: {
      background: isOpen ? "white" : "transparent",
      color: isOpen ? "black" : "white",
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
      rotate: isOpen ? 180 : 0,
    },
  });

  return (
    <div className="flex flex-col overflow-hidden items-start  cursor-pointer  w-full border-b border-white/10 relative">
      <a.button
        onClick={() => setOpen(!isOpen)}
        className="text-2xl font-semibold text-neutral-200 uppercase w-full text-left p-4"
        style={{ background, color }}
      >
        {question}
      </a.button>
      <a.div className="absolute right-4 top-4" style={{ rotate, color }}>
        <MdOutlineKeyboardArrowDown size={32} />
      </a.div>
      <animated.div
        className="overflow-hidden will-change-transform "
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div
          ref={ref}
          style={{ y }}
          className="text-neutral-500 font-semibold bg-black/60 p-6"
        >
          {answer}
        </a.div>
      </animated.div>
    </div>
  );
};

export default FAQ;
