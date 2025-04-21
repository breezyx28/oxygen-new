import Button from "@/components/buttons/button";
import {
  USNewsBadgeCard,
  VoIPInfoCard,
  VoipPlatformsReviewsCard,
  WhyVoip,
} from "./business-voip-components";
import BusinessVoipFeatuesTable from "./business-voip-features-table";
import { VoipPlans } from "./voip-plans";
import VideoPlayer from "@/components/cards/video-player";
import VoipFaqs from "./voip-faqs";
import { ArrowRight } from "iconsax-react";
import BusinessVoipCompareTable from "./business-voip-compare-tale";
import BookingForm from "@/components/sections/booking-form";

export const BusinessVoip = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-full md:max-w-[78.5rem] max-w-full md:px-[0px] px-[1rem] mx-auto container-narrow">
          <div className="wrapper w-full flex md:flex-row flex-col justify-between items-center md:gap-[0px] gap-10">
            <div className="w-full flex-1">
              <div className="w-full flex flex-col items-center justify-between gap-y-8">
                <div className="md:text-start text-center flex flex-col md:items-start items-center justify-center gap-y-[3rem]">
                  <h2 className="text-primary-900 md:text-[56px] text-[32px] leading-[1.1] font-extrabold">
                    The small business VoIP phone system for modern work.
                  </h2>
                  <p className="text-primary-900 text-3xl leading-[1.1]">
                    Get business phone calls, video meetings, and secure
                    messaging in one platform. Easy setup. Budget-friendly.
                    Trusted by millions.
                  </p>
                </div>
                <div className="w-full flex flex-col md:flex-row md:items-start items-center gap-4">
                  <a
                    href="#"
                    className="py-[1.5rem] px-[3rem] text-white font-bold text-[1.3rem] bg-primary-600 rounded-full"
                    style={{
                      boxShadow: "0 12px 28px rgba(0,0,0,.14)",
                    }}
                  >
                    Get a quote
                  </a>
                  <a
                    href="#"
                    className="py-[1.5rem] px-[3rem] text-primary-600 font-bold text-[1.3rem] bg-white rounded-full"
                    style={{
                      boxShadow: "0 12px 28px rgba(0,0,0,.14)",
                    }}
                  >
                    See top features
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <img
                src="/assets/images/backgrounds/products/business-voip-hero.webp"
                className="w-auto h-full flex-1"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="us-news-badge-section" className="flex justify-center">
        <div className="w-full max-w-[78.5rem] mx-auto flex md:flex-row flex-col justify-between items-center px-[20px]">
          <USNewsBadgeCard text="Best office phone system" />
          <USNewsBadgeCard text="HD video conferencing" />
          <img
            src="/assets/icons/badges/US-news-badge.webp"
            className="w-[120px] md:order-none order-first md:mb-[0px] mb-4"
          />
          <USNewsBadgeCard text="Mobile & desktop apps" />
          <USNewsBadgeCard text="Superior network reliability" />
        </div>
      </section>

      <section id="voip-plans">
        <div className="container-container md:pt-[120px] pt-[80px]">
          <div className="flex flex-col gap-y-[80px]">
            <div className="flex flex-col items-center justify-center gap-y-[30px]">
              <h5 className="text-center text-black/70 text-2xl font-bold">
                Advanced calling features. Small business prices.
              </h5>
              <h2 className="text-center text-5xl text-primary-900 font-bold">
                Flexible pricing made for small businesses.
              </h2>
            </div>
            <VoipPlans />
          </div>
        </div>
      </section>

      <section id="voip-table">
        <div className="container-container md:pt-[120px] pt-[80px]">
          <div className="flex flex-col gap-y-[80px]">
            <div className="flex flex-col items-center justify-center gap-y-[30px]">
              <h2 className="text-center text-5xl text-primary-900 font-bold">
                Nextiva leads the charge, others follow.
              </h2>
              <h5 className="text-center text-black/70 text-2xl font-bold">
                The top choice among VoIP services — unmatched value, support,
                and advanced capabilities.
              </h5>
            </div>

            <div className="voip-table">
              <BusinessVoipFeatuesTable />
            </div>

            <div className="flex items-center flex-col gap-y-6">
              <h5 className="md:max-w-[900px] max-w-full text-center text-primary-900 text-[24px] font-normal">
                Nextiva is recommended by <strong>92</strong>% customers. Rated
                by <strong>3000</strong>+ customers.
              </h5>
              <span className="md:max-w-[900px] max-w-full text-center text-primary-900 text-[18px] font-normal">
                Make the move to a communication platform you can count on.
              </span>
              <Button text="Get started" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-container container-narrow border-b">
          <div className="flex flex-col gap-y-[6rem]">
            <div className="header flex flex-col items-center gap-y-[3rem]">
              <h5 className="text-black/70 text-3xl font-bold">
                Top calling features your business needs.
              </h5>
              <h2 className="md:text-center text-start md:text-5xl text-2xl text-primary-900 font-bold">
                Get advanced features with your business VoIP service.
              </h2>
            </div>
            <div className="h-full flex md:flex-row flex-col justify-between items-center gap-[60px]">
              <div className="h-full md:w-1/2 w-full features-faqs flex flex-col">
                <VoipFaqs />
              </div>
              <div className="video h-full md:w-1/2 w-full flex flexx-col items-center justify-center">
                <VideoPlayer
                  src="/assets/videos/voip/Best Small Business VoIP Solution [Trusted by 1M+ Users].ts"
                  poster={
                    "/assets/images/backgrounds/products/voip-video-poster.webp"
                  }
                />
              </div>
            </div>

            <a
              href="#"
              className="flex items-cener justify-center text-center text-primary-600 font-bold"
            >
              Get started <ArrowRight className="pl-2 inline" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container-container md:pt-[120px] pt-[80px]">
          <div className="flex flex-col">
            <div className="flex flex-col items-center text-center gap-y-6">
              <p className="text-[12px] text-primary-600 font-bold capitalize">
                PHONE SYSTEMS
              </p>
              <p className="text-primary-900 md:text-5xl text-3xl font-bold">
                Business VoIP vs. Traditional Phones
              </p>
              <p className="text-primary-900 md:text-2xl text-lg">
                How does a VoIP system compare to analog phone lines? The winner
                is clear here.
              </p>
            </div>
            <div className="flex flex-col gap-y-[80px]">
              <BusinessVoipCompareTable />

              <div className="flex flex-col gap-y-6">
                <h3 className="text-center text-primary-900 text-3xl font-bold">
                  Get the best choice in business communications
                </h3>
                <p className="text-center text-primary-900">
                  Nextiva is more than a VoIP provider. It’s your partner as you
                  scale and your business needs change. Your team’s
                  communication and collaboration needs are covered with
                  NextivaONE. And it only gets better with new functionality
                  each month. Traditional landlines simply can’t do that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="voip-cta-provider">
        <div className="bg-[#ebeff5] w-full h-auto mt-[60px]">
          <div className="flex flex-col items-center gap-y-6 py-[60px]">
            <div className="text-center">
              <p className="text-primary-900 text-3xl font-bold">
                Over a million users made Nextiva the #1 business VoIP provider.
              </p>
              <p className="text-primary-900 text-xl">
                See how much you’ll save on business communications from
                Nextiva.
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                text="Talk with an expert"
                className="font-bold !text-[14px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-container container-narrow">
          <div className="flex flex-col gap-y-[100px]">
            <h2 className="text-primary-900 md:text-5xl text-3xl md:text-start text-center font-bold">
              Why choose Nextiva for small business VoIP?
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[80px] gap-y-[100px]">
              <WhyVoip
                src="/assets/icons/png/voip-features/SMB-Honest-pricing-icon.png"
                title="Unmatched features"
                p1="Our small business phone plans include a robust suite of calling features, including threaded conversations for a complete customer communication history, call recording, and easy text messaging."
                p2="Plus, you can integrate it with leading CRM and email software."
              />
              <WhyVoip
                src="/assets/icons/png/voip-features/SMB-Reliable-icon.png"
                title="Superior reliability & security"
                p1="Enjoy industry-leading uptime of 99.999% and stay connected with our highly redundant network connecting billions of voice calls."
                p2="Nextiva complies with industry standards, including SOC 2, HIPAA, and PCI-DSS, to ensure data protection and security."
              />
              <WhyVoip
                src="/assets/icons/png/voip-features/SMB-Scalable-icon.png"
                title="Instant scalability"
                p1="Free yourself from the limits of landlines and give your team the best VoIP solution."
                p2="Adding a new location? Working from home? Add business phone numbers, update call flows, and toggle advanced features instantly."
              />
              <WhyVoip
                src="/assets/icons/png/voip-features/SMB-Hosted-PBX-icon.png"
                title="Hassle-free PBX"
                p1="No updates or costly hardware to deal with. Manage your business VoIP service anywhere."
                p2="Set up employees, see voice calls in real-time, and assign virtual phone numbers in a secure portal. Your traditional phone PBX is history."
              />
              <WhyVoip
                src="/assets/icons/png/voip-features/SMB-Affordable-icon.png"
                title="Surprisingly affordable"
                p1="Lower phone service costs by over 60% vs. traditional landlines. Choose a plan that fits your budget and grows with your business. We offer transparent pricing without surprises."
                p2="Plus, you can make international calls for just pennies per minute. Get unified communications for less."
              />
              <WhyVoip
                src="/assets/icons/png/voip-features/SMB-Service-icon.webp"
                title="Amazing Service®"
                p1="Our knowledgeable and friendly customer support team is available 24/7 over the phone, email, and chat to help you with your business phone system."
                p2="Business owners rate Nextiva as the best VoIP provider for our exceptional support. Period."
              />
            </div>
          </div>
        </div>
      </section>

      <section id="voip-cta-provider">
        <div className="bg-[#EBF2FE] w-full h-auto mt-[60px]">
          <div className="container-container">
            <div className="w-full flex md:flex-row flex-col items-start gap-6 py-[60px]">
              <h2 className="w-full text-primary-900 md:text-4xl text-xl font-bold">
                Is VoIP Worth the Hype?
              </h2>
              <div className="flex flex-col max-w-[600px]">
                <VoIPInfoCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform-rating">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[66.25rem] py-[60px] md:px-[0px] px-[40px]">
            <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-6">
              <VoipPlatformsReviewsCard
                icon="/assets/icons/companies/g2.png"
                rate={4.5}
              />
              <VoipPlatformsReviewsCard
                icon="/assets/icons/companies/Gartner-Logo-Blue.png"
                rate={4.7}
              />
              <VoipPlatformsReviewsCard
                icon="/assets/icons/companies/getvoip-logo.png"
                rate={4.6}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form">
        <div className="container-container container-narrow">
          <div className="flex flex-col">
            <h2 className="text-center text-primary-900 md:text-[46px] text-2xl font-extrabold leading-[1.1]">
              See why 100,000+ brands choose Nextiva for business VoIP.
            </h2>
            <div className="">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
