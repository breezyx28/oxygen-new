type InfoCardProps = {
  className?: string;
  src?: string;
  text?: string;
  label: string;
};
const InfoCard = ({ className, src, text, label }: InfoCardProps) => {
  return src ? (
    <div
      className={`bg-white border border-gray-200 md:min-h-[440px] min-h-auto rounded-[24px] ${className}`}
      style={{
        boxShadow: "0 60px 70px 0 rgba(0,15,53,.149)",
      }}
    >
      <img
        src={src}
        className="w-full h-full md:object-contain object-cover rounded-[1.5vw]"
      />
    </div>
  ) : (
    <div
      className={`relative bg-white border border-gray-300 md:min-h-[440px] min-h-auto rounded-[24px] p-[24px] ${className}`}
      style={{
        boxShadow: "0 60px 70px 0 rgba(0,15,53,.149)",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        <img
          src="/assets/images/waves/wave-2.png"
          alt="waves"
          width={700}
          height={1000}
          className="relative top-0 opacity-30 object-contain"
        />
      </div>
      <div className="wrapper w-full h-full flex flex-col justify-between items-start z-50">
        <div className="text-black text-[20px] font-[500] leading-[28px] mb-[40px] md:mb-0">
          {text}
        </div>
        <span className="text-stone-500 text-[16px]">{label}</span>
      </div>
    </div>
  );
};

export default InfoCard;
