import logo from "@/assets/logo.svg";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <nav className="mx-auto flex h-[100px] items-center justify-between max-sm:px-4 sm:px-10 md:px-14 lg:px-20">
        <img src={logo} alt="PiziBue Logo" className="h-auto max-w-25" />
        <ul className="flex list-none max-md:hidden">
          <li>
            <a
              href="#about"
              className="hover:text-primary inline-block px-4 py-2.5 no-underline transition-colors"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-primary inline-block px-4 py-2.5 no-underline transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/gallery"
              className="hover:text-primary inline-block px-4 py-2.5 no-underline transition-colors"
            >
              Gallery
            </a>
          </li>
          <li>
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
      </nav>
    </header>
  );
}
