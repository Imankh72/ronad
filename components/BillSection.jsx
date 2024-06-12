import Image from "next/image";

const BillSection = () => {
  return (
    <section className="bg-backgroundSecondary pt-[75px] pb-[107px] px-[41px] flex flex-col gap-y-[66px] relative -z-10 md:flex-row md:justify-center md:gap-x-20 2xl:gap-x-[231px] 2xl:pt-24 2xl:pb-[98px] 2xl:px-[330px]">
      <div className="flex flex-col justify-center items-center">
        <div className="-z-[-1] relative mb-[20px] 2xl:mb-[30px]">
          <Image alt="" src="/images/bill-1.png" width={73} height={73} />
        </div>
        <h3 className="bill__heading">ریز صورت‌حساب</h3>
        <p className="bill__text">
          در پایان هر دوره گزارش جزییات خدمات ارائه شده و هزینه‌های هر بخش به
          شما ارائه می‌شود.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-[20px] 2xl:mb-[30px]">
          <Image alt="" src="/images/bill-2.png" width={73} height={73} />
        </div>
        <h3 className="bill__heading">روش‌های متنوع پرداخت</h3>
        <p className="bill__text">
          پرداخت هزینه‌ها به دو صورت پیش پرداخت و ماهانه در پایان دوره برای شما
          مهیا شده است.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-[20px] 2xl:mb-[30px]">
          <Image alt="" src="/images/bill-3.png" width={73} height={73} />
        </div>
        <h3 className="bill__heading">شخصی‌سازی تعرفه</h3>
        <p className="bill__text">
          با توجه به نیازمندی‌های منحصر به فرد هر مشتری، تعرفه و قیمت برای شما
          شخصی‌سازی می‌شود.
        </p>
      </div>
    </section>
  );
};

export default BillSection;
