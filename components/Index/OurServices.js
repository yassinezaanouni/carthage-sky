import Image from "next/image";
import ServicesBanner from "./ServicesBanner";

const OurServices = () => {
  const services = [
    "Operating Permits",
    "Navigation Fees Administration",
    "Aviation Fuel Supply",
    "Flight Planning",
    "In-flight catering",
    "General Sales Agent",
    "Charter Broker",
    "Hotel Bookings",
    "Visa Information",
    "Transport Management",
  ];

  return (
    <section className="container text-center  text-dark-400 md:mt-[3.75rem]">
      <div className=" ">
        <h2 className="text-3xl font-bold lg:text-5xl">Discover Our Services</h2>
        <p className="mx-auto mt-5 mb-14 max-w-4xl text-lg">
          We're here to make your experience owning, operating and managing an aircraft easier. We take care of the
          process and deliver cost-effective service so you can enjoy the benefits. You can expect full service for a
          smooth journey.
        </p>
        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {services.map((service, index) => (
            <ServicesItem title={service} key={index} index={index + 1} />
          ))}
        </div>
        <div className="mx-auto mt-4 h-[1px] w-[27rem]  bg-[#D6D6D6] md:mt-8 lg:mt-[5.125rem]" />
      </div>

      <ServicesBanner className="mt-[3.75rem]" />
    </section>
  );
};

export default OurServices;

export const ServicesItem = ({ index, title }) => {
  return (
    <div className="group flex cursor-pointer flex-col items-center transition-all hover:text-primary-400">
      <button className="f-ai-c aspect-square w-[6.25rem] justify-center rounded-[50%] border border-transparent bg-[#ECF4FF] p-2 duration-300 group-hover:border-primary-400">
        <Image src={`/icons/services/${index}.png`} alt="" name="service" width={56} height={56} />
      </button>
      <h3 className="mt-3 text-lg">{title}</h3>
    </div>
  );
};
