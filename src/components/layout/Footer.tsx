import footerimg from "@/assets/footerimages/footerimg.webp";
import facebook from "@/assets/footerimages/facebook.svg";
import instagram from "@/assets/footerimages/instagram.svg";
import tiktok from "@/assets/footerimages/tiktok.svg";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="w-full rounded-t-4xl bg-[#020202] text-white">
      <div className="mx-auto px-4 pt-10 pb-14 sm:px-10 md:px-16 md:pt-24 lg:px-20">
        <div className="mb-8 w-full md:mb-[72px]">
          <img
            src={footerimg}
            alt="Footer Image"
            className="w-full bg-cover bg-center"
          />
        </div>
        <div className="xmd:justify-between xmd:flex mb-8">
          <div className="mb-10 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-[40px] font-black">PiZibue Farm Products</h3>
              <p className="text-[14px] font-normal text-[#848D84]">
                Where Innovation Meets Aquaculture
              </p>
            </div>
            <Button className="w-full items-center px-6 py-3.5 md:w-max">
              Book a consultation
            </Button>
          </div>

          <div className="flex gap-16 max-md:flex-col max-md:gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-[18px] font-bold">Home</p>
              <div className="flex flex-col gap-2">
                <p className="text-[16px] font-medium">About Us</p>
                <p className="text-[16px] font-medium">Services</p>
                <p className="text-[16px] font-medium">Gallery</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[18px] font-bold">Contact Us</p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:example@email.com"
                  className="text-[16px] font-medium hover:underline"
                >
                  example@email.com
                </a>
                <a
                  href="tel:+2348012345678"
                  className="text-[16px] font-medium hover:underline"
                >
                  +234 801 234 5678
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[18px] font-bold">Socials</p>
              <div className="flex gap-6">
                <div className="flex size-10 items-center justify-center rounded-full bg-white">
                  <img src={instagram} alt="instagram" className="size-8" />
                </div>
                <div className="flex size-10 items-center justify-center rounded-full bg-white">
                  <img src={facebook} alt="facebook" className="" />
                </div>
                <div className="flex size-10 items-center justify-center rounded-full bg-white">
                  <img src={tiktok} alt="tiktok" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-8 border border-b text-[#ECE6E6]" />
        <div className="">
          <p className="font-manrope text-left font-medium text-white">
            &copy;{" "}
            <span>
              {new Date().getFullYear()} Pizibue Farm Products. All rights
              reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
