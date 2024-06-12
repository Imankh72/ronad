import { useState } from "react";
import ModalVideoPlayer from "./ModalVideoPlayer";
import OurCustomerCard from "./OurCustomerCard";

const OurCustomersSection = () => {
  const [showKeshemon, setShowKeshemon] = useState(false);
  const [showZarattar, setshowZarattar] = useState(false);
  const [showShirik, setShowShirik] = useState(false);

  return (
    <>
      <section className="bg-backgroundSecondary relative pt-[35px] pr-[40px] pl-[33px] pb-[50px] md:py-28 2xl:py-[150px] 2xl:pr-[155px] 2xl:pl-[162px]">
        <h2 className="heading--primary text-center mb-10 md:mb-[99px]">
          داستان مشتریان ما
        </h2>
        <div className="flex flex-col items-center gap-y-[50px]  md:flex-row md:gap-x-5 md:items-start md:justify-center lg:gap-x-[40px] 2xl:gap-x-12">
          <OurCustomerCard
            image="keshemon"
            mobileWidth={285}
            badgeText="کشمون"
            title="کاهش زمان ارسال به کمتر از"
            text="  حوزه لجستیک یکی از مهمترین نقاط در هر کسب‌و‌کار آنلاین می‌باشد و
            با روناد میزان آسیب‌دیدگی محصولات در تهران تقریبا به ۰ رسید."
            orangeText="24"
            onClick={setShowKeshemon}
            hour
          />
          <OurCustomerCard
            image="zarattar"
            mobileWidth={301}
            badgeText="زرعطار"
            title="دقت در انبارش و نگهداری"
            text="خدمات تخصصی لجستیک روناد به ما این فرصت را داد که با تمرکز روی حوزه تولید، روی گسترس و رشد بازار کار کنیم."
            orangeText="۹۸%"
            onClick={setshowZarattar}
          />
          <OurCustomerCard
            image="shirik"
            mobileWidth={301}
            badgeText="شیریک"
            title="دقت در پردازش و آماده‌سازی"
            text="روناد با یک ساختار و ایده SMART برای ما این امکان را ایجاد کرد که بدون داشتن ۱ متر انبار و نیروی عملیاتی، سفارشات را در دو لاین عمده فروشی و خرده فروشی پوشش بدهیم."
            orangeText="۹۵%"
            onClick={setShowShirik}
          />
        </div>
        <ModalVideoPlayer
          showModal={showKeshemon}
          setShowModal={setShowKeshemon}
          video="keshemon"
        />
        <ModalVideoPlayer
          showModal={showZarattar}
          setShowModal={setshowZarattar}
          video="zarattar"
        />
        <ModalVideoPlayer
          showModal={showShirik}
          setShowModal={setShowShirik}
          video="shirik"
        />
      </section>
    </>
  );
};

export default OurCustomersSection;
