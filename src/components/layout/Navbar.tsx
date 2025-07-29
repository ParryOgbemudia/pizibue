import logo from "@/assets/logo.svg";
import Button from "../ui/Button";
import menu from "@/assets/icons/menu.svg";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <nav className="mx-auto flex h-[100px] items-center justify-between max-md:h-auto max-md:px-4 max-md:py-4 sm:px-10 md:px-14 lg:px-20">
        <img
          src={logo}
          alt="PiziBue Logo"
          className="h-auto max-w-25 cursor-pointer"
        />
        <ul className="flex list-none max-md:hidden">
          <li className="cursor-pointer">
            <a
              id="#about"
              className="hover:text-primary inline-block px-4 py-2.5 no-underline transition-colors"
            >
              About Us
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              id="#services"
              className="hover:text-primary inline-block px-4 py-2.5 no-underline transition-colors"
            >
              Services
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              id="/gallery"
              className="hover:text-primary inline-block px-4 py-2.5 no-underline transition-colors"
            >
              Gallery
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              id="/contact-us"
              className="hover:text-primary inline-block px-4 py-2.5 no-underline transition-colors"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <Button className="flex items-center justify-center gap-2 px-4 py-2.5 text-[14px] max-md:hidden">
          Get in Touch
        </Button>
        <div className="hidden items-center justify-center max-md:flex">
          <img src={menu} alt="Menu Icon" className="" />
        </div>
      </nav>
    </header>
  );
}
