type EnterpriceCapabilityCardProps = {
  src: string;
  title: string;
  text: string;
};

const EnterpriceCapabilityCard = ({
  src,
  title,
  text,
}: EnterpriceCapabilityCardProps) => {
  return (
    <div className="w-full rounded-[24px] p-[24px] bg-white shadow-[0 7px 32px 0 rgba(11,16,41,.051)]">
      <div className="flex flex-col gap-y-[1.6vw]">
        <div className="card-image">
          <img src={src} loading="lazy" className="rounded-[1.25vw]" />
        </div>
        <div className="card-content">
          <div className="flex flex-col gap-y-[16px]">
            <h2 className="text-[24px] font-semibold">{title}</h2>
            <p className="text-black/80">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriceCapabilityCard;
