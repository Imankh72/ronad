import Image from "next/image";
import { Signature } from "./svgs/Signature";
import { CompareShadowTop } from "./svgs/CompareShadowTop";
import { CompareShadowBottom } from "./svgs/CompareShadowBottom";
import { VideoEllipseTop } from "./svgs/VideoEllipseTop";
import { VideoEllipseBottom } from "./svgs/VideoEllipseBottom";
import Button from "./Button";

const CompareSection = () => {
  return (
    <section className="relative px-[30px] pt-[47px] pb-[73px] flex flex-col items-center xl:flex-row xl:gap-x-[60px] xl:pr-[70px] xl:pl-[80px] 3xl:pt-[140px] xl:pb-[160px] 3xl:pr-[264px] 3xl:pl-[195px] 3xl:pb-[339px] 3xl:gap-x-[126px]">
      <div className="absolute -z-10 top-0 -right-16 2xl:top-0 2xl:right-0">
        <CompareShadowTop />
      </div>
      <div className="mb-[72px] lg:mb-[120px] xl:mb-0 xl:flex-[1.15]">
        <h1 className="font-black text-primary text-[22px] leading-[34.38px] mb-[30px] xl:text-[53px] xl:leading-[82.81px] 3xl:mb-[98px]">
          مقایسه پست و واسط‌های پستی با مرکز پردازش سفارش{" "}
          <span className="text-orange relative">
            روناد
            <div className="absolute left-1/2 translate-x-[-50%] -bottom-2">
              <Signature />
            </div>
          </span>
        </h1>
        <p className="text-justify leading-[30px] mb-[46px] xl:text-[22px] xl:leading-[40px] 3xl:pl-[117px] 3xl:mb-16">
          از اولین پیکهای تاریخ که برای استفاده دولت در امپراتوری‌های پارس و روم
          و بعدتر در قرون وسطی اروپا سازمان یافته بودند تا به امروز که شرکت‌های
          خصوصی زیرساخت لجستیک و ارسال در سطح ایران و جهان رشد به سزایی کرده‌اند
          مسیری طولانی طی شده است. <br /> از فدکس، آمازون و اوبر گرفته تا
          نمونه‌های داخلی مانند تیپاکس، شبکه انبار و توزیع دیجی کالا و روناد همه
          به نوعی وامدار چاپارهای باستانی هستند که همزمان هم حکم اینترنت را
          داشتند و اخبار را منتقل می‌کردند و هم شبکه توزیع کالا بودند.
        </p>
        <div className="flex flex-col gap-y-[15px] items-center gap-x-3 lg:flex-row lg:gap-x-[27px]">
          <Button href="/sign-up" text="همکاری با روناد" primary />
          <Button text="ورود به سایت" />
        </div>
      </div>
      <div className="xl:flex-1">
        <div className="relative z-10 xl:mt-[200px]">
          <Image src="/images/compare.png" width={627} height={417} alt="" />
          <div className="absolute -top-4 -left-2 -z-10">
            <VideoEllipseTop mobile />
          </div>
          <div className="hidden lg:block lg:absolute lg:-top-8 lg:-left-10 lg:-z-10">
            <VideoEllipseTop />
          </div>
          <div className="block absolute bottom-6 -right-3 -z-10">
            <VideoEllipseBottom mobile />
          </div>
          <div className="hidden lg:block lg:absolute lg:bottom-12 lg:-right-12 lg:-z-10">
            <VideoEllipseBottom />
          </div>
          <div className="hidden lg:block lg:absolute lg:-top-14 lg:right-12">
            <div className="compare-badge">
              <span>%35</span>
              <span>کاهش هزینه ها</span>
              <div className="absolute -top-6 -right-5 z-50">
                <Image
                  src="/images/compare-chart.png"
                  width={71}
                  height={60}
                  alt="chart"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:absolute lg:-bottom-[5.5rem] lg:-right-36">
            <div className="compare-badge">
              <span>%30</span>
              <span>افزایش رضایت مشتری</span>
              <div className="absolute -top-6 -right-5 z-50">
                <Image
                  src="/images/compare-smile.png"
                  width={71}
                  height={71}
                  alt="smile"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:absolute lg:bottom-5 lg:-left-16">
            <div className="compare-badge">
              <span>%18</span>
              <span>افزایش فروش</span>
              <div className="absolute -top-6 -left-5 z-50">
                <Image
                  src="/images/compare-dollar-large.png"
                  width={36}
                  height={72}
                  alt="dollar"
                />
              </div>
              <div className="absolute -top-6 left-7 z-50">
                <Image
                  src="/images/compare-dollar-small.png"
                  width={17}
                  height={34}
                  alt="dollar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-z-10 absolute bottom-0 left-0 xl:top-32">
        <CompareShadowBottom />
      </div>
    </section>
  );
};

export default CompareSection;
