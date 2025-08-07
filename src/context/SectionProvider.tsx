// src/context/SectionContext.tsx
import { createContext, useContext, useState } from "react";

type SectionContextType = {
  activeSection: string;
  setActiveSection: (value: string) => void;
};

const SectionContext = createContext<SectionContextType | null>(null);

type SectionProviderProps = {
  children: React.ReactNode;
};

export default function SectionProvider({ children }: SectionProviderProps) {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context)
    throw new Error("useSectionContext must be used inside SectionProvider");
  return context;
};
