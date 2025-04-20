import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VoipFaqs = () => {
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
    <div className="grid grid-cols-1 gap-6">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="py-6 px-6 rounded-[16px] cursor-pointer"
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
  );
};

export default VoipFaqs;
