import Image from "next/image";

const LandingSend = () => {
  return (
    <section className="bg-backgroundSecondary pt-[38px] px-[30px] pb-[41px] flex flex-col gap-y-5 lg:flex-row lg:items-center lg:px-[50px] lg:pb-[52px] 2xl:Pt-[91px] 2xl:px-[80px] 3xl:pr-[213px] 3xl:pl-[284px]">
      <div className="lg:flex-1 lg:order-2">
        <h2 className="font-bold text-primary text-[18px] leading-[28.13px] mb-[13px] lg:font-semibold lg:text-[26px] lg:leading-[40.63px] lg:mb-[10px]">
          شبکه فرا ارسال روناد
        </h2>
        <p className="text-justify text-[14px] leading-[32px] lg:text-[20px] lg:leading-[40px]">
          ما در روناد با بهینه‌سازی فرایند‌های نگهداری و آماده‌سازی و سفارشات در
          شبکه گسترده لجستیک‌مان سرعت ارسال به خریداران نهایی کسب‌و‌کارتان را
          افزایش می‌دهیم و با کاهش هزینه‌ها در کنار بهینه‌سازی عملیاتی به رشد و
          گسترش کسب‌و‌کار شما کمک می‌کنیم.
        </p>
      </div>
      <div className="lg:flex-1 lg:order-1">
        <Image src="/images/landing-send-image.png" width={551} height={414} />
      </div>
    </section>
  );
};

export default LandingSend;
