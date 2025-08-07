import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Products from "../components/product/Products";
import Services from "../components/services/Services";
import Testimonials from "../components/testimonials/Testimonials";
import TrackSection from "../hooks/TrackSection";
import Gallery from "../components/gallery/Gallery";

import { useSectionContext } from "../context/SectionProvider";

export default function Home() {
  const { setActiveSection } = useSectionContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;

    if (scrollTo) {
      const waitForElement = () => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          // Update state to remove scrollTo
          navigate(location.pathname, { replace: true, state: {} });
        } else {
          // Try again until element exists (max 10 attempts)
          requestAnimationFrame(waitForElement);
        }
      };

      waitForElement();
    }
  }, [location, navigate]);

  return (
    <div>
      <Hero />
      <Products />

      <TrackSection id="about_us" setActiveSection={setActiveSection}>
        <section id="about_us">
          <About />
        </section>
      </TrackSection>

      <TrackSection id="services" setActiveSection={setActiveSection}>
        <section id="services">
          <Services />
        </section>
      </TrackSection>

      <TrackSection id="gallery" setActiveSection={setActiveSection}>
        <section id="gallery">
          <Gallery />
        </section>
      </TrackSection>

      <Testimonials />
      <Footer />
    </div>
  );
}
