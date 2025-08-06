// // import { useEffect, useLayoutEffect, useState } from "react";
// import emekaimage1 from "@/assets/testimonial/emekafarmer1.png";
// // import SliderDots from "../SliderDots";

// const testimonials = [
//   {
//     name: " Emeka A., Farmer (Enugu)",
//     text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores consequatur excepturi sint laudantium eaque eius, aliquid consequuntur esse quibusdam culpa porro eum, quam laboriosam. Sunt aspernatur corporis soluta dolorem quos!",
//     pic: emekaimage1,
//   },
//   {
//     name: " Dr. Mercy Obayuwanna (Kano)",
//     text: " I joined their training with no background in aquaculture. Today, I run my own catfish farm with three full ponds. Their support didn’t stop at the training—they still check in from time to time.",
//     pic: emekaimage1,
//   },
//   {
//     name: " Greg Johnbosco, Farmer (Edo)",
//     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, nihil ullam soluta minima temporibus impedit? Sapiente ipsa repudiandae quisquam, magnam, repellendus aliquam placeat reiciendis possimus praesentium quasi expedita incidunt perferendis?",
//     pic: emekaimage1,
//   },
//   {
//     name: " Tracy Osagbovo., Farmer (Esan)",
//     text: " I joined their training with no background in aquaculture. Today, I run my own catfish farm with three full ponds. Their support didn’t stop at the training—they still check in from time to time.",
//     pic: emekaimage1,
//   },
//   {
//     name: " Emeka Opia, Farmer (Delta)",
//     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus est odit minus! Distinctio consequuntur placeat delectus eum expedita quidem doloremque cumque! Harum corrupti mollitia ea at nobis? Numquam, qui eius?",
//     pic: emekaimage1,
//   },
//   {
//     name: " Satochi Lookman, Farmer (Lagos)",
//     text: " I joined their training with no background in aquaculture. Today, I run my own catfish farm with three full ponds. Their support didn’t stop at the training—they still check in from time to time.",
//     pic: emekaimage1,
//   },
// ];

// export default function TestimonialSlides() {
//   // const [activeIndex, setActiveIndex] = useState(1); // Start from first real slide
//   // const [isTransitioning, setIsTransitioning] = useState(true);
//   // // const sliderRef = useRef<HTMLDivElement>(null);
//   // const totalSlides = testimonials.length;

//   // Combined list with clones
//   // const extendedSlides = [
//   //   testimonials[totalSlides - 1], // clone last
//   //   ...testimonials,
//   //   testimonials[0], // clone first
//   // ];

//   // useLayoutEffect(() => {
//   //   requestAnimationFrame(() => {
//   //     setIsTransitioning(true);
//   //   });
//   // }, []);

//   // // Auto-slide
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setActiveIndex((prev) => prev + 1);
//   //     setIsTransitioning(true);
//   //   }, 3000);
//   //   return () => clearInterval(interval);
//   // }, []);

//   // // Handle transition end for loop
//   // const handleTransitionEnd = () => {
//   //   // Jump from clone-first to real first
//   //   if (activeIndex === totalSlides + 1) {
//   //     setIsTransitioning(false);
//   //     setActiveIndex(1); // Real first slide
//   //   }

//   //   if (activeIndex === 0) {
//   //     setIsTransitioning(false);
//   //     setActiveIndex(totalSlides);
//   //   }
//   // };

//   // const goToSlide = (index: number) => {
//   //   setIsTransitioning(true);
//   //   setActiveIndex(index + 1); // +1 because of clone
//   // };

//   return (
//     <div className="w-full">
//       <div className=""></div>
//     </div>
//   );
// }
