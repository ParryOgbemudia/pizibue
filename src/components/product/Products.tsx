import ProductsList from "./ProductsList";

export default function Products() {
  return (
    <section className="relative w-full">
      <div className="mx-auto">
        {/* Product Text */}
        <div className="xmd:mt-[10px] -mb-[50px] flex flex-col items-center gap-4 text-center max-md:mt-[34px]">
          <h1 className="max-w-[483px] text-[40px] leading-tight font-black max-md:w-[343px] max-md:text-[32px]">
            Why Choose <span className="text-primary">Pizibue</span>
            <br />
            Farm Products?
          </h1>
          <p className="text-[14px] font-normal text-[#848D84]">
            Our commitment to excellence in every aspect
          </p>
        </div>
        {/* Curve svg */}
        <div className="mt-[-80px] aspect-[1440/657] w-full bg-[url(/img/topshape.svg)] bg-cover bg-no-repeat max-md:mt-[60px] max-sm:mt-[40px]"></div>

        {/* Cards */}
        <div className="mx-auto bg-[#020202]">
          <ProductsList />
        </div>
      </div>
    </section>
  );
}
