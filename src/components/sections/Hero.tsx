import Button from "../ui/Button";

export default function Hero() {
  return (
    <main className="max-md:pt-[64px] md:pt-[80px]">
      {/* ✅ Hero section */}
      <section className="mx-auto pt-6 max-md:h-[545px] max-md:pt-0 max-sm:px-4 sm:px-10 md:px-16 lg:px-20">
        <div className="relative mx-auto w-full overflow-hidden rounded-[24px] bg-[url(/img/hero2.webp)] bg-cover bg-center max-md:h-full max-md:px-4 max-md:py-8 md:h-[600px]">
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-[#021002b2]"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-10 px-4 text-center text-white">
            <div className="max-w-[651px] space-y-6 max-sm:max-w-[351px] xl:max-w-[850px]">
              <h1 className="text-[56px] font-black max-sm:text-[40px]">
                Where Innovation Meets Aquaculture
              </h1>
              <p className="text-xl font-medium max-sm:text-sm">
                We deliver healthy fingerlings, smart pond systems, and expert
                support to help you grow a profitable and sustainable fish farm.
              </p>
            </div>
            <Button className="px-6 max-sm:w-full">Book a Consultation</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
