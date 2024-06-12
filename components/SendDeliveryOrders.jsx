import Image from "next/image";
import Button from "./Button";
import { SendDeliveryShadow } from "./svgs/SendDeliveryShadow";

const SendDeliveryOrders = () => {
  return (
    <section className="px-[30px] pb-[65px] flex flex-col gap-y-[52px] xl:flex-row xl:gap-x-[30px] xl:pb-[160px] xl:pt-[30px] 3xl:gap-x-[135px] 3xl:px-[201px] 3xl:pb-[212px]">
      <div className="xl:order-2 xl:flex-1">
        <div className="relative">
          <Image
            src="/images/send-delivery.png"
            width={747}
            height={496.86}
            alt="send-delivery"
          />
          <div className="absolute -z-10 left-0 -top-5 xl:-top-20 xl:-left-3">
            <SendDeliveryShadow />
          </div>
        </div>
      </div>
      <div className="xl:flex-1 xl:self-center">
        <h5 className="text-primary font-semibold leading-[25px] mb-[7px] xl:text-[26px] xl:leading-[40.63px] xl:mb-5">
          ارسال و تحویل سفارشات
        </h5>
        <p className="text-[14px] leading-[32px] text-justify mb-[29px] xl:text-[20px] xl:leading-[40px] xl:mb-[35px]">
          کیفیت خدمات پستی در ایران همواره یکی از چالشان جدی بوده که براساس
          تحقیقات روناد سه شاخص “سر زمان مقرر رسیدن کالا” و “سلامت کالا” و “
          هزینه ارسال” مهمترین موارد حائز اهمیت برای استفاده‌کنندگان از این
          خدمات می‌باشد روناد با پشتیبانی و همکاری با 12 کوریر و ارسال کننده
          توانایی ارائه ی بهترین قیمت و کیفیت براساس مشخصات کالا و سفارش را
          دارد.
        </p>
        <Button text="دریافت قیمت ثابت انواع ناوگان" primary />
      </div>
    </section>
  );
};

export default SendDeliveryOrders;
