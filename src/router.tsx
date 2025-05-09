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

          {/* Solutions */}
          <Route
            path="/solutions/enterprise-contact-center"
            element={<EnterpriseContactCenter />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
