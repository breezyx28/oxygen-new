import Logo from "@/components/logo/logo";
import { THeadHeader } from "./business-voip-components";
import {
  ArrowDown2,
  ArrowUp2,
  CloseCircle,
  DollarCircle,
  TickCircle,
} from "iconsax-react";
import ButtonIcon from "@/components/buttons/buttonIcon";
import { useState } from "react";

const ReviewTD = ({ rate, reviews }: { rate: any; reviews: any }) => (
  <div className="flex flex-col items-center">
    <span className="text-sm">{rate}</span>
    <span className="text-black/70 text-sm">{reviews}</span>
  </div>
);
const AdditionalCost = () => (
  <div className="flex flex-col items-center">
    <DollarCircle variant="Bold" className="text-black/20" size={24} />
    <span className="text-black/70 text-sm">{"Additional cost"}</span>
  </div>
);
const DetrminCost = ({ cost }: { cost: string }) => (
  <div className="flex flex-col items-center gap-y-1">
    <DollarCircle variant="Bold" className="text-black/20" size={24} />
    <span className="text-black/70 text-sm">{cost}</span>
  </div>
);

const Tick = ({ text }: { text?: string }) => (
  <div className="flex flex-col items-center gap-y-1">
    <TickCircle size="26" className="text-primary-600" variant="Bold" />
    {text ? <span className="text-black/70 text-sm">{text}</span> : ""}
  </div>
);
const Cross = () => (
  <CloseCircle size="26" className="text-red-400" variant="Bold" />
);

type TFeaturesData = {
  title: string;
  d1: any;
  d2: any;
  d3: any;
  d4: any;
  d5: any;
};

const BusinessVoipFeatuesTableData: TFeaturesData[] = [
  {
    title: "G2 Rating",
    d1: <ReviewTD rate="4.6 out of 5" reviews="(3,183 reviews)" />,
    d2: "4.0",
    d3: "4.4",
    d4: "4.3",
    d5: "4.1",
  },
  {
    title: "Gartner PeerInsights Rating",
    d1: <ReviewTD rate="4.6 out of 5" reviews="(3,183 reviews)" />,
    d2: "4.0",
    d3: "4.4",
    d4: "4.3",
    d5: "4.1",
  },
  {
    title: "Trustpilot Rating",
    d1: <ReviewTD rate="4.6 out of 5" reviews="(3,183 reviews)" />,
    d2: "4.0",
    d3: "4.4",
    d4: "4.3",
    d5: "4.1",
  },
  {
    title: "Customer Recommendations (GetVoIP)",
    d1: <ReviewTD rate="92%" reviews="(3,186 reviews)" />,
    d2: <ReviewTD rate="70%" reviews="(586 reviews)" />,
    d3: <ReviewTD rate="95%" reviews="(265 reviews)" />,
    d4: <ReviewTD rate="67%" reviews="(264 reviews)" />,
    d5: <ReviewTD rate="86%" reviews="(767 reviews)" />,
  },
  {
    title: "Uptime and reliability (2024)",
    d1: "99.999%",
    d2: "99.99%",
    d3: "99.75%",
    d4: "99.999%",
    d5: "99.999%",
  },
  {
    title: "24/7 Support (Phone, Email, Chat)",
    d1: <Tick />,
    d2: <Tick />,
    d3: <Tick />,
    d4: <Tick />,
    d5: <Tick />,
  },
  {
    title: "Unlimited Calling in US & CAN",
    d1: <Tick />,
    d2: <Tick />,
    d3: <Tick />,
    d4: <Tick />,
    d5: <Tick />,
  },
  {
    title: "HD Audio & Video Conferencing",
    d1: <Tick />,
    d2: <Tick />,
    d3: <Tick />,
    d4: <Tick />,
    d5: <Tick />,
  },
  {
    title: "Text Messaging (SMS & MMS) Included",
    d1: <Tick />,
    d2: <AdditionalCost />,
    d3: <AdditionalCost />,
    d4: <AdditionalCost />,
    d5: <AdditionalCost />,
  },
  {
    title: "Team Chat & Document/File Management",
    d1: <Tick />,
    d2: <Tick />,
    d3: <Tick />,
    d4: <Tick />,
    d5: <Tick />,
  },
  {
    title: "Mobile and Desktop Softphone Apps",
    d1: <Tick />,
    d2: <Tick />,
    d3: <Tick />,
    d4: <Tick />,
    d5: <Tick />,
  },
  {
    title: "Visual Call Flow Designer",
    d1: <Tick />,
    d2: <Tick />,
    d3: <Tick />,
    d4: <Tick />,
    d5: <Tick />,
  },
  {
    title: "Certified VoIP Hardware (Pre-Configured)",
    d1: <Tick />,
    d2: <Tick />,
    d3: <Tick />,
    d4: <Tick />,
    d5: <Tick />,
  },
  {
    title: "Certified VoIP Hardware (Pre-Configured)",
    d1: <Tick />,
    d2: <Tick />,
    d3: <Tick />,
    d4: <AdditionalCost />,
    d5: <Cross />,
  },
  {
    title: "AI-powered Voicemail Transcripts",
    d1: <Tick />,
    d2: <Tick />,
    d3: <Tick />,
    d4: <Cross />,
    d5: <Tick />,
  },
  {
    title: "Unlimited Secure Online Faxing",
    d1: <Tick />,
    d2: <Cross />,
    d3: <Tick text="1000 page incl." />,
    d4: <DetrminCost cost="$14.99/mo" />,
    d5: <DetrminCost cost="$18.95/mo" />,
  },
];

