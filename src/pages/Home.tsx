import { useState } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import TrackSection from "../hooks/TrackSection";
import Gallery from "./Gallery";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

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

//  <div className=" w-full bg-[#020202] px-[80px] max-md:mt-[-120px] max-md:px-4 max-sm:top-[300px] max-sm:pt-10 max-sm:pb-[56px] md:mt-[-260px]"></div>
