import Image from "next/image";
import React from "react";
import Button from "../Widgets/Button";
import Link from "next/link";

const ChooseUs = () => {
  return (
    <section className="relative isolate  min-h-[39.75rem] w-full bg-[#4DC0EF] py-[5.3125rem] text-white md:mt-[7.75rem]">
      <Image
        src="/imgs/choose-us/cloud.webp"
        alt="Choose Us"
        layout="fill"
        style={{
          mixBlendMode: "multiply",
          opacity: 0.9,
          zIndex: -1,
        }}
      />
      <div
        className="md: container relative z-10 flex flex-wrap justify-center gap-8 rounded-xl  border-2 py-[2.1875rem] px-[1.8125rem] md:px-[2.2rem] lg:justify-between xl:px-[5.25rem] xl:py-[3.6875rem]"
        style={{
          background: "rgba(95, 159, 233, 0.267)",
          boxShadow: "0 8px 32px 0 rgba( 255, 255, 255, 0.17 )",
          backdropFilter: "blur( 4px )",
        }}
      >
        <div>
          <h2 className="text-3xl font-bold lg:text-5xl">Why Choose Us</h2>
          <p className=" mt-4 mb-8 max-w-md text-lg xl:max-w-xl">
            As an aviation business player, we are committed to the highest standards of service ensuring we have all
            the right processes and systems in place. We not only meet aviation standards, we exceed them.
            <br />
            Carthage Sky acheived ISO9001, ISO14001 & OHSAS 18001 certifications in February 2019.
          </p>
          <Button className=" bg-white/70 !py-4 !font-bold !text-primary-500 backdrop-blur hover:bg-primary-500 hover:!text-white">
            <Link href="/choose-us">See More</Link>
          </Button>
        </div>
        <Image src="/imgs/choose-us/airplane.webp" alt="Choose Us" width={352} height={352} />
      </div>
    </section>
  );
};

export default ChooseUs;
