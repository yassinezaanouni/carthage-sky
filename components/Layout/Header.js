import Link from "next/link";
import Button from "../Widgets/Button";
import Image from "next/image";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import SvgLogo from "../../public/svg-components/Logo";
import Container from "./Container";
import Logo from "./Logo";

const Header = () => {
  const router = useRouter();
  const changeNavState = () => {
    headerRef.current.classList.toggle("nav-open");
  };

  // Scroll direction to change header size
  const headerRef = useRef(null);
  const [buttonPadding, setButtonPadding] = useState("");
  const [y, setY] = useState(0);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
        headerRef.current.classList.remove("!py-3");
        setButtonPadding("");
      } else if (y < window.scrollY) {
        headerRef.current.classList.add("!py-3");
        setButtonPadding("!py-[10px] ");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <header ref={headerRef} className="py-6 font-semibold text-white transition-all   duration-300 ">
      <div className="f-ai-c container justify-between gap-10 xl:gap-36">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <nav className="f-ai-c  flex-1 gap-4 text-center lg:justify-between">
          <ul className="f-ai-c gap-7">
            <li className={router.pathname == "/" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname == "/services" ? "active" : ""}>
              <Link href="/services">Our Services</Link>
            </li>
            <li className={router.pathname == "/choose-us" ? "active" : ""}>
              <Link href="/choose-us">Why choose us</Link>
            </li>
            <li className={router.pathname == "/about-us" ? "active" : ""}>
              <Link href="/about-us">About us</Link>
            </li>
            <li className={router.pathname == "/careers" ? "active" : ""}>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
          <Button className="block lg:hidden ">
            <Link href="/inquiry">
              <a className={`font-semibold ${router.pathname == "/careers" ? "active" : ""}`}>Send Inquiry</a>
            </Link>
          </Button>
        </nav>
        <Button className={`hidden lg:block ${buttonPadding}`}>
          <Link href="/inquiry">
            <a className="font-semibold">Send Inquiry</a>
          </Link>
        </Button>
        <button className="nav-btn " onClick={changeNavState}>
          <div className="menu-outline z-30">
            <Image src="/icons/header/menu-outline.svg" alt="" name="menu-outline" width={31} height={14} />
          </div>
          <div className="close-outline relative z-30">
            <Image src="/icons/header/close-outline.svg" alt="" name="close-outline" width={35} height={35} />
          </div>
        </button>
      </div>

      <style jsx>
        {`
          header {
            top: 0;
            left: 0;
            right: 0;
            z-index: 30;
            position: fixed;
            background: rgba(40, 153, 205, 0.76);
            backdrop-filter: blur(8px);
          }
          nav {
            @apply fixed inset-0 z-20 translate-x-full transition-all duration-200 lg:static lg:translate-x-0;
          }
          @media (max-width: 1023px) {
            .nav-open {
              inset: 0;
            }
            .nav-open nav {
              @apply translate-x-0 flex-col items-center justify-center  bg-black/80 px-10 text-white backdrop-blur;
            }
            .nav-open ul {
              @apply mt-11 flex-col items-center;
            }
            .nav-open .menu-outline {
              opacity: 0;
              position: absolute;
              pointer-events: none;
              transition: opacity 0.3s ease-in-out;
            }
            .nav-open .close-outline {
              opacity: 1;
              position: static;
              display: block;
              transform: rotate(45deg);
            }
          }

          .nav-btn {
            @apply z-30 flex items-center lg:hidden;
          }
          .menu-outline {
            opacity: 1;
            position: static;
            transition: opacity 0.3s ease-in-out;
          }

          .close-outline {
            opacity: 0;
            position: absolute;
            pointer-events: none;
            transition: all 0.2s ease-in-out;
            transform: rotate(0deg);
          }

          .active {
            position: relative;
          }
          .active:after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background: #fff;
            position: absolute;
            bottom: -4px;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
