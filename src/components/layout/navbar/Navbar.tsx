import logo from "@/assets/logo.svg";
import menu from "@/assets/icons/menu.svg";
import close from "@/assets/icons/close.svg";
import { useState } from "react";
import NavbarItems from "./NavbarItems";
import MobileMenu from "./MobileMenu";

type NavProps = {
  activeSection: string;
  setActiveSection: (value: string) => void;
  isHome?: boolean;
};

export default function Navbar({ activeSection, setActiveSection }: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <nav
        className={`${isMobileMenuOpen ? "px-6" : "md:px-16"} relative mx-auto flex h-[100px] items-center justify-between max-md:px-4 max-md:py-4 sm:px-10 md:px-16 lg:px-20`}
      >
        <img
          src={logo}
          alt="PiziBue Logo"
          className="h-auto max-w-25 cursor-pointer"
        />
        <NavbarItems
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Toggle Button: Visible only on mobile */}
        <div className="xmd:hidden flex items-center justify-center">
          <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            <img
              src={isMobileMenuOpen ? close : menu}
              alt="Menu Toggle Icon"
              className="cursor-pointer"
            />
          </button>
        </div>
        {isMobileMenuOpen && (
          <MobileMenu
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}
