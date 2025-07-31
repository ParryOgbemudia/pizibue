import product_img1 from "@/assets/products/product-img1.webp";
import product_img2 from "@/assets/products/product-img2.webp";
import product_img3 from "@/assets/products/product-img3.webp";
import product_img4 from "@/assets/products/product-img4.webp";

export default function Products() {
  return (
    <section className="relative w-full">
      <div className="mx-auto h-full max-w-[1440px]">
        {/* Product Text */}
        <div className="absolute top-[64px] left-1/2 -translate-x-1/2 text-center">
          <h1 className="max-w-[483px] text-[40px] font-black max-md:w-[343px] max-md:text-[32px]">
            Why Choose <span className="text-primary">Pizibue</span>
            <br />
            Farm Products?
          </h1>
          <p className="text-[14px] font-normal text-[#848D84]">
            Our commitment to excellence in every aspect
          </p>
        </div>
        {/* Curve svg */}
        <div className="aspect-[1440/697] bg-[url(/img/topshape.svg)] bg-cover bg-center bg-no-repeat">
          <div className="mx-auto max-w-[1440px]">
            <div className="w-full px-[80px] pt-[314px] max-xl:pt-[350px] max-sm:px-4 sm:px-10 md:px-16 lg:px-20">
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(302px,_1fr))] gap-6">
                {[
                  {
                    name: "Sustainable Farming",
                    label:
                      " Eco-friendly practices that protect our environment while producing the highest quality catfish",
                    img: product_img1,
                    altText: "product_img1",
                  },
                  {
                    name: "Premium Quality",
                    label:
                      "Rigorous quality control ensures every fish meets our exceptional standards for freshness and taste",
                    img: product_img2,
                    altText: "product_img2",
                  },
                  {
                    name: "Fresh Delivery",
                    label:
                      "Direct from pond to customer within 24 hours, maintaining optimal freshness and nutrition",
                    img: product_img3,
                    altText: "product_img3",
                  },
                  {
                    name: "Expert Care",
                    label:
                      "5+ years of aquaculture expertise with trained professionals monitoring every aspect",
                    img: product_img4,
                    altText: "product_img4",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex min-w-[302px] flex-col gap-4 rounded-3xl bg-[#E9EEEA] p-6"
                  >
                    <div className="flex w-full flex-col items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.altText}
                        className="w-full bg-cover bg-center"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h3 className="text-xl font-bold text-[#020202]">
                        {item.name}
                      </h3>
                      <p className="text-center text-[14px] font-normal text-[#848D84]">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
