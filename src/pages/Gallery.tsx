import HeadingMobile from "../components/HeadingMobile";
import gallery_img1 from "@/assets/gallery/gallery_img1.webp";
import Button from "../components/ui/Button";

export default function Gallery() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-4 py-14">
        <div className="flex flex-col justify-center gap-10">
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
              <button className="bg-primary h-[16px] w-[16px] rounded-full"></button>
              <button className="h-[16px] w-[16px] rounded-full bg-[#E2E2E2]"></button>
              <button className="h-[16px] w-[16px] rounded-full bg-[#E2E2E2]"></button>
              <button className="h-[16px] w-[16px] rounded-full bg-[#E2E2E2]"></button>
              <button className="h-[16px] w-[16px] rounded-full bg-[#E2E2E2]"></button>
              <button className="h-[16px] w-[16px] rounded-full bg-[#E2E2E2]"></button>
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
