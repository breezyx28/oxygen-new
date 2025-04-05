import PageBadge from "@/components/cards/page-badge";
import { Category } from "iconsax-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CustomersReviewsFAQ = () => {
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

type CustomersReviewsPanelProps = {
  badgeText: string;
  title: string;
  image: string;
  subtitle: string;
};

export const CustomersReviewsPanel = ({
  title,
  badgeText,
  subtitle,
  image,
}: CustomersReviewsPanelProps) => (
  <div className="py-[80px] flex md:flex-row flex-col justify-between items-start gap-[75px]">
    <div className="w-[50%] flex flex-col gap-y-[clamp(2rem,2.13vw,3rem)]">
      <PageBadge
        text={badgeText}
        icon={<Category variant="Bold" className="text-primary-600" />}
      />
      <div className="flex flex-col gap-y-2">
        <h3 className="text-black font-bold md:text-[54px] text-[34px] leading-[1.3]">
          {title}
        </h3>
        <p className="text-black/70 text-[15px] leading-[1.2]">{subtitle}</p>
      </div>
    </div>
    <div className="w-[50%] h-[500px]">
      <img
        src={image}
        className="w-auto h-full rounded-[24px] object-contain"
      />
    </div>
  </div>
);
