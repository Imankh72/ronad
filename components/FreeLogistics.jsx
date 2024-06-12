import { SemiColon } from "./svgs/SemiColon";

const FreeLogistics = () => {
  return (
    <div className="relative overflow-hidden z-0 pt-[45px] pb-[46px] pr-[26px] pl-6 md:py-[82px] md:px-5">
      <div className="absolute top-5 opacity-[0.05] right-0 -z-10  lg:hidden">
        <SemiColon mobile />
      </div>
      <div className="hidden lg:opacity-[0.05] lg:block lg:absolute lg:top-7 lg:right-52">
        <SemiColon />
      </div>
      <p className="text-center leading-[36px] font-bold text-primary md:text-[26px] md:leading-[50px]">
        خودتان را از دغدغه‌های لجستیکی آزاد کنید و روی بخش‌های دیگر کسب وکارتان
        متمرکز شوید <br /> روناد اینجاست تا بال پرواز فروش شما باشد.
      </p>
    </div>
  );
};

export default FreeLogistics;
