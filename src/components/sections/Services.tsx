import AccordionList from "../AccordionList";

export default function Services() {
  return (
    <section className="relative w-full">
      {/* Svg bottom curve */}

      <div className="mx-auto w-full bg-white">
        <div className="aspect-[1440/697] bg-[url(/img/bottomshape.svg)] bg-cover bg-center bg-no-repeat"></div>
        <div className="mt-[-100px] mb-10 flex w-full flex-col items-center justify-center gap-4 px-4 font-black">
          <h3 className="text-[32px] text-[#020202]">
            Our Core
            <span className="text-primary"> Services</span>
          </h3>
          <p className="text-center font-normal text-[#848D84]">
            Explore the key services and systems that power our fish farm—from
            quality hatchlings to nationwide delivery.
          </p>
        </div>
        <div className="relative aspect-[1440/657] w-full bg-[url(/img/services.webp)] bg-cover bg-top px-4 py-10">
          <div className="flex flex-col gap-2">
            <AccordionList />
          </div>
        </div>
      </div>
    </section>
  );
}
