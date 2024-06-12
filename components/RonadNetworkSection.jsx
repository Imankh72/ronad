import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OrangeCheckMarkIcon } from "./svgs/OrangeCheckMarkIcon";
import { RonadNetworkEllipse } from "./svgs/RonadNetworkEllipse";

const RonadNetworkSection = ({ setHeight }) => {
  const ronadNetworkRef = useRef(null);

  useEffect(() => {
    // Get Height Of Ronad Network Section
    setHeight(ronadNetworkRef.current?.clientHeight);
  }, []);

  return (
    <section
      ref={ronadNetworkRef}
      className="bg-backgroundSecondary mt-[72px] flex flex-col items-center px-6 pt-[34px] pb-[53px] gap-y-3 lg:pl-9 lg:gap-y-20 xl:flex-row xl:items-start xl:gap-x-32 xl:pt-[216px] xl:pb-[78px] xl:mt-0 2xl:pr-[225px] 2xl:pl-[240px]"
    >
      <div className="md:flex-1">
        <h2 className="ronad-network__heading">شبکه فرا ارسال روناد</h2>
        <p className="text md:leading-[40px]">
          ما در روناد با بهینه‌سازی فرایند‌های نگهداری و آماده‌سازی و سفارشات در
          شبکه گسترده لجستیک‌مان سرعت ارسال به خریداران نهایی کسب‌و‌کارتان را
          افزایش می‌دهیم و با کاهش هزینه‌ها در کنار بهینه‌سازی عملیاتی به رشد و
          گسترش کسب‌و‌کار شما کمک می‌کنیم.
        </p>
        <ul className="flex flex-col gap-y-1 mb-[25px] md:mb-[41px] md:gap-y-0">
          <li className="network__details">
            <div className="network__details-icon">
              <OrangeCheckMarkIcon />
            </div>
            <span className="text">
              بازه گسترده خدمات لجستیک از انبارداری تا ارسال
            </span>
          </li>
          <li className="network__details">
            <div className="network__details-icon">
              <OrangeCheckMarkIcon />
            </div>
            <span className="text">آماده‌سازی و ارسال ۲۴ ساعته</span>
          </li>
          <li className="network__details">
            <div className="network__details-icon">
              <OrangeCheckMarkIcon />
            </div>
            <span className="text">انبارش و نگهداری با بیمه رایگان</span>
          </li>
          <li className="network__details">
            <div className="network__details-icon">
              <OrangeCheckMarkIcon />
            </div>
            <span className="text">شفافیت در عملکرد و تعرفه‌ها</span>
          </li>
          <li className="network__details">
            <div className="network__details-icon">
              <OrangeCheckMarkIcon />
            </div>
            <span className="text">امکان نظارت کامل بر کالاها و سفارشات</span>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-y-2 mb-[39px] md:mb-0 md:flex-row md:gap-x-3">
          <Link href="/sign-up?code=T800">
            <a className="network__btn network__btn--primary">
              همکاری با روناد
            </a>
          </Link>
          <Link href="/contact-us">
            <a className="network__btn network__btn--outline">
              درخواست بازدید از انبار
            </a>
          </Link>
        </div>
      </div>
      <div className="md:flex-1">
        <div className="relative z-20 2xl:w-[636px] 2xl:h-[423px]">
          <Image alt="" src="/images/services.png" width={636} height={423} />
          <div className="absolute -top-2 -left-2 -z-10 md:-top-4 md:-left-4">
            <Image
              alt=""
              src="/images/shadow-big.png"
              width={636}
              height={423}
            />
          </div>
          <div className="hidden md:block md:absolute md:-bottom-5 md:-right-8 md:-z-10">
            <RonadNetworkEllipse mobile />
          </div>
          <div className="absolute bottom-0 -right-3 -z-10 md:hidden">
            <RonadNetworkEllipse />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RonadNetworkSection;
