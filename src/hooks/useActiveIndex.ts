import { useState } from "react";

export default function useActiveIndex() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function toggleItem(index: number) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }
  return { activeIndex, toggleItem };
}
