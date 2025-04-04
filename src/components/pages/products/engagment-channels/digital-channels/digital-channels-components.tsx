import Button from "@/components/buttons/button";

export const DigitalChannelsMediaCard = ({
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

export const ManageSocialMedia = ({
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
