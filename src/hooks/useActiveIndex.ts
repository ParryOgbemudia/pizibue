import { useState } from "react";

export default function useActiveIndex() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function toggleItem(index: number) {
    if (index !== activeIndex) setActiveIndex(index);
  }
  return { activeIndex, toggleItem };
}
