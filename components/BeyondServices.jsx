import Video from "./Video";
import { BeyondShadowTop } from "./svgs/BeyondShadowTop";
import { BeyondShadowBottom } from "./svgs/BeyondShadowBottom";
import { VideoEllipseTop } from "./svgs/VideoEllipseTop";
import { VideoEllipseBottom } from "./svgs/VideoEllipseBottom";
import Link from "next/link";

const BeyondServices = () => {
  return (
    <section className="pt-[47px] pb-[5px] px-[30px] bg-white relative z-0 lg:pt-[75px] lg:pb-[80px] 2xl:pt-[91px] 2xl:pb-[141px]">
      <div className="px-10 mb-[19px] sm:flex sm:justify-center sm:gap-x-2">
        <h2 className="beyond__title">
          <mark className="bg-white text-orange">روناد</mark> خدماتی فراتر
        </h2>
        <h2 className="beyond__title"> از انبارداری و ارسال کالا</h2>
      </div>
      <p className="beyond__text">
        روناد خلق شد تا خدمات لجستیکی و پردازش کالا را با کمترین هزینه و
        بالاترین استانداردها برای فروشگاه‌ها، بالاخص فروشگاه‌های اینترنتی فراهم
        کند.
      </p>
      <div className="flex flex-col relative z-0 items-center gap-y-[15px] mb-11 sm:flex-row sm:justify-center sm:gap-x-[27px] sm:mb-[59px]">
        <Link href="/sign-up?code=T800">
          <button className="opportunity__btn opportunity__btn--primary">
            همکاری با روناد
          </button>
        </Link>
        <Link href="/">
          <button className="opportunity__btn opportunity__btn--secondary bg-white">
            ورود به سایت
          </button>
        </Link>
      </div>
      <div className="mb-[49px] relative z-10 lg:mx-auto lg:w-[680px] 2xl:w-[750px] 3xl:w-[888px]">
        <div className="absolute -z-10 -top-2 -left-3 lg:hidden">
          <VideoEllipseTop mobile />
        </div>
        <div className="hidden lg:absolute lg:-z-10 lg:-top-2 lg:-left-3 lg:flex">
          <VideoEllipseTop />
        </div>
        <Video />
        <div className="absolute -z-10 bottom-3 -right-3 lg:hidden">
          <VideoEllipseBottom mobile />
        </div>
        <div className="hidden lg:absolute lg:-z-10 lg:bottom-3 lg:-right-3 lg:flex">
          <VideoEllipseBottom />
        </div>
      </div>
      <div className="absolute -z-50 top-0 left-0 lg:hidden">
        <BeyondShadowTop mobile />
      </div>
      <div className="hidden lg:absolute -z-10 lg:top-0 lg:left-0 lg:flex">
        <BeyondShadowTop />
      </div>
      <div className="absolute -z-10 -bottom-10 right-0 lg:hidden">
        <BeyondShadowBottom mobile />
      </div>
      <div className="hidden lg:absolute -z-10 lg:-bottom-40 lg:right-0 lg:flex">
        <BeyondShadowBottom />
      </div>
    </section>
  );
};

export default BeyondServices;
