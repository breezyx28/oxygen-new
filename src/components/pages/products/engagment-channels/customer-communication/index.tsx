import "../../../../../styles/hero.css";
import Button from "@/components/buttons/button";
import OutlineButton from "@/components/buttons/outline-button";
import { Play } from "lucide-react";
import {
  CustomerCommunicationAnalyticsCard,
  CustomerCommunicationFadeCard,
  CustomerCommunicationFeatureCard,
  CustomerCommunicationPlatformCard,
  CustomerCommunicationToggler,
  CustomerCommunicationToolsCard,
  CustomerCommunicationTrustedByCard,
} from "./customer-communication-components";
import {
  ArrowRight,
  Calendar,
  Call,
  Clock,
  ElementPlus,
  HambergerMenu,
  I3Square,
  Message,
  Messages2,
  Messages3,
  Microphone2,
  Mobile,
  Monitor,
  Notification,
  PresentionChart,
  Printer,
  Profile2User,
  SliderVertical1,
  Sms,
  Star1,
  TextalignLeft,
  User,
  Video,
  VolumeHigh,
} from "iconsax-react";
import { CustomerCommunicationSlider } from "./customer-communication-slider";
import SliderComponent from "@/components/sliders/slider";

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

      <section>
        <div className="container-container container-narrow">
          <div className="flex flex-col gap-10">
            <div className="">
              <h2 className="text-5xl text-black font-bold">
                One app for all customer conversations.{" "}
              </h2>
              <h2 className="text-5xl text-black/50 font-bold">
                Your business voice, texts, video meetings, and contacts – all
                in one place.
              </h2>
            </div>
            <div className="wrapper">
              <CustomerCommunicationToggler />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9fafe]">
        <div className="container-container container-narrow">
          <div className="flex flex-col justify-between items-center gap-y-6">
            <h2 className="text-5xl text-black font-bold">
              Connected to the tools you love
            </h2>
            <h4 className="text-xl text-black/70">
              Nextiva integrates seamlessly into your existing ecosystem.
            </h4>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-[60px]">
              <CustomerCommunicationToolsCard
                icon={
                  <img
                    src="/assets/icons/tools/zoho.png"
                    className="w-[50px]"
                    alt="Zoho logo"
                  />
                }
                title="Zoho"
                text="Get easy access to lead and customer records and save time with call logging as you connect Zoho CRM."
              />
              <CustomerCommunicationToolsCard
                icon={
                  <img
                    src="/assets/icons/tools/hubspot.png"
                    className="w-[50px]"
                    alt="HubSpot logo"
                  />
                }
                title="HubSpot"
                text="The HubSpot phone integration gives you customer information even before you pick up the phone."
              />
              <CustomerCommunicationToolsCard
                icon={
                  <img
                    src="/assets/icons/tools/zendesk.png"
                    className="w-[50px]"
                    alt="Zendesk logo"
                  />
                }
                title="Zendesk"
                text="Start making and receiving calls right from Zendesk. Create and sync call records across Nextiva and Zendesk."
              />
              <CustomerCommunicationToolsCard
                icon={
                  <img
                    src="/assets/icons/tools/salesforce.png"
                    className="w-[50px]"
                    alt="Salesforce logo"
                  />
                }
                title="Salesforce"
                text="With Nextiva's Salesforce VoIP integration, bridge the information gap between your CRM and phone system."
              />
              <CustomerCommunicationToolsCard
                icon={
                  <img
                    src="/assets/icons/tools/oracle-cloud.png"
                    className="w-[50px]"
                    alt="Oracle Cloud logo"
                  />
                }
                title="Oracle Sales Cloud"
                text="Connect your phone service with Oracle Sales Cloud for improved sales productivity and customer interactions."
              />
              <CustomerCommunicationToolsCard
                icon={
                  <img
                    src="/assets/icons/tools/microsoft-dynamics.png"
                    className="w-[50px]"
                    alt="Microsoft Dynamics logo"
                  />
                }
                title="Microsoft Dynamics"
                text="Enable Nextiva's Microsoft Dynamics CTI and watch your sales call efficiency and CX go through the roof."
              />
              <CustomerCommunicationToolsCard
                icon={
                  <img
                    src="/assets/icons/tools/outlook.png"
                    className="w-[50px]"
                    alt="Microsoft Outlook logo"
                  />
                }
                title="Microsoft Outlook"
                text="Make calls from your Outlook address book, and know which of your contacts are calling immediately."
              />
              <CustomerCommunicationToolsCard
                icon={
                  <img
                    src="/assets/icons/tools/netsuite.png"
                    className="w-[50px]"
                    alt="NetSuite logo"
                  />
                }
                title="NetSuite"
                text="Manage customer information like a pro with the Nextiva NetSuite integration. No more switching between apps."
              />
              <CustomerCommunicationToolsCard
                icon={
                  <img
                    src="/assets/icons/tools/bullhorn.png"
                    className="w-[50px]"
                    alt="Bullhorn logo"
                  />
                }
                title="Bullhorn"
                text="Integrate Bullhorn CRM or ATS with Nextiva's business phone service for a more collaborative CRM experience."
              />
              <CustomerCommunicationToolsCard
                icon={
                  <img
                    src="/assets/icons/tools/workbooks.png"
                    className="w-[50px]"
                    alt="Workbooks logo"
                  />
                }
                title="Workbooks"
                text="Effortlessly send information between Workbooks CRM and Nextiva's cloud phone system."
              />
              <CustomerCommunicationToolsCard
                icon={
                  <img
                    src="/assets/icons/tools/servicenow.png"
                    className="w-[50px]"
                    alt="ServiceNow logo"
                  />
                }
                title="ServiceNow"
                text="Get Nextiva for ServiceNow for advanced phone features inside your IT management software."
              />
              <CustomerCommunicationToolsCard
                icon={
                  <img
                    src="/assets/icons/tools/sugarcrm.png"
                    className="w-[50px]"
                    alt="SugarCRM logo"
                  />
                }
                title="SugarCRM"
                text="Get a detailed view of your caller without a manual search. Do this and more with the SugarCRM integration."
              />
            </div>

            <div className="mt-6">
              <a href="#" className="flex justify-center items-center gap-2">
                <h3 className="text-2xl font-bold">See all integrations</h3>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative">
        <div className="w-full relative">
          {/* Background image container - will match content height */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="/assets/images/backgrounds/products/customer-communication-bg-5.webp"
              className="w-full h-full object-cover min-h-[800px] md:min-h-0"
              alt="Background"
            />
          </div>

          {/* Content container */}
          <div className="relative container-container flex flex-col">
            <div className="w-full container-narrow">
              <div className="flex flex-col justify-center items-center gap-y-10">
                <div className="flex flex-col justify-center items-center gap-5">
                  <h2 className="text-5xl text-white font-bold">
                    View. Analyze. Act.
                  </h2>
                  <h3 className="text-white/50 text-xl font-bold">
                    A real-time dashboard that tracks call activity across your
                    entire organization.
                  </h3>
                </div>
                <OutlineButton
                  text={
                    <div className="flex items-center gap-4 text-white">
                      Learn more <ArrowRight />
                    </div>
                  }
                  className="hover:border-primary-600 border-white"
                />
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                  <CustomerCommunicationAnalyticsCard number={1} />
                  <CustomerCommunicationAnalyticsCard number={2} />
                  <CustomerCommunicationAnalyticsCard number={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9fafe]">
        <div className="container-container container-narrow">
          <div className="flex flex-col gap-y-12">
            <div className="text-center flex flex-col items-center justify-center gap-5">
              <h2 className="max-w-[80%] text-6xl text-black font-bold">
                Easy to set up and scale. Future-proofed for tomorrow.
              </h2>
              <p className="text-lg text-black/70">
                Manage all communication, workflows, users, and permissions in
                one view.
              </p>
            </div>
            <a
              href="#"
              className="flex justify-center items-center gap-2 text-black text-xl font-bold hover:text-primary-600"
            >
              Learn more <ArrowRight />
            </a>
            <div className="">
              <img
                src="/assets/images/backgrounds/products/customer-communication-bg-6.webp"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-container container-narrow">
          <div className="text-center flex flex-col items-center justify-center gap-8">
            <h2 className="text-5xl text-black font-bold">
              Work here, there, and everywhere
            </h2>
            <p className="text-lg text-black/70">
              Work anywhere, across all your devices.
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              <CustomerCommunicationPlatformCard
                icon={
                  <Monitor
                    variant="Bold"
                    size={42}
                    className="text-primary-600"
                  />
                }
                title="At your computer"
                subtitle="Work anywhere – desktop app or browser. Remote or in-office, your conversations go with you."
              />
              <CustomerCommunicationPlatformCard
                icon={
                  <Mobile variant="Bold" size={42} className="text-green-500" />
                }
                title="On your phone"
                subtitle="All conversations in one place with phone, SMS, and shared contacts together in one app."
              />
              <CustomerCommunicationPlatformCard
                icon={
                  <Call variant="Bold" size={42} className="text-yellow-400" />
                }
                title="At your desk"
                subtitle="Take calls on mobile, desk, or conference phones. Easy setup — no IT staff needed."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative">
        <div className="w-full relative">
          {/* Background image container - will match content height */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="/assets/images/backgrounds/products/customer-communication-bg-7.webp"
              className="w-full h-full object-cover min-h-screen md:min-h-0"
              alt="Background"
            />
          </div>

          {/* Content container */}
          <div className="relative container-container flex flex-col">
            <div className="w-full container-narrow">
              <div className="flex justify-between items-center">
                <h2 className="text-white text-6xl font-bold max-w-[30%]">
                  Reliable. Compliant. Trusted by millions.
                </h2>

                <div className="max-w-[40%] flex flex-col divide divide-y divide-white/20">
                  <CustomerCommunicationTrustedByCard
                    src="key-icon-min.png"
                    text="99.999% Uptime. Military Grade Security"
                  />
                  <CustomerCommunicationTrustedByCard
                    src="check-icon.png"
                    text="Compliant with TCPA, DNC, STIR/SHAKEN, HIPAA, PCI-DSS, PCI-DSS, and more."
                  />
                  <CustomerCommunicationTrustedByCard
                    src="time-icon.png"
                    text="Enterprise level implementation and 24/7 support"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-container container-narrow">
          <div className="w-full h-full md:h-[350px] flex justify-between items-center gap-12">
            <div className="">
              <img
                src="/assets/images/backgrounds/products/customer-communication-bg-8.webp"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full h-full">
              <div className="h-full flex flex-col justify-between max-w-[400px]">
                <h2 className="text-4xl font-bold">
                  Nextiva sets the industry standard
                </h2>
                <p className="text-base text-black/70">
                  Rated by customers voted best product and support, easiest to
                  set up and use.
                </p>
                <Button text="Learn more" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9fafe]">
        <div className="container-container container-narrow">
          <div className="w-full h-full flex justify-center items-center">
            <CustomerCommunicationSlider />
          </div>
        </div>
      </section>

      <section>
        <div className="container-container container-narrow">
          <div className="flex flex-col justify-between items-center gap-y-6">
            <div className="text-center">
              <h2 className="max-w-[600px] text-5xl text-black font-bold">
                Features we wouldn’t let you go without
              </h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-[60px]">
              <CustomerCommunicationFeatureCard
                icon={
                  <Call className="text-primary-600" variant="Bold" size={32} />
                }
                title="Unlimited Calling"
                text="Call any phone in the United States and Canada as much as you want. No minutes to track."
              />

              <CustomerCommunicationFeatureCard
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
              <CustomerCommunicationFeatureCard
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

              <CustomerCommunicationFeatureCard
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

              <CustomerCommunicationFeatureCard
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
              <CustomerCommunicationFeatureCard
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

              <CustomerCommunicationFeatureCard
                icon={
                  <User className="text-primary-600" variant="Bold" size={32} />
                }
                title="Auto Attendant"
                text="Greet callers instantly when they call and direct them to the right person. Professional and easy to use."
              />

              <CustomerCommunicationFeatureCard
                icon={
                  <Sms className="text-primary-600" variant="Bold" size={32} />
                }
                title="Voicemail-to-Email"
                text="Get voicemail messages delivered to your inbox. Listen to voicemails and respond through your email."
              />

              <CustomerCommunicationFeatureCard
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

              <CustomerCommunicationFeatureCard
                icon={<HambergerMenu className="text-primary-600" size={32} />}
                title="Call Queues"
                text="Handle calls when your team is busy. Callers wait in line for the next agent. You and your customers will love it."
              />

              <CustomerCommunicationFeatureCard
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

              <CustomerCommunicationFeatureCard
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

      <section>
        <div className="container-container">
          <div className="flex flex-col gap-y-12">
            <h2 className="text-black text-5xl text-center">
              “We have not worked with any other company that has had as big of
              an impact on our business as Nextiva”
            </h2>
            <div className="flex justify-center items-center gap-8">
              <img
                src="/assets/images/avatars/client-profile.webp"
                className="w-[80px] h-[80px] rounded-full"
              />
              <div className="flex flex-col">
                <h4 className="text-2xl">Ryan Petersen,</h4>
                <p className="text-black/70 text-xl">
                  Founder and CEO of Flexport
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-narrow">
          <div className="w-full flex-grow">
            <div className="w-full">
              <SliderComponent
                items={sliderComponent}
                slidesToShow={5}
                speed={2500}
                className="py-8"
                autoplay={true}
                pauseOnHover={true}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="customer-communication-cta-banner"
        className="container-container md:pb-[120px] pb-[80px] h-full w-full flex flex-col items-center justify-center"
      >
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <img
            src="/assets/images/backgrounds/pricing-help-cta.webp"
            className="absolute w-full h-full top-0 left-0 z-10 object-cover rounded-[32px]"
          />
          <div className="relative h-full flex flex-col items-center text-center justify-center py-[65px] px-[60px] z-20">
            <h3 className="text-white md:text-[48px] text-[34px] font-[600] leading-[1.2]">
              Nextiva already serves 1 million+ users.
            </h3>
            <p className="text-white/70 text-[16px] font-[500] text-center mt-[clamp(16px,1.25vw,32px)]">
              Connect your business communication on one app.
            </p>
            <div className="md:w-auto w-full flex md:flex-row flex-col gap-4 mt-[32px] ">
              <a
                href="#"
                role="button"
                className="rounded-full border border-primary-600 bg-white text-[1.25rem] text-primary-600 font-[600] hover:text-white hover:bg-primary-600 py-[1.25rem] md:px-[2rem] px-[1rem] transition-all duration-200 ease-in-out"
              >
                Get My Demo
              </a>
              <a
                href="#"
                role="button"
                className="rounded-full border border-white bg-transparent text-[1.25rem] text-white font-[600] hover:bg-primary-600 hover:border-primary-600 py-[1.25rem] md:px-[2rem] px-[1rem] transition-all duration-200 ease-in-out"
              >
                See Price
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const sliderComponent = [
  <div className="w-full p-[2rem] flex flex-col justify-center gap-y-[44px] rounded-[1rem] border border-[#0b10291a] bg-[#0b10290d]">
    <div className="">
      <img src="/assets/icons/companies/texhcrunch.png" />
    </div>
    <div className="flex items-center gap-4">
      <small className="text-black/50 leading-[1.2]">
        Conversations are the lifeblood of business, but workplace tech is
        killing them.
      </small>
      <ArrowRight className="text-black/50" size={50} />
    </div>
  </div>,
  <div className="w-full p-[2rem] flex flex-col justify-center gap-y-[44px] rounded-[1rem] border border-[#0b10291a] bg-[#0b10290d]">
    <div className="">
      <img src="/assets/icons/companies/texhcrunch.png" />
    </div>
    <div className="flex items-center gap-4">
      <small className="text-black/50 leading-[1.2]">
        Conversations are the lifeblood of business, but workplace tech is
        killing them.
      </small>
      <ArrowRight className="text-black/50" size={50} />
    </div>
  </div>,
  <div className="w-full p-[2rem] flex flex-col justify-center gap-y-[44px] rounded-[1rem] border border-[#0b10291a] bg-[#0b10290d]">
    <div className="">
      <img src="/assets/icons/companies/texhcrunch.png" />
    </div>
    <div className="flex items-center gap-4">
      <small className="text-black/50 leading-[1.2]">
        Conversations are the lifeblood of business, but workplace tech is
        killing them.
      </small>
      <ArrowRight className="text-black/50" size={50} />
    </div>
  </div>,
  <div className="w-full p-[2rem] flex flex-col justify-center gap-y-[44px] rounded-[1rem] border border-[#0b10291a] bg-[#0b10290d]">
    <div className="">
      <img src="/assets/icons/companies/texhcrunch.png" />
    </div>
    <div className="flex items-center gap-4">
      <small className="text-black/50 leading-[1.2]">
        Conversations are the lifeblood of business, but workplace tech is
        killing them.
      </small>
      <ArrowRight className="text-black/50" size={50} />
    </div>
  </div>,
  <div className="w-full p-[2rem] flex flex-col justify-center gap-y-[44px] rounded-[1rem] border border-[#0b10291a] bg-[#0b10290d]">
    <div className="">
      <img src="/assets/icons/companies/texhcrunch.png" />
    </div>
    <div className="flex items-center gap-4">
      <small className="text-black/50 leading-[1.2]">
        Conversations are the lifeblood of business, but workplace tech is
        killing them.
      </small>
      <ArrowRight className="text-black/50" size={50} />
    </div>
  </div>,
  <div className="w-full p-[2rem] flex flex-col justify-center gap-y-[44px] rounded-[1rem] border border-[#0b10291a] bg-[#0b10290d]">
    <div className="">
      <img src="/assets/icons/companies/texhcrunch.png" />
    </div>
    <div className="flex items-center gap-4">
      <small className="text-black/50 leading-[1.2]">
        Conversations are the lifeblood of business, but workplace tech is
        killing them.
      </small>
      <ArrowRight className="text-black/50" size={50} />
    </div>
  </div>,
  <div className="w-full p-[2rem] flex flex-col justify-center gap-y-[44px] rounded-[1rem] border border-[#0b10291a] bg-[#0b10290d]">
    <div className="">
      <img src="/assets/icons/companies/texhcrunch.png" />
    </div>
    <div className="flex items-center gap-4">
      <small className="text-black/50 leading-[1.2]">
        Conversations are the lifeblood of business, but workplace tech is
        killing them.
      </small>
      <ArrowRight className="text-black/50" size={50} />
    </div>
  </div>,
];
