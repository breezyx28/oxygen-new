import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../sections/Footer/Footer";
import AnnouncementBanner from "../sections/banners/announcement-banner";
import Navbar from "../Navbar/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isRootPage = location.pathname === "/";

  return (
    <div className="min-h-screen">
      {isRootPage && <AnnouncementBanner />}{" "}
      {/* Render only on the root page */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
