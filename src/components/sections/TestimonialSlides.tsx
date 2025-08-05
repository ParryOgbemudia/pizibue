import emekaimage1 from "@/assets/testimonial/emekafarmer1.png";
import { useEffect, useState } from "react";
import SliderDots from "../SliderDots";

const testimonials = [
  {
    name: " Emeka A., Farmer (Enugu)",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores consequatur excepturi sint laudantium eaque eius, aliquid consequuntur esse quibusdam culpa porro eum, quam laboriosam. Sunt aspernatur corporis soluta dolorem quos!",
    pic: emekaimage1,
  },
  {
    name: " Dr. Mercy Obayuwanna (Kano)",
    text: " I joined their training with no background in aquaculture. Today, I run my own catfish farm with three full ponds. Their support didn’t stop at the training—they still check in from time to time.",
    pic: emekaimage1,
  },
  {
    name: " Greg Johnbosco, Farmer (Edo)",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, nihil ullam soluta minima temporibus impedit? Sapiente ipsa repudiandae quisquam, magnam, repellendus aliquam placeat reiciendis possimus praesentium quasi expedita incidunt perferendis?",
    pic: emekaimage1,
  },
  {
    name: " Tracy Osagbovo., Farmer (Esan)",
    text: " I joined their training with no background in aquaculture. Today, I run my own catfish farm with three full ponds. Their support didn’t stop at the training—they still check in from time to time.",
    pic: emekaimage1,
  },
  {
    name: " Emeka Opia, Farmer (Delta)",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus est odit minus! Distinctio consequuntur placeat delectus eum expedita quidem doloremque cumque! Harum corrupti mollitia ea at nobis? Numquam, qui eius?",
    pic: emekaimage1,
  },
  {
    name: " Satochi Lookman, Farmer (Lagos)",
    text: " I joined their training with no background in aquaculture. Today, I run my own catfish farm with three full ponds. Their support didn’t stop at the training—they still check in from time to time.",
    pic: emekaimage1,
  },
];

export default function TestimonialSlides() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // every 3s

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setActiveIndex(index);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex w-full gap-14 overflow-auto">
        <div className="mx-auto rounded-2xl bg-[#020202] px-4 py-10 md:px-16 md:py-24">
          <div className="flex flex-col gap-4 md:max-w-[915px]">
            <p className="font-manrope text-2xl font-bold text-white">
              {testimonials[activeIndex].text}
            </p>
            <p className="text-[16px] font-normal text-[#8E98A8]">
              {testimonials[activeIndex].name}
            </p>
            <img
              src={testimonials[activeIndex].pic}
              alt="Emeka Image"
              className="size-8"
            />
          </div>
        </div>
      </div>
      <SliderDots
        totalSlides={testimonials.length}
        activeIndex={activeIndex}
        goToSlide={goToSlide}
      />
    </div>
  );
}
