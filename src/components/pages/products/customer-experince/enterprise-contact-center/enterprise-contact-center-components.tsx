import PageBadge from "@/components/cards/page-badge";
import { StarIcon } from "@/components/icons/star-icon";
import { Award, Category, Microphone2, TickCircle } from "iconsax-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SliderComponent from "@/components/sliders/slider";

export const EnterpriseContactCenterCard1 = () => (
  <div
    className="p-[2rem] rounded-[1rem]"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.05)",
    }}
  >
    <div className="flex flex-col gap-[1.5rem]">
      <div className="flex justify-between items-center">
        <div className="icon">
          <img src="/assets/icons/companies/g2.png" className="w-[60px]" />
        </div>
        <div className="reviews text-black/50 text-sm text-center">
          <p className="">3305+</p>
          <p className="">reviews</p>
        </div>
      </div>
      <hr className="bg-black/20 h-[1px] w-full" />
      <div className="flex justify-between items-center gap-x-10">
        <div className="rate flex items-end gap-1">
          <span className="text-3xl font-bold">4.5</span>{" "}
          <span className="text-[14px] text-black/50 leading-[1.8]">/5</span>
        </div>
        <div className="stars flex items-center gap-x-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <StarIcon key={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const EnterpriseContactCenterCard2 = () => (
  <div className="flex flex-col bg-white rounded-[32px]">
    <div className="top-cover">
      <img
        src="/assets/images/patterns/circle-pattern.png"
        className="w-full object-cover"
      />
    </div>
    <div className="flex flex-col py-[32px] px-[24px] gap-y-4">
      <div className="flex items-center gap-x-2">
        <Microphone2 variant="Bold" size={50} className="text-black" />
        <h3 className="text-3xl font-bold">Voice</h3>
      </div>
      <p className="text-sm text-black/70">
        Ensure every customer feels heard with enhanced voice capabilities,
        including voice bots and context-rich conversations.
      </p>
    </div>
  </div>
);

type EnterpriseContactCenterPanelProps = {
  badgeText: string;
  title: string;
  image: string;
  subtitle: string;
};

export const EnterpriseContactCenterPanel = ({
  title,
  badgeText,
  subtitle,
  image,
}: EnterpriseContactCenterPanelProps) => (
  <div className="py-[80px] flex md:flex-row flex-col justify-between items-start md:gap-[75px] gap-y-0">
    <div className="md:w-[50%] w-full flex flex-col gap-y-[clamp(2rem,2.13vw,3rem)]">
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
    <div className="md:w-[50%] w-full h-[500px]">
      <img
        src={image}
        className="w-auto h-full rounded-[24px] object-contain"
      />
    </div>
  </div>
);

export const EnterpriseContactCenterCard3 = () => (
  <div className="border border-white rounded-[24px] bg-white/20 p-[24px]">
    <div className="flex flex-col gap-y-[32px] items-center">
      <div className="flex md:flex-col flex-row gap-y-1 text-white font-bold text-2xl">
        <p className="">99.9999%</p>
        <p className="">reliability</p>
      </div>
      <div className="flex flex-col items-center text-white/70 font-bold text-base">
        <p className="">For real.</p>
        <p className="">No planned downtime.</p>
      </div>
    </div>
  </div>
);

export const EnterpriseContactCenterCard4 = () => (
  <div className="py-[40px] md:px-[80px] px-[20px] rounded-[32px] bg-white border">
    <div className="flex md:flex-row flex-col-reverse justify-between items-center">
      <div className="md:w-[51%] w-full flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-black md:text-3xl text-xl font-bold">
            Improve CSAT and NPS
          </h3>
          <p className="text-black/80 text-base">
            Route all interactions to the right agents. No more unnecessary call
            escalations, slow transfers, or putting customers on hold.
            Regardless of the complexity of the customer’s request. Nextiva
            Agent Assist helps your agents know what to say.
          </p>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-black/10 totransparent"></div>
        <div className="flex items-center gap-4">
          <div className="p-[14px] rounded-sm bg-black/5">
            <TickCircle size={28} variant="Bold" className="text-primary-600" />
          </div>
          <h5 className="leading-[1.1]">
            <strong>Outcome</strong>: Increase customer loyalty, repeated
            business and renewals
          </h5>
        </div>
      </div>
      <div className="md:w-[36%] w-full">
        <img
          src="/assets/images/backgrounds/products/enterprise-contact-center-cover-1.webp"
          className=""
        />
      </div>
    </div>
  </div>
);

