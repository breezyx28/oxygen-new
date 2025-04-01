import Logo from "@/components/logo/logo";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 w-full md:max-h-screen max-h-auto h-full">
      <div className="footer-wrapper md:h-[calc(100vh-5rem)] h-auto md:py-10 py-4">
        <div className="container-container md:divide-x divide-x-0 divide-gray-300 flex md:flex-row flex-col h-full w-full">
          <div className="pr-[50px] flex flex-col justify-between items-center md:h-full h-[200px] md:mb-0 mb-[4rem]">
            <div className="text-center">
              <h2 className="w-full flex justify-center items-center">
                <Logo />
              </h2>
              <p className="mt-2 text-base mx-4 text-black/50 font-[500]">
                Unified Customer Experience Management Platform
              </p>
            </div>
            <div className="">
              {" "}
              <button className="mt-6 flex items-center gap-2 px-6 py-4 border border-gray-800 rounded-full">
                Download oxygen <span className="rotate-180">▼</span>
              </button>
            </div>
            <div className="">
              <div className="flex space-x-4 text-[24px] text-black/60">
                <FaFacebook />
                <RxCross2 />
                <FaLinkedinIn />
                <FaYoutube />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 md:pl-[50px] pl-0">
            <div className="divide-y divide-gray-300 md:mb-8 mb-14">
              <h3 className="text-[15px] font-semibold pb-4">
                Conversational Platform
              </h3>
              <ul className="text-gray-500 pt-4 space-y-2 text-sm">
                <li>Customer communication</li>
                <li>AI-powered contact center</li>
                <li>Business voice</li>
                <li>Local phone numbers</li>
                <li>Analytics</li>
                <li>What’s new?</li>
                <li>See all products</li>
              </ul>
            </div>

            <div className="divide-y divide-gray-300 md:mb-8 mb-14">
              <h3 className="text-[15px] font-semibold pb-4">
                Helpful Resources
              </h3>
              <ul className="text-gray-500 pt-4 space-y-2 text-sm">
                <li>Support center</li>
                <li>Phones & headsets</li>
                <li>Contact centers</li>
                <li>Network readiness test</li>
                <li>Training webinars</li>
                <li>Guides & tutorials</li>
              </ul>
            </div>

            <div className="divide-y divide-gray-300 md:mb-8 mb-14">
              <h3 className="text-[15px] font-semibold pb-4">Company</h3>
              <ul className="text-gray-500 pt-4 space-y-2 text-sm">
                <li>Leadership</li>
                <li>Board of Directors</li>
                <li>Careers</li>
                <li>oxygen Cares</li>
                <li>News & media</li>
                <li>Platform status</li>
                <li>Contact us</li>
              </ul>
            </div>

            <div className="divide-y divide-gray-300 md:mb-8 mb-14">
              <h3 className="text-[15px] font-semibold pb-4">Partners</h3>
              <ul className="text-gray-500 pt-4 space-y-2 text-sm">
                <li>Channel partners</li>
                <li>Events</li>
                <li>Affiliates</li>
                <li>Partner portal</li>
                <li>App integrations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 h-auto border-t md:py-[24px] py-0 pt-[24px] text-sm">
          <div className="container-container w-full mx-auto flex flex-col-reverse md:flex-row justify-between md:items-center items-start md:gap-y-0 gap-y-4">
            <div className="w-full flex flex-col">
              <small className="font-bold">
                One platform. For all your interactions.
              </small>
              <small className="mt-0">
                Copyright © 2025 oxygen. All Rights Reserved.
              </small>
            </div>
            <div className="w-full grid grid-cols-2 gap-2 md:grid-cols-none md:flex md:justify-end gap-x-4 text-gray-400">
              <a href="#">Legal</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Patents</a>
              <a href="#">Security Policy</a>
              <a href="#">Accessibility</a>
              <a href="#">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
