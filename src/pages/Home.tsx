import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <About />
    </div>
  );
}
