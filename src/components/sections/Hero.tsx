import Button from "../ui/Button";

export default function Hero() {
  return (
    <main className="pt-[80px]">
      {/* ✅ Hero section */}
      <section className="px-6 pt-6 md:px-20">
        <div className="relative mx-auto h-[600px] w-full rounded-[24px] bg-[url(/img/hero2.webp)] bg-cover bg-center">
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-[#021002b2]"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-10 px-4 text-center text-white">
            <div className="max-w-[651px] space-y-6">
              <h1 className="text-[56px] font-black">
                Where Innovation Meets Aquaculture
              </h1>
              <p className="text-xl font-medium">
                We deliver healthy fingerlings, smart pond systems, and expert
                support to help you grow a profitable and sustainable fish farm.
              </p>
            </div>
            <Button className="px-6">Book a Consultation</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
