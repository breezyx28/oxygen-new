type CustomerJourneyCard1Props = {
  title: string;
  text: string;
};
export const CustomerJourneyCard1 = ({
  text,
  title,
}: CustomerJourneyCard1Props) => (
  <div className="h-[166px] p-[32px] rounded-[16px] border border-white/30 bg-white/10">
    <h3 className="text-3xl text-white font-bold">{title}</h3>
    <p className="text-white/50 text-lg">{text}</p>
  </div>
);

type CustomerJourneyCard2Props = {
  title: string;
  text: string;
};
export const CustomerJourneyCard2 = ({
  title,
  text,
}: CustomerJourneyCard2Props) => (
  <div className="h-[340px] p-[2.5rem] rounded-[1.5rem] bg-white/5 flex flex-col justify-between">
    <h3 className="text-4xl font-bold text-white">{title}</h3>
    <p className="text-disabled text-base">{text}</p>
  </div>
);
