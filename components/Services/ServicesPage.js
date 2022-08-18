import Image from "next/image";
import Button from "../Widgets/Button";
import AircraftsServices from "../Index/AircraftsServices";
import Contactus from "../Index/Contactus";
import CardsSelector from "../Widgets/CardsSelector";
import { Parallax } from "react-scroll-parallax";

const ServicesPage = () => {
  const services = [
    {
      title: "Operating Permits",
      description:
        "Carthage Sky provides high quality ground handling as well as supervision to air operators from private to commercial flights in all Tunisian airports. Our professional team ensures to our customers best personalized services based on client expectations.\n\nWe look after the interest of our customers when safety, security and on time performance are priority. For us, it is very important to have a passenger happy, our customer service agents know how to do it, and we are convinced that a happy passenger is a satisfied client.\n\nOur services range from passenger and cargo handling services all the way to VVIP flights support and ambulance flights, ensuring that every process involved with your flight and all your needs upon landing are taken care of.\n\nCarthage Sky covers all your needs upon landing including:\n1. Basic ground handling services\n2. Ground service equipments arrangement\n3. Passenger handling services\n4. Baggage and cargo handling services\n5. Security Services\n6. Cabin services\n7. VIP meet-and-greet services\n8. Supervision services\n9. Visa and immigration assistance for crew and passengers\n10. Slots\n11. Fuel coordination & supply\n12. Aircraft movement and flight follow-up",
    },
    { title: "Navigation Fees Administration", description: "" },
    { title: "Aviation Fuel Supply", description: "" },
    { title: "Flight Planning", description: "" },
    { title: "In-flight catering", description: "" },
    { title: "General Sales Agent", description: "" },
    { title: "Charter Broker", description: "" },
    { title: "Hotel Bookings", description: "" },
    { title: "Visa Information", description: "" },
    { title: "Transport Management", description: "" },
  ];
  return (
    <>
      <section className=" mt-[10.6875rem] text-center">
        <div className="container">
          <h1 className="text-3xl font-bold lg:text-5xl">Our services</h1>
          <p className="mx-auto mt-5 mb-[1.5625rem] max-w-[46.875rem] text-lg">
            We're here to make your experience owning, operating and managing an aircraft easier. We take care of the
            process and deliver cost-effective service so you can enjoy the benefits. You can expect full service for a
            smooth journey.
          </p>
          <Button isColorInverse={true}>Send Inquiry</Button>
        </div>
        <div className="f-ai-c relative mt-[3.2313rem] h-[25rem] w-full justify-center md:h-[34.5625rem]">
          <Image src="/imgs/services-page/bg.webp" alt="sky" layout="fill" />

          <div
            style={{
              transform: "translate(-5rem, 0)",
            }}
          >
            <Parallax translateX={["0px", "25px"]} speed={-3}>
              <Image src="/imgs/services-page/plane.webp" alt="sky" width={821} height={409} />
            </Parallax>
          </div>
        </div>
      </section>
      <section className="container text-center">
        <h2 className="text-3xl font-bold lg:text-5xl">You are in good hands with us,</h2>
        <p className="mx-auto mt-5 mb-12 max-w-[46.875rem] text-lg md:mb-[4.5625rem]">
          Our professionals work together allowing us to offer your the best services covering all your needs across
          many different geographies.
        </p>
        <CardsSelector iconFolder={"services"} items={services} />
      </section>
      <AircraftsServices />
      <Contactus />
    </>
  );
};

export default ServicesPage;
