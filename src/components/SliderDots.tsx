type SliderDotsProps = {
  totalSlides: number;
  activeIndex: number;
};
export default function SliderDots({
  totalSlides,
  activeIndex,
}: SliderDotsProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          className={`h-3 w-3 cursor-pointer rounded-full transition-colors duration-300 ${
            i === activeIndex ? "bg-primary" : "bg-[#E2E2E2]"
          }`}
        />
      ))}
    </div>
  );
}
