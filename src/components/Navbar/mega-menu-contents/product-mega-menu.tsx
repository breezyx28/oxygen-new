import {
  ArrowRight,
  Flash,
  Message,
  Messages,
  MessageText1,
  Microphone2,
  Mobile,
  Profile2User,
  Setting2,
  Video,
} from "iconsax-react";
import { MegaMenuItem } from "../mega-menu";
import { Link } from "react-router-dom";

const ProductMegaMenu = () => {
  return (
    <div className="w-full h-full">
      {/* Header section */}
      <div className="py-8 px-4 md:px-8 lg:px-12 bg-gray-50">
        <h3 className="text-lg md:text-xl lg:text-2xl text-black font-bold">
          Deliver end-to-end personalized experiences at scale
        </h3>
      </div>

      {/* Content section */}
      <div className="w-full border-t border-gray-200 px-4 md:px-8 lg:px-12">
        <div className="flex justify-between w-full">
          {renderContent1()}
          {renderContent2()}
          {renderContent3()}
          {renderContent4()}
        </div>
      </div>
    </div>
  );
};

const renderContent1 = () => (
  <div className="w-full py-8 md:py-12">
    {/* Section header */}
    <Link
      to="/engagement-channels"
      className="group flex items-center gap-4 mb-8"
    >
      <h4 className="text-base md:text-lg font-bold text-black">
        Engagement Channels
      </h4>
      <ArrowRight size={20} className="text-primary-600" />
    </Link>

    {/* Menu items grid */}
    <ul className="flex flex-col">
      <MegaMenuItem
        href="/products/digital-channels"
        title="Business VoIP"
        icon={
          <Microphone2
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/mobile-engagement"
        title="Live Chat"
        icon={
          <Message
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Business SMS"
        icon={
          <Messages
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/digital-channels"
        title="Digital Channels"
        icon={
          <Mobile
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/messaging-apps"
        title="Messaging Apps"
        icon={
          <MessageText1
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Social Media Channels"
        icon={
          <Setting2
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Customer Reviews & Reputation"
        icon={
          <Flash
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Customer Collaboration"
        icon={
          <Profile2User
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Video Meetings"
        icon={
          <Video
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
    </ul>
  </div>
);
const renderContent2 = () => (
  <div className="w-full py-8 md:py-12">
    {/* Section header */}
    <Link
      to="/engagement-channels"
      className="group flex items-center gap-4 mb-8"
    >
      <h4 className="text-base md:text-lg font-bold text-black">
        Engagement Channels
      </h4>
      <ArrowRight size={20} className="text-primary-600" />
    </Link>

    {/* Menu items grid */}
    <ul className="flex flex-col">
      <MegaMenuItem
        href="/products/digital-channels"
        title="Business VoIP"
        icon={
          <Microphone2
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/mobile-engagement"
        title="Live Chat"
        icon={
          <Message
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Business SMS"
        icon={
          <Messages
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Digital Channels"
        icon={
          <Mobile
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Messaging Apps"
        icon={
          <MessageText1
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Social Media Channels"
        icon={
          <Setting2
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Customer Reviews & Reputation"
        icon={
          <Flash
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Customer Collaboration"
        icon={
          <Profile2User
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Video Meetings"
        icon={
          <Video
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
    </ul>
  </div>
);
const renderContent3 = () => (
  <div className="w-full py-8 md:py-12">
    {/* Section header */}
    <Link
      to="/engagement-channels"
      className="group flex items-center gap-4 mb-8"
    >
      <h4 className="text-base md:text-lg font-bold text-black">
        Engagement Channels
      </h4>
      <ArrowRight size={20} className="text-primary-600" />
    </Link>

    {/* Menu items grid */}
    <ul className="flex flex-col">
      <MegaMenuItem
        href="/products/digital-channels"
        title="Business VoIP"
        icon={
          <Microphone2
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/mobile-engagement"
        title="Live Chat"
        icon={
          <Message
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Business SMS"
        icon={
          <Messages
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Digital Channels"
        icon={
          <Mobile
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Messaging Apps"
        icon={
          <MessageText1
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Social Media Channels"
        icon={
          <Setting2
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Customer Reviews & Reputation"
        icon={
          <Flash
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Customer Collaboration"
        icon={
          <Profile2User
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Video Meetings"
        icon={
          <Video
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
    </ul>
  </div>
);
const renderContent4 = () => (
  <div className="w-full py-8 md:py-12">
    {/* Section header */}
    <Link
      to="/engagement-channels"
      className="group flex items-center gap-4 mb-8"
    >
      <h4 className="text-base md:text-lg font-bold text-black">
        Engagement Channels
      </h4>
      <ArrowRight size={20} className="text-primary-600" />
    </Link>

    {/* Menu items grid */}
    <ul className="flex flex-col">
      <MegaMenuItem
        href="/products/digital-channels"
        title="Business VoIP"
        icon={
          <Microphone2
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/mobile-engagement"
        title="Live Chat"
        icon={
          <Message
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Business SMS"
        icon={
          <Messages
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Digital Channels"
        icon={
          <Mobile
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Messaging Apps"
        icon={
          <MessageText1
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Social Media Channels"
        icon={
          <Setting2
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Customer Reviews & Reputation"
        icon={
          <Flash
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Customer Collaboration"
        icon={
          <Profile2User
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
      <MegaMenuItem
        href="/products/omnichannel"
        title="Video Meetings"
        icon={
          <Video
            size={16}
            variant="Bold"
            className="text-black/70 group-hover:text-primary-600"
          />
        }
      />
    </ul>
  </div>
);

export default ProductMegaMenu;
