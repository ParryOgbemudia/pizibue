import useActiveIndex from "../../hooks/useActiveIndex";

const services = [
  {
    title: "Species raised",
    text: "Our modern hatchery produces high-quality, disease-free fingerlings bred from healthy, high-performing broodstock. With a focus on genetic strength and early-stage nutrition, we ensure your fingerlings have the best start possible. We supply to farms of all sizes and provide guidance on stocking density, acclimatization, and first-cycle management to help you grow confidently from day one.",
  },
  {
    title: "Hatchery/fingerlings",
    text: "Our modern hatchery produces high-quality, disease-free fingerlings bred from healthy, high-performing broodstock. With a focus on genetic strength and early-stage nutrition, we ensure your fingerlings have the best start possible. We supply to farms of all sizes and provide guidance on stocking density, acclimatization, and first-cycle management to help you grow confidently from day one.",
  },
  {
    title: "Pond construction",
    text: "Our modern hatchery produces high-quality, disease-free fingerlings bred from healthy, high-performing broodstock. With a focus on genetic strength and early-stage nutrition, we ensure your fingerlings have the best start possible. We supply to farms of all sizes and provide guidance on stocking density, acclimatization, and first-cycle management to help you grow confidently from day one.",
  },
  {
    title: "Feed/tools supply",
    text: "Our modern hatchery produces high-quality, disease-free fingerlings bred from healthy, high-performing broodstock. With a focus on genetic strength and early-stage nutrition, we ensure your fingerlings have the best start possible. We supply to farms of all sizes and provide guidance on stocking density, acclimatization, and first-cycle management to help you grow confidently from day one.",
  },
  {
    title: "Training and consultating",
    text: "Our modern hatchery produces high-quality, disease-free fingerlings bred from healthy, high-performing broodstock. With a focus on genetic strength and early-stage nutrition, we ensure your fingerlings have the best start possible. We supply to farms of all sizes and provide guidance on stocking density, acclimatization, and first-cycle management to help you grow confidently from day one.",
  },
  {
    title: "Fresh fish delivery",
    text: "Our modern hatchery produces high-quality, disease-free fingerlings bred from healthy, high-performing broodstock. With a focus on genetic strength and early-stage nutrition, we ensure your fingerlings have the best start possible. We supply to farms of all sizes and provide guidance on stocking density, acclimatization, and first-cycle management to help you grow confidently from day one.",
  },
];

export default function ServicesList() {
  const { activeIndex, toggleItem } = useActiveIndex();

  return (
    <div
      className="relative w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/img/services.webp')" }}
    >
      <div className="flex h-[calc(100vh-96px)] w-full">
        {/* Left column (green sidebar) */}
        <div className="bg-primary flex w-1/5 flex-col">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => toggleItem(index)}
              className={`py-6 pr-2 pl-4 text-left text-[16px] font-semibold transition-colors duration-200 ${
                activeIndex === index
                  ? "bg-black/80 text-white"
                  : "text-[#C0E9C7] hover:bg-black/20"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Right content area */}
        {activeIndex !== null && (
          <div className="flex-1 bg-black/80 px-10 pt-10 text-white">
            <h4 className="text-[32px] font-bold">
              {services[activeIndex].title}
            </h4>
            <p className="mt-4 text-[16px] font-normal">
              {services[activeIndex].text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// export default function ServicesList() {
//   const { activeIndex, toggleItem } = useActiveIndex();

//   return (
//     <div className="">
//       {services.map((service, index) => (
//         <div key={index} className="flex">
//           <div className="bg-primary w-1/5">
//             <p
//               className={`py-6 pl-4 text-[18px] font-bold text-[#C0E9C7] ${activeIndex === index ? "bg-[#000000CC] text-white" : ""}`}
//               onClick={() => toggleItem(index)}
//             >
//               {service.title}
//             </p>
//           </div>
//           {activeIndex === index && (
//             <div className="flex h-[calc(100vh-96px)] w-4/5 flex-col gap-6 rounded-tr-2xl bg-[#000000CC] px-10 pt-10 text-white">
//               <h4 className="text-[32px] font-bold">{service.title}</h4>
//               <p className="text-[16px] font-normal">{service.text}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
