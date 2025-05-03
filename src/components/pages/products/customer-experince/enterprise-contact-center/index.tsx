import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import { Monitor, Refresh, ShieldTick, Star1 } from "iconsax-react";
import {
  EnterpriseContactCenterCard1,
  EnterpriseContactCenterCard2,
  EnterpriseContactCenterCard3,
  EnterpriseContactCenterCard4,
  EnterpriseContactCenterCard5,
  EnterpriseContactCenterCard6,
  EnterpriseContactCenterSlider1,
  EnterpriseContactCenterToggleFAQ,
} from "./enterprise-contact-center-components";
import SectionLayout from "@/components/Layout/section-layout";
import EnterpriseContactCenterSelect from "./enterprise-contact-center-select";
import EnterpriseContactCenterSelect2 from "./enterprise-contact-center-select-2";
import { Check } from "lucide-react";
import PartnersSlider from "@/components/sections/partners-slider";

export default function EnterpriseContactCenter() {
  return (
    <>
      <section className="h-auto w-full">
        <div className="container-container container-narrow">
          <div className="head flex flex-col justify-center items-center gap-y-[8px]">
            <PageBadge
              icon={
                <Star1
                  variant="Bold"
                  className="md:w-[20px] w-[16px] text-primary-600"
                />
              }
              text="Omnichannel Contact Center"
            />
            <h3 className="md:text-[58px] text-[42px] font-bold text-center leading-[1.2]">
              <span className="text-primary-600">AI-Powered</span> Contact
              Center
            </h3>
            <div className="max-w-[720px]">
              <p className="text-center text-black/70 md:text-[20px] text-[14px]">
                Create amazing customer experiences with enterprise contact
                center software.
              </p>
            </div>
            <Button
              text="Upgrade my contact center"
              className="mt-[clamp(2rem,2.13vw,3rem)] mb-[60px]"
            />
          </div>

          <div className="hero relative w-full h-full rounded-[32px] flex flex-col items-center justify-center">
            <img
              src="/assets/images/backgrounds/products/enterprise-contact-center-hero.webp"
              className="w-full h-full"
            />
          </div>

          <div className="flex md:flex-row flex-col items-center justify-between gap-6 mt-10">
            <EnterpriseContactCenterCard1 />
            <EnterpriseContactCenterCard1 />
            <EnterpriseContactCenterCard1 />
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/enterprise-contact-center-bg-1.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col gap-y-12">
            <h3 className="md:text-5xl text-3xl text-disabled text-center font-bold">
              Goodbye siloed solutions. Hello frictionless{" "}
              <span className="text-white">omnichannel</span> conversations.
            </h3>
            <div className="flex md:flex-row flex-col items-center gap-10">
              <EnterpriseContactCenterCard2 />
              <EnterpriseContactCenterCard2 />
              <EnterpriseContactCenterCard2 />
            </div>
            <div className="flex justify-center items-center">
              <div className="h-[100px] w-[1px] bg-white"></div>
            </div>
            <div className="flex flex-col gap-y-8">
              <h3 className="md:text-5xl text-3xl text-disabled font-bold text-center">
                Built for tomorrow
              </h3>
              <div className="flex items-center justify-center mt-6">
                <div className="w-[fit-content] rounded-[32px] bg-white px-[60px] py-[24px] md:text-5xl text-4xl font-bold text-center">
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg,#7098ff,#5267fa 46.32%,#7e38b2)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Available today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      <EnterpriseContactCenterSelect />

      <SectionLayout img="/assets/images/backgrounds/products/enterprise-contact-center-bg-2.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col md:gap-y-[200px] gap-y-[100px]">
            <div className="flex flex-col justify-between items-center gap-y-2">
              <h3 className="text-white text-4xl font-bold">
                Deliver business results that count
              </h3>
              <p className="text-center text-disabled font-bold">
                Connect with customers with empathy, deliver amazing <br />
                experiences, and drive true ROI.
              </p>
            </div>
            <div className="flex flex-col gap-[24px]">
              <h3 className="text-disabled text-2xl font-bold text-center">
                Nextiva customers can experience:
              </h3>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-[20px]">
                <EnterpriseContactCenterCard3 />
                <EnterpriseContactCenterCard3 />
                <EnterpriseContactCenterCard3 />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      <section className="bg-[#f5f7ff]">
        <div className="container-container container-narrow">
          <div className="flex flex-col gap-y-[30px]">
            <EnterpriseContactCenterCard4 />
            <EnterpriseContactCenterCard4 />
            <EnterpriseContactCenterCard4 />
          </div>
        </div>
      </section>

      <section>
        <div className="container-container container-narrow">
          <div className="flex md:flex-row flex-col items-center justify-between gap-[20px]">
            <div className="flex flex-col md:gap-y-[120px] gap-y-[40px]">
              <div className="flex flex-col gap-y-6">
                <h3 className="md:text-5xl text-3xl font-bold text-black/50">
                  <span className="text-black">Simplify</span> your business
                  operations
                </h3>
                <Button text="Get My Demo" />
              </div>
              <div className="cover max-h-[200px]">
                <img
                  src="/assets/images/backgrounds/products/enterprise-contact-center-cover-2.webp"
                  className="w-auto"
                />
              </div>
            </div>
            <div className="md:min-w-[400px] min-w-full flex flex-col gap-y-8">
              <EnterpriseContactCenterCard5
                icon={
                  <Monitor
                    size={24}
                    variant="Bold"
                    className="text-primary-600"
                  />
                }
                title="Reduce vendor counts"
                text="For easier management and cost efficiency"
              />
              <EnterpriseContactCenterCard5
                icon={
                  <Monitor
                    size={24}
                    variant="Bold"
                    className="text-primary-600"
                  />
                }
                title="Reduce vendor counts"
                text="For easier management and cost efficiency"
              />
              <EnterpriseContactCenterCard5
                icon={
                  <Monitor
                    size={24}
                    variant="Bold"
                    className="text-primary-600"
                  />
                }
                title="Reduce vendor counts"
                text="For easier management and cost efficiency"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/customer-experince-bg-4.webp">
        <div className="relative container-container container-narrow">
          <EnterpriseContactCenterToggleFAQ />
        </div>
      </SectionLayout>

      <section>
        <div className="container-container container-narrow">
          <EnterpriseContactCenterSelect2 />
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/enterprise-contact-center-bg-1.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col gap-y-12">
            <h3 className="text-white text-3xl font-bold text-center">
              Future-proof your business
            </h3>
            <div className="h-full grid md:grid-cols-2 grid-cols-1 gap-6">
              <div className="p-[32px] rounded-[1.5rem] bg-white">
                <div className="flex flex-col gap-y-8">
                  <h3 className="text-2xl font-bold">100% hybrid cloud</h3>
                  <div className="h-[1px] w-full bg-black/20"></div>
                  <p className="text-base text-black/50">
                    Nextiva support a full range of deployments based on needs
                    and requirements.
                  </p>
                  <ul className="flex flex-col gap-[28px] bg-primary-50 rounded-[1.5rem] p-[28px]">
                    <li className="border-l-2 border-primary-600 pl-4">
                      <p className="text-black text-base">Cloud</p>
                      <p className="text-base text-black/50">
                        Get the ultimate scalability, cost savings and speed of
                        innovation.
                      </p>
                    </li>
                    <li className="border-l-2 border-primary-600 pl-4">
                      <p className="text-black text-base">Hybrid</p>
                      <p className="text-base text-black/50">
                        Keep sensitive data on-premise while leveraging the
                        cloud’s scalability for other operations.
                      </p>
                    </li>
                    <li className="border-l-2 border-primary-600 pl-4">
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
                <div className="flex flex-col gap-[28px] bg-white rounded-[1.5rem] p-[28px]">
                  <h3 className="text-3xl font-bold">100% REST APIs</h3>
                  <div className="w-full h-[1px] bg-black/20"></div>
                  <p className="text-base text-black/50">
                    Every function of Nextiva can be driven via REST APIs. This
                    means you can easily get data in and out, seamlessly connect
                    to a wide range of external platforms, and programmatically
                    make Nextiva do exactly what you need, without lifting a
                    finger after the initial setup.
                  </p>
                </div>
                <div className="flex flex-col gap-[28px] bg-white rounded-[1.5rem] p-[28px]">
                  <h3 className="text-3xl font-bold">Microservices</h3>
                  <div className="w-full h-[1px] bg-black/20"></div>
                  <p className="text-base text-black/50">
                    Nextiva is not just one block of code. Nextiva is actually
                    30+ self-redundant systems that all talk to each other. This
                    means Nextiva’s network is self-healing, so there’s no
                    planned downtime. And you can scale your usage with no
                    limits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      <section>
        <div className="w-full container-narrow">
          <div className="container-container">
            <div className="flex flex-col items-center gap-8">
              <div className="w-full flex items-center justify-center">
                <PageBadge
                  text="ROI"
                  icon={<Refresh size={24} className="text-primary-600" />}
                />
              </div>
              <div className="flex md:flex-row flex-col md:items-center items-start justify-center md:gap-12 gap-4">
                <div className="flex items-center md:gap-5 gap-3">
                  <Check className="text-primary-600" />
                  <span className="md:text-base text-sm text-black/70">
                    Immediate provisioning
                  </span>
                </div>
                <div className="flex items-center md:gap-5 gap-3">
                  <Check className="text-primary-600" />
                  <span className="md:text-base text-sm text-black/70">
                    Implementation at the speed of your business
                  </span>
                </div>
                <div className="flex items-center md:gap-5 gap-3">
                  <Check className="text-primary-600" />
                  <span className="md:text-base text-sm text-black/70">
                    Enterprise Implementation
                  </span>
                </div>
              </div>
              <div className="w-full">
                <img src="/assets/images/backgrounds/products/enterprise-contact-center-cover-3.webp" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <EnterpriseContactCenterSlider1 />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full bg-[rgb(11,16,41)]">
          <div className="container-container container-narrow">
            <div className="flex flex-col items-center gap-y-10">
              <div className="text-center space-y-3">
                <h3 className="text-5xl text-white text-center font-bold">
                  Certified by experts
                </h3>
                <p className="text-white/70 text-lg font-bold">
                  Don’t just take our word for it. Ask us about our independent
                  audit results for top security and compliance protocols. We’ll
                  help you protect your customer data and support your own
                  internal compliance efforts.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <img
                  src="/assets/icons/companies/hitrust.svg"
                  className="md:w-[200px] w-[100px]"
                />
                <img
                  src="/assets/icons/companies/hitrust.svg"
                  className="md:w-[200px] w-[100px]"
                />
                <img
                  src="/assets/icons/companies/hitrust.svg"
                  className="md:w-[200px] w-[100px]"
                />
                <img
                  src="/assets/icons/companies/hitrust.svg"
                  className="md:w-[200px] w-[100px]"
                />
              </div>
              <div className="text-white flex md:items-center items-start gap-4">
                <ShieldTick
                  variant="Bold"
                  className="text-white md:w-auto w-[64px]"
                />
                <span className="text-white/70">
                  We’re enterprise-grade, so you can focus on delivering amazing
                  experiences with the trust that we have your back.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnersSlider />

      <section>
        <div className="container-container container-narrow">
          <div className="flex flex-col gap-y-12">
            <h3 className="text-start md:text-7xl text-4xl text-black/30 font-bold">
              <span className="text-black">
                1 Million+ users. 100,000+ customers.
              </span>{" "}
              Which is why the market ranks us first
            </h3>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
              <EnterpriseContactCenterCard6 />
              <EnterpriseContactCenterCard6 />
              <EnterpriseContactCenterCard6 />
              <EnterpriseContactCenterCard6 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
