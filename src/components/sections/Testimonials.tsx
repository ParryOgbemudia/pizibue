import TestimonialSlides from "./TestimonialSlides";

export default function Testimonials() {
  return (
    <section className="w-full">
      <div className="mx-auto px-4 pt-14 pb-24 sm:px-10">
        <div className="flex flex-col gap-10 md:gap-14">
          <div className="mx-auto flex w-full max-w-[596px] flex-col items-center gap-4">
            <h3 className="text-center text-[32px] font-black text-[#020202] sm:text-[42px]">
              What Our Customers Are Saying
            </h3>
            <p className="text-[14px] font-normal text-[#8E98A8]">
              From small-scale farmers to bulk buyers and training participants,
              our community shares how we’ve helped them succeed.
            </p>
          </div>

          {/* TESTIMONIAL SLIDER */}
          <TestimonialSlides />
        </div>
      </div>
    </section>
  );
}
