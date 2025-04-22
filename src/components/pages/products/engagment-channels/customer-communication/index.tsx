import "../../../../../styles/hero.css";
import Button from "@/components/buttons/button";
import OutlineButton from "@/components/buttons/outline-button";
import { Play } from "lucide-react";
import { CustomerCommunicationFadeCard } from "./customer-communication-components";
import {
  Calendar,
  I3Square,
  Message,
  Messages2,
  Messages3,
  Microphone2,
  Notification,
  PresentionChart,
  Profile2User,
  Star1,
  TextalignLeft,
  Video,
} from "iconsax-react";

export default function CustomerCommunication() {
  return (
    <>
      <section className="relative w-full md:h-[140vh] h-auto text-white z-1">
        <div className="absolute right-0 top-0 h-full w-full z-[-1]">
          {/* Use next/image for optimization */}
          <div className="relative h-full">
            <img
              src="/assets/images/backgrounds/products/customer-communication-hero.webp"
              alt="Customer Experience"
              className="object-cover absolute w-full h-full"
              width={3000}
            />
          </div>
        </div>
        <div className="container-container w-full h-auto flex justify-center items-center pt-[12.984375vw] z-20">
          <div className="max-w-4xl text-center">
            <h1 className="hero-title-text">
              Relationships start <br /> with a{" "}
              <span className="underline">conversation</span>
            </h1>

            <p className="hero-subtitle-text px-4 mt-10">
              Organize and manage all customer and team interactions.
            </p>
            <Button
              text="Get personalized demo"
              className="text-primary-600 hover:text-white bg-white hover:bg-primary-600 hover:border-white mt-6"
            />
          </div>
        </div>
        <div className="container-container">
          <div className="container w-full py-[100px]">
            <div className="glass-card flex justify-between items-center px-[80px] py-[120px]">
              <h2 className="max-w-2/3 text-5xl">
                The future of customer conversations
              </h2>
              <OutlineButton
                className="border-white text-white hover:bg-transparent"
                text={
                  <div className="flex items-center gap-4">
                    <Play className="text-white" />
                    <span>Play Video</span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-auto text-white z-1">
        <div className="absolute right-0 top-0 h-full w-full z-[-1]">
          {/* Use next/image for optimization */}
          <div className="relative h-full">
            <img
              src="/assets/images/backgrounds/products/customer-communication-block-bg-min.webp"
              alt="Customer Experience"
              className="object-cover absolute w-full h-full"
              width={3000}
            />
          </div>
        </div>
        <div className="container-container container-narrow z-20">
          <div className="flex flex-col gap-y-10">
            <h2 className="text-[40px] leading-[1.2] text-start text-white font-bold">
              Seamlessly manage all of voice, video, messaging with customers
              and team on a unified platform.
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <CustomerCommunicationFadeCard
                icon={
                  <Microphone2
                    size={28}
                    className="text-white"
                    variant="Bold"
                  />
                }
                title="Voice"
              />
              <CustomerCommunicationFadeCard
                icon={<Video size={28} className="text-white" variant="Bold" />}
                title="Video"
              />

              <CustomerCommunicationFadeCard
                icon={
                  <Messages3 size={28} className="text-white" variant="Bold" />
                }
                title="SMS and Texting"
              />

              <CustomerCommunicationFadeCard
                icon={
                  <Profile2User
                    size={28}
                    className="text-white"
                    variant="Bold"
                  />
                }
                title="Group Messaging"
              />
              <CustomerCommunicationFadeCard
                icon={
                  <Message size={28} className="text-white" variant="Bold" />
                }
                title="Live Chat"
              />
              <CustomerCommunicationFadeCard
                icon={
                  <Messages2 size={28} className="text-white" variant="Bold" />
                }
                title="Messaging Apps"
              />
              <CustomerCommunicationFadeCard
                icon={
                  <Notification
                    size={28}
                    className="text-white"
                    variant="Bold"
                  />
                }
                title="Social"
              />
              <CustomerCommunicationFadeCard
                icon={<Star1 size={28} className="text-white" variant="Bold" />}
                title="Reviews Management"
              />
              <CustomerCommunicationFadeCard
                icon={
                  <TextalignLeft
                    size={28}
                    className="text-white"
                    variant="Bold"
                  />
                }
                title="Contact Management"
              />
              <CustomerCommunicationFadeCard
                icon={
                  <Calendar size={28} className="text-white" variant="Bold" />
                }
                title="Calendar"
              />
              <CustomerCommunicationFadeCard
                icon={
                  <PresentionChart
                    size={28}
                    className="text-white"
                    variant="Bold"
                  />
                }
                title="Screen Sharing"
              />
              <CustomerCommunicationFadeCard
                icon={
                  <I3Square size={28} className="text-white" variant="Bold" />
                }
                title="Recordings"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
