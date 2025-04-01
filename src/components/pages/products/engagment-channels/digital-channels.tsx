import Button from "@/components/buttons/button";
import ComputerScreenIcon from "@/components/icons/computer-screen-icon";
import TrustedBy from "@/components/sliders/trusted-by";
import {
  ArrowCircleUp2,
  Global,
  Graph,
  Message,
  Messages3,
  Messenger,
  Notification,
  PresentionChart,
  Profile2User,
  Refresh,
  Sms,
  Star1,
  TickCircle,
  Ticket,
} from "iconsax-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import "../../../../styles/products-digital-channels.css";
import SliderComponent from "@/components/sliders/slider";
import PartnersSlider from "@/components/sections/partners-slider";
import SelectOptions from "@/components/inputs/select/select-options";
import PageBadge from "@/components/cards/page-badge";

export default function DigitalChannels() {
  const [activeTab, setActiveTab] = useState("Social Media");

  const tabs = [
    "Social Media",
    "Chat",
    "AI live chat",
    "Email Ticketing",
    "Reviews",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Social Media":
        return (
          <ManageSocialMedia
            title="Manage all social media"
            image="/assets/images/backgrounds/products/social-posts-img.png"
            panels={[
              {
                id: 1,
                icon: (
                  <Profile2User
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Schedule content",
                subtitle:
                  "Schedule your posts to be delivered on time, everytime.",
              },
              {
                id: 2,
                icon: (
                  <ArrowCircleUp2
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Publish content",
                subtitle:
                  "Create content and adapt to all channels to engage and build your following.",
              },
              {
                id: 3,
                icon: (
                  <Messages3
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Monitor conversations",
                subtitle:
                  "Never miss a reply, comment or message again. Read and respond across all channels instantly.",
              },
              {
                id: 4,
                icon: (
                  <PresentionChart
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Trends",
                subtitle:
                  "Be the first to spot popular social trends to maximize growth.",
              },
            ]}
          />
        );
      case "Chat":
        return (
          <ManageSocialMedia
            title="Chat on any messaging app"
            image="/assets/images/backgrounds/products/chat-img.png"
            panels={[
              {
                id: 1,
                icon: (
                  <Messages3
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Integrate messenger",
                subtitle:
                  "Facebook, Twitter, WhatsApp and more- never miss a conversation again.",
              },
              {
                id: 2,
                icon: (
                  <Messages3
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Read & respond",
                subtitle:
                  "Provide your customers with timely, relevant and detailed responses.",
              },
              {
                id: 3,
                icon: (
                  <Profile2User
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Lead capture",
                subtitle:
                  "Grow revenue by making your products and services available via any messaging app.",
              },
              {
                id: 4,
                icon: (
                  <TickCircle
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Automate",
                subtitle:
                  "Deliver better customer experiences and automate responses for basic inquiries.",
              },
            ]}
          />
        );
      case "AI live chat":
        return (
          <ManageSocialMedia
            title="AI-powered live chat"
            image="/assets/images/backgrounds/products/ai-chat.png"
            panels={[
              {
                id: 1,
                icon: (
                  <Message variant="Bold" size={16} className="text-black/70" />
                ),
                title: "Listen",
                subtitle:
                  "Be available when your customers need you most with chat that’s always on.",
              },
              {
                id: 2,
                icon: (
                  <Profile2User
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Route",
                subtitle:
                  "Receive chats in real-time, routed to the team members best suited to tackle their challenges.",
              },
              {
                id: 3,
                icon: (
                  <TickCircle
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Resolve",
                subtitle:
                  "Instantly resolve customer complaints or inquiries, without missing a beat.",
              },
              {
                id: 4,
                icon: <Refresh size={16} className="text-black/70" />,
                title: "360-degree view",
                subtitle: "Gain a complete view of your website visitors.",
              },
            ]}
          />
        );
      case "Email Ticketing":
        return (
          <ManageSocialMedia
            title="Fully-integrated email ticketing"
            image="/assets/images/backgrounds/products/email-ticketing.png"
            panels={[
              {
                id: 1,
                icon: (
                  <Message variant="Bold" size={16} className="text-black/70" />
                ),
                title: "Single Inbox",
                subtitle:
                  "Manage incoming emails and tickets from the same inbox as your other service channels.",
              },
              {
                id: 2,
                icon: (
                  <Profile2User
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "AI powered responses",
                subtitle:
                  "Leverage AI that automatically replies to customers and resolves issues without any manual input.",
              },
              {
                id: 3,
                icon: (
                  <Notification
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Reminders",
                subtitle:
                  "Receive real-time alerts on incoming cases. Set reminders to ensure all issues are handled.",
              },
              {
                id: 4,
                icon: (
                  <Graph variant="Bold" size={16} className="text-black/70" />
                ),
                title: "Analytics",
                subtitle:
                  "Follow tickets from a single dashboard and monitor your teams performance.",
              },
            ]}
          />
        );
      case "Reviews":
        return (
          <ManageSocialMedia
            title="Monitor every review"
            image="/assets/images/backgrounds/products/reviews.png"
            panels={[
              {
                id: 1,
                icon: (
                  <Sms variant="Bold" size={16} className="text-black/70" />
                ),
                title: "One inbox",
                subtitle:
                  "Bring e-mail onto the same platform you use for all your digital conversations.",
              },
              {
                id: 2,
                icon: (
                  <Ticket variant="Bold" size={16} className="text-black/70" />
                ),
                title: "Auto ticketing",
                subtitle:
                  "Turn incoming e-mails into tickets that are assigned & prioritized immediately.",
              },
              {
                id: 3,
                icon: (
                  <PresentionChart
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Performance",
                subtitle:
                  "Analyze resolution times, improve your operational efficiency, and build trust with your customers.",
              },
              {
                id: 4,
                icon: (
                  <Profile2User
                    variant="Bold"
                    size={16}
                    className="text-black/70"
                  />
                ),
                title: "Intelligent routing",
                subtitle:
                  "Assign roles and route reviews to you or your team members– all from your admin portal.",
              },
            ]}
          />
        );
      default:
        return <div>Select a tab</div>;
    }
  };
  return (
    <>
      <section id="products-digital-channels" className="h-auto w-full">
        <div className="container-container pt-[120px]">
          <div className="head flex flex-col justify-center items-center gap-y-[8px]">
            <PageBadge
              icon={<ComputerScreenIcon className="md:w-[20px] w-[16px]" />}
              text="Digital engagement"
            />
            <h3 className="md:text-[58px] text-[42px] font-bold text-center leading-[1.2]">
              Connect on any digital channel
            </h3>
            <div className="max-w-[720px]">
              <p className="text-center text-black/70 md:text-[20px] text-[14px]">
                Resolve issues instantly, keep customers happy, and increase
                team efficiency with AI-powered chatbots for sales and support.
              </p>
            </div>
            <Button
              text="Learn how it works"
              className="mt-[clamp(2rem,2.13vw,3rem)] mb-[60px]"
            />
          </div>

          <div className="hero relative w-full h-full rounded-[32px] flex flex-col items-center justify-center">
            <img
              src="/assets/images/backgrounds/products/digital-channels-hero.png"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <section id="products-digital-channels-trust-slider">
        <div className="container-container pt-[70px] !text-black">
          <TrustedBy />
        </div>
      </section>

      <section id="products-digital-channels-media">
        <div className="container-container container-narrow">
          <div className="flex flex-col gap-y-[32px]">
            <h1 className="text-start md:text-[53px] text-[28px] font-bold leading-[1]">
              Meet your customers on every channel, wherever they are.
            </h1>
            <div className="grid md:grid-cols-5 grid-cols-1 gap-[1rem]">
              <DigitalChannelsMediaCard
                icon={
                  <Message
                    size="32"
                    variant="Bold"
                    className="text-primary-600"
                  />
                }
                text={"Deliver better service with AI-powered chat."}
              />
              <DigitalChannelsMediaCard
                icon={
                  <Messenger
                    size="32"
                    variant="Bold"
                    className="text-primary-600"
                  />
                }
                text={"Engage prospects and customers on preferred messengers."}
              />
              <DigitalChannelsMediaCard
                icon={
                  <Global
                    size="32"
                    variant="Bold"
                    className="text-primary-600"
                  />
                }
                text={"Turn social media interactions into revenue."}
              />
              <DigitalChannelsMediaCard
                icon={
                  <Star1
                    size="32"
                    variant="Bold"
                    className="text-primary-600"
                  />
                }
                text={"Turn all feedback and reviews into fuel for growth."}
              />
              <DigitalChannelsMediaCard
                icon={
                  <Sms size="32" variant="Bold" className="text-primary-600" />
                }
                text={"Manage all messages from a unified inbox."}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="products-digital-channels-consumers"
        className="relaive w-full h-full"
      >
        <div className="relative h-auto w-full bg-[url(/assets/images/backgrounds/products/digital-channels-bg.png)]">
          <div className="relative container-container container-narrow h-auto flex flex-col justify-center items-center gap-[40px] z-20">
            <img
              src="/assets/images/backgrounds/products/75.png"
              className="max-w-[470px] w-full"
            />
            <h2 className="text-white text-center md:text-[48px] text-[24px] font-bold leading-[1.2]">
              of millennial consumers prefer <br />
              digital channels over voice
            </h2>
          </div>
        </div>
      </section>

      <section id="products-digital-channels-tab">
        <div className="w-full">
          <div className="md:bg-[#f9fafe] bg-transparent pt-[80px] md:border-b border-none">
            <div className="md:px-0 px-[40px] flex justify-center items-center mb-8">
              <div className="text-2xl font-bold">
                Engage your customers anywhere
              </div>
            </div>

            <div className="container-container mb-8">
              <div className="w-full md:flex hidden justify-between gap-[8px]">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={twMerge(
                      "w-full px-[10px] py-[2rem] cursor-pointer font-[600] transition-all duration-100 ease-in-out border-b-2 border-b-transparent",
                      activeTab === tab
                        ? " border-primary-600 text-primary-600"
                        : "text-gray-500"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <SelectOptions
                className="w-full md:hidden flex"
                onChange={(e: any) => setActiveTab(e.currentTarget.value)}
                options={[
                  { id: 1, value: "Chat", text: "Chat" },
                  { id: 2, value: "AI live chat", text: "AI live chat" },
                  { id: 3, value: "Email Ticketing", text: "Email Ticketing" },
                  { id: 4, value: "Reviews", text: "Reviews" },
                  {
                    id: 5,
                    value: "Social Media",
                    text: "Social Media",
                    selected: true,
                  },
                ]}
              />
            </div>
          </div>
          <div className="container-container">{renderContent()}</div>
        </div>
      </section>

      <section className="w-full relative">
        <div className="w-full relative">
          <img
            src="/assets/images/backgrounds/products/background.png"
            className="w-full h-full object-cover absolute md:relative"
            alt="Background"
          />

          <div className="md:absolute relative md:inset-0 container-narrow h-full flex flex-col">
            <div className="container-container mt-[10%]">
              <h3 className="text-white md:text-[48px] text-[32px] font-bold text-center">
                Solve customer questions faster. Deliver personalized
                experiences. Only with Nextiva A
              </h3>
            </div>

            <div className="product_digital_slider w-full flex-grow">
              <div className="w-full">
                <SliderComponent
                  items={sliderComponent}
                  slidesToShow={3.2}
                  speed={2500}
                  className="py-8"
                  autoplay={false}
                />
              </div>
            </div>

            <div className="container-container w-full mb-[10%]">
              <div className="flex md:flex-row flex-col md:gap-[16px] gap-[58px]">
                <div className="flex flex-col gap-y-[40px]">
                  <h3 className="text-white md:text-[44px] text-[32px] font-[800] leading-[1.2]">
                    AI is critical for managing digital conversations
                  </h3>
                  <Button text="Start using AI" />
                </div>

                <div className="w-full flex flex-col gap-y-[32px]">
                  <div className="max-w-[490px] w-full flex justify-between items-center gap-[8px] p-[24px] bg-white rounded-[16px]">
                    <h5 className="text-[42px] font-bold">50%</h5>
                    <p className="text-black/70 text-base w-[50%]">
                      Reduction of manual touches by customer agents.
                    </p>
                  </div>
                  <div className="max-w-[490px] w-full flex justify-between items-center gap-[8px] p-[24px] bg-white rounded-[16px]">
                    <h5 className="text-[42px] font-bold">50%</h5>
                    <p className="text-black/70 text-base w-[50%]">
                      Reduction of manual touches by customer agents.
                    </p>
                  </div>
                  <div className="max-w-[490px] w-full flex justify-between items-center gap-[8px] p-[24px] bg-white rounded-[16px]">
                    <h5 className="text-[42px] font-bold">50%</h5>
                    <p className="text-black/70 text-base w-[50%]">
                      Reduction of manual touches by customer agents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnersSlider />

      <section
        id="product-cta-banner"
        className="container-container md:min-h-[100dvh] min-h-screen h-full w-full flex flex-col items-center justify-center"
      >
        <div className="relative w-full md:h-[448px] h-full flex flex-col justify-center items-center">
          <img
            src="/assets/images/backgrounds/pricing-help-cta.webp"
            className="absolute w-full md:h-auto h-full top-0 left-0 z-10 object-cover md:rounded-none rounded-[32px]"
          />
          <div className="relative h-full flex flex-col items-center text-center justify-center md:py-[72px] py-[44px] md:px-[105px] px-[50px] z-20">
            <h3 className="text-white md:text-[52px] text-[34px] font-[600] leading-[1.2]">
              Nextiva powers 1 million+ users and billions of interactions
              annually.
            </h3>
            <p className="text-white/70 text-[16px] font-[500] text-center mt-[clamp(16px,1.25vw,32px)]">
              See how Nextiva can help your business deliver exceptional
              experiences as you engage, market, sell, and service.
            </p>
            <div className="md:w-auto w-full flex md:flex-row flex-col gap-4 mt-[32px] ">
              <a
                href="#"
                role="button"
                className="rounded-full border border-primary-600 bg-white text-[1.25rem] text-primary-600 font-[600] hover:text-white hover:bg-primary-600 py-[1.25rem] md:px-[2rem] px-[1rem] transition-all duration-200 ease-in-out"
              >
                Get My Demo
              </a>
              <a
                href="#"
                role="button"
                className="rounded-full border border-white bg-transparent text-[1.25rem] text-white font-[600] hover:bg-primary-600 hover:border-primary-600 py-[1.25rem] md:px-[2rem] px-[1rem] transition-all duration-200 ease-in-out"
              >
                See Price
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const sliderComponent = [
  <div className="h-[250px] md:w-full w-[314px] md:px-[36px] px-[20px] flex flex-col justify-center gap-y-[12px] rounded-[32px] bg-gradient-to-r from-amber-100 to-zinc-50">
    <div className="flex items-center gap-[9px]">
      <img
        src="/assets/icons/png/yellow-stars-icon.png"
        width={53}
        height={53}
      />
      <h4 className="text-black md:text-[24px] text-[22px] font-extrabold leading-[1.2]">
        Ai powered message routing
      </h4>
    </div>
    <p className="text-black/70 text-start text-base mb-[18px]">
      You should consider calling about a quote sent to Amy today at 11 AM
      yesterday.
    </p>
    <div className="w-full flex items-center gap-[8px] bg-white rounded-[14px] px-[4px]">
      <p className="text-[16px] font-bold px-[12px] py-[8px] bg-gradient-to-b from-amber-100 to-zinc-50 rounded-[12px]">
        93%
      </p>
      <p className="mt-[2rem] text-[15px] text-black/90 font-[500]">
        chance of winning deal
      </p>
    </div>
  </div>,
  <div className="h-[250px] md:w-full w-[314px] md:px-[36px] px-[20px] flex flex-col justify-center gap-y-[12px] rounded-[32px] bg-gradient-to-r from-green-100 to-zinc-50">
    <div className="flex items-center gap-[9px]">
      <img src="/assets/icons/png/green-star-icon.png" width={53} height={53} />
      <h4 className="text-black md:text-[24px] text-[22px] font-extrabold leading-[1.2]">
        Ai powered message routing
      </h4>
    </div>
    <p className="text-black/70 text-start text-base mb-[18px]">
      You should consider calling about a quote sent to Amy today at 11 AM
      yesterday.
    </p>
    <div className="w-full flex items-center gap-[8px] bg-white rounded-[14px] px-[4px]">
      <p className="text-[16px] font-bold px-[12px] py-[8px] bg-gradient-to-b from-green-100 to-zinc-50 rounded-[12px]">
        93%
      </p>
      <p className="mt-[2rem] text-[15px] text-black/90 font-[500]">
        chance of winning deal
      </p>
    </div>
  </div>,
  <div className="h-[250px] md:w-full w-[314px] md:px-[36px] px-[20px] flex flex-col justify-center gap-y-[12px] rounded-[32px] bg-gradient-to-r from-blue-100 to-zinc-50">
    <div className="flex items-center gap-[9px]">
      <img
        src="/assets/icons/png/yellow-stars-icon.png"
        width={53}
        height={53}
      />
      <h4 className="text-black md:text-[24px] text-[22px] font-extrabold leading-[1.2]">
        Ai powered message routing
      </h4>
    </div>
    <p className="text-black/70 text-start text-base mb-[18px]">
      You should consider calling about a quote sent to Amy today at 11 AM
      yesterday.
    </p>
    <div className="w-full flex items-center gap-[8px] bg-white rounded-[14px] px-[4px]">
      <p className="text-[16px] font-bold px-[12px] py-[8px] bg-gradient-to-b from-blue-100 to-zinc-50 rounded-[12px]">
        93%
      </p>
      <p className="mt-[2rem] text-[15px] text-black/90 font-[500]">
        chance of winning deal
      </p>
    </div>
  </div>,
];

const DigitalChannelsMediaCard = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div
    className="bg-white p-[22px] rounded-[1.5rem] flex flex-col gap-y-[12px]"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
    }}
  >
    <div className="gap-[32px] flex flex-col">
      {icon}
      <h3 className="font-bold text-black">Live Chat</h3>
    </div>
    <p className="text-[14px]">{text}</p>
  </div>
);

type ManageSocialMediaProps = {
  title: string;
  image: string;
  panels: {
    id: number;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
  }[];
};

const ManageSocialMedia = ({
  title,
  image,
  panels,
}: ManageSocialMediaProps) => (
  <div className="py-[80px] flex md:flex-row flex-col justify-between items-center gap-[56px]">
    <div className="flex flex-col gap-y-[clamp(2rem,2.13vw,3rem)]">
      <h3 className="text-black font-extrabold md:text-[38px] text-[24px]">
        {title}
      </h3>
      <div className="panel_content_grid relative grid md:grid-cols-2 grid-cols-1 gap-[40px]">
        {panels.map((item: any) => (
          <div className="flex flex-col gap-y-[8px]" key={item.id}>
            <div className="flex items-center gap-x-[4px]">
              {item.icon}
              <h4 className="text-black text-[16px] font-bold">{item.title}</h4>
            </div>
            <p className="text-[14px] text-black/70 mb-[12px]">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
      <Button text="Learn more" />
    </div>
    <div className="image-container max-w-[484px] w-full">
      <img src={image} className="w-full h-full rounded-[24px]" />
    </div>
  </div>
);
