import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import ComputerScreenIcon from "@/components/icons/computer-screen-icon";
import TrustedBy from "@/components/sliders/trusted-by";
import {
  IntelligentVirtualAgentCard1,
  IntelligentVirtualAgentCard2,
  IntelligentVirtualAgentCard3,
  IntelligentVirtualAgentCard4,
  IntelligentVirtualAgentCircle1,
  IntelligentVirtualAgentFAQ,
} from "./intelligent-virtual-agent-components";
import {
  Calendar1,
  Call,
  Clock,
  Diagram,
  ElementPlus,
  HambergerMenu,
  Lock,
  Message,
  Mobile,
  Moneys,
  Printer,
  Profile2User,
  SliderVertical1,
  Sms,
  TaskSquare,
  User,
  VolumeHigh,
  Warning2,
} from "iconsax-react";
import OxygenBadge from "@/components/buttons/oxygen-badge";
import SectionLayout from "@/components/Layout/section-layout";
import OutlineButton from "@/components/buttons/outline-button";
import BookingForm from "@/components/sections/booking-form";

const IntelligentVirtualAgent = () => {
  return (
    <>
      <section id="products-digital-channels" className="h-auto w-full">
        <div className="container-container pt-[120px]">
          <div className="head flex flex-col justify-center items-center gap-y-[8px]">
            <PageBadge
              icon={<ComputerScreenIcon className="md:w-[20px] w-[16px]" />}
              text="Intelligent Virtual Agents"
            />
            <h3 className="md:text-[58px] text-[42px] font-bold text-center leading-[1.2]">
              Always on, always smart: IVA powering amazing CX
            </h3>
            <div className="max-w-[720px]">
              <p className="text-center text-black/70 md:text-[20px] text-[14px]">
                Give customers an amazing CX without human touch by putting
                service on autopilot.
              </p>
            </div>
            <Button
              text="Automate my customer experience"
              className="mt-[clamp(2rem,2.13vw,3rem)] mb-[60px]"
            />
          </div>

          <div className="hero relative w-full h-full rounded-[32px] flex flex-col items-center justify-center">
            <img
              src="/assets/images/backgrounds/products/intelligent-virtual-agent-hero-bg.webp"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <section id="products-digital-channels-trust-slider">
        <div className="container-container pt-[70px] !text-black">
          <TrustedBy />
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/intelligent-virtual-agent-bg-1.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col items-center gap-y-10">
            <OxygenBadge />
            <h2 className="text-center text-white md:text-6xl text-3xl font-bold">
              Revolutionize customer experience with AI-powered voice assistants
            </h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px]">
              <IntelligentVirtualAgentCard4
                title="Connect with customers instantaneously"
                icon={
                  <Profile2User
                    size={60}
                    variant="Bold"
                    className="text-white"
                  />
                }
              />
              <IntelligentVirtualAgentCard4
                title="Connect with customers instantaneously"
                icon={
                  <Profile2User
                    size={60}
                    variant="Bold"
                    className="text-white"
                  />
                }
              />
              <IntelligentVirtualAgentCard4
                className="md:col-span-2 col-span-1"
                title="Connect with customers instantaneously"
                icon={
                  <Profile2User
                    size={60}
                    variant="Bold"
                    className="text-white"
                  />
                }
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      <section>
        <div className="container-container container-narrow">
          <div className="flex flex-col justify-between items-center gap-y-6">
            <OxygenBadge />
            <div className="text-center">
              <h2 className="w-full md:text-5xl text-[30px] leading-[1.2] text-black font-bold">
                Drive business efficiency and ROI across all conversational
                channels
              </h2>
              <p className="md:px-[100px] px-0 mt-6 text-black/70 text-xl">
                Say goodbye to time-consuming manual tasks. Handle scheduling,
                reminders and other routine tasks so your team focus on whats is
                most important.
              </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:mt-[60px] mt-[10px]">
              <IntelligentVirtualAgentCard1
                icon={
                  <Call className="text-primary-600" variant="Bold" size={32} />
                }
                title="Unlimited Calling"
                text="Call any phone in the United States and Canada as much as you want. No minutes to track."
              />

              <IntelligentVirtualAgentCard1
                icon={
                  <Mobile
                    className="text-primary-600"
                    variant="Bold"
                    size={32}
                  />
                }
                title="Smartphone App"
                text="Answer business calls from on the go. Never miss an important call again."
              />
              <IntelligentVirtualAgentCard1
                icon={
                  <ElementPlus
                    className="text-primary-600"
                    variant="Bold"
                    size={32}
                  />
                }
                title="CRM Integrations"
                text="Optional integration you can use with your current CRM. Boost productivity with an integrated workflow."
              />

              <IntelligentVirtualAgentCard1
                icon={
                  <Printer
                    className="text-primary-600"
                    variant="Bold"
                    size={32}
                  />
                }
                title="Online Faxing"
                text="Send and receive unlimited faxes just like email. No hardware or wires. Faxing is finally easy and simple."
              />

              <IntelligentVirtualAgentCard1
                icon={
                  <SliderVertical1
                    className="text-primary-600"
                    variant="Bold"
                    size={32}
                  />
                }
                title="Conference Lines"
                text="Use a dedicated conference line for meetings with up to nine participants. Meet, moderate, and record in HD."
              />
              <IntelligentVirtualAgentCard1
                icon={
                  <Profile2User
                    className="text-primary-600"
                    variant="Bold"
                    size={32}
                  />
                }
                title="Team Collaboration"
                text="Chat with your team on one system. Flawless video and screen sharing enables you to get work done faster."
              />

              <IntelligentVirtualAgentCard1
                icon={
                  <User className="text-primary-600" variant="Bold" size={32} />
                }
                title="Auto Attendant"
                text="Greet callers instantly when they call and direct them to the right person. Professional and easy to use."
              />

              <IntelligentVirtualAgentCard1
                icon={
                  <Sms className="text-primary-600" variant="Bold" size={32} />
                }
                title="Voicemail-to-Email"
                text="Get voicemail messages delivered to your inbox. Listen to voicemails and respond through your email."
              />

              <IntelligentVirtualAgentCard1
                icon={
                  <Message
                    className="text-primary-600"
                    variant="Bold"
                    size={32}
                  />
                }
                title="Text Messaging (SMS)"
                text="Send and receive text messages with customers. Perfect for quick updates and appointment reminders."
              />

              <IntelligentVirtualAgentCard1
                icon={<HambergerMenu className="text-primary-600" size={32} />}
                title="Call Queues"
                text="Handle calls when your team is busy. Callers wait in line for the next agent. You and your customers will love it."
              />

              <IntelligentVirtualAgentCard1
                icon={
                  <VolumeHigh
                    className="text-primary-600"
                    variant="Bold"
                    size={32}
                  />
                }
                title="HD Voice Quality"
                text="Get superior sounding phone calls. Engineered to eliminate annoying static for vibrant conversations."
              />

              <IntelligentVirtualAgentCard1
                icon={
                  <Clock
                    className="text-primary-600"
                    variant="Bold"
                    size={32}
                  />
                }
                title="Real-Time Presence"
                text="See who’s available to receive calls and chat messages. Live presence is simple and accurate."
              />
            </div>
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/intelligent-virtual-agent-bg-1.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col">
            <h2 className="text-center text-white md:text-6xl text-3xl font-bold">
              Inbound Omnichannel
            </h2>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-[20px] mt-6">
              <IntelligentVirtualAgentCard2
                icon={
                  <Clock
                    variant="Bold"
                    size={32}
                    className="text-white/30 mb-[10px]"
                  />
                }
                title="FAQs"
                text="Answer common sales and service questions instantly."
              />
              <IntelligentVirtualAgentCard2
                icon={
                  <Calendar1
                    variant="Outline"
                    size={32}
                    className="text-white/30 mb-[10px]"
                  />
                }
                title="Appointments"
                text="Let customers and prospects book or reschedule appointments 24/7 using conversational AI."
              />
              <IntelligentVirtualAgentCard2
                icon={
                  <Moneys
                    variant="Bold"
                    size={32}
                    className="text-white/30 mb-[10px]"
                  />
                }
                title="Collect Payments"
                text="Let customers make secure payments 24/7."
              />

              <IntelligentVirtualAgentCard2
                icon={
                  <Moneys
                    variant="Bold"
                    size={32}
                    className="text-white/30 mb-[10px]"
                  />
                }
                title="Check Balances"
                text="Let customers check their own account balances."
              />
              <IntelligentVirtualAgentCard2
                icon={
                  <Lock
                    variant="Bold"
                    size={32}
                    className="text-white/30 mb-[10px]"
                  />
                }
                title="Password Reset"
                text="Verify customers securely and automate password reset inquiries."
              />
              <IntelligentVirtualAgentCard2
                icon={
                  <Warning2
                    variant="Bold"
                    size={32}
                    className="text-white/30 mb-[10px]"
                  />
                }
                title="Appointments"
                text="Let customers and prospects book or reschedule appointments 24/7 using conversational AI."
              />

              <IntelligentVirtualAgentCard2
                icon={
                  <TaskSquare
                    variant="Bold"
                    size={32}
                    className="text-white/30 mb-[10px]"
                  />
                }
                title="Order Status and Lookup"
                text="Let customers and prospects book or reschedule appointments 24/7 using conversational AI."
              />
              <IntelligentVirtualAgentCard2
                icon={
                  <Diagram
                    variant="Bold"
                    size={32}
                    className="text-white/30 mb-[10px]"
                  />
                }
                title="Ordering Services and Products"
                text="Sell popular products and services."
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      <section>
        <div className="container-container container-narrow">
          <div className="flex flex-col">
            <h2 className="text-center md:text-6xl text-3xl font-bold">
              Outbound Omnichannel
            </h2>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-[20px] mt-12">
              <IntelligentVirtualAgentCard3
                icon={
                  <Clock
                    variant="Bold"
                    size={32}
                    className="text-primary-600 mb-[10px]"
                  />
                }
                title="FAQs"
                text="Answer common sales and service questions instantly."
              />
              <IntelligentVirtualAgentCard3
                icon={
                  <Calendar1
                    variant="Outline"
                    size={32}
                    className="text-primary-600 mb-[10px]"
                  />
                }
                title="Appointments"
                text="Let customers and prospects book or reschedule appointments 24/7 using conversational AI."
              />
              <IntelligentVirtualAgentCard3
                icon={
                  <Moneys
                    variant="Bold"
                    size={32}
                    className="text-primary-600 mb-[10px]"
                  />
                }
                title="Collect Payments"
                text="Let customers make secure payments 24/7."
              />

              <IntelligentVirtualAgentCard3
                icon={
                  <Moneys
                    variant="Bold"
                    size={32}
                    className="text-primary-600 mb-[10px]"
                  />
                }
                title="Check Balances"
                text="Let customers check their own account balances."
              />
              <IntelligentVirtualAgentCard3
                icon={
                  <Lock
                    variant="Bold"
                    size={32}
                    className="text-primary-600 mb-[10px]"
                  />
                }
                title="Password Reset"
                text="Verify customers securely and automate password reset inquiries."
              />
              <IntelligentVirtualAgentCard3
                icon={
                  <Warning2
                    variant="Bold"
                    size={32}
                    className="text-primary-600 mb-[10px]"
                  />
                }
                title="Appointments"
                text="Let customers and prospects book or reschedule appointments 24/7 using conversational AI."
              />
            </div>
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/intelligent-virtual-agent-bg-2.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col items-center gap-y-10">
            <h2 className="max-w-[600px] text-white md:text-6xl text-3xl text-center font-bold">
              Bring your CX ecosystem together
            </h2>

            <div className="flex flex-wrap gap-[40px]">
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
              <IntelligentVirtualAgentCircle1
                logo={
                  <img
                    src="/assets/icons/companies/cloud.webp"
                    className="w-[50px] h-auto object-cover"
                  />
                }
              />
            </div>
            <p className="text-center text-white/70">
              Amazing customer experiences require an interconnected ecosystem.
              Nextiva CX API’s are designed to accelerate your time to market
              and maximize your investments in existing technologies by easily
              integrating your contact center with all mission critical systems.
            </p>
            <OutlineButton
              text={"See all integrations"}
              className="border-white text-white hover:bg-transparent"
            />
          </div>
        </div>
      </SectionLayout>

      <BookingForm />

      <section>
        <div className="container-container container-narrow">
          <IntelligentVirtualAgentFAQ />
        </div>
      </section>
    </>
  );
};

export default IntelligentVirtualAgent;
