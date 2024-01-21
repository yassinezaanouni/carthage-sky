import Image from "next/image";

const Contactus = () => {
  return (
    <section className="smallest:text-start container max-w-[56.5625rem] text-center md:mt-[10rem]">
      <h2 className="mt-[0.625rem] mb-10 text-center text-3xl font-bold md:mb-[4.1875rem] lg:text-5xl">
        Contact us
      </h2>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="w-[18.75rem] max-w-full flex-1">
          <p>
            Fill out the form and submit it.
            <br />
            You will receive a timely response with all the info you need.
          </p>
          <div className="smallest:justify-start mt-6 flex flex-wrap items-start justify-center gap-x-20">
            <div className="">
              <h3 className="text-lg font-bold text-primary-400">Sales</h3>
              <p className="mt-2">cs@carthagesky.com</p>
              <p className="mt-2">0021624363652</p>
            </div>
            <div className="">
              <h3 className="text-lg font-bold text-primary-400">Operations</h3>
              <p className="mt-2">cs@carthagesky.com</p>
              <p className="mt-2">0021624363652</p>
              <p>SITA: TUNOPXH</p>
              <p>AFTN : KTUSXAAM</p>
            </div>
            <div className="">
              <h3 className="text-lg font-bold text-primary-400">General</h3>
              <p className="mt-2">cs@carthagesky.com</p>
              <p className="mt-2">0021624363652</p>
            </div>
          </div>
        </div>
        <Image
          src="/imgs/contact-us/illustration.webp"
          alt="Contact us"
          width={403.12}
          height={365}
        />
      </div>
    </section>
  );
};

export default Contactus;