const BusinessVoipFeatuesTable = () => {
  const [moreFeatures, setMoreFeatures] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-y-6">
      <div className="w-full overflow-x-auto rounded-[24px] border">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="voip-table-head px-[0px] w-full flex items-center py-[1rem] my-[24px] border-b">
              <th className="text-start w-full mx-auto md:block hidden">
                {""}
              </th>

              <th className="text-center w-full mx-auto">
                <THeadHeader title={<Logo />} subtitle="Professional" />
              </th>
              <th className="text-center w-full mx-auto">
                <THeadHeader title="RingCentral" subtitle="Core" />
              </th>
              <th className="text-center w-full mx-auto">
                <THeadHeader title="Dialpad" subtitle="Standard" />
              </th>
              <th className="text-center w-full mx-auto">
                <THeadHeader title="Vonage" subtitle="Premium" />
              </th>
              <th className="text-center w-full mx-auto">
                <THeadHeader title="8X8" subtitle="X2" />
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="voip-table-body-wrapper w-full divide-y">
            {BusinessVoipFeatuesTableData.slice(
              0,
              moreFeatures ? BusinessVoipFeatuesTableData.length : 10
            ).map(
              ({ title, d1, d2, d3, d4, d5 }: TFeaturesData, index: number) => (
                <tr
                  key={index}
                  className="voip-row w-full flex md:flex-row flex-col items-center md:gap-y-0 gap-y-4 py-[20px]"
                >
                  {/* Feature Name Column */}
                  <td className="max-w-[256px] w-full flex md:flex-row flex-row-reverse items-center gap-x-[4px] pl-4">
                    <span className="text-black text-[14px] font-bold">
                      {title}
                    </span>
                  </td>

                  {/* Feature Status Columns */}
                  <td
                    className="w-full flex justify-center bg-white"
                    // style={{
                    //   boxShadow: "0 -30px 30px 0 rgba(0,15,53,.149)",
                    // }}
                  >
                    {d1}
                  </td>

                  <td className="w-full text-sm flex justify-center items-center ">
                    {d2}
                  </td>

                  <td className="w-full text-sm flex justify-center items-center ">
                    {d3}
                  </td>

                  <td className="w-full text-sm flex justify-center items-center ">
                    {d4}
                  </td>

                  <td className="w-full text-sm flex justify-center items-center ">
                    {d5}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center flex-col gap-y-6">
        <span className="md:max-w-[900px] max-w-full text-center text-stone-600 text-[12px] font-bold">
          <strong>NOTE</strong>: Data is current as of July 2, 2024 from
          thousands of verified customer reviews across several review
          platforms. Uptime determined from vendor-provided trust pages. Pricing
          does not reflect taxes and fees.
        </span>
        <ButtonIcon
          text={!moreFeatures ? "Show more" : "Show less"}
          icon={!moreFeatures ? <ArrowDown2 /> : <ArrowUp2 />}
          onClickHandler={() => setMoreFeatures(!moreFeatures)}
        />
      </div>
    </div>
  );
};

export default BusinessVoipFeatuesTable;
