import Button from "../Widgets/Button";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

const ServicesBanner = ({ className }) => {
  return (
    <div
      className={`relative isolate  rounded-xl py-[2.1875rem] px-[1.8125rem] text-start text-white shadow-2xl shadow-[rgba(77,193,239,0.25)] sm:pr-40 md:py-[2.875rem] md:px-[5.5625rem] ${className}`}
      style={{
        background: "linear-gradient(180deg, rgba(72,190,238,1) 0%, rgba(86,196,240,1) 39%, rgba(184,236,255,1) 100%)",
      }}
    >
      <h2 className="max-w-[60rem] text-3xl font-bold lg:text-5xl lg:!leading-[65px]">
        Carthage Sky is here to help and guide your journey
      </h2>
      <p className="mt-6 mb-8 max-w-[56rem] text-lg">
        Satisfying your needs is our biggest priority. We offer a wide variety of services to make your journey
        effortless.
      </p>
      <Button className="bg-white !font-bold !text-primary-500 hover:bg-primary-500 hover:!text-white">
        <Link href="/services">Explore More</Link>
      </Button>
      <div className="absolute -bottom-2 -z-10">
        <Parallax translateX={["0px", "-60px"]}>
          <Image src="/imgs/services/cloud.webp" alt="" name="services-banner" width={1227.13} height={132.78} />
        </Parallax>
      </div>
      <div className="absolute -bottom-14 right-0 -z-10">
        <Parallax speed={-5}>
          <Image src="/imgs/services/plane.webp" alt="" name="services-banner" width={615} height={403} />
        </Parallax>
      </div>
    </div>
  );
};

export default ServicesBanner;
