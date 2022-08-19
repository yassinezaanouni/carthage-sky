import Image from "next/image";

const FinalStep = () => {
  return (
    <section className="container mt-[10.6875rem] max-w-[37.5rem] text-center">
      <h1 className=" text-3xl font-bold lg:text-5xl lg:leading-[60px]">Registration successful, Thank you</h1>
      <p className="mt-3 mb-6 text-lg md:mt-4 md:mb-8">
        We will get back to you soon, make sure to check your email because that’s where you will find us.
      </p>
      <button className="rounded-full bg-[#1E1E1E] px-7 py-[10px] text-white">Back Home</button>
      <Image src="/imgs/inquiry/illustration.webp" alt="Thank you" width={566} height={566} />
    </section>
  );
};

export default FinalStep;
