import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";
import Services from "../components/sections/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Services />
    </div>
  );
}

//  <div className=" w-full bg-[#020202] px-[80px] max-md:mt-[-120px] max-md:px-4 max-sm:top-[300px] max-sm:pt-10 max-sm:pb-[56px] md:mt-[-260px]"></div>
