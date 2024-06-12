import Image from "next/image";
import { OrangeCheckMarkIcon } from "./svgs/OrangeCheckMarkIcon";
import { OnlineBusinessEllipseTop } from "./svgs/OnlineBusinessEllipseTop";
import { OnlineBusinessEllipseBottom } from "./svgs/OnlineBusinessEllipseBottom";

const OnlineBusiness = () => {
  return (
    <section className="bg-backgroundSecondary px-[30px] pt-[35px] pb-[59px] flex flex-col xl:flex-row xl:gap-x-[40px] xl:px-[60px] xl:pt-[50px] xl:pb-[100px] 3xl:pt-[93px] 3xl:pr-[155px] 3xl:pl-[180px] 3xl:pb-[241px] 3xl:gap-x-[109px]">
      <div className="xl:flex-[1.25]">
        <h3 className="text-primary text-[18px] font-black leading-[30px] text-justify mb-[5px] lg:text-right lg:text-[32px] lg:leading-[50px] lg:mb-[9px]">
          کسب‌وکارهای آنلاین حالا گزینه‌های دیگری علاوه بر پست دارند: شرکت‌های
          خصوصی خدمات لجستیک
        </h3>
        <h4 className="font-bold text-orange leading-[30px] text-justify mb-[30px] lg:text-[28px] lg:leading-[43.75px] lg:text-right lg:mb-[65px]">
          ارزشهای افزوده شرکتهای خدمات لجستیک برای فروشندگان آنلاین
        </h4>
        <ul className="mb-[47px] xl:mb-0">
          {data.map(({ id, text }) => (
            <li key={id} className="flex gap-x-2">
              <div className="mt-1 xl:mt-3">
                <OrangeCheckMarkIcon />
              </div>
              <span className="leading-[30px] text-justify lg:text-[22px] lg:leading-[50px]">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-[26px] xl:flex-row xl:gap-x-[49px] xl:flex-1 xl:pt-[160px]">
        <div className="relative z-10 gap-y-[26px] xl:order-2">
          <Image
            className="rounded-lg"
            src="/images/online-business1.png"
            width={459}
            height={458}
            alt=""
          />
          <div className="absolute -top-9 -left-3 -z-10 xl:-left-7">
            <OnlineBusinessEllipseTop />
          </div>
          <div className="absolute bottom-0 -right-12 -z-10 xl:-right-6 xl:bottom-16 2xl:-bottom-10">
            <OnlineBusinessEllipseBottom />
          </div>
        </div>
        <div className="flex gap-x-6 xl:flex-col xl:justify-end xl:gap-y-[47px] xl:-mb-5 3xl:-mb-14">
          <Image
            className="rounded-lg"
            src="/images/online-business2.png"
            width={152}
            height={152}
          />
          <Image
            className="rounded-lg"
            src="/images/online-business3.png"
            width={152}
            height={152}
          />
        </div>
      </div>
    </section>
  );
};

export default OnlineBusiness;

const data = [
  { id: 1, text: "ارزشهای افزوده شرکتهای خدمات لجستیک برای فروشندگان آنلاین" },
  {
    id: 2,
    text: "تسهیل پوشش مرسوله های تجمعی و سفارشات عمده - فارغ شدن از دردسرهای مراجعه به پست و درگیری با پیکهای مختلف ",
  },
  {
    id: 3,
    text: "فارغ شدن از دردسرهای نگهداری کالا و آماده سازی سفارشات (تو ایران این فقط و فقط با روناد میتواند رقم بخورد) ",
  },
  {
    id: 4,
    text: "رعایت نکات و حساسیت مربوطه براساس ویژگیهای هر کالا",
  },
];
