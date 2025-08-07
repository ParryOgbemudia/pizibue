import product_img1 from "@/assets/products/product-img1.webp";
import product_img2 from "@/assets/products/product-img2.webp";
import product_img3 from "@/assets/products/product-img3.webp";
import product_img4 from "@/assets/products/product-img4.webp";

const products = [
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
];
export default function ProductsList() {
  return (
    <div className="max-xmd:mt-[-140px] xmd:-mt-[250px] w-full px-[80px] max-sm:mt-[-60px] max-sm:px-4 sm:px-10 md:px-16 lg:px-20">
      <div className="grid gap-4 md:grid-cols-[repeat(2,(1fr_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="flex min-w-[302px] flex-col gap-4 rounded-3xl bg-[#E9EEEA] p-6"
          >
            <div className="flex w-full flex-col items-center justify-center">
              <img
                src={product.img}
                alt={product.altText}
                className="w-full bg-cover bg-center"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-xl font-bold text-[#020202]">
                {product.name}
              </h3>
              <p className="text-center text-[14px] font-normal text-[#848D84]">
                {product.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
