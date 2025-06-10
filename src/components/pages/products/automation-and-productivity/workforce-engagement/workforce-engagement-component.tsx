import { Star1 } from "iconsax-react";

type WorkforceEnegagementCard1Props = {
  icon?: React.ReactNode;
  text: string;
  title: string;
};

export const WorkforceEnegagementCard1 = ({
  icon,
  title,
  text,
}: WorkforceEnegagementCard1Props) => (
  <div className="rounded-[1.5rem] bg-[#0b10291a] p-[32px]">
    <div className="flex flex-col gap-y-[103px]">
      <div className="icon">
        <div className="w-[fit-content] p-4 bg-primary-600 rounded-full">
          {icon ?? <Star1 variant="Bold" className="text-white" />}
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-black/70 text-base">{text}</p>
      </div>
    </div>
  </div>
);

type WorkforceEnegagementCard2Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const WorkforceEnegagementCard2 = ({
  icon,
  title,
  text,
}: WorkforceEnegagementCard2Props) => (
  <div className="flex flex-col items-start space-y-12 border-l pl-[32px]">
    {icon}
    <div className="space-y-3">
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="text-black/70 text-base">{text}</p>
    </div>
  </div>
);

type WorkforceEnegagementCard3Props = {
  icon?: React.ReactNode;
  title: string;
  content: WorkforceEnegagementCard2Props[];
};

export const WorkforceEnegagementCard3 = ({
  content,
  icon,
  title,
}: WorkforceEnegagementCard3Props) => (
  <div className="flex items-start justify-between gap-[40px]">
    <div className="flex flex-col gap-y-[39px] md:max-w-[300px] max-w-full">
      {icon}
      <h4 className="text-5xl font-bold">{title}</h4>
    </div>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-[50px]">
      {content.map((items: WorkforceEnegagementCard2Props, index: number) => (
        <WorkforceEnegagementCard2
          key={index}
          icon={items.icon}
          title={items.title}
          text={items.text}
        />
      ))}
    </div>
  </div>
);

type WorkforceEnegagementCard4Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export const WorkforceEnegagementCard4 = ({
  icon,
  title,
  text,
}: WorkforceEnegagementCard4Props) => (
  <div className="bg-[#0b10290d] p-[24px] flex flex-col items-start gap-y-[32px] rounded-[1.5rem]">
    <div className="rounded-full bg-primary-600 p-3">{icon}</div>
    <div className="space-y-3">
      <h4 className="text-base font-bold">{title}</h4>
      <p className="text-black/70 text-sm">{text}</p>
    </div>
  </div>
);
