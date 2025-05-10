import PageBadge from "@/components/cards/page-badge";
import SectionLayout from "@/components/Layout/section-layout";
import { Star1 } from "iconsax-react";
import {
  AICapabilitiesCard1,
  AICapabilitiesInput1,
  AICapabilitiesInputSelect,
} from "./ai-capabilities-component";

export default function AICapabilities() {
  return (
    <>
      <SectionLayout img="/assets/images/backgrounds/products/ai-capabilities-hero-bg.webp">
        <div className="relative container-container md:min-h-[90vh] min-h-auto">
          <div className="relative w-full md:h-[90vh] h-[70vh] flex flex-col justify-center">
            <div className="md:space-y-8 space-y-5 w-full">
              <PageBadge
                text="Nextiva Platform Library"
                className="bg-green-200 w-[fit-content] text-xl rounded-xl px-3 py-3"
                icon={<Star1 variant="Bold" className="text-black" />}
              />

              <h2 className="md:max-w-2/3 w-full md:text-6xl text-3xl text-white font-bold">
                Amazing features. <br />
                <span className="text-disabled">
                  Powerful experiences. Better CX.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </SectionLayout>

      <section>
        <div className="container-container container-narrow">
          <div className="flex flex-col space-y-12 divide-y">
            <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-8 pb-12 border-b">
              <div className="">
                <p className="text-2xl font-bold">All Videos (60)</p>
                <span className="text-black/70">
                  Search and filter by category
                </span>
              </div>

              <div className="flex md:flex-row flex-col md:items-center items-start md:gap-6 gap-4">
                <AICapabilitiesInput1 />
                <AICapabilitiesInputSelect />
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-8 items-start justify-between pb-12 border-b">
              <div className="">
                <p className="text-2xl font-bold">All Videos (60)</p>
                <span className="text-black/70">
                  Search and filter by category
                </span>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <AICapabilitiesCard1
                  text="Explore how Nextiva Contact Center’s AI scorecarding solutions can enhance compliance and streamline operations in your contact center."
                  title="AI Compliance Scorecarding"
                />
                <AICapabilitiesCard1
                  text="Discover how Nextiva Contact Center’s smart routing with language detection technology can enhance your customer service experience."
                  title="Automatic language detection"
                />

                <AICapabilitiesCard1
                  text="Improve call management with instant transcription and summarization. Make every conversation count and save time on every call."
                  title="Live transcription summary"
                />
                <AICapabilitiesCard1
                  text="Improve privacy in your contact center with Nextiva’s secure communication and redaction tools. Enhance customer trust and data security."
                  title="Redaction in communications"
                />

                <AICapabilitiesCard1
                  text="Ensure safer customer interactions with Nextiva Contact Center’s advanced profanity detection. Elevate your service experience today."
                  title="Work item profanity detection"
                />
                <AICapabilitiesCard1
                  text="Improve call management with AI and split recording at Nextiva Contact Center. Explore advanced solutions for efficient business communication."
                  title="Split Recording & AI Integration"
                />
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-8 items-start justify-between pb-12 border-b">
              <div className="">
                <p className="text-2xl font-bold">Agent Tooling (13)</p>
                <span className="text-black/70">
                  Key features and capabilities
                </span>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <AICapabilitiesCard1
                  text="Explore how Nextiva Contact Center’s AI scorecarding solutions can enhance compliance and streamline operations in your contact center."
                  title="AI Compliance Scorecarding"
                />
                <AICapabilitiesCard1
                  text="Discover how Nextiva Contact Center’s smart routing with language detection technology can enhance your customer service experience."
                  title="Automatic language detection"
                />

                <AICapabilitiesCard1
                  text="Improve call management with instant transcription and summarization. Make every conversation count and save time on every call."
                  title="Live transcription summary"
                />
                <AICapabilitiesCard1
                  text="Improve privacy in your contact center with Nextiva’s secure communication and redaction tools. Enhance customer trust and data security."
                  title="Redaction in communications"
                />

                <AICapabilitiesCard1
                  text="Ensure safer customer interactions with Nextiva Contact Center’s advanced profanity detection. Elevate your service experience today."
                  title="Work item profanity detection"
                />
                <AICapabilitiesCard1
                  text="Improve call management with AI and split recording at Nextiva Contact Center. Explore advanced solutions for efficient business communication."
                  title="Split Recording & AI Integration"
                />
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-8 items-start justify-between pb-12">
              <div className="">
                <p className="text-2xl font-bold">Outbound (5)</p>
                <span className="text-black/70">
                  Key features and capabilities
                </span>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <AICapabilitiesCard1
                  text="Explore how Nextiva Contact Center’s AI scorecarding solutions can enhance compliance and streamline operations in your contact center."
                  title="AI Compliance Scorecarding"
                />
                <AICapabilitiesCard1
                  text="Discover how Nextiva Contact Center’s smart routing with language detection technology can enhance your customer service experience."
                  title="Automatic language detection"
                />

                <AICapabilitiesCard1
                  text="Improve call management with instant transcription and summarization. Make every conversation count and save time on every call."
                  title="Live transcription summary"
                />
                <AICapabilitiesCard1
                  text="Improve privacy in your contact center with Nextiva’s secure communication and redaction tools. Enhance customer trust and data security."
                  title="Redaction in communications"
                />

                <AICapabilitiesCard1
                  text="Ensure safer customer interactions with Nextiva Contact Center’s advanced profanity detection. Elevate your service experience today."
                  title="Work item profanity detection"
                />
                <AICapabilitiesCard1
                  text="Improve call management with AI and split recording at Nextiva Contact Center. Explore advanced solutions for efficient business communication."
                  title="Split Recording & AI Integration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
