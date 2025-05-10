import { Link, useLocation } from "react-router-dom";
import LogoWhite from "../logo/logo-white";
import { CaretDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Logo from "../logo/logo";
import { MegaMenu } from "./mega-menu";
import ProductMegaMenu from "./mega-menu-contents/product-mega-menu";
import SolutionsMegaMenu from "./mega-menu-contents/solutions-mega-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  const currentPath = location.pathname;
  const WhiteNav = [
    "/pricing",
    "/enterprice",
    "/products/digital-channels",
    "/products/messaging-apps",
    "/products/business-voip",
    "/products/customer-journey",
    "/products/customers-reviews",
    "/products/ai-chat",
    "/products/intelligent-virtual-agent",
    "/products/intelligent-routing-skills",
    "/solutions/enterprise-contact-center",
    "/resources/learn/knowledge-base-generative-ai",
    "/resources/learn/live-transcription-summary",
    "/resources/learn/text-to-speech-speech-to-text",
  ].includes(currentPath);

  // Close menu when scrolling
  useEffect(() => {
    if (activeMenu) {
      setActiveMenu(null);
    }
  }, [isScrolled]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY) {
        const navElement = document.querySelector("nav");
        if (navElement) {
          navElement.style.transform = "translateY(-100%)";
          navElement.style.opacity = "0";
        }
      } else {
        const navElement = document.querySelector("nav");
        if (navElement) {
          navElement.style.transform = "translateY(0)";
          navElement.style.opacity = "1";
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (!(event.target as Element).closest(".mega-menu-wrapper")) {
  //       setActiveMenu(null);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const navItems = [
    {
      label: "Products",
      href: "#products",
      hasMegaMenu: true,
      megaMenuContent: <ProductMegaMenu />,
    },
    {
      label: "Solutions",
      href: "#solutions",
      hasMegaMenu: true,
      megaMenuContent: <SolutionsMegaMenu />,
    },
    {
      label: "Resources",
      href: "#resources",
      hasMegaMenu: false,
    },
    {
      label: "Pricing",
      href: "/pricing",
      hasMegaMenu: false,
    },
  ];

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <nav
        className={classNames(
          "bg-transparent absolute w-full z-50 transition-all duration-300",
          isScrolled && "bg-white fixed top-0"
        )}
        style={{
          color: isScrolled || WhiteNav ? "black" : "white",
        }}
      >
        <div className="container mx-auto px-4 relative w-full">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="cursor-pointer">
                {WhiteNav ? <Logo /> : <LogoWhite />}
              </Link>
            </div>

            {/* Navigation Items */}
            <div className="mega-menu-wrapper hidden md:flex items-center gap-x-[60px] space-x-8">
              <ul className="flex space-x-8 list-none">
                {navItems.map((item) => (
                  <li key={item.label} className="relative">
                    {item.hasMegaMenu ? (
                      <>
                        <button
                          onClick={() => toggleMenu(item.label)}
                          className={classNames(
                            "group select-none transition-all duration-200 flex items-center gap-2 cursor-pointer",
                            isScrolled || WhiteNav
                              ? "text-black hover:text-blue-600"
                              : "text-white hover:text-blue-200"
                          )}
                        >
                          {item.label}
                          <CaretDownIcon
                            className={classNames(
                              "w-4 h-4 transition-all duration-100 ease-in",
                              activeMenu === item.label && "-rotate-180"
                            )}
                            aria-hidden
                          />
                        </button>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={classNames(
                          "transition-colors cursor-pointer",
                          isScrolled || WhiteNav
                            ? "text-black hover:text-blue-600"
                            : "text-white hover:text-blue-200"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <ul className="ml-4 flex items-center gap-4">
                <li>
                  <Link
                    to="#"
                    className={classNames(
                      "flex flex-col cursor-pointer",
                      isScrolled || WhiteNav ? "text-black" : "text-white"
                    )}
                  >
                    <span className="text-[12px] font-normal">Phone</span>
                    <span className="text-[14px]">+24999999999</span>
                  </Link>
                </li>
                <div
                  className={twMerge(
                    "w-[1px] h-4",
                    isScrolled || WhiteNav ? "bg-black" : "bg-white/30"
                  )}
                ></div>
                <li className="">
                  <Link
                    to="#"
                    className={classNames(
                      "flex flex-col cursor-pointer",
                      isScrolled || WhiteNav ? "text-black" : "text-white"
                    )}
                  >
                    <span className="text-[12px] font-normal">Phone</span>
                    <span className="text-[14px]">+24999999999</span>
                  </Link>
                </li>
                <div
                  className={twMerge(
                    "w-[1px] h-4",
                    isScrolled || WhiteNav ? "bg-black" : "bg-white/30"
                  )}
                ></div>
                <li>
                  <Link
                    to="#"
                    className={classNames(
                      "flex flex-col cursor-pointer",
                      isScrolled || WhiteNav ? "text-black" : "text-white"
                    )}
                  >
                    <span className="text-[14px]">Support</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                className={classNames(
                  "px-7 py-3 rounded-full border transition-colors cursor-pointer",
                  isScrolled || WhiteNav
                    ? "text-black border-black hover:bg-black hover:text-white"
                    : "text-white border-white hover:bg-white hover:text-black"
                )}
              >
                Log In
              </button>
              <button
                className={classNames(
                  "px-7 py-3 rounded-full border transition-colors bg-primary-600 text-white border-transparent hover:border-white cursor-pointer"
                )}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white p-2 cursor-pointer">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Menu (rendered outside nav) */}
      {navItems.map(
        (item) =>
          item.hasMegaMenu && (
            <MegaMenu
              key={item.label}
              isOpen={activeMenu === item.label}
              onClose={() => setActiveMenu(null)}
            >
              {item.megaMenuContent}
            </MegaMenu>
          )
      )}
    </>
  );
};

export default Navbar;
