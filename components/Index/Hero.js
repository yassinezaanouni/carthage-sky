import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <Parallax speed={-25} className="">
      <section className="container !mt-0 pt-[10.6875rem] text-center text-white ">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(70, 186, 235, 0) 0%, rgba(70, 186, 235, 0.918) 100%)",
            zIndex: -1,
          }}
        />

        <Image
          src="/imgs/hero/bg.webp"
          alt=""
          name="bg"
          layout="fill"
          className="-z-10 "
        />
        <h1 className=" mb-[1.1875rem] text-[3rem] font-bold md:text-[3.25rem] lg:text-[4.25rem] lg:leading-[77px]">
          With Us
          <br />
          The Sky Is Yours !
        </h1>
        <p className="mx-auto max-w-[760px] text-lg">
          Carthage Sky is an international trip-planning and ﬂight management
          company, specialized in providing regulatory authorizations and ground
          support services to aircraft operators around the world.
        </p>
        <Parallax translateX={["100px", "-200px"]} speed={20}>
          <Image
            src="/imgs/hero/plane.webp"
            alt="plane"
            name="bg"
            width={1768.36}
            height={804.48}
            // style={{
            //   transform: "translateY(-6rem) ",
            // }}
          />
        </Parallax>
      </section>
    </Parallax>
  );
};

export default Hero;
