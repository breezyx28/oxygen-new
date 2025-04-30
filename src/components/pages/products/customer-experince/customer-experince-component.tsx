import TrustedCompaniesSlider from "@/components/sliders/trusted-companies-slider";
import {
  ArrowCircleUp,
  ArrowRight,
  ArrowUp,
  Call,
  CallIncoming,
  Heart,
  TickCircle,
} from "iconsax-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SliderComponent from "@/components/sliders/slider";
import OutlineButton from "@/components/buttons/outline-button";

export const CustomerExperinceTrustedBy = () => {
  return (
    <div className="flex flex-col pb-[120px] md:gap-y-[30px] gap-y-[50px]">
      <div className="w-full flex md:flex-row flex-col justify-between md:items-center items-start">
        <h3 className="md:max-w-[40%] max-w-full w-full text-white text-[28px] leading-[34px] font-[600]">
          Trusted by forward-thinking companies:
        </h3>
        <div className="md:max-w-[60%] max-w-full md:mt-0 mt-[40px]">
          <TrustedCompaniesSlider />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[12px]">
        <TrustedCustomerExperinceCard />
        <TrustedCustomerExperinceCard />
        <TrustedCustomerExperinceCard />
      </div>
    </div>
  );
};

export const TrustedCustomerExperinceCard = () => {
  return (
    <div className="trusted-card flex items-center bg-gradient-to-r from-white/10 to-transparent py-[16px] pl-[16px] rounded-[16px] border border-white/20">
      <div className="bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center mr-[clamp(.469vw,.625vw,.625vw)]">
        <Heart size="16" color="#FF8A65" variant="Bulk" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[12px] text-white">TrustRadius</h3>
        <p className="text-base leading-[20px] font-[600] text-white">
          #1 Most Loved on TrustRadius
        </p>
      </div>
    </div>
  );
};

export const CustomerExperincePlatformCard = ({
  src,
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  src: string;
  title: string;
  subtitle: string;
}) => (
  <div
    className="relative w-full md:h-[400px] h-[340px] border border-black/20 rounded-[24px] p-[24px] overflow-hidden"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.05)",
    }}
  >
    <div className="absolute right-0 top-0 h-full w-full z-[-1]">
      <div className="relative h-full">
        <img
          src={src}
          alt="Customer Experience"
          className="object-cover absolute w-full h-full"
          width={500}
        />
      </div>
    </div>
    <div className="w-full h-full flex flex-col justify-between items-start">
      <div className="bg-white/10 w-[72px] h-[72px] md:scale-[1] scale-[.8] flex items-center justify-center border border-white/20 rounded-[12px]">
        {icon}
      </div>
      <div className="flex flex-col text-start gap-y-3">
        <h4 className="text-white md:text-3xl text-xl font-bold">{title}</h4>
        <p className="text-white/70 md:text-base text-sm">{subtitle}</p>
      </div>
    </div>
  </div>
);

export const CustomerExperinceCard1 = ({
  img,
  title,
  text,
}: {
  img: string;
  title: string;
  text: string;
}) => (
  <div
    className="flex flex-col gap-y-6 rounded-[24px] p-[24px]"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
    }}
  >
    <div className="w-full h-auto">
      <img src={img} className="h-full w-full object-cover" />
    </div>
    <h3 className="md:text-4xl text-2xl font-bold">{title}</h3>
    <h3 className="md:text-lg text-base">{text}</h3>
  </div>
);

type CustomerExperinceCard2Props = {
  badge: React.ReactNode;
  title: string;
  text: string;
  image: string;
};

export const CustomerExperinceCard2 = ({
  badge,
  title,
  text,
  image,
}: CustomerExperinceCard2Props) => (
  <div className="pt-[40px] flex md:flex-row flex-col justify-between items-start gap-[56px]">
    <div className="flex flex-col gap-y-[clamp(2rem,2.13vw,3rem)]">
      {badge}
      <h3 className="text-black font-bold md:text-5xl text-[24px]">{title}</h3>
      <p className="text-balck/70">{text}</p>
    </div>
    <div className="image-container max-w-[484px] w-full">
      <img src={image} className="w-full h-full rounded-[24px]" />
    </div>
  </div>
);

