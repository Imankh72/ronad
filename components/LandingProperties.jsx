import { ShelvesLargeIcon } from "./svgs/ShelvesLargeIcon";
import { TruckIcon } from "./svgs/TruckIcon";
import { CubesIcon } from "./svgs/CubesIcon";
import { TerminalIcon } from "./svgs/TerminalIcon";

const LandingProperties = () => {
  return (
    <section className="bg-backgroundSecondary pt-[70px] px-10 pb-[91px] flex flex-col gap-y-[80px] sm:grid sm:grid-cols-2 sm:gap-x-[50px] lg:grid-cols-4 lg:gap-x-[70px] lg:pt-[76px] lg:px-[60px] xl:px-[80px] 2xl:px-[150px] 3xl:px-[223px]">
      <article className="landing-properties__card">
        <div className="lg:hidden">
          <TruckIcon mobile />
        </div>
        <div className="hidden lg:block w-[60px] h-[62px]">
          <TruckIcon />
        </div>
        <p className="landing-properties__card__text">
          بهینه‌ترین ارسال با ۱۲ ناوگان متصل کمترین قیمت و بیشترین سرعت
        </p>
      </article>
      <article className="landing-properties__card">
        <div className="lg:hidden">
          <ShelvesLargeIcon mobile />
        </div>
        <div className="hidden lg:block w-[60px] h-[62px]">
          <ShelvesLargeIcon />
        </div>
        <p className="landing-properties__card__text">
          ۱۰,۰۰۰ متر انبار مدرن و منعطف قفسه‌بندی شده هزینه به ازای استفاده
        </p>
      </article>
      <article className="landing-properties__card">
        <div className="lg:hidden">
          <CubesIcon mobile />
        </div>
        <div className="hidden lg:block w-[60px] h-[62px]">
          <CubesIcon />
        </div>
        <p className="landing-properties__card__text">
          پردازش اختصاصی کالا با طیف وسیعی از تنوع فعالیت‌ها روی کالا با انواع
          متریال بسته‌بندی
        </p>
      </article>
      <article className="landing-properties__card">
        <div className="lg:hidden">
          <TerminalIcon mobile />
        </div>
        <div className="hidden lg:block w-[60px] h-[62px]">
          <TerminalIcon />
        </div>
        <p className="landing-properties__card__text">
          مجموعه نرم‌افزارهایی برای کنترل و مدیریت کالاها و سفارش‌ها در تمام طول
          مسیر
        </p>
      </article>
    </section>
  );
};

export default LandingProperties;
