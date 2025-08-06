import useMediaQuery from "../../hooks/useMediaQuery";
import AccordionList from "../AccordionList";
import ServicesList from "../ui/ServicesList";

export default function Services() {
  const isAboveMediumScreens = useMediaQuery("(max-width: 770px)");
  return (
    <section className="relative w-full" id="services">
      {/* Svg bottom curve */}

      <div className="mx-auto w-full bg-white">
        <div className="aspect-[1440/697] bg-[url(/img/bottomshape.svg)] bg-cover bg-center bg-no-repeat"></div>
        <div className="xmd:mt-[-280px] mx-auto mt-[-100px] mb-10 flex w-full flex-col items-center justify-center gap-4 px-4 font-black max-sm:pt-10 sm:mt-[-150px] md:mt-[-200px] md:w-2/5 lg:mt-[-350px] xl:mt-[-450px] 2xl:mt-[-500px]">
          <h3 className="text-[32px] text-[#020202]">
            Our Core
            <span className="text-primary"> Services</span>
          </h3>
          <p className="text-center font-normal text-[#848D84]">
            Explore the key services and systems that power our fish farm—from
            quality hatchlings to nationwide delivery.
          </p>
        </div>
        <div className="relative aspect-[1440/657] w-full bg-[url(/img/services.webp)] bg-cover bg-top px-4 py-10 sm:px-10 md:px-16 lg:px-20">
          {isAboveMediumScreens ? (
            <div className="flex flex-col gap-2">
              <AccordionList />
            </div>
          ) : (
            <div className="mx-auto w-full">
              <ServicesList />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
