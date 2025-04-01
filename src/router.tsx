import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/index";
import Pricing from "./components/pages/pricing/index";
import Layout from "./components/Layout/Layout";
import PricingPageEnterprice from "./components/pages/pricing/enterprice/enterprice";
import DigitalChannels from "./components/pages/products/engagment-channels/digital-channels";
import MessagingApps from "./components/pages/products/engagment-channels/messaging-apps";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/enterprice" element={<PricingPageEnterprice />} />

          {/* products routes */}
          <Route
            path="/products/digital-channels"
            element={<DigitalChannels />}
          />
          <Route path="/products/messaging-apps" element={<MessagingApps />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
