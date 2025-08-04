import logo from "@/assets/logo.svg";
import Button from "../ui/Button";
import menu from "@/assets/icons/menu.svg";
import close from "@/assets/icons/close.svg";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <nav
        className={`relative mx-auto flex h-[100px] items-center justify-between max-md:px-4 max-md:py-4 max-sm:px-4 sm:px-10 md:px-16 lg:px-20`}
      >
        <img
          src={logo}
          alt="PiziBue Logo"
          className="h-auto max-w-25 cursor-pointer"
        />
        <ul className="flex list-none max-md:hidden">
          <li className="cursor-pointer">
            <a
              href="/about"
              className="hover:text-primary inline-block px-4 py-2.5 no-underline transition-colors"
            >
              About Us
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="/services"
              className="hover:text-primary inline-block px-4 py-2.5 no-underline transition-colors"
            >
              Services
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="/gallery"
              className="hover:text-primary inline-block px-4 py-2.5 no-underline transition-colors"
            >
              Gallery
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="/contact-us"
              className="hover:text-primary inline-block px-4 py-2.5 no-underline transition-colors"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <Button className="flex items-center justify-center gap-2 px-4 py-2.5 text-[14px] max-md:hidden">
          Get in Touch
        </Button>
        {/* Toggle Button: Visible only on mobile */}
        <div className="flex items-center justify-center md:hidden">
          <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            <img
              src={isMobileMenuOpen ? close : menu}
              alt="Menu Toggle Icon"
              className="cursor-pointer"
            />
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="fixed top-[100px] left-0 z-40 flex h-[calc(100%-100px)] w-full flex-col justify-between bg-white px-6 pt-4 pb-[64.37px] text-xs font-medium text-[#000000] md:hidden">
            <ul className={`flex h-full flex-col gap-4`}>
              <li className="">
                <a href="/about" className="hover:text-primary py-4">
                  About Us
                </a>
              </li>
              <hr className="border border-b text-[#ECE6E6]" />
              <li className="">
                <a href="/services" className="hover:text-primary py-4">
                  Services
                </a>
              </li>
              <hr className="border border-b text-[#ECE6E6]" />
              <li className="">
                <a href="/gallery" className="hover:text-primary py-4">
                  Gallery
                </a>
              </li>
              <hr className="border border-b text-[#ECE6E6]" />
              <li className="">
                <a href="/contact-us" className="hover:text-primary py-4">
                  Contact Us
                </a>
              </li>
            </ul>
            <Button className="mt-6 w-full px-4 py-2.5 text-[14px]">
              Get in Touch
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
