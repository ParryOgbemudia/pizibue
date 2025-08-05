import HeadingMobile from "../components/HeadingMobile";
import gallery_img1 from "@/assets/gallery/gallery_img1.webp";
import Button from "../components/ui/Button";
import SliderDots from "../components/SliderDots";

export default function Gallery() {
  return (
    <section className="w-full" id="gallery">
      <div className="mx-auto px-4 py-14 sm:px-10">
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
            <SliderDots totalSlides={8} activeIndex={1} />
          </div>

          <Button className="flex w-full items-center gap-2 px-4 py-2.5 text-[14px] md:w-max">
            View our gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
