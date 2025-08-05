import useSectionInView from "../hooks/useSectionInView";

type Props = {
  id: string;
  setActiveSection: (id: string) => void;
  children: React.ReactNode;
};

export default function TrackSection({
  id,
  setActiveSection,
  children,
}: Props) {
  const ref = useSectionInView(id, setActiveSection);

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
}
