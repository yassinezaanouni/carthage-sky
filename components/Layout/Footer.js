import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import Logo from "./Logo";

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <footer className="relative isolate mt-24 overflow-hidden  bg-[#54C3F0] pt-20 pb-14 text-white md:mt-40 lg:mt-80">
      <Image
        src="/icons/footer/cloud.webp"
        alt=""
        name="footer-bg"
        layout="fill"
      />
      <div className="absolute right-0 translate-x-1/3 md:translate-y-10 md:translate-x-1/2">
        <Parallax translateX={["-80px", "0px"]} speed={-2}>
          <Image
            src="/imgs/about-us/plane2.webp"
            alt=""
            name="services-banner"
            width={401.75}
            height={182.53}
          />
        </Parallax>
      </div>
      <div className="container relative z-10 flex flex-wrap items-end gap-8 md:gap-16 lg:flex-nowrap">
        <div className="mx-auto pt-28 text-center md:p-0">
          <Logo
            fontSize="2.5em"
            className=" !flex-col !text-xl leading-normal md:text-[27px]"
          />
          <p className="mt-2 mb-3 text-sm md:mb-5 md:text-base">
            {/* All rights reserved &#169; {getYear()} */}
            Follow us on social media:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="https://www.facebook.com/Carthage-Sky-Services-102846687784406">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/icons/footer/fb.svg"
                  alt=""
                  name="facebook"
                  width={31}
                  height={31}
                  className="hover:opacity-90"
                />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/atlsgsaetihadcargo">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/icons/footer/in.svg"
                  alt=""
                  name="twitter"
                  width={31}
                  height={31}
                  className="hover:opacity-90"
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/carthageskyservices">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/icons/footer/insta.svg"
                  alt=""
                  name="instagram"
                  width={31}
                  height={31}
                  className="hover:opacity-90"
                />
              </a>
            </Link>
            <a
              href="YOUR_TWITTER_URL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/footer/tw.svg"
                alt=""
                name="twitter"
                width={31}
                height={31}
                className="hover:opacity-90"
              />
            </a>
            <a
              href="YOUR_YOUTUBE_URL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/footer/yt.svg"
                alt=""
                name="youtube"
                width={31}
                height={31}
                className="hover:opacity-90"
              />
            </a>
          </div>
        </div>
        <div className=" hidden flex-wrap gap-12 md:flex md:gap-20">
          <div>
            <h5 className="text-lg font-bold">Contact us:</h5>
            <ul className="mt-6 flex flex-col gap-4">
              <li className="f-ai-c gap-4">
                <Image
                  src="/icons/footer/email.svg"
                  alt="email"
                  name="home"
                  width={23.86}
                  height={17.04}
                  className="scale-[0.8]"
                />
                <Link href="mailto:cs@carthagesky.com" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    cs@carthagesky.com
                  </a>
                </Link>
              </li>
              <li className="f-ai-c mt-2 gap-4">
                <Image
                  src="/icons/footer/phone.svg"
                  alt="phone"
                  name="home"
                  width={23.86}
                  height={23.91}
                  className="scale-[0.8]"
                />

                <Link href="tel:+216 70 02 93 60">
                  <a>+216 70 02 93 60 </a>
                </Link>
              </li>
              <li className="f-ai-c mt-2 gap-4">
                <Image
                  src="/icons/footer/map.svg"
                  alt="map"
                  name="home"
                  width={23.86}
                  height={27.15}
                  className="scale-[0.8]"
                />
                Find us in:
              </li>
            </ul>
            <ul className="mt-4 max-w-[23rem]">
              <li className="f-ai-c gap-4">
                <div className="aspect-square h-2 w-2 rounded-[50%] bg-primary-400" />{" "}
                Headquarters in: 1053 Rue du Lac d’Annecy, Tunis, Tunisia
              </li>
              <li className="f-ai-c gap-4">
                <div className="aspect-square h-2 w-2 rounded-[50%] bg-primary-400" />{" "}
                Office: Tunis Carthage International Airport , Terminal 1
              </li>
              <li className="f-ai-c gap-4">
                <div className="aspect-square h-2 w-2 rounded-[50%] bg-primary-400" />{" "}
                Office: Tunis Carthage International Airport , Terminal 2
              </li>
              <li className="f-ai-c gap-4">
                <div className="aspect-square h-2 w-2 rounded-[50%] bg-primary-400" />{" "}
                Office: Djerba Zarzis Inetrnational Airport
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold">Discover Carthage Sky:</h5>
            <ul className="mt-6 flex flex-col gap-2">
              <li className="hover:underline">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="hover:underline">
                <Link href="/services">Our Services</Link>
              </li>
              <li className="hover:underline">
                <Link href="/choose-us">Why Choose Us</Link>
              </li>
              <li className="hover:underline">
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li className="hover:underline">
                <Link href="/vendors">Vendors</Link>
              </li>
              <li className="hover:underline">
                <Link href="/inquiry">Send Inquiry</Link>
              </li>
              <li className="hover:underline">
                <Link href="/complaint">Send Complaint</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li className="hover:underline">
                <Link href="/legal">Legal</Link>
              </li>
              <li>
                <Link href="/terms">Terms and conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-5 text-center md:mt-20">
        <p>All rights reserved for Carthage Sky &#169; {getYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
