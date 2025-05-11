import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/index";
import Pricing from "./components/pages/pricing/index";
import Layout from "./components/Layout/Layout";
import PricingPageEnterprice from "./components/pages/pricing/enterprice/enterprice";
import DigitalChannels from "./components/pages/products/engagment-channels/digital-channels";
import MessagingApps from "./components/pages/products/engagment-channels/messaging-apps";
import SocialMediaChannels from "./components/pages/products/engagment-channels/social-media-channels";
import CustomersReviews from "./components/pages/products/engagment-channels/customers-reviews";
import { LiveChat } from "./components/pages/products/engagment-channels/live-chat";
import { BusinessVoip } from "./components/pages/products/engagment-channels/business-voip";
import CustomerCommunication from "./components/pages/products/engagment-channels/customer-communication";
import CustomerExperince from "./components/pages/products/customer-experince";
import EnterpriseContactCenter from "./components/pages/products/customer-experince/enterprise-contact-center";
import AiChat from "./components/pages/products/customer-experince/ai-chat";
import Customerjourney from "./components/pages/products/customer-experince/customer-journey";
import IntelligentVirtualAgent from "./components/pages/products/customer-experince/intelligent-virtual-agent";
import IntelligentRoutingSkills from "./components/pages/products/customer-experince/intelligent-routing-skills";
import AICapabilities from "./components/pages/products/ai-capabilities";
import KnowledeBaseAI from "./components/pages/products/ai-capabilities/knowledge-base";
import LiveTranscriptionSummary from "./components/pages/products/ai-capabilities/live-transcription-summary";
import TextToSpeechSpeechToText from "./components/pages/products/ai-capabilities/text-to-speech-speech-to-text";
import AIAutomation from "./components/pages/products/automation-and-productivity";
import UnifiedInbox from "./components/pages/products/automation-and-productivity/unified-inbox";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/enterprice" element={<PricingPageEnterprice />} />

          {/* products routes */}
          <Route path="/products/business-voip" element={<BusinessVoip />} />
          <Route
            path="/products/digital-channels"
            element={<DigitalChannels />}
          />
          <Route path="/products/messaging-apps" element={<MessagingApps />} />
          <Route
            path="/products/social-media-channels"
            element={<SocialMediaChannels />}
          />
          <Route
            path="/products/customers-reviews"
            element={<CustomersReviews />}
          />
          <Route path="/products/live-chat" element={<LiveChat />} />
          <Route
            path="/products/customer-communication"
            element={<CustomerCommunication />}
          />
          <Route
            path="/products/customer-experince"
            element={<CustomerExperince />}
          />
          <Route path="/products/ai-chat" element={<AiChat />} />

          <Route
            path="/products/customer-journey"
            element={<Customerjourney />}
          />
          <Route
            path="/products/intelligent-virtual-agent"
            element={<IntelligentVirtualAgent />}
          />
          <Route
            path="/products/intelligent-routing-skills"
            element={<IntelligentRoutingSkills />}
          />
          <Route path="/products/ai-automation" element={<AIAutomation />} />
          <Route path="/products/unified-inbox" element={<UnifiedInbox />} />

          {/* Solutions */}
          <Route
            path="/solutions/enterprise-contact-center"
            element={<EnterpriseContactCenter />}
          />

          {/* Resources */}
          <Route path="/resources/learn" element={<AICapabilities />} />
          <Route
            path="/resources/learn/knowledge-base-generative-ai"
            element={<KnowledeBaseAI />}
          />
          <Route
            path="/resources/learn/live-transcription-summary"
            element={<LiveTranscriptionSummary />}
          />
          <Route
            path="/resources/learn/text-to-speech-speech-to-text"
            element={<TextToSpeechSpeechToText />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
