import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const CardsSelector = ({ items, iconFolder }) => {
  const [selectedServiceIndex, setSelctedServiceIndex] = useState(0);
  //   const [description, setDescription] = useState({ title: "Operating Permits", description: "" });
  return (
    <div className="container">
      {/* <textarea
    className="border-2"
    name=""
    id=""
    cols="30"
    rows="10"
    onChange={(e) =>
      setDescription((prev) => {
        return { ...prev, description: e.target.value };
      })
    }
  ></textarea>
  <button
    onClick={() => {
      console.log(description);
    }}
  >
    hello
  </button> */}
      <div
        className="grid gap-5"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(188px, 1fr))",
        }}
      >
        {items.map((service, index) => (
          <Item
            iconFolder={iconFolder}
            title={service.title}
            key={index}
            index={index + 1}
            onClick={() => setSelctedServiceIndex(index)}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        key={selectedServiceIndex}
        className="mt-16 border border-primary-400 px-[2rem] py-9 text-start md:mt-[5.5rem] md:py-16 md:px-[4rem] lg:px-[6.5rem]"
      >
        <h3
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-2xl font-bold text-primary-400 lg:text-[2.5rem]"
        >
          {items[selectedServiceIndex]?.title}
        </h3>
        <p className="mt-[1.925rem] whitespace-pre-line">{items[selectedServiceIndex]?.description}</p>
      </motion.div>
    </div>
  );
};

export default CardsSelector;

export const Item = ({ iconFolder, index, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group flex cursor-pointer flex-col items-center transition-all hover:text-primary-400"
    >
      <button className="f-ai-c h-[11rem] w-[11.75rem] justify-center rounded-lg border border-transparent bg-[#F5F5F5] p-2 duration-300 group-hover:border-primary-400 group-hover:bg-[#E8F2FF]">
        <Image src={`/icons/${iconFolder}/${index}.png`} alt="" name="service" width={90} height={90} />
      </button>
      <h3 className="mt-3 text-lg">{title}</h3>
    </div>
  );
};
