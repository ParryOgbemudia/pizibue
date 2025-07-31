import Button from "../ui/Button";
import about_img from "@/assets/about/about_img.webp";

export default function About() {
  return (
    <section
      className="w-full bg-[#020202] px-[80px] py-[96px] max-md:px-4 max-md:py-14"
      id="#about"
    >
      <div className="mx-auto grid items-stretch gap-6 md:grid md:grid-cols-20">
        <div className="h-full gap-8 md:col-span-8 md:grid md:grid-rows-2">
          <div className="flex flex-col justify-center gap-10">
            <div className="space-y-6">
              <h2 className="font-black text-white max-sm:text-[32px]">
                About <span className="text-primary"> PiZibue Farm</span>
              </h2>
              <p className="text-[16px] font-normal text-[#818981] max-sm:text-[14px]">
                Established in 2021, PiZibue farm has been Edo State's premier
                catfish farming operation, combining traditional aquaculture
                knowledge with modern sustainable practices.
                <br />
                <br />
                Our 5-hectare facility houses over 21 ponds with a production
                capacity of 50,000 fish annually. We pride ourselves on
                maintaining the highest standards of fish health, water quality,
                and environmental responsibility.
              </p>
            </div>
            <Button className="xmd:w-max flex items-center gap-2 px-4 py-2.5 text-[14px]">
              Get in Touch
            </Button>
          </div>
          <div className="max-sm:min-w:[343px]">
            <img
              src={about_img}
              alt="About Us"
              className="w-full rounded-2xl bg-cover bg-center"
            />
          </div>
        </div>

        {/* Card */}
        <div className="w-full max-sm:grid max-sm:pt-8 max-sm:pb-14 md:col-span-12">
          <div className="flex flex-col items-stretch gap-8 md:grid md:grid-cols-2">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50k", label: "Fish Annually" },
              { value: "500+", label: "Happy Customers" },
              { value: "21", label: "Production Ponds" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex w-full flex-col items-center justify-center gap-6 rounded-3xl bg-[#E9EEEA] py-[56px] md:py-[90px]"
              >
                <p className="text-primary text-[40px] font-black">
                  {item.value}
                </p>
                <p className="text-center font-normal text-[#848D84]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Svg bottom curve */}
      <div className="relative hidden w-full">
        <svg
          className="h-auto w-full"
          viewBox="0 0 1440 333"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 -707.373H1440V332.627C955.5 54.1274 616 -5.37256 0 332.627V-707.373Z"
            fill="#020202"
          />
        </svg>
      </div>
    </section>
  );
}

{
  /* <div className="h-full grid-cols-2 gap-6 md:row-start-1 md:row-end-4 md:grid">
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#E9EEEA]">
                <h4 className="text-primary text-[40px] font-black">5+</h4>
                <p className="text-[16px] font-normal text-[#848D84]">
                  Years Experience
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#E9EEEA]">
                <h4 className="text-primary text-[40px] font-black">50k</h4>
                <p className="text-[16px] font-normal text-[#848D84]">
                  Fish Annually
                </p>
              </div>
            </div>
            <div className="grid-cols-2 gap-6 md:row-start-5 md:row-end-8 md:grid">
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#E9EEEA]">
                <h4 className="text-primary text-[40px] font-black">500+</h4>
                <p className="text-[16px] font-normal text-[#848D84]">
                  Happy Customers
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#E9EEEA]">
                <h4 className="text-primary text-[40px] font-black">21</h4>
                <p className="text-[16px] font-normal text-[#848D84]">
                  Production Ponds
                </p>
              </div>
            </div> */
}
