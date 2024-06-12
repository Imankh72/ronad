import Benefit from "./Benefit";
import { CheckMarkIcon } from "./svgs/CheckMarkIcon";

const RonadBenefits = () => {
  return (
    <section className="px-[30px] pt-[18px] pb-[26px] 3xl:pt-[50px] 3xl:px-[275px] 3xl:pb-[100px]">
      <div className="grid grid-cols-[1.1fr,1fr] border-b-4 border-primary pb-[9px] lg:pb-[30px] 2xl:pb-[50px]">
        <div></div>
        <div className="grid grid-cols-3 justify-items-center">
          <span className="benefit__title">پست</span>
          <span className="benefit__title">واسط پستی</span>
          <span className="benefit__title font-black text-orange">روناد</span>
        </div>
      </div>
      <Benefit title="پیک شهری" post={false} />
      <Benefit title="ارسال به سراسر کشور" />
      <Benefit title="بیمه حمل" />
      <Benefit title="انبارش و نگهداری" post={false} />
      <Benefit title="انبار منعطف" post={false} intermediary={false} />
      <Benefit
        title="بسته بندی و آمده‌سازی سفارش"
        post={false}
        intermediary={false}
      />
      <Benefit title="پنل اختصاصی" post={false} />
      <Benefit title="پشتیبانی و پیگیری سفارشات" post={false} />
      <Benefit title="شخصی سازی سفارشات" post={false} intermediary={false} />
      <Benefit
        title="بیمه مفقودی و خسارت در انبار"
        post={false}
        intermediary={false}
      />
    </section>
  );
};

export default RonadBenefits;
