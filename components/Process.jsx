import Image from "next/image";
import HoldProcessCard from "./HoldProcessCard";
import { ProcessShadow } from "./svgs/ProcessShadow";
import { DesktopWindowsIcon } from "./svgs/DesktopWindowsIcon";
import { ClockIcon } from "./svgs/ClockIcon";
import { BoxIcon } from "./svgs/BoxIcon";
import { ShieldIcon } from "./svgs/ShieldIcon";
import { FlowerCheckIcon } from "./svgs/FlowerCheckIcon";
import { PackageIcon } from "./svgs/PackageIcon";
import Link from "next/link";

const Process = () => {
  return (
    <article className="lg:flex lg:gap-x-[80px] lg:items-start 3xl:gap-x-[135px]">
      <div className="flex justify-center items-center mb-[53px] lg:flex-1">
        <div className="inline-block relative z-0 lg:hidden">
          <Image
            src="/images/landing-process-mobile.png"
            width={301}
            height={199}
          />
          <div className="absolute -top-8 left-12 -z-10 lg:hidden">
            <ProcessShadow mobile />
          </div>
        </div>
        <div className="hidden lg:block lg:relative 2xl:w-[747px] 2xl:h-[497px]">
          <Image
            src="/images/landing-process-desktop.png"
            width={747}
            height={497}
          />
          <div className="hidden 2xl:block 2xl:absolute 2xl:-top-16 2xl:right-10 2xl:-z-10">
            <ProcessShadow />
          </div>
        </div>
      </div>
      <div className="lg:flex-1">
        <div>
          <h2 className="hold-process__title">پردازش اختصاصی کالا</h2>
          <h5 className="hold-process__subtitle">
            بسته‌بندی هر سفارش ۹ هزار تومان
          </h5>
          <p className="hold-process__text">
            خدمات پردازش و آماده‌سازی سفارش بر اساس نیازمندی مشتری و ویژگی‌های
            هر کالا انجام می‌شود.
          </p>
        </div>
        <div className="flex flex-col gap-y-[10px] xl:flex-row xl:gap-x-6 xl:mb-10">
          <div className="flex flex-col gap-y-[10px]">
            <HoldProcessCard text="ثبت و بررسی سیستمی کالاها">
              <DesktopWindowsIcon />
            </HoldProcessCard>
            <HoldProcessCard text="به روزرسانی موجودی کالاها">
              <ClockIcon />
            </HoldProcessCard>
            <HoldProcessCard text="بسته‌بندی اختصاصی">
              <BoxIcon />
            </HoldProcessCard>
          </div>
          <div className="flex flex-col gap-y-[10px] mb-[22px]">
            <HoldProcessCard text="استفاده از مواد ضربه گیر">
              <ShieldIcon />
            </HoldProcessCard>
            <HoldProcessCard text="کیفیت و دقت بسته‌بندی">
              <FlowerCheckIcon />
            </HoldProcessCard>
            <HoldProcessCard text="استفاده از کارتن شخصی">
              <PackageIcon />
            </HoldProcessCard>
          </div>
        </div>
        <div className="mb-[93px] lg:mb-0">
          <Link href="/price">
            <button className="hold-process__btn lg:w-[180px]">
              تعرفه خدمات روناد
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Process;
