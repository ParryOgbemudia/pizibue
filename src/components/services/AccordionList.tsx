import ArrowDown from "@/assets/icons/ArrowDown.svg";
import ArrowUp from "@/assets/icons/ArrowUp.svg";
import useActiveIndex from "../../hooks/useActiveIndex";

const accordionItems = [
  {
    title: "Species raised",
    content:
      "We specialize in raising the most in-demand and resilient fish species including Catfish, Tilapia, and other freshwater varieties. Each species is carefully selected for high survival rates, rapid growth, and strong market appeal—whether for home consumption, commercial resale, or export. Our fish are nurtured in clean, optimized environments to ensure quality you can count on, harvest after harvest.",
  },
  {
    title: "Hatchery/fingerlings",
    content:
      "We specialize in raising the most in-demand and resilient fish species including Catfish, Tilapia, and other freshwater varieties. Each species is carefully selected for high survival rates, rapid growth, and strong market appeal—whether for home consumption, commercial resale, or export. Our fish are nurtured in clean, optimized environments to ensure quality you can count on, harvest after harvest.",
  },
  {
    title: "Pond construction",
    content:
      "We specialize in raising the most in-demand and resilient fish species including Catfish, Tilapia, and other freshwater varieties. Each species is carefully selected for high survival rates, rapid growth, and strong market appeal—whether for home consumption, commercial resale, or export. Our fish are nurtured in clean, optimized environments to ensure quality you can count on, harvest after harvest.",
  },
  {
    title: "Feed/tools supply",
    content:
      "We specialize in raising the most in-demand and resilient fish species including Catfish, Tilapia, and other freshwater varieties. Each species is carefully selected for high survival rates, rapid growth, and strong market appeal—whether for home consumption, commercial resale, or export. Our fish are nurtured in clean, optimized environments to ensure quality you can count on, harvest after harvest.",
  },
  {
    title: "Training & consulting",
    content:
      "We specialize in raising the most in-demand and resilient fish species including Catfish, Tilapia, and other freshwater varieties. Each species is carefully selected for high survival rates, rapid growth, and strong market appeal—whether for home consumption, commercial resale, or export. Our fish are nurtured in clean, optimized environments to ensure quality you can count on, harvest after harvest.",
  },
  {
    title: "Fresh fish delivery",
    content:
      "We specialize in raising the most in-demand and resilient fish species including Catfish, Tilapia, and other freshwater varieties. Each species is carefully selected for high survival rates, rapid growth, and strong market appeal—whether for home consumption, commercial resale, or export. Our fish are nurtured in clean, optimized environments to ensure quality you can count on, harvest after harvest.",
  },
];

export default function AccordionList() {
  const { activeIndex, toggleItem } = useActiveIndex();

  return (
    <>
      {accordionItems.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={index} className="bg-primary rounded-2xl px-4 py-6">
            <div className="flex flex-col gap-3">
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-[18px] font-bold text-[#FFFFFF]">
                  {item.title}
                </h3>
                <img
                  src={isOpen ? ArrowUp : ArrowDown}
                  alt="Toggle Arrow"
                  className={`size-4 transition-transform duration-300 ${
                    isOpen ? "rotate-360" : "rotate-0"
                  }`}
                />
              </div>

              {isOpen && (
                <div className="rounded-2xl bg-[#16B02D] p-4">
                  <p className="text-[14px] font-normal text-[#C0E9C7]">
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
