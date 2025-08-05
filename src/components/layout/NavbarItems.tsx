import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../ui/Button";

type Props = {
  activeSection: string;
  setActiveSection: (value: string) => void;
};

const navItems = ["about_us", "services", "gallery", "contact_us"];

export default function NavbarItems({
  activeSection,
  setActiveSection,
}: Props) {
  return (
    <>
      <ul className="max-xmd:hidden flex list-none">
        {navItems.map((navItem) => (
          <li key={navItem}>
            <AnchorLink
              href={`#${navItem}`}
              onClick={() => setActiveSection(navItem)}
              className={`px-4 py-2.5 text-[12px] transition-colors duration-300 ${
                activeSection === navItem
                  ? "text-primary font-black"
                  : "font-medium text-[#020202]"
              } hover:text-primary`}
            >
              {navItem.replace("_", " ").replace(/^\w/, (c) => c.toUpperCase())}
            </AnchorLink>
          </li>
        ))}
      </ul>
      <Button className="max-xmd:hidden flex items-center justify-center gap-2 px-4 py-2.5 text-[14px]">
        Get in Touch
      </Button>
    </>
  );
}
