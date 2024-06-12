import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "react-lottie-player";
import lottieMouse from "../lotties/lottieMouse.json";
import HeroModal from "./HeroModal";

const HeroSection = ({ height, setHeight, sticky, setSticky }) => {
  const [showModal, setShowModal] = useState(false);

  const heroRef = useRef(null);
  const customerRef = useRef(null);

  // Function To Show Modal
  // const handleClickModal = () => {
  //   document.body.classList.add("body-overflow");
  //   setShowModal(true);
  // };

  // Scroll To Customer Icons Section
  const handleClick = () => {
    customerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //Function To Get Height Of Scroll By User And Add Sticky Navigation
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll >= height / 3) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    // Get Height Of Hero Section
    setHeight(heroRef.current?.clientHeight);

    // Get Height Of Scroll By User
    window.addEventListener("scroll", listenToScroll);

    return () => window.removeEventListener("scroll", listenToScroll);
  }, [sticky]);

  return (
    <>
      <section className="relative z-0">
        <div className="hero" ref={heroRef}>
          <div className="w-full px-[33px] md:pt-[280px] lg:pr-[120px] lg:px-0 2xl:pt-[517px] 2xl:pr-[209px] ">
            <h1 className="hero__heading--primary">
              با روناد لذت‌بخش بفروش !!!
            </h1>
            <p className="hero__subheading">
              بدون نگرانی از انبارداری، بسته‌بندی و ارسال
            </p>
            <div className="flex flex-col justify-center items-center gap-2 md:items-start md:flex-row md:justify-start md:gap-7">
              <Link href="/sign-up?code=T1001">
                <a className="hero__btn hero__btn--primary">درخواست پنل دمو</a>
              </Link>
              <a href="/contact-us"
                className="hero__btn hero__btn--secondary z-10"
                // onClick={handleClickModal}
              >
                درخواست بازدید از انبار
              </a>
            </div>
          </div>
          <video autoPlay muted loop className="hero__video">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div
            onClick={handleClick}
            className="hidden cursor-pointer xl:block xl:absolute xl:left-1/2 xl:bottom-[110px]"
          >
            <Lottie
              loop
              animationData={lottieMouse}
              play
              style={{ width: 52, height: 52, stroke: "white", fill: "white" }}
            />
          </div>
          <div className="hero__overlay"></div>
        </div>
        <div
          ref={customerRef}
          className="pt-[29px] pb-[38px] md:pt-[85px] bg-backgroundSecondary 2xl:pb-[44px]"
        >
          <div className="text-center">
            <h3 className="hero__heading--secondary">
              دوستان و شرکای تجاری روناد
            </h3>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-x-[52px] gap-y-[33px] md:gap-x-[60px]">
            <div className="ronad-friend-icon-mobile">
              <Image alt="" src="/images/basalam.svg" width={99} height={24} />
            </div>
            <div className="ronad-friend-icon-desktop">
              <Image alt="" src="/images/basalam.svg" width={153} height={38} />
            </div>
            <div className="ronad-friend-icon-mobile">
              <Image alt="" src="/images/taghche.svg" width={86} height={33} />
            </div>
            <div className="ronad-friend-icon-desktop">
              <Image alt="" src="/images/taghche.svg" width={135} height={51} />
            </div>
            <div className="ronad-friend-icon-mobile">
              <Image
                alt=""
                src="/images/keshemon.svg"
                width={106}
                height={34}
              />
            </div>
            <div className="ronad-friend-icon-desktop">
              <Image
                alt=""
                src="/images/keshemon.svg"
                width={165}
                height={53}
              />
            </div>
            <div className="ronad-friend-icon-mobile">
              <Image alt="" src="/images/patabad.svg" width={89} height={29} />
            </div>
            <div className="ronad-friend-icon-desktop">
              <Image alt="" src="/images/patabad.svg" width={139} height={45} />
            </div>
            <div className="ronad-friend-icon-mobile">
              <Image
                alt=""
                src="/images/abzarmart.svg"
                width={95}
                height={31}
              />
            </div>
            <div className="ronad-friend-icon-desktop">
              <Image
                alt=""
                src="/images/abzarmart.svg"
                width={147}
                height={47}
              />
            </div>
            <div className="ronad-friend-icon-mobile">
              <Image
                alt=""
                src="/images/abzarmart.svg"
                width={95}
                height={31}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <HeroModal showModal={showModal} setShowModal={setShowModal} /> */}
    </>
  );
};

export default HeroSection;
