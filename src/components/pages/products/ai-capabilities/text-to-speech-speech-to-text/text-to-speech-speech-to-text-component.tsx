import { Airdrop } from "iconsax-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const TextToSpeechSpeechToTextCard1 = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div
    className="w-full p-[24px] rounded-[16px]"
    style={{
      background:
        "linear-gradient(160deg,hsla(0,0%,100%,.1) 60.8%,hsla(0,0%,100%,0) 100.09%)",
    }}
  >
    <div className="flex flex-col gap-y-8">
      {icon}

      <div className="flex flex-col gap-y-2">
        <h4 className="text-white text-xl font-bold">{title}</h4>
        <p className="text-disabled text-sm">{text}</p>
      </div>
    </div>
  </div>
);

export const TextToSpeechSpeechToTextCard2 = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => (
  <div className="p-[32px] rounded-[16px] bg-white">
    <div className="space-y-8">
      <div className="">
        <Airdrop variant="Bold" className="text-primary-600" />
      </div>
      <div className="space-y-2">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-base text-black/70">{text}</p>
      </div>
    </div>
  </div>
);

export const TextToSpeechSpeechToTextToggler = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const data = [
    {
      id: 1,
      title: "Desktop and Browser Experience",
      content: (
        <TextToSpeechSpeechToTextCard2
          title="Streamlined operations"
          text="Streamlining operations in contact centers is a key step toward achieving a unified customer experience. Nextiva’s features are designed to simplify complex processes, making it easier for agents to manage calls and for managers to oversee operations. This approach not only improves efficiency but also enhances the quality of service provided to customers.
  
   
  
  With Nextiva, contact centers can integrate various communication channels into a single platform. This integration allows agents to access customer information quickly, reducing the time spent searching for data across different systems. It leads to faster resolution of customer issues, contributing to a more streamlined operation and a better overall customer experience.
  
   
  
  Additionally, Nextiva’s analytics tools offer insights into call patterns and customer behavior. Managers can use this information to make informed decisions about staffing and training, further streamlining operations. By understanding customer needs better, contact centers can tailor their services more effectively, ensuring a unified customer experience that stands out."
        />
      ),
    },
    {
      id: 2,
      title: "Mobile Experience",
      content: (
        <TextToSpeechSpeechToTextCard2
          title="Streamlined operations"
          text="Streamlining operations in contact centers is a key step toward achieving a unified customer experience. Nextiva’s features are designed to simplify complex processes, making it easier for agents to manage calls and for managers to oversee operations. This approach not only improves efficiency but also enhances the quality of service provided to customers.
  
   
  
  With Nextiva, contact centers can integrate various communication channels into a single platform. This integration allows agents to access customer information quickly, reducing the time spent searching for data across different systems. It leads to faster resolution of customer issues, contributing to a more streamlined operation and a better overall customer experience.
  
   
  
  Additionally, Nextiva’s analytics tools offer insights into call patterns and customer behavior. Managers can use this information to make informed decisions about staffing and training, further streamlining operations. By understanding customer needs better, contact centers can tailor their services more effectively, ensuring a unified customer experience that stands out."
        />
      ),
    },
    {
      id: 3,
      title: "Conference rooms, desktop phones and headsets",
      content: (
        <TextToSpeechSpeechToTextCard2
          title="Streamlined operations"
          text="Streamlining operations in contact centers is a key step toward achieving a unified customer experience. Nextiva’s features are designed to simplify complex processes, making it easier for agents to manage calls and for managers to oversee operations. This approach not only improves efficiency but also enhances the quality of service provided to customers.
  
   
  
  With Nextiva, contact centers can integrate various communication channels into a single platform. This integration allows agents to access customer information quickly, reducing the time spent searching for data across different systems. It leads to faster resolution of customer issues, contributing to a more streamlined operation and a better overall customer experience.
  
   
  
  Additionally, Nextiva’s analytics tools offer insights into call patterns and customer behavior. Managers can use this information to make informed decisions about staffing and training, further streamlining operations. By understanding customer needs better, contact centers can tailor their services more effectively, ensuring a unified customer experience that stands out."
        />
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-y-10">
      <div
        id="customer-communication-toggle-1"
        className="flex md:flex-row flex-col items-start justify-between gap-10"
      >
        <div className="md:max-w-[33%] max-w-full w-full h-auto flex flex-col gap-6">
          {data.map((item: any, index: number) => {
            return activeId === item.id ? (
              <div
                key={index}
                className={twMerge(
                  "border-l transition-all duration-200 ease-out"
                )}
              >
                <h3 className="pl-8 border-l-2 border-black md:text-3xl text-2xl">
                  {item.title}
                </h3>
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
        <div className="h-full flex-1">
          {data.find((item) => item.id === activeId)?.content}
        </div>
      </div>
    </div>
  );
};
