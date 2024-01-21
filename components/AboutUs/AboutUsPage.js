import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { SwiperSlide } from "swiper/react";
import Contactus from "../Index/Contactus";
import Gallery from "../Index/Gallery";
import ProudOf from "../Index/ProudOf";
import RowCard from "../Widgets/RowCard";
import CustomSwiper from "./CustomSwiper";

const AboutUsPage = () => {
  return (
    <>
      <section className=" mt-[10.6875rem] text-center">
        <div className="container">
          <h1 className="text-3xl font-bold lg:text-5xl">About Us</h1>
          <p className="mx-auto mt-5 mb-[1.5625rem] max-w-[46.875rem] text-lg">
            Established in 2014 and Headquartered in Tunis , Carthage Sky is
            evolving from an airline representative into what is now a worldwide
            Flight Support provider for a full suite of aviation services as
            well as Air Operations Supervisor, FBO, OCC and Executive Lounge
            facilities.
          </p>
        </div>
        <div className="f-ai-c relative mt-[3.2313rem] h-[25rem] w-full justify-center overflow-hidden md:h-[34.5625rem]">
          <Image src="/imgs/services-page/bg.webp" alt="sky" layout="fill" />
          <div className="translate-x-20">
            <Parallax translateX={["0px", "-30px"]} speed={-1}>
              <Image
                src="/imgs/about-us/plane.webp"
                alt="sky"
                width={959}
                height={404}
              />
            </Parallax>
          </div>
        </div>
      </section>

      <ProudOf withLine={false} />
      {/* See different prespectives */}
      <section className="md:[6.1875rem] container text-center">
        <h2 className="mx-auto max-w-[35ch] text-[1.75rem] font-bold !leading-snug md:text-4xl lg:text-[50px]">
          See us from a different perspective, read these articles
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-8 sm:flex-nowrap sm:justify-between md:mt-14">
          {/* Article Card */}
          <div className="cursor-pointer text-start">
            <Image
              src="/imgs/about-us/article1.webp"
              alt="article"
              width={604}
              height={471}
            />
            <h3 className="mt-2 mb-2 max-w-[40ch] text-xl font-bold md:mt-7 md:text-3xl">
              The SKY&apos;s the limit for Carthage&apos;s planned FBO
            </h3>
            <p className="mt-1 text-lg opacity-70">
              Business Aviation / Features
            </p>
            <p className="mt-1 text-lg opacity-70">12 May 2020</p>
          </div>
          {/* Article Card */}
          <div className="cursor-pointer text-start">
            <Image
              src="/imgs/about-us/article2.webp"
              alt="article"
              width={604}
              height={471}
            />
            <h3 className="mt-2 mb-2 max-w-[40ch] text-xl font-bold md:mt-7 md:text-3xl">
              Carthage Sky Services – Large enough to survive, but still small
              enough to care!
            </h3>
            <p className="mt-1 text-lg opacity-70">MEBAA Stories</p>
            <p className="mt-1 text-lg opacity-70">22 November 2019</p>
          </div>
        </div>
      </section>
      {/* Banner */}
      <div
        className={`relative isolate mb-[4.75rem] mt-[7.625rem] flex h-[32rem] w-full items-center  justify-center overflow-hidden rounded-xl py-[2.1875rem] text-start text-white md:py-[6.3125rem] lg:h-[36.625rem]`}
      >
        <div
          className="container max-w-[55rem] overflow-hidden rounded-2xl bg-[#237da3]/40 px-10 py-[3rem] backdrop-blur-md lg:px-16 lg:py-[4.375rem]"
          style={{
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.2)",
              zIndex: -1,
              position: "absolute",
              inset: 0,
            }}
          />
          <h2 className="text-xl font-bold lg:text-3xl">Word from the CEO</h2>
          <CustomSwiper>
            <SwiperSlide>
              <p className="mt-6 text-lg">
                Our company is guided by a set of principles, initiatives and
                management structures which enable an integrated vision and
                agile decision making process.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="mt-6 text-lg">
                Initiatives and management structures which enable an integrated
                vision and agile decision making process.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="mt-6 text-lg">
                Our company is guided by a set of principles, initiatives and
                management structures which enable an integrated vision and
                agile decision making process.
              </p>
            </SwiperSlide>
          </CustomSwiper>
        </div>
        <Image
          src="/imgs/services-page/bg.webp"
          alt=""
          name="services-banner"
          layout="fill"
        />

        <div className="absolute bottom-10 right-0 translate-x-1/2">
          <Parallax translateX={["0px", "-80px"]} speed={2}>
            <Image
              src="/imgs/about-us/plane2.webp"
              alt=""
              name="plane"
              width={630.36}
              height={286.48}
            />
          </Parallax>
        </div>
        <div className="absolute top-10 left-0 -translate-x-1/2">
          <Parallax translateX={["0px", "-80px"]} speed={2}>
            <Image
              src="/imgs/about-us/plane2.webp"
              alt=""
              name="plane"
              width={324.12}
              height={147.26}
            />
          </Parallax>
        </div>
      </div>
      {/* Row cards */}
      <section className="container md:mt-[10.125rem]">
        <RowCard className="" image="/imgs/choose-us/card1.webp">
          <h3 className="mt-1 mb-3 text-2xl font-bold leading-snug md:mb-6 lg:text-[2.125rem]">
            Our International Network
          </h3>
          <p className="text-lg md:mb-6">
            Thanks to the confidence of our partners landing from commercial
            airlines, private operators, airport authorities, business leaders,
            heads of state, government agencies all the way to non-governmental
            organizations, we have been able to build an international network
            of partner covering many aspects of aviation services.
          </p>
        </RowCard>
        <RowCard
          className="mt-[4.25rem] flex-row-reverse md:mt-[5.5625rem]"
          image="/imgs/about-us/card2.webp"
        >
          <h3 className="mt-1 mb-3 text-2xl font-bold leading-snug md:mb-6 lg:text-[2.125rem]">
            Our Team
          </h3>
          <p className="text-lg md:mb-6">
            Our team has a mix of very experienced menbers and younger talented
            members who bring a fresh look and new ideas, opening the network
            you need to access a global, specialized services from a single
            reliable source.
            <br />
            <br />
            Our lean operation structure allows us to focus on each client’s
            individual needs, tailoring our services to meet your operational
            requirements.
          </p>
        </RowCard>
      </section>
      <Gallery />
      <Contactus />
    </>
  );
};

export default AboutUsPage;
