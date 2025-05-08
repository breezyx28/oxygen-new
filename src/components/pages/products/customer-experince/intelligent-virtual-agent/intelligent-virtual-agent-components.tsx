import { motion, AnimatePresence } from "framer-motion";
import { TickCircle } from "iconsax-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const IntelligentVirtualAgentFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "What is Online Review Management",
      answer:
        "With Nextiva, online review management is the process of tracking, monitoring and responding to all of your customer reviews across all digital channels. It's essential to building a positive digital brand reputation.",
    },
    {
      question: "Which platforms does Nextiva support?",
      answer:
        "Nextiva supports major platforms including Google My Business, Facebook, Yelp, and several industry-specific review sites.",
    },
    {
      question: "Why do you need an online review management platform?",
      answer:
        "A dedicated platform helps you centralize reviews, respond efficiently, and maintain a positive online reputation that influences customer decisions.",
    },
    {
      question: "How do I reply to reviews with Nextiva Review Management?",
      answer:
        "You can respond directly from the Nextiva dashboard with customizable templates or craft personalized responses with just a few clicks.",
    },
    {
      question: "Can I monitor my online reputation?",
      answer:
        "Yes, Nextiva provides real-time alerts and analytics to track your brand's online reputation across multiple platforms.",
    },
    {
      question: "Can multiple team members use Nextiva Review Management?",
      answer:
        "Absolutely, you can invite team members with customizable permission levels to collaborate on review management.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <h1 className="text-primary-900 text-3xl text-center font-bold mb-8">
        Frequently Asked Questions
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="py-2 px-4 rounded-[16px] cursor-pointer"
            style={{ boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)" }}
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-base font-bold">{item.question}</h2>
              <motion.div
                initial={false}
                animate={{ rotate: activeIndex === index ? 0 : 90 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-light ml-4"
              >
                {activeIndex === index ? (
                  <span className="text-gray-600">−</span>
                ) : (
                  <span className="text-gray-600">+</span>
                )}
              </motion.div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-[14px] text-gray-600 leading-[1.3] pb-4">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export const IntelligentVirtualAgentCard1 = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="flex items-center justify-center">
    <div
      className="rounded-[1rem] p-[1px]"
      style={{
        boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
      }}
    >
      <div className="bg-white p-[24px] rounded-[1rem] flex flex-col gap-y-[12px]">
        <div className="gap-[36px] flex flex-col">
          {icon}
          <h3 className="text-xl font-bold text-black">{title}</h3>
        </div>
        <p className="text-[15px] leading-[1.2] text-black mt-1">{text}</p>
      </div>
    </div>
  </div>
);

export const IntelligentVirtualAgentCard2 = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div
    className="bg-white/10 p-[24px] rounded-[1.5rem] flex flex-col gap-y-[12px]"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
    }}
  >
    <div className="gap-[16px] flex flex-col">
      {icon}
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-[14px] leading-[1.5] text-white/70">{text}</p>
  </div>
);

export const IntelligentVirtualAgentCard3 = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div
    className="bg-white p-[24px] rounded-[1.5rem] flex flex-col gap-y-[12px]"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
    }}
  >
    <div className="gap-[16px] flex flex-col">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-[14px] leading-[1.5] text-black/70">{text}</p>
  </div>
);

export const IntelligentVirtualAgentCircle1 = ({
  logo,
}: {
  logo: React.ReactNode;
}) => (
  <div className="w-[117px] h-[117px] bg-white/20 border border-white rounded-full flex items-center justify-center">
    {logo}
  </div>
);

export const IntelligentVirtualAgentCard4 = ({
  icon,
  title,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
}) => (
  <div
    className={twMerge(
      "relative w-full h-full p-[28px] rounded-[24px] bg-[#0b102980] border border-2 border-[linear-gradient(90deg,#4891ff,#a4c8ff 17%,#223d66 99%)]",
      className
    )}
  >
    <div className="w-full h-full inset-0 rounded-[24px]">
      <div className="min-h-[200px] w-full flex flex-col">
        <div className="mb-12">{icon}</div>

        <div className="flex flex-col gap-6">
          <h4 className="text-white text-3xl font-bold">{title}</h4>
          <ul>
            <li className="flex items-center gap-x-6">
              <TickCircle variant="Bold" size={16} className="text-white" />{" "}
              <span className="text-white text-base">
                Be accessible 24/7 to your customers
              </span>
            </li>
            <li className="flex items-center gap-x-6">
              <TickCircle variant="Bold" size={16} className="text-white" />{" "}
              <span className="text-white text-base">
                Reduce call escalations
              </span>
            </li>
            <li className="flex items-center gap-x-6">
              <TickCircle variant="Bold" size={16} className="text-white" />{" "}
              <span className="text-white text-base">
                Reduce avarage handle time and cost
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
