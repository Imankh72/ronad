import Image from "next/image";
import { EmploymentVerticalLine } from "./svgs/EmploymentVerticalLine";

const EmploymentSection = () => {
  return (
    <section className="pt-[29px] pb-9 lg:pb-[100px] 2xl:pb-[150px] 3xl:pb-[200px]">
      <h2 className="career__heading text-primary text-center lg:mb-[51px]">
        فرآیند استخدام در روناد
      </h2>
      <div className="flex flex-col items-center gap-y-[10px] lg:flex-row lg:gap-x-[10px] lg:justify-center lg:px-[10px] 2xl:px-[180px] 3xl:px-[353px]">
        <div>
          <div className="employment__ellipse">
            <Image src="/images/employment1.png" width={75} height={75} />
            <span className="employment__text">تائید رزومه</span>
          </div>
        </div>
        <div className="lg:hidden">
          <EmploymentVerticalLine />
        </div>
        <div className="hidden lg:block">
          <Image src="/images/employment-line.png" width={132} height={5} />
        </div>
        <div>
          <div className="employment__ellipse">
            <Image src="/images/employment2.png" width={75} height={75} />
            <span className="employment__text">مصاحبه با نیروی انسانی</span>
          </div>
        </div>
        <div className="lg:hidden">
          <EmploymentVerticalLine />
        </div>
        <div className="hidden lg:block">
          <Image src="/images/employment-line.png" width={132} height={5} />
        </div>
        <div>
          <div className="employment__ellipse">
            <Image src="/images/employment3.png" width={75} height={75} />
            <span className="employment__text">مصاحبه تخصصی</span>
          </div>
        </div>
        <div className="lg:hidden">
          <EmploymentVerticalLine />
        </div>
        <div className="hidden lg:block">
          <Image src="/images/employment-line.png" width={132} height={5} />
        </div>
        <div>
          <div className="employment__ellipse">
            <Image src="/images/employment4.png" width={75} height={75} />
            <span className="employment__text">بررسی سوابق شغلی</span>
          </div>
        </div>
        <div className="lg:hidden">
          <EmploymentVerticalLine />
        </div>
        <div className="hidden lg:block">
          <Image src="/images/employment-line.png" width={132} height={5} />
        </div>
        <div>
          <div className="employment__ellipse">
            <Image src="/images/employment5.png" width={75} height={75} />
            <span className="employment__text">توافق مالی</span>
          </div>
        </div>
        <div className="lg:hidden">
          <EmploymentVerticalLine />
        </div>
        <div className="hidden lg:block">
          <Image src="/images/employment-line.png" width={132} height={5} />
        </div>
        <div>
          <div className="employment__ellipse">
            <Image src="/images/employment6.png" width={75} height={75} />
            <span className="employment__text">شروع همکاری</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmploymentSection;
