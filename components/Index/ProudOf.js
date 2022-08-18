import Image from "next/image";
const ProudOf = ({ withLine = true, className }) => {
  return (
    <section
      className={`container max-w-4xl text-center md:mt-[3.75rem] ${
        withLine ? "border-b border-[#D6D6D6] pb-4 md:pb-8 lg:pb-[5.125rem]" : ""
      } ${className}`}
    >
      <h2 className="text-2xl font-semibold text-[#212121] lg:text-[2rem]">We are proud members of</h2>
      <div className="f-ai-c mt-11 justify-center gap-6 md:gap-[4.4375rem]">
        <Image src="/imgs/proud-of/1.webp" alt="" name="proud-of" width={143} height={37} />
        <Image src="/imgs/proud-of/2.webp" alt="" name="proud-of" width={222} height={49} />
        <Image src="/imgs/proud-of/3.webp" alt="" name="proud-of" width={201} height={36} />
      </div>
    </section>
  );
};

export default ProudOf;
