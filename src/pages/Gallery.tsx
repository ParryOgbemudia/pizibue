import HeadingMobile from "../components/HeadingMobile";
import gallery_img1 from "@/assets/gallery/gallery_img1.webp";
import Button from "../components/ui/Button";

const totalSlides = 8;
const activeIndex = 2;

export default function Gallery() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-4 py-14">
        <div className="flex flex-col items-center justify-center gap-10">
          <HeadingMobile
            h3="Inside the Farm: Real Moments"
            span="Real Work"
            p="Our gallery brings you behind the scenes—real fish, real farmers, real impact."
          />
          <div className="flex flex-col gap-4">
            <img
              src={gallery_img1}
              alt="Gallery Img1"
              className="rounded-2xl"
            />
            <div className="flex items-center justify-center gap-3">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                    i === activeIndex ? "bg-primary" : "bg-[#E2E2E2]"
                  }`}
                />
              ))}
            </div>
          </div>

          <Button className="flex items-center gap-2 px-4 py-2.5 text-[14px] md:w-max">
            View our gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
