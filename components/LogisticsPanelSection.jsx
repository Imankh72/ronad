import { useState } from "react";
import Image from "next/image";
import { LogisticsPanelCheckIcon } from "./svgs/LogisticsPanelCheckIcon";

const LogisticsPanelSection = () => {
  const [selected, setSelected] = useState(1);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(id);
    }

    setSelected(id);
  };

  return (
    <section className="pt-[59px] pb-[58px] pr-7 pl-[26px] xl:pt-[163px] xl:pb-[143px] md:px-20 2xl:px-[202px]">
      <h2 className="heading--primary leading-[28px] text-center text-primary mb-[3px] md:mb-4">
        پنل لجستیک
      </h2>
      <p className="text leading-[40px] mb-6 md:text-center mx-6 md:mb-[76px]">
        ما در روناد با استفاده از نرم افزار اختصاصی خود برای ایجاد یک تجربه
        منسجم در طول زنجیره تامین استفاده می‌کنیم.سفارشات شما به صورت خودکار به
        انبار‌های ما ارسال می‌شوند، جایی که بر اساس موجودی کالای شما، بسته‌بندی
        و برای مشتریان شما ارسال می‌شوند.
      </p>
      <ul className="flex gap-x-6 mb-7 h-[25px] justify-center md:flex-row lg:mb-10 xl:gap-x-[50px] xl:h-[35px]">
        {data.map(({ id, title }) => (
          <li
            key={id}
            className={`logistics__option ${
              selected === id ? "logistics__option--active" : ""
            }`}
            onClick={() => toggle(id)}
          >
            {title}
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center gap-y-[21px] h-[350px] md:h-[380px] md:gap-y-10 lg:items-start lg:flex-row lg:gap-x-[125px] xl:items-center">
        {selected === 1 && (
          <>
            <ul className="flex flex-col gap-y-2 md:gap-y-5 lg:order-2 lg:gap-y-14 lg:flex-1 2xl:-mt-20">
              <li className="logistics__details-container">
                <div>
                  <LogisticsPanelCheckIcon />
                </div>
                <span className="logistics__details">
                  امکان پیگیری لحظه‌ای و تاریخچه پردازش هر سفارش
                </span>
              </li>
              <li className="logistics__details-container">
                <div>
                  <LogisticsPanelCheckIcon />
                </div>
                <span className="logistics__details">
                  ثبت سفارش بصورت تکی و گروهی
                </span>
              </li>
              <li className="logistics__details-container">
                <div>
                  <LogisticsPanelCheckIcon />
                </div>
                <span className="logistics__details">
                  امکان رصد وضعیت کلی تمام سفارش‌ها
                </span>
              </li>
            </ul>
            <div className="w-[306px] h-[172px] md:w-[450px] md:h-[220px] lg:order-1 lg:flex-1 2xl:h-[486px] 2xl:mt-44">
              <Image
                alt=""
                src="/images/orders-table.png"
                width={862}
                height={486}
              />
            </div>
          </>
        )}
        {selected === 2 && (
          <>
            <ul className="flex flex-col gap-y-2 md:gap-y-5 lg:order-2 lg:gap-y-14 lg:flex-1 2xl:-mt-20">
              <li className="logistics__details-container">
                <div>
                  <LogisticsPanelCheckIcon />
                </div>
                <span className="logistics__details">
                  امکان تعریف کالا بصورت تکی و گروهی
                </span>
              </li>
              <li className="logistics__details-container">
                <div>
                  <LogisticsPanelCheckIcon />
                </div>
                <span className="logistics__details">
                  مشاهده موجوی لحظه‌ای هر کالا
                </span>
              </li>
              <li className="logistics__details-container">
                <div>
                  <LogisticsPanelCheckIcon />
                </div>
                <span className="logistics__details">
                  مشاهده کاردکس و تاریخچه کالا
                </span>
              </li>
            </ul>
            <div className="w-[306px] h-[172px] md:w-[450px] md:h-[220px] lg:order-1 lg:flex-1 2xl:h-[486px] 2xl:mt-44">
              <Image
                alt=""
                src="/images/goods-table.png"
                width={862}
                height={486}
              />
            </div>
          </>
        )}
        {selected === 3 && (
          <>
            <ul className="flex flex-col gap-y-2 md:gap-y-5 lg:order-2 lg:gap-y-14 lg:flex-1 2xl:-mt-20">
              <li className="logistics__details-container">
                <div>
                  <LogisticsPanelCheckIcon />
                </div>
                <span className="logistics__details">
                  مشاهده موجوی لحظه‌ای هر کالا
                </span>
              </li>
              <li className="logistics__details-container">
                <div>
                  <LogisticsPanelCheckIcon />
                </div>
                <span className="logistics__details">
                  تعیین زمان‌بندی ارسال
                </span>
              </li>
              <li className="logistics__details-container">
                <div>
                  <LogisticsPanelCheckIcon />
                </div>
                <span className="logistics__details">
                  امکان ارسال پیامک کد رهیگری پستی به خریدار نهایی با نام خود
                  شرکت
                </span>
              </li>
            </ul>
            <div className="w-[306px] h-[172px] md:w-[450px] md:h-[220px] lg:order-1 lg:flex-1 2xl:h-[486px] 2xl:mt-44">
              <Image
                alt=""
                src="/images/send-table.png"
                width={862}
                height={486}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LogisticsPanelSection;

const data = [
  { id: 1, title: "مدیریت سفارشات" },
  { id: 2, title: "مدیریت کالاها" },
  { id: 3, title: "مدیریت ارسال" },
];
