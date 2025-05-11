import { twMerge } from "tailwind-merge";

export const UnifiedInboxCard1 = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div
    className="bg-white/10 p-[32px] rounded-[1.5rem] flex flex-col gap-y-[12px]"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
    }}
  >
    <div className="gap-[32px] flex flex-col">
      {icon}
      <h3 className="text-base font-bold text-white">{title}</h3>
    </div>
    <p className="text-[14px] leading-[1.5] text-white/70">{text}</p>
  </div>
);

export const UnifiedInboxCard2 = ({ dir = "ltr" }: { dir?: "rtl" | "ltr" }) => (
  <div className="bg-white">
    <div className="container-container">
      <div
        className={twMerge(
          "md:pl-[90px] md:pr-[32px] md:py-[60px] pl-[0px] pr-[0px] py-[16px] flex items-center gap-[60px] md:flex-row flex-col-reverse",
          dir === "rtl"
            ? "md:flex-row-reverse flex-col-reverse md:pr-[90px] md:pl-[32px] pl-[0px] pr-[0px]"
            : ""
        )}
      >
        <div className="md:max-w-[800px] max-w-full w-full flex flex-col gap-y-6">
          <h2 className="md:max-w-[300px] max-w-full w-full text-start text-black text-3xl font-bold">
            Access all channels from a single inbox
          </h2>
          <p className="text-base text-black/70">
            Streamline communication by managing all channels (emails, chats,
            social media messages, etc.) from a single interface, reducing the
            need to switch between multiple platforms.
          </p>
        </div>
        <div className="w-full h-auto">
          <img
            src="/assets/images/backgrounds/products/unified-inbox-cover-1.webp"
            className="w-full"
          />
        </div>
      </div>
    </div>
  </div>
);
