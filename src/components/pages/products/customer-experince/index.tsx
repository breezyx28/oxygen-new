import OutlineButton from "@/components/buttons/outline-button";
import "../../../../styles/hero.css";
import {
  CustomerExperinceCard1,
  CustomerExperinceCard3,
  CustomerExperinceCard4,
  CustomerExperinceCard5,
  CustomerExperincePlatformCard,
  CustomerExperinceSlider1,
  CustomerExperinceSlider2,
  CustomerExperinceToggleFAQ,
  CustomerExperinceTrustedBy,
} from "./customer-experince-component";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CallIncoming,
  Chart,
  Star,
} from "iconsax-react";
import { CustomerExperinceSelect } from "./customer-experince-select";
import PartnersSlider from "@/components/sections/partners-slider";
import SectionLayout from "@/components/Layout/section-layout";
import Button from "@/components/buttons/button";
import BookingFormSection from "@/components/sections/booking-form/section-form";

const CustomerExperince = () => {
  return (
    <>
      <section className="relative w-full md:h-[190vh] h-auto text-white">
        <div className="absolute right-0 top-0 h-full w-full z-[-1]">
          {/* Use next/image for optimization */}
          <div className="relative h-full">
            <img
              src="/assets/images/backgrounds/products/customer-experince-hero.webp"
              alt="Customer Experience"
              className="object-cover absolute w-full h-full"
              width={3000}
            />
          </div>
        </div>
        <div className="container-container w-full h-auto flex justify-center items-center pt-[12.984375vw]">
          <div className="max-w-full w-full text-center">
            <h1 className="hero-title-text md:!text-[68px] !text-5xl md:mt-0 mt-20">
              Create an amazing <span className="text-disabled">sales</span> and{" "}
              <span className="text-disabled">service</span> customer
              experience.
            </h1>

            <p className="hero-subtitle-text px-4 mt-6">
              Engage on every channel with Nextiva’s platform for the best
              customer experience.
            </p>
            <OutlineButton
              text={"Get personalized demo"}
              className="md:w-[fit-content] !w-full text-white border-white md:mt-12 mt-8 hover:bg-transparent scale-[1] hover:scale-[1.05] transition-all duration-300 ease-in"
            />
          </div>
        </div>
        <div className="container-container z-[2]">
          <div className="">
            <div className="container-container">
              <div className="container w-full md:py-[100px] py-[50px]">
                <div className="glass-card !bg-white/10 md:min-h-[400px] min-h-[250px] flex flex-col justify-between items-start md:p-[48px] p-[24px]">
                  <h5 className="md:max-w-2/3 w-full md:text-lg text-base text-start">
                    <span className="text-disabled">MANAGE INTERACTIONS</span>{" "}
                    ACROSS EVERY CHANNEL
                  </h5>
                  <h3 className="md:max-w-2/3 w-full md:text-5xl text-xl text-start font-bold">
                    Say goodbye to siloed conversations and{" "}
                    <span className="text-disabled">
                      hello to a unified experience.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <CustomerExperinceTrustedBy />
        </div>
      </section>

      <section className="relative w-full h-auto container-narrow text-white">
        <div className="absolute right-0 top-0 h-full w-full z-[-1]">
          {/* Use next/image for optimization */}
          <div className="relative h-full">
            <img
              src="/assets/images/backgrounds/products/customer-experince-bg-2.webp"
              alt="Customer Experience"
              className="object-cover absolute w-full h-full"
              width={3000}
            />
          </div>
        </div>
        <div className="container-container">
          <div className="w-full text-center">
            <h1 className="md:text-[50px] text-3xl leading-[1.2] text-start font-bold">
              Customer expectations have changed.{" "}
              <span className="text-disabled">
                Consumers want unified experiences that siloed and dated
                solutions can’t deliver
              </span>
            </h1>

            <div className="w-full h-full flex md:flex-row flex-col justify-between items-center gap-14 mt-[60px]">
              <div className="md:w-1/2 w-full h-full">
                <img
                  src="/assets/images/backgrounds/products/customer-experince-bg-3.webp"
                  className="w-auto h-auto object-contain"
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col justify-between gap-y-12">
                <div className="flex flex-col gap-4">
                  <div className="">
                    <h3 className="flex items-center gap-2 md:text-3xl text-xl font-bold">
                      <span className="text-red-700">01</span>
                      <span className="">Consumer habits</span>
                    </h3>
                  </div>
                  <h5 className="text-sm text-start text-white/70 font-bold">
                    Customers are buying and interacting over more channels than
                    ever before, they switch between them and expect companies
                    to follow and remember their conversations.
                  </h5>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="">
                    <h3 className="flex items-center gap-2 md:text-3xl text-xl font-bold">
                      <span className="text-red-700">02</span>
                      <span className="">Consumer expectations</span>
                    </h3>
                  </div>
                  <h5 className="text-sm text-start text-white/70 font-bold">
                    Consumers no longer compare experiences among competitors.
                    They compare companies to the best experiences they’ve ever
                    had.
                  </h5>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="">
                    <h3 className="flex items-center gap-2 md:text-3xl text-xl font-bold">
                      <span className="text-red-700">03</span>
                      <span className="">Consumer tech-adoption</span>
                    </h3>
                  </div>
                  <h5 className="text-sm text-start text-white/70 font-bold">
                    Today, companies hear from their customers more but
                    understand less. Consumers are adopting new technologies
                    faster than companies can adapt to them.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-container container-narrow">
          <div className="flex flex-col items-center">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              <CustomerExperincePlatformCard
                src="/assets/images/posters/customer-experince/poster-1.webp"
                icon={
                  <Chart variant="Bold" size={50} className="text-white/60" />
                }
                title="Improve sales"
                subtitle="Keep customers engaged. Build loyalty and encourage repeat purchases and renewals."
              />
              <CustomerExperincePlatformCard
                src="/assets/images/posters/customer-experince/poster-2.webp"
                icon={
                  <ArrowUp variant="Bold" size={50} className="text-white/60" />
                }
                title="Increase satisfaction"
                subtitle="Leverage AI tools working alongside humans to engage more customers in less time and at reduced cost."
              />
              <CustomerExperincePlatformCard
                src="/assets/images/posters/customer-experince/poster-3.webp"
                icon={
                  <ArrowDown
                    variant="Bold"
                    size={50}
                    className="text-white/60"
                  />
                }
                title="Reduce your churn"
                subtitle="Use predictive AI to identify dissatisfied customers and recover the experience before they churn."
              />
            </div>

            <OutlineButton
              text={
                <div className="flex items-center gap-x-2">
                  <span className="!text-black font-bold">Get My Demo</span>
                  <ArrowRight className="text-black" />
                </div>
              }
              className="mt-12 hover:bg-transparent hover:scale-[1.1]"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container-container container-narrow">
          <div className="flex flex-col item-start gap-y-12">
            <h1 className="md:text-6xl text-3xl leading-[1.2] font-bold">
              Nextiva is <span className="text-black/50">unifying</span> all
              conversations and customer management on a single platform
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
              <CustomerExperinceCard1
                img="/assets/images/posters/customer-experince/poster-4.webp"
                title="Seamless OmniChannel Conversations Sales and Support"
                text="Engage with your customers wherever they are on every channel and understand customer preferences, history, and needs better than ever before."
              />
              <CustomerExperinceCard1
                img="/assets/images/posters/customer-experince/poster-5.webp"
                title="Unified Customer View"
                text="Gain a 360-degree view of each customer by consolidating data from all touchpoints – be it phone, text, social media, email, chat, or reviews."
              />
              <CustomerExperinceCard1
                img="/assets/images/posters/customer-experince/poster-6.webp"
                title="Real-time Data"
                text="Keep your customer data up to date in real-time. Any changes made on one channel instantly reflect on all others, ensuring that your team receives the most current and accurate customer information."
              />
              <CustomerExperinceCard1
                img="/assets/images/posters/customer-experince/poster-7.webp"
                title="Automated Workflows"
                text="Streamline your processes with AI automated workflows that trigger based on customer actions and interactions. Reduce manual tasks, save time, and provide a faster response to customer inquiries."
              />
            </div>
          </div>
        </div>
      </section>

      <CustomerExperinceSelect />

      <section className="relative w-full h-auto container-narrow text-white overflow-hidden z-10">
        {/* Parallax background container */}
        <div className="absolute inset-0 h-full w-full overflow-hidden !z-[-1]">
          <img
            src="/assets/images/backgrounds/products/customer-experince-bg-4.webp"
            alt="Customer Experience"
            className="object-cover w-full h-full"
            width={3000}
            height={2000}
            style={{
              backgroundAttachment: "fixed",
            }}
          />
        </div>

        {/* Content container */}
        <div className="relative z-10 container-container py-20">
          <CustomerExperinceToggleFAQ />
        </div>
      </section>

      <section>
        <div className="container-narrow">
          <div className="flex flex-col gap-y-10">
            <h2 className="container-container md:text-7xl text-3xl font-bold text-center">
              Real-time insights that <br />
              <span className="text-black/50">drive customer outcomes</span>
            </h2>

            <div className="flex flex-col">
              <CustomerExperinceSlider1 />
              <CustomerExperinceSlider2 />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-container container-narrow">
          <div className="flex md:flex-row flex-col justify-center items-start gap-10">
            <h2 className="md:w-1/2 w-full inline md:text-5xl text-2xl text-black font-bold">
              Surveys such as CSAT or NPS only give you feedback from a fraction
              of your customers.{" "}
              <span className="text-black/50">
                Using AI driven insight from every conversation provides you
                with the customer’s sentiment in real time.
              </span>
            </h2>
            <div className="md:w-1/2 w-full h-full flex flex-col justify-between items-start gap-y-10">
              <CustomerExperinceCard3
                icon={"image-1.webp"}
                title="Track sentiment"
                text="Utilize AI-driven call transcription, summary and sentiment analysis to gain real-time insight into the customer’s perception during interaction."
              />
              <CustomerExperinceCard3
                icon={"image-2.webp"}
                title="Minimize customer churn"
                text="Proactively understanding negative customer sentiment enables prompt action to resolve issues and retain customers."
              />
              <CustomerExperinceCard3
                icon={"image-3.webp"}
                title="Reduce reliance on surveys"
                text="Surveys offer limited insights. By analyzing each interaction in real time, you know immediately how well your business is meeting customer expectations."
              />
              <CustomerExperinceCard3
                icon={"image-4.webp"}
                title="Gather Customer Insights with Minimal Effort"
                text="Surveys require significant time and resources for creation, distribution, and analysis, while AI-driven insights from existing conversations provide real-time feedback effortlessly through sentiment analysis."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-auto container-narrow text-white overflow-hidden z-10">
        {/* Parallax background container */}
        <div className="absolute inset-0 h-full w-full overflow-hidden !z-[-1]">
          <img
            src="/assets/images/backgrounds/products/customer-experince-bg-5.webp"
            alt="Customer Experience"
            className="object-cover w-full h-full"
            width={3000}
            height={2000}
            style={{
              backgroundAttachment: "fixed",
            }}
          />
        </div>

        <div className="relative z-10 container-container">
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-4">
              <div className="w-[fit-content] md:rounded-[16px] rounded-full bg-green-100 flex items-center gap-2 md:py-[16px] md:px-[32px] py-[8px] px-[16px]">
                <Star
                  variant="Bold"
                  className="text-black md:w-[32px] text-[26px]"
                />
                <span className="text-black md:text-2xl text-base">
                  All Features
                </span>
              </div>
              <h2 className="inline md:text-7xl text-3xl font-bold">
                Transform your customer experience with seamless interactions{" "}
                <span className="text-disabled">
                  across all channels, powered by AI
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <CustomerExperinceCard4
                title="Inbound Voice"
                subtitle="Inbound Contact Center"
                icon={
                  <CallIncoming
                    variant="Bold"
                    className="md:w-[45px] w-[24px] text-whit/20"
                  />
                }
                buttonText={"Learn more"}
              />
              <CustomerExperinceCard4
                title="Inbound Voice"
                subtitle="Inbound Contact Center"
                icon={
                  <CallIncoming
                    variant="Bold"
                    className="md:w-[45px] w-[24px] text-whit/20"
                  />
                }
                buttonText={"Learn more"}
              />
              <CustomerExperinceCard4
                title="Inbound Voice"
                subtitle="Inbound Contact Center"
                icon={
                  <CallIncoming
                    variant="Bold"
                    className="md:w-[45px] w-[24px] text-whit/20"
                  />
                }
                buttonText={"Learn more"}
              />
              <CustomerExperinceCard4
                title="Inbound Voice"
                subtitle="Inbound Contact Center"
                icon={
                  <CallIncoming
                    variant="Bold"
                    className="md:w-[45px] w-[24px] text-whit/20"
                  />
                }
                buttonText={"Learn more"}
              />
              <CustomerExperinceCard4
                title="Inbound Voice"
                subtitle="Inbound Contact Center"
                icon={
                  <CallIncoming
                    variant="Bold"
                    className="md:w-[45px] w-[24px] text-whit/20"
                  />
                }
                buttonText={"Learn more"}
              />
              <CustomerExperinceCard4
                title="Inbound Voice"
                subtitle="Inbound Contact Center"
                icon={
                  <CallIncoming
                    variant="Bold"
                    className="md:w-[45px] w-[24px] text-whit/20"
                  />
                }
                buttonText={"Learn more"}
              />
              <CustomerExperinceCard4
                title="Inbound Voice"
                subtitle="Inbound Contact Center"
                icon={
                  <CallIncoming
                    variant="Bold"
                    className="md:w-[45px] w-[24px] text-whit/20"
                  />
                }
                buttonText={"Learn more"}
              />
              <CustomerExperinceCard4
                title="Inbound Voice"
                subtitle="Inbound Contact Center"
                icon={
                  <CallIncoming
                    variant="Bold"
                    className="md:w-[45px] w-[24px] text-whit/20"
                  />
                }
                buttonText={"Learn more"}
              />
              <CustomerExperinceCard4
                title="Inbound Voice"
                subtitle="Inbound Contact Center"
                icon={
                  <CallIncoming
                    variant="Bold"
                    className="md:w-[45px] w-[24px] text-whit/20"
                  />
                }
                buttonText={"Learn more"}
              />
              <CustomerExperinceCard4
                title="Inbound Voice"
                subtitle="Inbound Contact Center"
                icon={
                  <CallIncoming
                    variant="Bold"
                    className="md:w-[45px] w-[24px] text-whit/20"
                  />
                }
                buttonText={"Learn more"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[120px]">
        <PartnersSlider />
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
          <div className="relative h-full container-container flex flex-col">
            <div className="w-full container-narrow">
              <div className="flex flex-col justify-center items-center gap-y-10">
                <div className="flex flex-col justify-center items-center gap-5">
                  <h2 className="md:text-5xl text-3xl text-white font-bold text-center md:text-start">
                    1 million+ users. 15 years.
                  </h2>
                </div>

                <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-6">
                  <CustomerExperinceCard5 number={1} />
                  <CustomerExperinceCard5 number={2} />
                  <CustomerExperinceCard5 number={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/customer-experince-bg-6.webp">
        <div className="relative h-auto container-container container-narrow">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-y-10">
              <div className="w-[fit-content] py-[12px] px-[24px] bg-primary-600 text-xl text-white rounded-[16px]">
                Future with Oxygen
              </div>
              <h2 className="text-center md:text-6xl text-4xl text-black/70 font-bold">
                Automation and artificial intelligence are becoming everyday
                technology. <br />
                <span className="text-primary-600">Get ready with Nextiva</span>
              </h2>
              <Button
                text="Start for free"
                className="!w-full text-center hover:bg-primary-600 hover:text-white hover:scale-[1.05] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      <BookingFormSection />
    </>
  );
};

export default CustomerExperince;
