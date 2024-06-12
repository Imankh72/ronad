import Image from "next/image";
import Link from "next/link";

const LandingPanel = () => {
  return (
    <section className="bg-backgroundSecondary pt-11 px-[30px] pb-[74px] flex flex-col gap-y-[37px] lg:gap-y-[65px] lg:pt-[79px] lg:px-[60px] 3xl:pr-[279px] 3xl:pl-[244px]">
      <div className="flex flex-col items-center 2xl:mb-7">
        <h2 className="font-bold text-primary text-center text-[18px] leading-[28.13px] mb-[11px] lg:mb-[23px] lg:font-black lg:text-[32px] lg:leading-[50px]">
          نرم‌افزار، تکنولوژی، پنل مدیریت و نظارت بر کالا در تمام مسیر
        </h2>
        <p className="text-justify font-medium text-[14px] leading-[35px] mb-[18px] lg:mb-[23px] lg:font-normal lg:text-[22px] lg:leading-[40px] lg:text-center lg:w-[70%]">
          با دسترسی به پنل روناد می‌توانید حداکثر نظارت و حداقل درگیری اجرایی را
          بر کلیه فرایندهای انبارداری، مدیریت سفارشات و مدیریت ارسال فروشگاه خود
          داشته باشید.
        </p>
        <Link href="/sign-up?code=T1001">
          <button className="flex justify-center items-center w-full border-[1.5px] border-primary text-primary font-medium text-[14px] leading-[21.88px] h-[50px] rounded-[5px] sm:w-[215px] lg:text-[16px] lg:leading-[25px]  lg:transition-all lg:duration-200 lg:hover:font-bold lg:hover:outline lg:hover:outline-1">
            ثبت نام و ورود به پنل دمو
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-y-[38px] lg:flex-row lg:gap-x-5 2xl:gap-x-[66px]">
        <div className="lg:flex-1 2xl:-mt-7 3xl:w-[676px] 3xl:h-[381px]">
          <Image src="/images/landing-panel.png" width={676} height={381} />
        </div>
        <div className="flex flex-col gap-y-5 lg:flex-[1.25]  lg:flex-row lg:gap-x-[25px] 3xl:flex-1">
          <div className="flex flex-col gap-y-5 lg:gap-y-[25px]">
            <div className="landing-panel__card">
              <h5 className="landing-panel__card__title">یکپارچگی</h5>
              <p className="landing-panel__card__text">
                حداقل درگیری را بر فرایندهای انبارداری، مدیریت سفارشات و ارسال
                داشته باشید.
              </p>
            </div>
            <div className="landing-panel__card">
              <h5 className="landing-panel__card__title">
                پنل مدیریت فروشندگان
              </h5>
              <p className="landing-panel__card__text">
                تعریف شبکه فروشندگان در پنل و ایجاد دسترسی متناسب با نیاز هر
                فروشنده
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 lg:gap-y-[25px]">
            <div className="landing-panel__card">
              <h5 className="landing-panel__card__title">
                پنل مدیریت کالا و موجودی
              </h5>
              <p className="landing-panel__card__text">
                ماژول انبارداری با بروزرسانی آنلاین موجودی و گزارش کاردکس و
                تاریخچه به تفکیک کالا
              </p>
            </div>
            <div className="landing-panel__card">
              <h5 className="landing-panel__card__title">
                پنل مدیریت و پیگیری سفارشات
              </h5>
              <p className="landing-panel__card__text">
                بروزرسانی آنلاین وضعیت هر سفارش از ثبت و ایجاد سفارش تا تحویل به
                خریدار نهایی
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPanel;
