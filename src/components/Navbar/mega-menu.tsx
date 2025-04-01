import classNames from "classnames";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

type MegaMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
};

export const MegaMenu = ({
  isOpen,
  onClose,
  children,
  className,
}: MegaMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Semi-transparent backdrop that covers entire screen */}
      <div
        className="fixed inset-0 bg-black/30 z-40 top-20 cursor-pointer"
        onClick={onClose}
      />

      {/* Full-width mega menu container */}
      <div className="fixed inset-x-0 z-50" style={{ top: "80px" }}>
        {/* White background that spans full width */}
        <div className="w-full bg-white shadow-lg">
          {/* Scrollable content area with container padding */}
          <div
            className={classNames("overflow-y-auto", className)}
            style={{ height: "calc(100vh - 80px)" }}
          >
            <div className="px-4 py-6">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

type MegaMenuItemProps = {
  href: string;
  title: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const MegaMenuItem = ({
  href,
  title,
  icon,
  className,
  children,
  onClick,
}: MegaMenuItemProps) => {
  return (
    <li className="w-full block group">
      <Link
        to={href}
        className={classNames(
          "block w-full px-[8px] py-[12px] rounded-[10px] transition-colors cursor-pointer bg-transparent hover:bg-primary-600/10",
          className
        )}
        onClick={onClick}
      >
        <div
          className={classNames(
            "flex items-center justify-between text-black/70 font-bold hover:text-primary-600",
            className
          )}
        >
          <div className={"flex items-center gap-2"}>
            {icon}
            <div className="text-[13px]">{title}</div>
          </div>
          {children || (
            <div className="relative">
              <ArrowRight
                size={16}
                className="relative font-bold text-primary-600 opacity-0 group-hover:opacity-100 left-[-10px] group-hover:left-[0px] transition-all duration-200 ease-in"
              />
            </div>
          )}
        </div>
      </Link>
    </li>
  );
};
