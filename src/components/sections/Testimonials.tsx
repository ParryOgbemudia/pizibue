import SliderDots from "../SliderDots";
import emekaimage1 from "@/assets/testimonial/emekafarmer1.png";

export default function Testimonials() {
  return (
    <section className="w-full">
      <div className="mx-auto px-4 pt-14 pb-24 sm:px-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-[32px] font-black text-[#020202]">
              What Our Customers Are Saying
            </h3>
            <p className="text-[14px] font-normal text-[#8E98A8]">
              From small-scale farmers to bulk buyers and training participants,
              our community shares how we’ve helped them succeed.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex w-full flex-col gap-4 rounded-2xl bg-[#020202] px-4 py-10">
              <p className="font-manrope text-2xl font-bold text-white">
                I joined their training with no background in aquaculture.
                Today, I run my own catfish farm with three full ponds. Their
                support didn’t stop at the training—they still check in from
                time to time.
              </p>
              <p className="text-[16px] font-normal text-[#8E98A8]">
                Emeka A., Farmer (Enugu)
              </p>
              <img src={emekaimage1} alt="Emeka Image" className="size-8" />
            </div>
            <SliderDots totalSlides={5} activeIndex={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
