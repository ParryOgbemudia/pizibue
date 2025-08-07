import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import React from "react";

type Props = {
  activeSection: string;
  setActiveSection: (value: string) => void;
  onClose: () => void;
  isMobileMenuOpen: boolean;
};

const navItems = ["about_us", "services", "gallery", "contact_us"];

export default function MobileMenu({
  activeSection,
  setActiveSection,
  onClose,
}: Props) {
  return (
    <div className="xmd:hidden fixed top-[100px] left-0 z-40 flex h-[calc(100vh-100px)] w-full flex-col justify-between bg-white px-6 pt-4 pb-[64.37px] text-xs font-medium text-[#000000] max-md:px-4 sm:px-10 md:px-16">
      <ul className="flex h-full flex-col gap-4">
        {navItems.map((navItem, index) => {
          const isActive = activeSection === navItem;
          const label = navItem
            .replace("_", " ")
            .replace(/^\w/, (c) => c.toUpperCase());

          const isContact = navItem === "contact_us";
          const linkTo = isContact
            ? "/contact"
            : {
                pathname: "/",
                hash: `#${navItem}`,
              };

          return (
            <React.Fragment key={index}>
              <li>
                <Link
                  to={linkTo}
                  onClick={() => {
                    setActiveSection(navItem);
                    onClose();
                  }}
                  className={`block py-4 transition-colors duration-300 ${
                    isActive
                      ? "text-primary font-black"
                      : "text-[12px] font-medium text-[#000000]"
                  } hover:text-primary`}
                >
                  {label}
                </Link>
              </li>
              <hr className="border border-b text-[#ECE6E6]" />
            </React.Fragment>
          );
        })}
      </ul>

      <Button className="mt-6 w-full px-4 py-2.5 text-[14px]">
        Get in Touch
      </Button>
    </div>
  );
}
