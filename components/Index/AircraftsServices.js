import Image from "next/image";
import React from "react";

const AircraftsServices = () => {
  return (
    <section className="container text-center  text-dark-400 md:mt-[8.25rem]">
      <h2 className="text-3xl font-bold lg:text-5xl">Aircrafts We Service</h2>
      <p className="mx-auto mt-5 mb-14 max-w-3xl text-lg">
        There's a wide variety of aircrafts that differ by type, weight components... We offer services to all of them
        in different airports around the world
      </p>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-[22.1px]">
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <CardBlurred index={index + 1} kye={index} />
        ))}
      </div>
    </section>
  );
};

export default AircraftsServices;

const CardBlurred = ({ index }) => {
  return (
    <div
      className={`group relative h-[17.6875rem] w-full overflow-hidden rounded-xl first:w-[37.75rem] md:w-[18.25rem]`}
    >
      <Image src={`/imgs/aircrafts/${index}.webp`} alt="aircraft" layout="fill" />
      <div className="title absolute inset-x-0 bottom-0 whitespace-nowrap bg-black/60 py-5 text-center text-lg font-bold text-white backdrop-blur ">
        <h3 className="">VVIP Flights</h3>
      </div>
      <style jsx>
        {`
          @media (hover: hover) {
            .title {
              @apply -bottom-20 transition-all duration-500 group-hover:bottom-0;
            }
          }
        `}
      </style>
    </div>
  );
};
