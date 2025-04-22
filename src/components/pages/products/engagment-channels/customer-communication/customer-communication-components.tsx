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