export const EnterpriseContactCenterCard5 = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div
    className="w-full bg-black/10 p-[24px] rounded-[.5rem] flex flex-col gap-y-12"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
    }}
  >
    {icon}
    <div className="gap-[8px] flex flex-col">
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="text-[14px] leading-[1.5] text-black/70">{text}</p>
    </div>
  </div>
);

export const EnterpriseContactCenterToggleFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqItems = [
    {
      icon: <TickCircle variant="Bold" className="text-white/50" />,
      question: "Payment Gateways",
      content: [
        "/assets/icons/companies/stripe-logo.webp",
        "/assets/icons/companies/paypal-logo.webp",
        "/assets/icons/companies/authorize-logo.webp",
        "/assets/icons/companies/adyen-logo.webp",
        "/assets/icons/companies/braintree-logo.webp",
        "/assets/icons/companies/visa-logo.webp",
        "/assets/icons/companies/mastercard-logo.webp",
        "/assets/icons/companies/american-express-logo.webp",
        "/assets/icons/companies/applepay-logo.webp",
        "/assets/icons/companies/googlepay-logo.webp",
      ],
    },
    {
      icon: <TickCircle variant="Bold" className="text-white/50" />,
      question: "Shipping & logistics",
      content: [
        "/assets/icons/companies/adyen-logo.webp",
        "/assets/icons/companies/braintree-logo.webp",
        "/assets/icons/companies/visa-logo.webp",
        "/assets/icons/companies/mastercard-logo.webp",
      ],
    },
    {
      icon: <TickCircle variant="Bold" className="text-white/50" />,
      question: "Digital channels",
      content: [
        "/assets/icons/companies/adyen-logo.webp",
        "/assets/icons/companies/braintree-logo.webp",
        "/assets/icons/companies/visa-logo.webp",
        "/assets/icons/companies/mastercard-logo.webp",
        "/assets/icons/companies/american-express-logo.webp",
        "/assets/icons/companies/applepay-logo.webp",
        "/assets/icons/companies/googlepay-logo.webp",
      ],
    },
    {
      icon: <TickCircle variant="Bold" className="text-white/50" />,
      question: "CRMs & CDPs",
      content: [
        "/assets/icons/companies/stripe-logo.webp",
        "/assets/icons/companies/paypal-logo.webp",
        "/assets/icons/companies/authorize-logo.webp",
        "/assets/icons/companies/adyen-logo.webp",
        "/assets/icons/companies/braintree-logo.webp",
        "/assets/icons/companies/visa-logo.webp",
        "/assets/icons/companies/mastercard-logo.webp",
        "/assets/icons/companies/american-express-logo.webp",
        "/assets/icons/companies/applepay-logo.webp",
        "/assets/icons/companies/googlepay-logo.webp",
      ],
    },
    {
      icon: <TickCircle variant="Bold" className="text-white/50" />,
      question: "Marketing automation",
      content: [
        "/assets/icons/companies/braintree-logo.webp",
        "/assets/icons/companies/visa-logo.webp",
        "/assets/icons/companies/mastercard-logo.webp",
        "/assets/icons/companies/american-express-logo.webp",
        "/assets/icons/companies/applepay-logo.webp",
        "/assets/icons/companies/googlepay-logo.webp",
      ],
    },
    {
      icon: <TickCircle variant="Bold" className="text-white/50" />,
      question: "Survey & Reviews",
      content: [
        "/assets/icons/companies/stripe-logo.webp",
        "/assets/icons/companies/paypal-logo.webp",
        "/assets/icons/companies/authorize-logo.webp",
        "/assets/icons/companies/adyen-logo.webp",
        "/assets/icons/companies/braintree-logo.webp",
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const LogoCircleComponent = ({ src }: { src: string }) => (
    <div className="w-[clamp(3.75rem,3.54vw,5rem)] h-[clamp(3.75rem,3.54vw,5rem)] flex flex-col items-center justify-center p-[clamp(.625rem,.89vw,1.25rem)] bg-white rounded-full">
      <img src={src} className="w-[60px] h-[60px] object-contain" />
    </div>
  );

  return (
    <div className="w-full flex flex-col gap-y-10">
      <h1 className="md:text-[52px] text-3xl leading-[1.2] text-white text-start font-bold">
        Seamless integrations to boost your sales and support
      </h1>

      <div className="flex flex-col gap-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 p-[clamp(1.25rem,1.77vw,2.5rem)] rounded-[24px] cursor-pointer"
            style={{ boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)" }}
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center gap-x-4">
                {item.icon}
                <h2 className="md:text-3xl text-xl text-white font-bold">
                  {item.question}
                </h2>
              </div>
              <motion.div
                initial={false}
                animate={{ rotate: activeIndex === index ? 0 : 90 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-light ml-4"
              >
                {activeIndex === index ? (
                  <span className="text-white">−</span>
                ) : (
                  <span className="text-white">+</span>
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
                  className="overflow-hidden mt-6"
                >
                  {item.content.length >= 10 ? (
                    <div className="grid md:grid-cols-10 grid-cols-3 gap-[15px]">
                      {item.content.slice(0, 10).map((logo, index) => (
                        <LogoCircleComponent key={index} src={logo} />
                      ))}{" "}
                      <span className="ml-[15px] text-white text-2xl">
                        + many more!
                      </span>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-10 grid-cols-3 gap-[15px]">
                      {item.content.map((logo, index) => (
                        <LogoCircleComponent key={index} src={logo} />
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export const EnterpriseContactCenterSliderCard1 = () => (
  <div className="p-[16px] border rounded-[16px] max-w-[250px] md:max-w-full w-full">
    <h4 className="text-xl font-bold">Modern Architecture Platform</h4>
    <p className="mt-4 text-base text-black/70">
      Benefit from continuous enhancements with 150 features delivered last
      year, contrasting with legacy companies that may take months to implement
      small capabilities.
    </p>
  </div>
);

export const EnterpriseContactCenterSlider1 = () => {
  const sliderComponent = [
    <EnterpriseContactCenterSliderCard1 />,
    <EnterpriseContactCenterSliderCard1 />,
    <EnterpriseContactCenterSliderCard1 />,
  ];
  return (
    <div className="w-full flex-grow">
      <div className="w-full">
        <SliderComponent
          items={sliderComponent}
          slidesToShow={3.3}
          speed={10000}
          className="py-8"
          autoplay={true}
          pauseOnHover={false}
        />
      </div>
    </div>
  );
};

export const EnterpriseContactCenterCard6 = () => (
  <div className="p-[24px] rounded-[24px] bg-black/5">
    <div className="flex flex-col gap-10">
      <div className="flex flex-col md:gap-5 gap-3">
        <div className="stars">
          <img
            src="/assets/icons/companies/g2.png"
            className="md:w-[40px] w-[30px]"
          />
        </div>
        <div className="rate flex items-center md:justify-between justify-start gap-2">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
      <div className="flex flex-col md:gap-5 gap-3">
        <p className="rate md:text-5xl text-4xl font-bold">
          4.8 <span className="text-xl">/5</span>
        </p>
        <div className="rate text-black/50 flex items-center gap-2">
          <Award size={18} variant="Bold" />
          <span className="text-sm">Based on 5,310+ reviews</span>
        </div>
      </div>
    </div>
  </div>
);
