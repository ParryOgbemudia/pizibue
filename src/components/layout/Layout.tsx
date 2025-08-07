import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { useSectionContext } from "../../context/SectionProvider";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/"; // Only track sections on homepage
  const { activeSection, setActiveSection } = useSectionContext();

  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isHome={isHome}
      />
      <Outlet /> {/* This renders the current route's page */}
    </>
  );
}
