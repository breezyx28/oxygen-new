import { VideoCircle } from "iconsax-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const CustomerCommunicationFadeCard = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <div
    className="bg-white/20 p-[22px] rounded-[16px] flex items-center gap-[12px] border border-white/10"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
    }}
  >
    {icon}
    <h3 className="text-base font-medium text-white">{title}</h3>
  </div>
);

export const CustomerCommunicationToggler = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const data = [
    {
      id: 1,
      src: "/assets/images/backgrounds/products/customer-communication-bg-2.webp",
      title: "Desktop and Browser Experience",
      content: [
        <h3 className="pl-8 border-l-2 border-black md:text-2xl text-xl font-bold transition-all delay-300 ease-in-out duration-300">
          Desktop and Browser Experience
        </h3>,
        <h4 className="pl-8 text-sm text-black/50 md:font-bold font-medium">
          Make phone calls, host video meetings, and send texts. Manage your
          contacts, calendar, files, links and recordings.
        </h4>,
        <button
          type="button"
          className="ml-8 bg-primary-600 px-[24px] py-[16px] rounded-full w-[fit-content] cursor-pointer"
        >
          <div className="flex justify-center items-center gap-2">
            <span className="text-white text-base font-bold">
              Play Video (1:30)
            </span>
            <VideoCircle size={26} variant="Bold" className="text-white" />
          </div>
        </button>,
      ],
    },
    {
      id: 2,
      src: "/assets/images/backgrounds/products/customer-communication-bg-3.webp",
      title: "Mobile Experience",
      content: [
        <h3 className="pl-8 border-l-2 border-black md:text-2xl text-xl font-bold">
          Mobile Experience
        </h3>,
        <h4 className="pl-8 text-sm text-black/50 md:font-bold font-medium">
          Stay connected with customers and teams wherever you are. Take
          business on the go with your phone, contacts, call and text history
          all in one place.
        </h4>,
      ],
    },
    {
      id: 3,
      src: "/assets/images/backgrounds/products/customer-communication-bg-4.webp",
      title: "Conference rooms, desktop phones and headsets",
      content: [
        <h3 className="pl-8 border-l-2 border-black md:text-2xl text-xl font-bold">
          Conference rooms, desktop phones and headsets
        </h3>,
        <h4 className="pl-8 text-sm text-black/50 md:font-bold font-medium">
          Connect our platform and software throughout your business, in
          conference rooms or at your desk with a handset or headset.
        </h4>,
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-y-10">
      <div
        id="customer-communication-toggle-1"
        className="flex md:flex-row flex-col items-center justify-between gap-10"
      >
        <div className="md:max-w-1/3 max-w-full w-full h-auto flex flex-col gap-6">
          {data.map((item: any, index: number) => {
            return activeId === item.id ? (
              <div
                key={index}
                className={twMerge(
                  "border-l transition-all duration-200 ease-out"
                )}
              >
                <div className="flex flex-col gap-y-4">
                  {item.content.map((element: any) => element)}
                </div>
              </div>
            ) : (
              <div
                className="border-l pl-8 md:text-base text-sm text-black"
                onClick={() => setActiveId(item.id)}
              >
                {item?.title}
              </div>
            );
          })}
        </div>
        <div className="">
          <img
            src={data.find((item) => item.id === activeId)?.src}
            className={twMerge("w-full h-auto")}
          />
        </div>
      </div>
    </div>
  );
};

export const CustomerCommunicationToolsCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div
    className="bg-white p-[24px] rounded-[1rem] flex flex-col gap-y-[12px]"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
    }}
  >
    <div className="gap-[16px] flex flex-col">
      {icon}
      <h3 className="md:text-xl text-base font-bold text-black">{title}</h3>
    </div>
    <p className="md:text-[14px] text-[12px] leading-[1.5] text-black/70">
      {text}
    </p>
  </div>
);

export const CustomerCommunicationFeatureCard = ({
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
        background:
          "linear-gradient(180deg,rgba(11,16,41,.14),rgba(11,16,41,0))",
        boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
      }}
    >
      <div
        className="bg-white p-[24px] rounded-[1rem] flex flex-col gap-y-[12px]"
        style={{
          boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
        }}
      >
        <div className="gap-[36px] flex flex-col">
          {icon}
          <h3 className="text-xl font-bold text-black">{title}</h3>
        </div>
        <p className="text-[15px] leading-[1.2] text-black mt-1">{text}</p>
      </div>
    </div>
  </div>
);

export const CustomerCommunicationAnalyticsCard = ({
  number,
}: {
  number: 1 | 2 | 3;
}) => (
  <div className="">
    <img
      src={`/assets/images/backgrounds/products/customer-communication-card-analytics${number}.webp`}
    />
  </div>
);

export const CustomerCommunicationPlatformCard = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div
    className="w-full md:h-[400px] h-[340px] border border-black/20 rounded-[24px] p-[36px]"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.05)",
    }}
  >
    <div className="w-full h-full flex flex-col justify-between items-start">
      <div className="w-[80px] h-[80px] md:scale-[1] scale-[.8] flex items-center justify-center border rounded-[12px]">
        {icon}
      </div>
      <div className="flex flex-col text-start gap-y-3">
        <h4 className="md:text-3xl text-xl font-bold">{title}</h4>
        <p className="text-black/70 md:text-base text-sm">{subtitle}</p>
      </div>
    </div>
  </div>
);

export const CustomerCommunicationTrustedByCard = ({
  text,
  src,
}: {
  text: string;
  src: string;
}) => (
  <div className="flex items-center md:gap-5 gap-4 py-7">
    <img
      src={`/assets/icons/png/customer-communication/${src}`}
      className="md:w-[64px] md:h-[64px] w-[56px] h-[56px]"
    />
    <p className="text-white md:text-xl text-sm">{text}</p>
  </div>
);

export const SliderCard = () => {
  return (
    <div className="w-full py-[24px] px-[32px] rounded-[24px] flex md:flex-row flex-col justify-between items-center md:gap-[60px] gap-[30px] bg-[linear-gradient(100deg,rgba(55,88,249,0.046)_47.8%,rgba(55,88,249,0)_96%)]">
      <div className="flex flex-col md:gap-y-8 gap-y-6 md:max-w-1/2 max-w-full">
        <h3 className="md:text-3xl text-2xl font-bold">
          “DHL’s team uses Nextiva to handle ticketing for all customer shipping
          quotes”
        </h3>
        <div className="flex flex-col">
          <h2 className="md:text-5xl text-2xl font-bold">1.7 billion</h2>
          <span className="text-base text-black/60">Parcels per year</span>
        </div>
      </div>
      <div className="">
        <img
          src="/assets/images/labels/DHL.webp"
          className="w-full rounded-[24px] md:h-[370px] h-auto"
        />
      </div>
    </div>
  );
};
