import { useRef } from "react";
import TransportVideoPlayer from "./TransportVideoPlayer";
import { TransportLine } from "./svgs/TransportLine";
import { TransportCircle } from "./svgs/TransportCircle";
import { TransportCollectIcon } from "./svgs/TransportCollectIcon";
import { CheckMarkWhiteIcon } from "./svgs/CheckMarkWhiteIcon";
import { TransportHouseIcon } from "./svgs/TransportHouseIcon";
import { TransportBoxIcon } from "./svgs/TransportBoxIcon";
import { TransportTruckIcon } from "./svgs/TransportTruckIcon";

const TransportSection = () => {
  const collectRef = useRef();
  const holdRef = useRef();
  const processRef = useRef();
  const sendRef = useRef();

  return (
    <>
      <section className="bg-[#192146] text-white py-8 px-10 lg:pt-[102px] lg:pb-[217px] lg:px-7 2xl:px-[130px] 3xl:pl-[229px] 3xl:pr-[231px]">
        <h2 className="heading--primary mb-10 lg:mb-[106px]">
          ما از نگهداری تا تحویل به مشتری با شما هستیم ....
        </h2>
        <div className="flex flex-col gap-y-[86px] lg:gap-y-7  2xl:gap-y-5">
          <div className="transport__card">
            <TransportVideoPlayer video="collect" videoRef={collectRef} />
            <div className="hidden xl:flex xl:flex-col xl:items-center lg:gap-y-[17px] lg:mx-12 2xl:mr-[121px] 2xl:ml-[112px]">
              <TransportCircle />
              <div>
                <TransportLine />
              </div>
            </div>
            <div className="transport-card__text--container">
              <div className="transport-card__icon">
                <TransportCollectIcon />
              </div>
              <h3 className="transport-card__heading">
                جمع‌آوری و دریافت کالا
              </h3>
              <p className="transport-card__text">
                تیم کنترل کیفی روناد در ورود کالاها به انبار با بررسی تعدادی و
                کنترل کیفی کالای ورودی از صحت و سلامت کالاها اطمینان حاصل کرده و
                پس از عبور هر کالا از کنترل کیفی اولیه مسئولیت کامل سلامت و
                نگهداری صحیح اقلام با روناد خواهد بود.
              </p>
              <ul className="flex flex-col gap-y-2">
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>جمع‌آوری کالا</span>
                </li>
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>تخلیه و بارگیری</span>
                </li>
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>کنترل کیفی اقلام ورودی</span>
                </li>
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>
                    خدمات کنترل کیفی ویژه براساس استاندارد مورد نیاز هر کسب و
                    کار
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="transport__card">
            <TransportVideoPlayer video="hold" videoRef={holdRef} />
            <div className="hidden xl:flex xl:flex-col xl:items-center lg:gap-y-[17px] lg:mx-12 2xl:mr-[121px] 2xl:ml-[112px]">
              <TransportCircle />
              <div>
                <TransportLine />
              </div>
            </div>
            <div className="transport-card__text--container">
              <div className="transport-card__icon">
                <TransportHouseIcon />
              </div>
              <h3 className="transport-card__heading">انبارش و نگهداری</h3>
              <p className="transport-card__text">
                روناد با تیمی متخصص و مجرب بر اساس سیستم انبارداری علمی و به روز
                توانسته است مرکزی امن و قابل اعتماد برای کسب‌و‌کارهای مختلف
                ایجاد نماید که بدون نگرانی اقلام خود را به روناد بسپارند. کالاها
                در انبارهای روناد براساس ویژگی ها و نیازمندی های هر کالا نگهداری
                و انبارش شده و به صورت ۲۴ ساعته کاملا تحت نظارت نیروهای
                انبارداری روناد هستند.
              </p>
              <ul className="flex flex-col gap-y-2">
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>بیمه مفقودی و خسارت کالا</span>
                </li>
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>
                    نگهبانی و حراست ۲۴ ساعته و ضبط ورود و خروج کالا توسط دوربین
                    های امنیتی
                  </span>
                </li>
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>
                    کنترل کیفی اقلام ورودی و کنترل ویژه براساس استاندارد مورد
                    نیاز هر کسب‌و‌کار
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="transport__card">
            <TransportVideoPlayer video="process" videoRef={processRef} />
            <div className="hidden xl:flex xl:flex-col xl:items-center lg:gap-y-[17px] lg:mx-12 2xl:mr-[121px] 2xl:ml-[112px]">
              <TransportCircle />
              <div>
                <TransportLine />
              </div>
            </div>
            <div className="transport-card__text--container">
              <div className="transport-card__icon">
                <TransportBoxIcon />
              </div>
              <h3 className="transport-card__heading">
                پردازش و آماده‌سازی سفارشات
              </h3>
              <p className="transport-card__text">
                روناد با آماده‌سازی و پردازش سفارشات از کانال‌های مختلف فروش،
                بستری برای بهبود تجربه خرید مشتریان نهایی فراهم آورده است. در
                حال حاضر رنج وسیعی از فعالین بازار شامل کسب‌و‌کارهای بزرگ تا
                فروشندگان خرد اینترنتی و فعالین بازارهای اجتماعی با گستره
                محصولات متنوع، خدمات لجستیک خود را به روناد سپرده‌اند.
              </p>
              <ul className="transport__link-container">
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>
                    خدمات پردازش و آماده‌سازی سفارشات براساس زمان‌بندی از پیش
                    تعیین شده
                  </span>
                </li>
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>پردازش ویژه سفارشات طی حداکثر ۱ ساعت</span>
                </li>
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>
                    خدمات بسته‌بندی شامل کارتن، ضربه‌گیر، لفافه‌بندی، پلاستیک
                    حبابدار و ...
                  </span>
                </li>
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>شخصی‌سازی خدمات طبق نیازمندی های هر کسب‌و‌کار</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="transport__card">
            <TransportVideoPlayer video="send" videoRef={sendRef} />
            <div className="hidden xl:flex xl:flex-col xl:items-center lg:gap-y-[17px] lg:mx-12 2xl:mr-[121px] 2xl:ml-[112px]">
              <TransportCircle />
            </div>
            <div className="transport-card__text--container">
              <div className="transport-card__icon">
                <TransportTruckIcon />
              </div>
              <h3 className="transport-card__heading">
                ارسال و تحویل به مشتری
              </h3>
              <p className="transport-card__text">
                مرکز پردازش روناد با استفاده از نیروهای متخصص با اتصال به
                شرکتهای ارسال در لایه API و بررسی و کیفیت‌سنجی عملیاتی این
                شرکتها در کنار ناوگان اختصاصی روناد توانسته است به استاندارد
                تحویل حداکثر ۲۴ ساعته در تهران و متوسط ۴۸ ساعته برای شهرستان‌ها
                دست یابد. روناد در کنار شماست تا انتظارات را درباره سرعت و کیفیت
                ارسال و تحویل سفارشات برآورده کرده و با تکیه بر سیستم یکپارچه
                لجستیکی قابل اعتماد و سریع خود، وفاداری مشتریان نهایی را برای
                کسب‌و‌کار شما به ارمغان آورد.
              </p>
              <ul className="transport__link-container">
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>۹۷ درصد دقت ارسال در تحویل سالم و به موقع سفارشات</span>
                </li>
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>
                    ارسال ویژه سفارشات با تحویل حداکثر ۲ ساعته در تهران
                  </span>
                </li>
                <li className="transport__link">
                  <div className="transport__link-icon">
                    <CheckMarkWhiteIcon />
                  </div>
                  <span>بیمه ارسال</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransportSection;
