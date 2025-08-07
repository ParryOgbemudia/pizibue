// NavbarItems.tsx
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

type Props = {
  activeSection: string;
  setActiveSection: (value: string) => void;
};

const navItems = ["about_us", "services", "gallery", "contact_us"];

export default function NavbarItems({
  activeSection,
  setActiveSection,
}: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (navItem: string) => {
    if (navItem === "contact_us") {
      navigate("/contact");
    } else {
      if (location.pathname === "/") {
        // Already on home page — scroll directly
        const el = document.getElementById(navItem);
        el?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(navItem);
      } else {
        // Not on home — navigate to "/" and pass section to scroll to
        navigate("/", { state: { scrollTo: navItem } });
      }
    }
  };

  return (
    <>
      <ul className="max-xmd:hidden flex list-none">
        {navItems.map((navItem) => {
          const isContactPage = location.pathname === "/contact";
          const isActive =
            navItem === "contact_us"
              ? isContactPage
              : location.pathname === "/" && activeSection === navItem;

          const label = navItem
            .replace("_", " ")
            .replace(/^\w/, (c) => c.toUpperCase());

          return (
            <li key={navItem}>
              <button
                onClick={() => handleNavClick(navItem)}
                className={`px-4 py-2.5 text-[12px] transition-colors duration-300 ${
                  isActive
                    ? "text-primary font-black"
                    : "font-medium text-[#020202]"
                } hover:text-primary`}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
      <Button className="max-xmd:hidden flex items-center justify-center gap-2 px-4 py-2.5 text-[14px]">
        Get in Touch
      </Button>
    </>
  );
}
