import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import SectionLayout from "@/components/Layout/section-layout";
import TrustedBy from "@/components/sliders/trusted-by";
import { Cloud, Coin, Danger, Layer, TickCircle } from "iconsax-react";
import {
  CustomerJourneyCard1,
  CustomerJourneyCard2,
} from "./ai-chat-commponents";
import OxygenBadge from "@/components/buttons/oxygen-badge";
import {
  SplittedImages,
  SplittedImagesLTR,
} from "@/components/cards/splitted-images";
import PartnersSlider from "@/components/sections/partners-slider";
import BookingFormSection from "@/components/sections/booking-form/section-form";

const Customerjourney = () => {
  return (
    <>
      <section id="products-customer-journey" className="h-auto w-full">
        <div className="container-container pt-[120px]">
          <div className="head flex flex-col justify-center items-center gap-y-[8px]">
            <PageBadge
              icon={
                <Coin
                  variant="Bold"
                  className="text-primary-600 md:w-[20px] w-[16px]"
                />
              }
              text="Journey Orchestration"
            />
            <h3 className="md:text-[62px] text-[42px] font-bold text-center leading-[1.2]">
              Deliver a personalized customer experience at scale
            </h3>
            <div className="max-w-[720px]">
              <p className="text-center text-black/70 md:text-[20px] text-[14px]">
                Give customers an intelligent, intuitive experience at every
                interaction.
              </p>
            </div>
            <Button
              text="Orchestrate my customer journey"
              className="mt-[clamp(2rem,2.13vw,3rem)] mb-[60px]"
            />
          </div>

          <div className="hero relative w-full h-full rounded-[32px] flex gap-4 items-center justify-center">
            <div className="relative h-[490px] w-[33%] flex flex-col justify-end text-start">
              <img
                src="/assets/images/backgrounds/products/customer-journey-hero-bg-2.webp"
                className="absolute w-full h-full rounded-[32px] object-cover z-10"
              />
              <h3 className="text-white text-5xl font-bold p-[40px] z-20">
                Know your customers inside out
              </h3>
            </div>
            <img
              src="/assets/images/backgrounds/products/customer-journey-hero-bg-1.webp"
              className="w-[66%] h-[490px] rounded-[32px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="products-customer-jpurney-trust-slider">
        <div className="container-container pt-[70px] !text-black">
          <TrustedBy />
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/customer-journey-bg-1.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col gap-20">
            <div className="flex justify-end itmes-center">
              <div className="md:max-w-1/2 w-full">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2">
                      <Danger variant="Bold" className="text-red-500" />
                      <span className="text-lg">Problem</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2">
                      <TickCircle variant="Bold" className="text-primary-600" />
                      <span className="text-lg">Solution</span>
                    </div>
                  </div>
                  <h4 className="text-start text-white text-5xl font-bold ">
                    The complexity of customer relationships is growing
                  </h4>
                  <p className="text-white/70 text-xl">
                    There are more ways to connect and manage customers but they
                    are not integrated, resulting in a fragmented, incomplete
                    understanding of customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full border-l border-white/50">
              <div className="flex gap-6">
                <div className="flex flex-col gap-[20px]">
                  <div className="h-[40px]"></div>
                  <div className="w-[3px] h-[100px] bg-white mt-[40px]"></div>
                </div>
                <div className="numbers ml-[30px] h-full flex-1 flex flex-col justify-center gap-[20px]">
                  <div className="h-[40px]"></div>
                  <div className="my-[38px] h-[90px] flex flex-col justify-center text-white/50 text-5xl font-bold">
                    01
                  </div>
                  <div className="my-[38px] h-[90px] flex flex-col justify-center text-white/50 text-5xl font-bold">
                    02
                  </div>
                  <div className="my-[38px] h-[90px] flex flex-col justify-center text-white/50 text-5xl font-bold">
                    03
                  </div>
                </div>
                <div className="boxes-1 flex flex-col gap-[20px]">
                  <div className="w-full flex items-center gap-2 rounded-lg bg-white py-2 px-3">
                    <Danger variant="Bold" className="text-red-500" />
                    <span className="text-lg">Problem</span>
                  </div>
                  <CustomerJourneyCard1
                    title="Endless repetition"
                    text="Agents lack context from previous interactions, increasing friction."
                  />
                  <CustomerJourneyCard1
                    title="Endless repetition"
                    text="Agents lack context from previous interactions, increasing friction."
                  />
                  <CustomerJourneyCard1
                    title="Endless repetition"
                    text="Agents lack context from previous interactions, increasing friction."
                  />
                </div>
                <div className="boxes-2 flex flex-col gap-[20px]">
                  <div className="w-full flex items-center gap-2 rounded-lg bg-white py-2 px-3">
                    <TickCircle variant="Bold" className="text-primary-600" />
                    <span className="text-lg">Solution</span>
                  </div>
                  <CustomerJourneyCard1
                    title="Customer journey tracking"
                    text="Agents see the customer’s interaction history and now have the context to serve and sell better."
                  />
                  <CustomerJourneyCard1
                    title="Customer journey tracking"
                    text="Agents see the customer’s interaction history and now have the context to serve and sell better."
                  />
                  <CustomerJourneyCard1
                    title="Customer journey tracking"
                    text="Agents see the customer’s interaction history and now have the context to serve and sell better."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      <section>
        <div className="container-container container-narrow">
          <div className="flex flex-col items-center gap-y-10">
            <OxygenBadge />
            <h2 className="text-6xl font-bold text-center">
              Improve every interaction with customer journey orchestration
            </h2>
            <div className="h-full">
              <img
                src="/assets/images/backgrounds/products/customer-journey-bg-2.webp"
                className="w-full h-auto mt-6"
              />
            </div>{" "}
          </div>
        </div>
      </section>

      <section>
        <div className="container-container container-narrow">
          <div className="flex flex-col items-center gap-y-6">
            <OxygenBadge />

            <h2 className="text-6xl font-bold">
              <span className="underline text-primary-600">
                Journey orchestration
              </span>{" "}
              at work
            </h2>

            <div className="flex flex-col gap-y-10 mt-12">
              <SplittedImages
                img1="/assets/images/backgrounds/products/customer-journey-cover-1.webp"
                img2="/assets/images/backgrounds/products/customer-journey-cover-2.webp"
                imgCaption={
                  <div className="flex flex-col gap-y-6">
                    <h3 className="text-white text-5xl font-bold">
                      Create customer journeys that drive value
                    </h3>
                    <p className="text-base text-disabled">
                      What’s better than orchestrating frictionless customer
                      journeys? Being able to do it quickly, without deep
                      technical knowledge and rely on prebuilt journeys for
                      faster ROI.
                    </p>
                  </div>
                }
              />
              <SplittedImagesLTR
                img1="/assets/images/backgrounds/products/customer-journey-cover-4.webp"
                img2="/assets/images/backgrounds/products/customer-journey-cover-3.webp"
                imgCaption={
                  <div className="flex flex-col gap-y-6">
                    <h3 className="text-white text-5xl font-bold">
                      Streamline your engagement channels
                    </h3>
                    <p className="text-base text-disabled">
                      Minimize frustration with voice and digital channels by
                      knowing where customers left off regardless of channel and
                      re-engaging them with the right message at the right time.
                    </p>
                  </div>
                }
              />

              <SplittedImages
                img1="/assets/images/backgrounds/products/customer-journey-cover-5.webp"
                img2="/assets/images/backgrounds/products/customer-journey-cover-6.webp"
                imgCaption={
                  <div className="flex flex-col gap-y-6">
                    <h3 className="text-white text-5xl font-bold">
                      Go beyond customer journey mapping
                    </h3>
                    <p className="text-base text-disabled">
                      Show customers you “understand” them by predicting—then
                      satisfying—their needs in real time.
                    </p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/customer-journey-bg-3.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col gap-y-12">
            <OxygenBadge />
            <h3 className="text-white font-bold text-5xl">Key advantages</h3>
            <div className="grid grid-cols-3 gap-[clamp(1.5rem,1.42vw,2rem)]">
              <CustomerJourneyCard2
                title="Seamless interactions"
                text="Proactive context awareness reduces friction for both customers and agents and promotes loyalty."
              />
              <CustomerJourneyCard2
                title="Guiding customers"
                text="Applied workflows and AI leads customers to the most favorable outcome available."
              />
              <CustomerJourneyCard2
                title="Channel adaptability"
                text="Adaptability to channels promotes customer choice which translates to reduced churn via respect"
              />

              <CustomerJourneyCard2
                title="Empowered Agents"
                text="Agents with proper tools learn, adapt and stay engaged, reducing turnover and improving efficiency."
              />
              <CustomerJourneyCard2
                title="Enhanced Experience"
                text="Intelligent oversight bolsters real-time coaching benefiting quality of customer experience."
              />
              <CustomerJourneyCard2
                title="Continuous CX improvement"
                text="Dashboards and historical trends mean adaptability for constant improvement of CX for customers."
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      <section className="bg-[#f9fafe]">
        <div className="container-container container-narrow">
          <div className="flex flex-col items-center">
            <h2 className="text-black text-5xl font-bold">
              Future-proof your business
            </h2>

            <div className="flex flex-col gap-y-10 mt-12">
              <p className="text-black">
                Equip your team to manage all customer tasks in one place,
                simplifying workflows and amplifying efficiency, so they can
                prioritize exceptional service.
              </p>
              <div className="h-full grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="p-[32px] rounded-[1.5rem] bg-white border">
                  <div className="flex flex-col gap-y-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">100% hybrid cloud</h3>
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <Cloud variant="Bold" className="text-primary-600" />
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-black/20"></div>
                    <p className="text-base text-black/50">
                      Nextiva support a full range of deployments based on needs
                      and requirements.
                    </p>
                    <ul className="flex flex-col gap-[28px] bg-primary-50 rounded-[1.5rem] p-[28px]">
                      <li className="border-l-3 border-primary-600 pl-4">
                        <p className="text-black text-base">Cloud</p>
                        <p className="text-base text-black/50">
                          Get the ultimate scalability, cost savings and speed
                          of innovation.
                        </p>
                      </li>
                      <li className="border-l-3 border-primary-600 pl-4">
                        <p className="text-black text-base">Hybrid</p>
                        <p className="text-base text-black/50">
                          Keep sensitive data on-premise while leveraging the
                          cloud’s scalability for other operations.
                        </p>
                      </li>
                      <li className="border-l-3 border-primary-600 pl-4">
                        <p className="text-black text-base">On Premise</p>
                        <p className="text-base text-black/50">
                          Often suits industries that need to comply with strict
                          data regulations.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-full flex flex-col gap-y-6">
                  <div className="flex flex-col gap-[28px] bg-white rounded-[1.5rem] p-[28px] border">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-bold">100% REST APIs</h3>
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <Layer variant="Bold" className="text-primary-600" />
                      </div>
                    </div>

                    <div className="w-full h-[1px] bg-black/20"></div>
                    <p className="text-base text-black/50">
                      Every function of Nextiva can be driven via REST APIs.
                      This means you can easily get data in and out, seamlessly
                      connect to a wide range of external platforms, and
                      programmatically make Nextiva do exactly what you need,
                      without lifting a finger after the initial setup.
                    </p>
                  </div>
                  <div className="flex flex-col gap-[28px] bg-white rounded-[1.5rem] p-[28px] border">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-bold">Microservices</h3>
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <TickCircle
                          variant="Bold"
                          className="text-primary-600"
                        />
                      </div>
                    </div>
                    <div className="w-full h-[1px] bg-black/20"></div>
                    <p className="text-base text-black/50">
                      Nextiva is not just one block of code. Nextiva is actually
                      30+ self-redundant systems that all talk to each other.
                      This means Nextiva’s network is self-healing, so there’s
                      no planned downtime. And you can scale your usage with no
                      limits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnersSlider />

      <BookingFormSection img="/assets/images/booking-form/Kevin-Garnett1.webp" />
    </>
  );
};

export default Customerjourney;
