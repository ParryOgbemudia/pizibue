import Button from "../ui/Button";
import about_img from "@/assets/about/about_img.webp";

export default function About() {
  return (
    <section className="w-full" id="about">
      <div className="mx-auto max-w-[1440px] bg-[#020202] px-[80px] py-[96px] max-sm:px-4 sm:px-10 md:px-16 lg:px-20">
        <div className="flex w-full justify-between gap-6 max-md:flex-col">
          <div className="flex w-full flex-col items-center gap-8 md:max-w-[588px]">
            <div className="flex flex-col gap-10">
              <div className="space-y-6">
                <h2 className="text-[40px] font-black text-white max-md:text-[32px]">
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
                  maintaining the highest standards of fish health, water
                  quality, and environmental responsibility.
                </p>
              </div>
              <Button className="flex items-center gap-2 px-4 py-2.5 text-[14px] md:w-max">
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
          <div className="w-full md:max-w-[628px]">
            <div className="flex-col gap-8 max-md:flex md:grid md:grid-cols-2">
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
      </div>
      {/* Svg bottom curve */}
      <div className="w-full">
        <div className="mx-auto h-full w-full max-w-[1440px] bg-white">
          <div className="aspect-[1440/697] bg-[url(/img/bottomshape.svg)] bg-cover bg-center bg-no-repeat">
            <div className="px-[80px]"></div>
          </div>
        </div>
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
