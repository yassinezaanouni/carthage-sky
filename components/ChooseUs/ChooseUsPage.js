import Image from "next/image";
import Link from "next/link";
import SvgArrowLong from "../../public/svg-components/ArrowLong";
import Contactus from "../Index/Contactus";
import CardsSelector from "../Widgets/CardsSelector";
import RowCard from "../Widgets/RowCard";
import { Parallax } from "react-scroll-parallax";

const ChooseUsPage = () => {
  const chooseUs = [
    {
      title: "Customer Oriented",
      description:
        "Carthage Sky provides high quality ground handling as well as supervision to air operators from private to commercial flights in all Tunisian airports. Our professional team ensures to our customers best personalized services based on client expectations.\n\nWe look after the interest of our customers when safety, security and on time performance are priority. For us, it is very important to have a passenger happy, our customer service agents know how to do it, and we are convinced that a happy passenger is a satisfied client.\n\nOur services range from passenger and cargo handling services all the way to VVIP flights support and ambulance flights, ensuring that every process involved with your flight and all your needs upon landing are taken care of.\n\nCarthage Sky covers all your needs upon landing including:\n1. Basic ground handling services\n2. Ground service equipments arrangement\n3. Passenger handling services\n4. Baggage and cargo handling services\n5. Security Services\n6. Cabin services\n7. VIP meet-and-greet services\n8. Supervision services\n9. Visa and immigration assistance for crew and passengers\n10. Slots\n11. Fuel coordination & supply\n12. Aircraft movement and flight follow-up",
    },
    { title: "Human centered approach", description: "" },
    { title: "Continuous Risk Assessment Process", description: "" },
    { title: "Compliance, Transparency and Accountability", description: "" },
    { title: "Anti-Bribery and Anti-Corruption", description: "" },
    { title: "Antitrust and Competition", description: "" },
    { title: "Safety & Security", description: "" },
    { title: "Occupational Health & Safety", description: "" },
    { title: "Sustainability", description: "" },
    { title: "Data and Cyber Security", description: "" },
    { title: "Social Responsibility and employees", description: "" },
  ];
  return (
    <>
      <section className=" mt-[10.6875rem] text-center">
        <div className="container">
          <h1 className="text-3xl font-bold lg:text-5xl">Why Choose Us</h1>
          <p className="mx-auto mt-5 mb-[1.5625rem] max-w-[46.875rem] text-lg">
            As an aviation business player, we are committed to the highest standards of service ensuring we have all
            the right processes and systems in place. We not only meet aviation standards, we exceed them.
            <br />
            Carthage Sky acheived ISO9001, ISO14001 & OHSAS 18001 certifications in February 2019.
          </p>
          <Link href="#">
            <a className="f-ai-c group justify-center gap-3 text-[1.375rem] text-primary-400 hover:font-semibold hover:text-primary-400/90">
              Company Governance
              <SvgArrowLong fontSize="1.1em" />
            </a>
          </Link>
        </div>
        <div className="f-ai-c relative mt-[3.2313rem] h-[25rem] w-full justify-center md:h-[34.5625rem]">
          <Image src="/imgs/services-page/bg.webp" alt="sky" layout="fill" />
          <Parallax translateX={["0px", "-50px"]} speed={5}>
            <Image src="/imgs/choose-us/plane.webp" alt="sky" width={929.86} height={422.48} />
          </Parallax>
        </div>
      </section>
      <section className="container text-center">
        <h2 className="mb-12 text-3xl font-bold lg:text-5xl">Our Accreditations</h2>
        <div className="flex flex-wrap justify-between gap-8">
          <div className="">
            <h3 className="text-2xl">Quality</h3>
            <div className="border border-black">
              <Image src="/imgs/choose-us/accreditations/quality.webp" alt="quality" width={321} height={448} />
            </div>
          </div>
          <div className="">
            <h3 className="text-2xl">Environmental</h3>
            <div className="border border-black">
              <Image
                src="/imgs/choose-us/accreditations/environmental.webp"
                alt="environmental"
                width={321}
                height={448}
              />
            </div>
          </div>
          <div className="">
            <h3 className="text-2xl">Safety Assessment</h3>
            <div className="border border-black">
              <Image
                src="/imgs/choose-us/accreditations/safety-assessment.webp"
                alt="safety assessment"
                width={321}
                height={448}
              />
            </div>
          </div>
        </div>

        <RowCard className="mt-[6.125rem] md:mt-[8.125rem] lg:mt-[12.125rem]" image="/imgs/choose-us/card1.webp">
          <h3 className="mt-1 mb-3 text-2xl font-bold leading-snug md:mb-6 lg:text-[2.125rem]">
            How We Meet International Standards:
          </h3>
          <p className="text-lg md:mb-6">
            These accreditations applaud us for meeting international standards and demonstrating that we are able to
            provide highest level of service quality, Environment , safety and security to customers. They honor our
            dedication to prevent pollution and preserve environement for future generations, as well as our commitment
            regarding safety and security in all activities.
            <br />
            <br />
            Our certification was issued on the 13thFebruary 2019 and is valid until 12thFebruary 2022. All audits were
            performed by TUV Intercert Germany.
          </p>
          <Link href="#">
            <a className="text-lg text-primary-400 transition-all hover:text-primary-400/90">Code of Conduct</a>
          </Link>
        </RowCard>
      </section>

      {/* Banner */}
      <div
        className={` relative isolate mb-[4.75rem] mt-[7.625rem] h-[27.0625rem] w-full rounded-xl py-[2.1875rem] text-start text-white md:py-[6.3125rem]`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(-90deg, rgba(70, 186, 235, 0) 0%, rgba(70, 186, 235, 0.918) 100%)",
            zIndex: 1,
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2 className="text-3xl font-bold lg:text-5xl ">Company Governance</h2>
          <p className="mt-6 max-w-[35rem] text-lg">
            Our company is guided by a set of principles, initiatives and management structures which enable an
            integrated vision and agile decision making process.
          </p>
        </div>
        <Image src="/imgs/choose-us/cloud2.webp" alt="" name="services-banner" layout="fill" />
        <div className="absolute -bottom-2 right-0">
          <Parallax translateX={["0px", "10px"]} speed={-2}>
            <Image src="/imgs/services/plane.webp" alt="" name="services-banner" width={866} height={568} />
          </Parallax>
        </div>
      </div>

      <CardsSelector iconFolder="choose-us" items={chooseUs} />
      <Contactus />
    </>
  );
};

export default ChooseUsPage;
