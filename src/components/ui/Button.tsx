import arrow from "@/assets/icons/Arrow.svg";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: string;
};

export default function Button({
  children,
  className,
  onClick,
  type = "submit",
}: ButtonProps) {
  const base =
    "py-3.5 rounded-full text-white bg-primary leading-[1.2] flex items-center justify-center gap-2 cursor-pointer";

  return (
    <button onClick={onClick} className={`${className} ${base} }`}>
      {children} <img src={arrow} alt="arrow" />
    </button>
  );
}
