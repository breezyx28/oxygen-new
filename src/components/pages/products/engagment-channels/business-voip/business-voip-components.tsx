import { useState } from "react";
import { ArrowDown, ArrowUp, TickCircle } from "iconsax-react";

export const USNewsBadgeCard = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <TickCircle
      className="text-yellow-500 md:w-[14px] w-[18px]"
      variant="Bold"
    />
    <span className="md:text-[14px] text-[18px] text-black">{text}</span>
  </div>
);

export const THeadHeader = ({
  title,
  subtitle,
}: {
  title: any;
  subtitle: string;
}) => (
  <div className="flex flex-col items-center gap-y-2">
    <span className="text-black text-xl font-semibold">{title}</span>
    <span className="text-base font-normal">{subtitle}</span>
  </div>
);

export const WhyVoip = ({
  src,
  title,
  p1,
  p2,
}: {
  src: string;
  title: string;
  p1: string;
  p2: string;
}) => (
  <div className="flex gap-6 items-start">
    <img src={src} className="w-[48px] h-auto" />
    <div className="flex flex-col gap-y-2">
      <p className="text-primary-900 text-xl font-bold">{title}</p>
      <div className="flex flex-col gap-y-[18px] text-[15px] text-black/70 leading-[1.3]">
        <p className="">{p1}</p>
        <p className="">{p2}</p>
      </div>
    </div>
  </div>
);

export const VoIPInfoCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full mx-auto">
      <p className="text-primary-900 text-base">
        As a small business owner, you've likely encountered discussions about
        VoIP (Voice over Internet Protocol) phone systems. Let's examine the
        advantages and disadvantages of VoIP and popular features to look for to
        help you make an informed decision.
      </p>

      {isExpanded && (
        <div className="space-y-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">
              Advantages of business VoIP
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-primary-900">
              <li>
                <strong>Budget-friendly</strong>: VoIP systems typically beat
                analog telephony costs by 30-70%. It also provides many premium
                features that are included with most plans.
              </li>
              <li>
                <strong>Work anywhere</strong>: VoIP allows you to make and
                receive calls from anywhere with an internet connection,
                including your personal mobile phone while maintaining privacy.
              </li>
              <li>
                <strong>Easy to use</strong>: As your company grows, you can
                easily add users without headaches or costly installs.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">
              Potential drawbacks of VoIP
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-primary-900">
              <li>
                <strong>Internet usage</strong>: Call quality and reliability
                are directly tied to your internet connection's bandwidth
                availability and stability (e.g., Wi-Fi).
              </li>
              <li>
                <strong>Power dependence</strong>: Unlike traditional landlines,
                VoIP systems require electricity to function for your router and
                modem.
              </li>
              <li>
                <strong>Learning curve</strong>: Your team may need to
                familiarize themselves with the new VoIP system and its
                features, such as voicemail and call transfers.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">
              Popular VoIP features for small businesses
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-primary-900">
              <li>
                <strong>Auto attendants</strong>: Direct incoming calls to the
                correct department or employee. These virtual receptionists are
                easily adjusted based on business hours or holidays.
              </li>
              <li>
                <strong>Business texting</strong>: Text messaging is essential
                to following up with customers, confirming appointments, and
                handling support questions.
              </li>
              <li>
                <strong>Call analytics</strong>: Dig into your VoIP phone
                system's inbound and outbound trends.
              </li>
              <li>
                <strong>Call Pop</strong>: See details for incoming calls,
                including past interactions.
              </li>
              <li>
                <strong>Call recordings</strong>: Listen to calls between
                customers and your employees anytime to understand what's really
                happening.
              </li>
              <li>
                <strong>Customer experience tools</strong>: Access advanced
                features like intelligent call recording, call analytics,
                sentiment analysis, and website chat.
              </li>
              <li>
                <strong>Video conferencing</strong>: Connect with your team and
                clients virtually, regardless of location.
              </li>
              <li>
                <strong>CRM integrations</strong>: Streamline your workflow by
                integrating with popular CRM software.
              </li>
              <li>
                <strong>Voicemail transcription</strong>: Read transcribed
                voicemails through email or text messages and respond to them
                quickly.
              </li>
              <li>
                <strong>Threaded conversations</strong>: Keeps all contact with
                customers in one place.
              </li>
            </ul>
          </div>

          <p className="text-primary-900">
            Nextiva now goes way beyond voice and is truly a unified customer
            experience platform. These business calling features are available
            to you now for far less than the local landline provider. Get it all
            without costly add-ons like extra fees for local phone numbers or
            worrying about how many minutes you'll use.
          </p>
        </div>
      )}

      <button
        onClick={toggleExpand}
        className="inline mt-4 text-base text-primary-600 hover:text-primary-800 font-bold focus:outline-none"
      >
        {isExpanded ? "Read Less" : "Read More"}
        {isExpanded ? (
          <ArrowUp className="inline w-[16px] ml-2" />
        ) : (
          <ArrowDown className="inline w-[16px] ml-2" />
        )}
      </button>
    </div>
  );
};

export const VoipPlatformsReviewsCard = ({
  icon,
  rate,
}: {
  icon: string;
  rate: number;
}) => (
  <div
    className="py-[36px] px-[10px] rounded-[4px]"
    style={{
      boxShadow: "0 3px 10px rgba(0,0,0,.1)",
    }}
  >
    <div className="flex flex-col justify-between gap-[20px]">
      <div className="flex flex-col items-center gap-y-[20px]">
        <div className="mx-auto mb-[35px]">
          <img src={icon} className="h-[60px] max-w-[150px] object-contain" />
        </div>
        <div className="flex items-center justify-center gap-x-1">
          {[...Array(Math.floor(rate))].map((_, index) => (
            <span
              key={`full-${index}`}
              className="full-star w-[clamp(1.275rem,-.125rem_+_2.9167vw,2.5rem)]"
            >
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="#F8B400"
                ></path>
              </svg>
            </span>
          ))}
          {rate % 1 !== 0 && (
            <span
              key="broken"
              className="broken-star w-[clamp(1.275rem,-.125rem_+_2.9167vw,2.5rem)]"
            >
              <svg width="100%" height="100%" viewBox="0 0 27 28" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.1342 4.17044C12.6382 2.95881 14.3572 2.95881 14.8612 4.17044L17.2035 9.80331L23.283 10.2904C24.5925 10.3951 25.1235 12.0286 24.1256 12.8836L19.494 16.8514L20.9081 22.7836C21.213 24.0616 19.8236 25.0707 18.7031 24.3867L13.4977 21.2074L8.29237 24.3867C7.17187 25.0707 5.78249 24.0604 6.08737 22.7836L7.50149 16.8514L2.86987 12.8836C1.87199 12.0286 2.40299 10.3951 3.71249 10.2904L9.79199 9.80331L12.1342 4.17044Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.875 8.99453L14.8691 4.17044C14.3651 2.95881 12.6461 2.95881 12.1421 4.17044L9.79981 9.80331L3.72031 10.2904C2.41081 10.3951 1.87981 12.0286 2.87768 12.8836L7.50931 16.8514L6.09518 22.7836C5.79031 24.0604 7.17968 25.0707 8.30018 24.3867L13.5056 21.2074L16.875 23.2654V8.99453Z"
                  fill="#F8B400"
                ></path>
              </svg>
            </span>
          )}
        </div>
      </div>
      <span className="text-center">{rate} out of 5</span>
    </div>
  </div>
);
