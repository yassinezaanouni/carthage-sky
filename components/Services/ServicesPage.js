import Image from "next/image";
import Button from "../Widgets/Button";
import AircraftsServices from "../Index/AircraftsServices";
import Contactus from "../Index/Contactus";
import CardsSelector from "../Widgets/CardsSelector";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

const ServicesPage = () => {
  const services = [
    {
      title: "Ground Handling Supervision",
      description:
        "Carthage Sky provides high quality ground handling as well as supervision to air operators from private to commercial flights in all Tunisian airports. Our professional team ensures to our customers best personalized services based on client expectations.\n\nWe look after the interest of our customers when safety, security and on time performance are priority. For us, it is very important to have a passenger happy, our customer service agents know how to do it, and we are convinced that a happy passenger is a satisfied client.\n\nOur services range from passenger and cargo handling services all the way to VVIP flights support and ambulance flights, ensuring that every process involved with your flight and all your needs upon landing are taken care of.\n\nCarthage Sky covers all your needs upon landing including:\n1. Basic ground handling services\n2. Ground service equipments arrangement\n3. Passenger handling services\n4. Baggage and cargo handling services\n5. Security Services\n6. Cabin services\n7. VIP meet-and-greet services\n8. Supervision services\n9. Visa and immigration assistance for crew and passengers\n10. Slots\n11. Fuel coordination & supply\n12. Aircraft movement and flight follow-up",
    },
    {
      title: "Operations Control Center",
      description:
        "We use in-house systems and software to provide International Flight Planning (IFP) with multiple layers of optimization saving time, fuel and money for our clients. Carthage Sky is certified, quality assured, and at your disposal 24/7 to ensure you enjoy a seamless journey from origin to final destination.\n\nOur qualified dispatchers customize flight plans tailored to your needs by combining different flight planning systems to calculate and deliver optimized routes and flight plans. Carthage Sky provides flight plans based on innumerable parameters including flight destinations, aircraft performance, weather conditions amongst other parameters to ensure fuel efficiency and accurate flight information, whilst also ensuring maximal safety and security.\n\nOur flight planning services include: Standard Services, Flight Crew Briefings, ATC Filings, Test Plans, Route Planning Optimization, Escape Routes Planning, Airport Operational Study, Runway Analysis, Flight Watch..etc.\n\nInstant Permits:\nCarthage Sky ‘s operation staff has experience in the aviation rules and regulations of the various civil aviation authorities around the world so you can trust us to secure all required permits for your operation, including:\n1. Ad hoc Over-flight and Landing Permits\n2. Scheduled and block permits\n3. Prior Permission Required (PPR)\n4. Traffic Rights and Foreign Air Operator Certificates\n5. Special operating permit\n6. Slots\n7. Guidance and coordination for diplomatic permits",
    },
    {
      title: "Representation and Supervision",
      description:
        "Carthage Sky represents airlines in the legal, administrative, and operative and finance areas in Tunisia.\n\nOur relationship with authorities and local airport vendors is strengthening more and more each day.\n\nSupervision is executed above and below the wing in every flight, ensuring compliance of each established procedure performed on ground by service providers, guaranteeing the best On Time Performance and safety practices during turn around. Real time reporting of operations progress.",
    },
    {
      title: "Passengers GSA",
      description:
        "Carthage Sky represents airlines in the legal, administrative, and operative and finance areas in Tunisia.\n\nOur relationship with authorities and local airport vendors is strengthening more and more each day.\n\nSupervision is executed above and below the wing in every flight, ensuring compliance of each established procedure performed on ground by service providers, guaranteeing the best On Time Performance and safety practices during turn around. Real time reporting of operations progress.",
    },
    {
      title: "Cargo Handling and GSA",
      description:
        "Upon touchdown of your flight, our well trained supervisors will manage global and integrated cargo handling services till take off again. Carthage Sky Services acts as Cargo GSA for airlines at Tunisian market. Our dedicated staff to Cargo is providing an outstanding performance to secure and ensure a well fulfilled Handling process to increase revenue continuously as well as profit.",
    },
    {
      title: "Charter Broker",
      description:
        "Carthage Sky promptly and economically provides aircraft charter services to all destinations and for all types of aircrafts, including but not limited to:\n\nPrivate Business Jet\n• Short and Long-Haul Passenger Aircraft\n• Cargo Aircraft\n• Oversized Cargo and Special Mission Aircraft\n• Air Medical Evacuation Aircraft\n• Helicopter\nThe number of operators we are in business with and the information we have regarding their aircraft fleets allows us to know the exact operator and aircraft that fits the purpose of your trip at the right place and time, helping you avoid paying higher charter prices due to ferrying fees.",
    },
    {
      title: "Fuelling",
      description:
        "Through our worldwide network of aviation fuel suppliers, we provide aviation fuel in most international, national, commercial, and private airports around the world.\n\nWe are registered with fullers to provide aviation fuel as quickly as possible for your quick turnaround at every airport locations where we operate which allows us to offer competitive and cost effective rates. In addition to that, you are guaranteed that your flight would not be delayed due to fuel.\n\nOur search for competitive fuel prices does not compromise our commitment to safety and quality. The fuel we purchase\ncomplies with international standards and tests.",
    },
    {
      title: "Hotel Accommodation",
      description:
        "Carthage Sky provides reliable and excellent hotel arrangements for your crews and passengers.\n\nPilots who have had crew rest arranged through us have so many good comments to make about our proper organization; we take care of every little detail.",
    },
    {
      title: "VIP Facilities",
      description:
        "Our VIP concierge services are available for commercial airline passengers to ensure a smooth and uncomplicated travel\nexperience from departure to arrival.\nIncreasing security procedures upon arrival, departure, and transit in most international airports and making your journey less difficult and stressful as well as perfectly secured.\n\nWe provide the following concierge services:\n\nAirport Meet and Assist Services\n2. Visa and Passport Processing\n3. Chauffeured Transportation\n4. Hotel Accommodation\n5. Aircraft Security Services\n6. Personal Protection Services\n7. Translation Services\n8. Fine Dining\n9. Tours and Sightseeing",
    },
    {
      title: "Catering",
      description:
        "Carthage Sky provides for crews, passengers and VIPs the suitable in-flight catering from the best catering supplier of the airport or from the best hotels or restaurants in the city.\n\nWe are contracted with in-flight catering providers and airline catering companies’.  And if you are not sure what to order from your next flight’s catering or you have a special order in mind, we will happily inform you of the catering menu options available in your destination airport and manage to delight you with the finest recipes from anywhere and anytime.",
    },
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
          <Button isColorInverse={true}>
            <Link href="inquiry">Send Inquiry</Link>
          </Button>
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
      <section id="services" className="container text-center">
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
