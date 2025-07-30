import product_img1 from "@/assets/products/product-img1.webp";
import product_img2 from "@/assets/products/product-img2.webp";
import product_img3 from "@/assets/products/product-img3.webp";
import product_img4 from "@/assets/products/product-img4.webp";

export default function Products() {
  return (
    <section className="relative w-full">
      <div className="z-0 aspect-[1440/697] w-full">
        {/* Top wave shape */}
        <svg
          className="inset-0 flex h-auto w-full items-center justify-center max-sm:pt-[173px]"
          viewBox="0 0 1440 697"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1040H1440V0C955.5 278.5 616 338 0 0V1040Z"
            fill="#020202"
          />
        </svg>
      </div>

      {/* Product Text */}
      <div className="max-xmd:top-2 max-xmd:gap-2 absolute top-16 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4 text-center max-sm:top-[64px] max-sm:w-[343px] max-sm:gap-4">
        <h1 className="max-xmd:text-[32px] text-[40px] font-black max-md:text-xl max-sm:text-[32px] max-sm:font-black">
          Why Choose <span className="text-primary">Pizibue</span>
          <br />
          Farm Products?
        </h1>
        <p className="max-xmd:text-[14px] font-normal text-[#848D84] max-md:text-[10px] max-sm:text-[14px] max-sm:font-normal">
          Our commitment to excellence in every aspect
        </p>
      </div>

      {/* Product Images */}
      <div className="absolute top-1/2 z-10 w-full bg-[#020202] px-[80px] max-md:px-4 max-sm:top-[300px]">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(302px,_1fr))] justify-items-center gap-6">
          <div className="flex h-auto flex-col items-center justify-center gap-4 rounded-3xl bg-[#E9EEEA] p-6">
            <div className="">
              <img
                src={product_img1}
                alt="product-img1"
                className="rounded-3xl bg-cover bg-center"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-xl font-bold">Sustainable Farming</h3>
              <p className="text-[14px] font-normal">
                Eco-friendly practices that protect our environment while
                producing the highest quality catfish
              </p>
            </div>
          </div>

          <div className="flex h-auto flex-col items-center justify-center gap-4 rounded-3xl bg-[#E9EEEA] p-6">
            <div className="">
              <img
                src={product_img2}
                alt="product-img1"
                className="rounded-3xl bg-cover bg-center"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-xl font-bold">Premium Quality</h3>
              <p className="text-[14px] font-normal">
                Rigorous quality control ensures every fish meets our
                exceptional standards for freshness and taste
              </p>
            </div>
          </div>
          <div className="flex h-auto flex-col items-center justify-center gap-4 rounded-3xl bg-[#E9EEEA] p-6">
            <div className="">
              <img
                src={product_img3}
                alt="product-img1"
                className="rounded-3xl bg-cover bg-center"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-xl font-bold">Fresh Delivery</h3>
              <p className="text-[14px] font-normal">
                Direct from pond to customer within 24 hours, maintaining
                optimal freshness and nutrition
              </p>
            </div>
          </div>

          <div className="flex h-auto flex-col items-center justify-center gap-4 rounded-3xl bg-[#E9EEEA] p-6">
            <div className="">
              <img
                src={product_img4}
                alt="product-img1"
                className="rounded-3xl bg-cover bg-center"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-xl font-bold">Expert Care</h3>
              <p className="text-[14px] font-normal">
                5+ years of aquaculture expertise with trained professionals
                monitoring every aspect
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
