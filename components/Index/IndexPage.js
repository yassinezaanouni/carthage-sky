import AircraftsServices from "./AircraftsServices";
import ChooseUs from "./ChooseUs";
import Contactus from "./Contactus";
import Gallery from "./Gallery";
import Hero from "./Hero";
import OurServices from "./OurServices";
import ProudOf from "./ProudOf";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <ProudOf className="md:!mt-[8.75rem]" />
      <OurServices />
      <AircraftsServices />
      <ChooseUs />
      <Gallery />
      <Contactus />
    </div>
  );
};

export default IndexPage;
