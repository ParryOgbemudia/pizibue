import { useEffect, useRef } from "react";

export default function useSectionInView(
  id: string,
  setActiveSection: (id: string) => void,
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      },
      { threshold: 0.5 }, // You can tweak this
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [id, setActiveSection]);

  return ref;
}
