import arrow from "@/assets/icons/Arrow.svg";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, className, onClick }: ButtonProps) {
  const base =
    "py-3.5 rounded-full text-white bg-primary leading-[1.2] flex items-center justify-center gap-2";

  return (
    <button onClick={onClick} className={`${className} ${base} }`}>
      {children} <img src={arrow} alt="arrow" />
    </button>
  );
}
