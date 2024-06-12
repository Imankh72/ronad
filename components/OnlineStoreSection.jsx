import { useEffect, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { OnlineStoreLine } from "./svgs/OnlineStoreLine";

const OnlineStoreSection = ({ height }) => {
  const [start, setStart] = useState(false);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll >= +height + 1500) {
      setStart(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => window.removeEventListener("scroll", listenToScroll);
  }, [start]);

  return (
    <section
      // ref={ref}
      className="px-6 pt-[22px] pb-[45px] bg-backgroundSecondary md:pt-[100px] 2xl:pt-[174px] 2xl:pb-[77px] 2xl:pr-[162px] 2xl:pl-[183px]"
    >
      <h2 className="heading--primary mb-[41px] md:text-center 2xl:mb-[73px]">
        روناد چگونه کالاهای فروشگاه آنلاین شما را به درب مشتری شما می‌رساند؟
      </h2>
      <div className="border-b-2 border-[#0000001A] md:flex md:gap-x-6 md:flex-wrap xl:gap-x-12 2xl:pb-[52px] 2xl:mb-[76px] 2xl:pt-[25px] 2xl:px-[112px] 2xl:gap-x-0">
        <div className="online-store__card 2xl:-mt-2">
          <div className="mb-5 lg:hidden">
            <Image alt="" src="/images/group1.svg" width={200} height={170} />
          </div>
          <div className="hidden lg:block 2xl:mb-3">
            <Image alt="" src="/images/group1.svg" width={281} height={239} />
          </div>
          <div>
            <span className="online-store__card__heading">
              اتصال
              <span className="underline"></span>
            </span>
          </div>
          <p className="online-store__card__text">
            فروشگاه‌تان را به روناد متصل کنید، کالاهای‌تان را مشخص و تعریف کنید
            و اقلام‌تان را به انبار روناد بفرستید.
          </p>
        </div>
        <div className="hidden 2xl:block 2xl:mx-[14px] 2xl:mt-[130px]">
          <OnlineStoreLine />
        </div>
        <div className="online-store__card 2xl:-mt-1">
          <div className="mb-5 lg:hidden">
            <Image alt="" src="/images/group2.svg" width={200} height={170} />
          </div>
          <div className="hidden lg:block ">
            <Image alt="" src="/images/group2.svg" width={281} height={239} />
          </div>
          <div>
            <span className="online-store__card__heading">
              انبارش
              <span className="underline"></span>
            </span>
          </div>
          <p className="online-store__card__text">
            پس از ارسال اقلام به انبار روناد، کالاها پس از کنترل کیفی در
            قفسه‌بندی های استاندارد براساس تنوع و ویژگی های کالاها تا زمان ثبت
            سفارش نگهداری می‌شود.
          </p>
        </div>
        <div className="hidden 2xl:block 2xl:mx-[14px] 2xl:mt-[130px]">
          <OnlineStoreLine />
        </div>
        <div className="online-store__card 2xl:-mt-1">
          <div className="mb-5 lg:hidden">
            <Image alt="" src="/images/group3.svg" width={200} height={170} />
          </div>
          <div className="hidden lg:block ">
            <Image alt="" src="/images/group3.svg" width={281} height={239} />
          </div>
          <div>
            <span className="online-store__card__heading">
              فرا ارسال
              <span className="underline"></span>
            </span>
          </div>
          <p className="online-store__card__text">
            پس از ثبت سفارش مشتریان شما، سفارشات مطابق تاریخ و زمان‌بندی منتخب
            مشتری آماده‌سازی، بسته‌بندی و برای خریدار نهایی ارسال می‌شود.
          </p>
        </div>
      </div>
      <div className="pt-[46px]">
        <div className="flex flex-col items-center gap-y-[45px] md:flex-row md:justify-between md:pb-[76px] md:pt-7">
          <div className="counter__card">
            <span className="counter__number">
              {start ? (
                <CountUp
                  start={0}
                  decimalPlaces={0}
                  useEasing={true}
                  useGrouping={true}
                  separator=","
                  decimal={0}
                  end={1552154}
                  duration={3}
                ></CountUp>
              ) : (
                0
              )}
            </span>
            <span className="counter__text">آیتم پردازش شده</span>
          </div>
          <div className="counter__card">
            <span className="counter__number">
              {start ? (
                <CountUp
                  start={0}
                  decimalPlaces={0}
                  useEasing={true}
                  useGrouping={true}
                  separator=","
                  decimal={0}
                  end={951154}
                  duration={3}
                ></CountUp>
              ) : (
                0
              )}
            </span>
            <span className="counter__text">آیتم ارسال شده</span>
          </div>
          <div className="counter__card">
            <span className="counter__number">
              {start ? (
                <CountUp
                  start={0}
                  decimalPlaces={0}
                  useEasing={true}
                  useGrouping={true}
                  separator=","
                  decimal={0}
                  end={1765245}
                  duration={3}
                ></CountUp>
              ) : (
                0
              )}
            </span>
            <span className="counter__text">آیتم انبارش شده</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineStoreSection;
