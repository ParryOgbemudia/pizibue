type HeadingMobileProps = {
  h3: string;
  span?: string;
  p: string;
};
export default function HeadingMobile({ h3, span, p }: HeadingMobileProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[32px] font-black">
        {h3}
        <span className="text-primary"> {span}</span>
      </h3>
      <p className="text-[14px] font-normal text-[#848D84]">{p}</p>
    </div>
  );
}
