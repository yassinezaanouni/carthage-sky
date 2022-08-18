import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <section className="container text-center md:mt-[6.6875rem]">
      <h2 className="text-3xl font-semibold">Gallery</h2>
      <h3 className="mt-[0.75rem] mb-10 text-3xl font-bold md:mb-[4.1875rem] lg:text-5xl">Explore Carthage Sky</h3>
      <div className="flex flex-wrap items-start justify-center gmd:flex-nowrap ">
        <Image src="/imgs/gallery/1.webp" alt="Gallery" width={472} height={373} />
        <div className="flex gmd:flex-col">
          <Image src="/imgs/gallery/2.webp" alt="Gallery" width={251} height={187} />
          <Image src="/imgs/gallery/4.webp" alt="Gallery" width={252} height={187} />
        </div>
        <div className="flex flex-col">
          <Image src="/imgs/gallery/3.webp" alt="Gallery" width={505} height={187} />
          <div className="flex">
            <Image src="/imgs/gallery/5.webp" alt="Gallery" width={252} height={187} />
            <Image src="/imgs/gallery/6.webp" alt="Gallery" width={252} height={187} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
