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
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
