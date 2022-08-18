import Image from "next/image";
import Link from "next/link";

const RowCard = ({ className, image, children }) => {
  return (
    <div className={`flex flex-wrap-reverse justify-between gap-2 text-start ${className}`}>
      <div className="max-w-[27.5rem] pr-4 md:translate-y-[-1.5rem] xl:max-w-[35.5rem] ">{children}</div>
      <CardImage image={image} />
    </div>
  );
};

export default RowCard;

const CardImage = ({ image }) => {
  return (
    <div className=" h-[18.625rem] w-[28rem] bg-[#D5E7FF] xl:h-[22.9375rem]  xl:w-[34.4375rem]">
      <div className="relative h-full w-full md:translate-y-[-1.5rem]  md:translate-x-[-1.5rem] ">
        <Image src={image} alt="" name="card-image" layout="fill" />
      </div>
    </div>
  );
};
