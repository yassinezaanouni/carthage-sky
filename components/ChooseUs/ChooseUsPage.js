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
        "Customer focus involves understanding customer needs and expectations as well as meeting these expectations to enhance their satisfaction and fulfill our clients ‘needs.   \n\nWe believe, monitor and analyze customer satisfaction is essential for continual improvement. Therefore we make sure to conduct frequently customer survey, customer evaluation report on service quality, lost business analysis, claim and non-conforming analysis and report in order to ensure to deliver a quality comply service with our customers.\n\nOur commitment to excellence in services and processes resulted in success stories with our customers.",
    },

    {
      title: "Human centered approach",
      description:
        "Our employees are our greatest asset, we provide a prosperous environment to learn and grow in the job. We value leaders who succeed through their people, creating strong, diversified and engaged teams. We work together to create solutions and make things happen.\n\n Our day-to-day activities require us to interact with individuals of various ethnic backgrounds, cultures, religions, political convictions, ages, genders, disabilities and sexual orientations. The diversity of our people is one of our richness, allowing us to benefit from a variety of professional and educational backgrounds and points of view.\n\nBuilding and maintaining respectful and meaningful professional relationships by making constructive two-way communication, actively listening to others and engaging with people creates a positive work environment where we can enjoy our work, progress our career and develop our full potential.",
    },
    {
      title: "Continuous Risk Assessment Process",
      description:
        "Our company has implemented an integrated Management system following the ISO International Standards.\n\nWe seek to ensure that our services are delivered according to the ISO 9001v2015, ISO14001v2015 and OHSAS 18001 following the Quality, safety & Security and environmental requirements.\n\nPeriodically, we conduct several evaluation and checklist inspection in order to make sure that our work is processing in compliance to the international standards:\n\n      Management Risk assesment related to each process\n      Hygiene, Safety & Security and Environmental Risk assessment\n      Quality Service Report conducted continuously to evaluate the quality of the service provided\n      Internal audit\n      External certification audit according to ISO standards\n      Annual Management review",
    },
    {
      title: "Compliance, Transparency and Accountability",
      description:
        "As we intend to operate all over the globe, we are subject to the laws of many countries and we must comply with all of them.\n\nOn a regular basis, we are required to complete an internal and external audits process to ensure that our Governance policies as well as our code of conduct is understood and properly applied to our daily activities.\n\nThe Pillars of the Compliance Culture in our company serve to guide all employees in the search for conformity.\n\nThese pillars represent important issues for our company and receive specific attention of our leaders, who must conduct their teams to guarantee:\n\n      Compliance with Laws and Regulations and commitments in signed contracts and agreements;\n      Obtaining licenses, permits, and certifications necessary for our operations;\n      The high quality for all external reporting;\n      The adherence to anti-trust regulations, anti-corruption law, and the prevention of fraud.\n\nIn case of conflict or uncertain situation about the application or interpretation of a law or regulation, we have a dedicated team who reviews and helps to take necessary action.",
    },
    {
      title: "Anti-Bribery and Anti-Corruption",
      description:
        "Carthage Sky Services is committed to conducting business with integrity and we prohibit corruption and bribery in all its forms. We must not, directly or indirectly, accept, request, offer, promise, grant or authorize a bribe, kickback, payment or anything that can be considered as such (gifts, entertainment, employment, contracts or benefits of any kind) to or from any third party that may or appear to influence action, inaction or a decision, with the intent to obtain an improper advantage, retain business or obtain undue influence over that third party’s actions.\n\nWe are all responsible for educating ourselves on how to recognize corrupt activities and ensure that we are not involved in any such type of activities, whether directly or indirectly.",
    },
    {
      title: "Antitrust and Competition",
      description:
        "Prohibited behavior includes discussions, collusion or agreements with third parties to, among other things:\n\n      Fix or control prices, terms or conditions\n      Restrict competition or dealings with suppliers or customers\n      Share confidential information with competitors, business partners or any other relevant party\n      Divide or allocate customers, markets or territories between CSS and our competitors\n      Not submit a bid, withdraw a bid or submit an artificial bid in order to direct the winning bid to another bidder with whom we are colluding\n\n\nWithin Carthage sky there is a strong culture of continuous improvement and the staff is working in partnership with all stakeholders to achieve compliance and quality improvements in all work aspects.",
    },
    {
      title: "Safety & Security",
      description:
        "We place safety & security at the heart of all our actions to protect people, assets and the environment where we operate.\n\nBesides quality, we strive to set and maintain a high standard for a secure aviation services.\n\nAt Carthage Sky Services we think it is important to be proactive when it comes to security. We take every opportunity to contribute to the decision-making processes of authorities and key organizations. By helping to develop best practice guidelines and continuous evaluation checklists we can ensure that our own policies and procedures are robust.\n\n \n\nCarthage Sky’s management, along with its employees, support and encourage voluntary reporting and feedback from every work level due to the priority given to security and safety in all its activities. Management hereby declares that voluntary reporting is non-punitive and provides the following principles: \n\n      Ensuring and seeking to raise operational safety and security, \n      Applying safety and security management, \n      Defining safety and security responsibilities, \n      Defining safety and security weaknesses and managing risk, \n      Communicating at the highest level, \n      Establishing a culture of safety and security. ",
    },
    {
      title: "Occupational Health & Safety",
      description:
        "Through compliance with legislation and regulations, Carthage Sky aims to bequeath a healthy work environment by identifying risks to occupational health & safety, managing risk and providing sufficient, healthy and secure resources and sub-structure for our employees.",
    },
    {
      title: "Sustainability",
      description:
        "For us, sustainability means achieving our growth ambitions, in the following way: taking the present and future needs of society into account; offering eco-efficient and innovative services to our customers; acting in an ethical, transparent manner and in accordance with the laws and regulations; providing a motivating, healthy and safe work environment for our direct and indirect employees; supporting our local communities and encouraging their progress.",
    },
    {
      title: "Data and Cyber Security",
      description:
        "Carthage Sky declares a commitment to the following issues; \n\n      Ensuring data confidentiality in all our processes\n      Protecting corporate security and trademark image, \n      Protecting all information belonging to the partners, \n      Providing compliance as defined by contract with third parties, \n      Providing the sustainable continuation of the main and support processes without \n      unwarranted lapses. ",
    },
    {
      title: "Social Responsibility and employees",
      description:
        "The social aspect is one of the driving factors in our company, this is why, and we have implemented a combined process, adding a social value to our environmental actions.\n\nThrough implementing in our company a waste segregation method to reduce our waste, we are committed to give our waste a valuable purpose, therefore, we give our segregated waste to waste collector NGO, to sell and to help its revenues schooling marginalized children or creating new job opportunities for recycling companies.\n\nCarthage Sky, due to its awareness of social responsibility, aims to participate in the society in which it operates beyond its commercial interests. \n\nThis policy is manifested through its employees who have full awareness of the values being put forward through their work and the regulations to be followed. They adopt the company values as their own, work to solve problems, share knowledge, willingly participate in teamwork, aim to improve and are always ready to take part in every kind of physical, medical or mental challenge",
    },
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
          <Link href="#company-governance">
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

      {/* Accreditations */}
      <section className="container text-center">
        <h2 className="mb-12 text-3xl font-bold lg:text-5xl">Our Accreditations</h2>
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
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
        className={` relative isolate mt-[7.625rem] h-[27.0625rem] w-full rounded-xl py-[2.1875rem] text-start text-white md:py-[6.3125rem]`}
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

      <section id="company-governance">
        <CardsSelector iconFolder="choose-us" items={chooseUs} />
      </section>
      <Contactus />
    </>
  );
};

export default ChooseUsPage;