export const CustomerExperinceToggleFAQ = () => {
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
      <h1 className="md:text-[52px] text-3xl leading-[1.2] text-white md:text-center text-start font-bold">
        Seamless integrations to boost your sales
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

export const CustomerExperinceSlider1Card = () => (
  <div className="w-full flex flex-col gap-4 border py-[14.54px] px-[12.78px] rounded-[14px]">
    <div className="w-full flex justify-between items-start">
      <div className="flex flex-col gap-y-3 text-black/90 md:text-xl text-base mt-2">
        <p className="">Inbound</p>
        <div className="flex items-center gap-1 text-base">
          <ArrowCircleUp size={14} variant="Bold" className="text-green-500" />
          <span className="md:text-base text-sm">68.9% better coaching</span>
        </div>
      </div>
      <div className="p-4 bg-black/5 rounded-full">
        <CallIncoming size={20} variant="Bold" className="text-black/20" />
      </div>
    </div>
    <div className="w-full py-[16px] rounded-[16px] bg-[#f3f3fb] divide divide-x flex justify-between items-center">
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col">
          <p className="md:text-lg text-base text-black leading-[1.2]">
            Test Team
          </p>
          <p className="md:text-[14px] text-[12px] text-black/70 leading-[1.2]">
            37 Calls
          </p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col">
          <p className="md:text-lg text-base text-black leading-[1.2]">
            Test Team
          </p>
          <p className="md:text-[14px] text-[12px] text-black/70 leading-[1.2]">
            37 Calls
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const CustomerExperinceSlider2Card = () => (
  <div className="md:w-full w-[200px] md:p-[32px] p-[22px] md:rounded-[38px] rounded-[22px] border">
    <div className="w-full h-auto flex flex-col md:gap-y-[80px] gap-y-[30px]">
      <div className="flex justify-between items-center">
        <div className="bg-amber-100 md:p-6 p-2 rounded-full">
          <Call
            variant="Bold"
            className="text-amber-400 md:w-[32px] w-[18px]"
          />
        </div>
        <h2 className="text-black/70 md:text-[28px] text-[14px] leading-[1.1]">
          Last month
        </h2>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col md:gap-y-2 gap-y-0">
          <h5 className="md:text-2xl text-[14px] text-black/70">Phone calls</h5>
          <h2 className="text-black/90 md:text-6xl text-2xl">6,513</h2>
        </div>
        <div className="flex items-center gap-1">
          <ArrowCircleUp
            variant="Bold"
            className="text-green-500 md:w-[3px] w-[20px]"
          />
          <span className="md:text-[28px] text-[14px] leading-[1.2]">8%</span>
        </div>
      </div>
    </div>
  </div>
);

export const CustomerExperinceSlider1 = () => {
  const sliderComponent = [
    <CustomerExperinceSlider1Card />,
    <CustomerExperinceSlider1Card />,
    <CustomerExperinceSlider1Card />,
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

export const CustomerExperinceSlider2 = () => {
  const sliderComponent = [
    <CustomerExperinceSlider2Card />,
    <CustomerExperinceSlider2Card />,
    <CustomerExperinceSlider2Card />,
  ];
  return (
    <div className="w-full flex-grow">
      <div className="w-full">
        <SliderComponent
          items={sliderComponent}
          slidesToShow={2.5}
          speed={10000}
          className="py-8"
          autoplay={true}
          pauseOnHover={false}
          rtl={true}
        />
      </div>
    </div>
  );
};

export const CustomerExperinceCard3 = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => (
  <div className="flex items-center md:gap-8 gap-4">
    <div
      className="icon rounded-[0.83vw] md:max-w-[8.229vw] max-w-auto md:max-h-[8.229vh] max-h-auto"
      style={{
        boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
      }}
    >
      <img
        src={"/assets/icons/png/customer-experince/" + icon}
        className="w-auto object-cover"
      />
    </div>
    <div className="content flex flex-col gap-y-2">
      <h2 className="text-black font-bold text-2xl">{title}</h2>
      <span className="text-sm text-black/70">{text}</span>
    </div>
  </div>
);

type CustomerExperinceCard4Props = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  buttonText: any;
};

export const CustomerExperinceCard4 = ({
  title,
  subtitle,
  buttonText,
  icon,
}: CustomerExperinceCard4Props) => (
  <div
    className="p-[24px] rounded-[16px]"
    style={{
      background:
        "linear-gradient(160deg,hsla(0,0%,100%,.1) 60.8%,hsla(0,0%,100%,0) 100.09%)",
    }}
  >
    <div className="flex flex-col md:gap-y-[80px] gap-y-[30px]">
      {icon ?? (
        <CallIncoming
          variant="Bold"
          className="md:w-[45px] w-[24px] text-whit/20"
        />
      )}

      <div className="flex md:flex-row flex-col justify-between md:items-center items-start gap-y-3">
        <div className="flex flex-col md:gap-y-4 gap-y-0">
          <p className="text-white md:text-2xl text-xl font-bold">{title}</p>
          <p className="text-white text-sm">{subtitle}</p>
        </div>
        <OutlineButton
          className="border-white hover:bg-transparent hover:border-white"
          text={
            <div className="flex items-center gap-x-4 text-white">
              <span className="text-sm">{buttonText}</span>
              <ArrowRight className="h-auto" />
            </div>
          }
        />
      </div>
    </div>
  </div>
);

export const CustomerExperinceCard5 = ({ number }: { number: 1 | 2 | 3 }) => (
  <div className="w-full bg-white/10 py-[60px] rounded-[.833vw] flex flex-col items-center justify-center">
    <img
      src={`/assets/images/backgrounds/products/customer-experince-card-${number}.webp`}
    />
  </div>
);
