import Button from "@/components/buttons/button";
import { USNewsBadgeCard } from "./business-voip-components";
import BusinessVoipFeatuesTable from "./business-voip-features-table";
import { VoipPlans } from "./voip-plans";
import VideoPlayer from "@/components/cards/video-player";
import { AnimatePresence } from "framer-motion";
import VoipFaqs from "./voip-faqs";
import { ArrowRight } from "iconsax-react";

export const BusinessVoip = () => {
  return (
    <>
      <section>
        <div className="w-full container-container container-narrow">
          <div className="wrapper w-full flex justify-between items-center">
            <div className="w-full flex-1">
              <div className="w-full flex flex-col items-center justify-between gap-y-8">
                <div className="flex flex-col items-start justify-center gap-y-[3rem]">
                  <h2 className="text-primary-900 text-[56px] leading-[1.1] font-extrabold">
                    The small business VoIP phone system for modern work.
                  </h2>
                  <p className="text-primary-900 text-3xl leading-[1.1]">
                    Get business phone calls, video meetings, and secure
                    messaging in one platform. Easy setup. Budget-friendly.
                    Trusted by millions.
                  </p>
                </div>
                <div className="w-full flex flex-col items-start gap-y-4">
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

      <section id="us-news-badge-section">
        <div className="container-container flex justify-between items-center">
          <USNewsBadgeCard text="Best office phone system" />
          <USNewsBadgeCard text="HD video conferencing" />
          <img
            src="/assets/icons/badges/US-news-badge.webp"
            className="w-[120px]"
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

      <section id="voip-plans">
        <div className="container-container container-narrow">
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
              <h2 className="text-center text-5xl text-primary-900 font-bold">
                Get advanced features with your business VoIP service.
              </h2>
            </div>
            <div className="h-full flex justify-between items-center gap-[60px]">
              <div className="h-full w-1/2 features-faqs flex flex-col">
                <VoipFaqs />
              </div>
              <div className="video h-full w-1/2 flex flexx-col items-center justify-center">
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
        <div className="container-container">
          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-y-6">
              <p className="text-primary-600 capitalize">PHONE SYSTEMS</p>
              <p className="text-primary-900 text-5xl font-bold">
                Business VoIP vs. Traditional Phones
              </p>
              <p className="text-primary-900 text-2xl">
                How does a VoIP system compare to analog phone lines? The winner
                is clear here.
              </p>
            </div>
            <div className="">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  {/* Table Header */}
                  <thead>
                    <tr className="bg-primary-600 px-[0px] w-full flex items-center py-[1rem] my-[24px] border-b">
                      <th className="text-start w-full mx-auto">{"Test"}</th>

                      <th className="text-center w-full mx-auto">{"Test"}</th>
                      <th className="text-center w-full mx-auto">{"Test"}</th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="voip-table-body-wrapper w-full divide-y">
                    <tr className="voip-row w-full flex md:flex-row flex-col items-center md:gap-y-0 gap-y-4 py-[20px]">
                      {/* Feature Name Column */}
                      <td className="max-w-[256px] w-full flex md:flex-row flex-row-reverse items-center gap-x-[4px] pl-4"></td>

                      {/* Feature Status Columns */}
                      <td className="w-full flex justify-center bg-white">
                        {"test"}
                      </td>

                      <td className="w-full text-sm flex justify-center items-center ">
                        {"test"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
