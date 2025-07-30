import Button from "../ui/Button";
import about_img from "@/assets/about/about_img.webp";

export default function About() {
  return (
    <section
      className="w-full bg-[#020202] px-[80px] py-[96px] max-md:px-4 max-md:py-14"
      id="#about"
    >
      <div className="mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-8">
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
          <div className="max-sm:min-w:[343px] max-sm:min-h-[259px]">
            <img
              src={about_img}
              alt="About Us"
              className="w-full rounded-2xl bg-cover bg-center"
            />
          </div>
        </div>

        {/* Card */}
        <div className="max-sm-grid-cols-1 w-full max-sm:grid max-sm:max-h-[587px] max-sm:px-4 max-sm:pt-8 max-sm:pb-14">
          <div className="flex flex-col gap-6">
            <div className="space-y-6">
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#E9EEEA] py-[56px]">
                <p className="text-primary text-[40px] font-black">5+</p>
                <p className="font-normal text-[#848D84]">Years Experience</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#E9EEEA] py-[56px]">
                <p className="text-primary text-[40px] font-black">50k</p>
                <p className="font-normal text-[#848D84]">Fish Annually</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#E9EEEA] py-[56px]">
                <p className="text-primary text-[40px] font-black">500+</p>
                <p className="font-normal text-[#848D84]">Happy Customers</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#E9EEEA] py-[56px]">
                <p className="text-primary text-[40px] font-black">21</p>
                <p className="font-normal text-[#848D84]">Production Ponds</p>
              </div>
            </div>
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
