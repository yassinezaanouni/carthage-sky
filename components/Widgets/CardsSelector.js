import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
const CardsSelector = ({ items, iconFolder }) => {
  const router = useRouter();
  const [selectedServiceIndex, setSelctedServiceIndex] = useState(
    Number(router.query.selectedServiceIndex) || 0
  );
  const [description, setDescription] = useState({
    title: "Occupational Health & Safety",
    description: "",
  });
  return (
    <div className=" flex flex-wrap justify-between gap-4 md:gap-8">
      <div
        className="grid flex-1 md:min-w-[20rem] md:gap-7"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        }}
      >
        {items.map((service, index) => (
          <Item
            iconFolder={iconFolder}
            title={service.title}
            key={index}
            index={index + 1}
            onClick={() => setSelctedServiceIndex(index)}
            isSelected={index === selectedServiceIndex}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        key={selectedServiceIndex}
        className=" min-w-[30ch] max-w-full flex-1 border border-primary-400 px-[1.5rem]  py-9 text-start md:min-w-[40rem] md:py-12 md:px-[2rem] lg:min-w-[50rem] lg:px-[4.5rem]"
      >
        <h3
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-2xl font-bold leading-tight text-primary-400 lg:text-[2.5rem]"
        >
          {items[selectedServiceIndex]?.title}
        </h3>
        <p className="mt-[1.925rem] whitespace-pre-line">
          {items[selectedServiceIndex]?.description}
        </p>
      </motion.div>
    </div>
  );
};

export default CardsSelector;

export const Item = ({ iconFolder, index, title, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className="group flex cursor-pointer flex-col items-center transition-all hover:text-primary-400"
    >
      <button
        className={`f-ai-c h-[7.75rem] w-[8rem] justify-center rounded-lg border border-transparent bg-[#F5F5F5] p-2 group-hover:border-primary-400 group-hover:bg-[#E8F2FF] ${
          isSelected ? "border-primary-400 bg-[#E8F2FF]" : ""
        }`}
      >
        <Image
          src={`/icons/${iconFolder}/${index}.png`}
          alt=""
          name="service"
          width={60}
          height={60}
        />
      </button>
      <h3 className="mt-3 text-lg">{title}</h3>
    </div>
  );
};
