import { ArrowRight } from "iconsax-react";

interface FeatureCardProps {
  title: string;
  list: string[];
  icon?: string;
  pattern?: string;
  className?: string;
}

const FeatureCard = ({
  title,
  pattern,
  list,
  icon,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={`relative text-white text-left rounded-[24px] p-[24px] flex flex-col justify-between overflow-hidden ${className} max-h-[600px]`}
      style={{
        boxShadow: "0 60px 70px 0 rgba(33,0,118,.15)",
      }}
    >
      <div className="absolute top- w-[300px] h-[300px] rotate-45 top-[-10%] right-[-30%]">
        <div className="relative w-full h-full">
          <div
            className="w-full h-full"
            style={{
              maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 30%, transparent 70%)",
            }}
          >
            <img src={pattern} className="w-full h-full scale-200" />
          </div>
        </div>
      </div>
      <div className="">
        {icon && (
          <div className="mb-5">
            <img width={38} src={icon} alt={title} />
          </div>
        )}
        <h3 className="text-3xl font-semibold pb-[20px] border-b">{title}</h3>
        <div className="flex flex-col divide divide-y">
          {list &&
            list.map((item: any, index: number) => (
              <p key={index} className="text-white py-[20px] leading-[20px]">
                {item}
              </p>
            ))}
        </div>
      </div>
      <div className="w-full text-[20px] font-semibold flex items-center gap-2 bg-white rounded-full px-[32px] py-[20px] text-primary-600">
        <a href="#">Learn more</a>
        <ArrowRight size="32" />
      </div>
    </div>
  );
};

export default FeatureCard;
