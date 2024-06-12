import Image from "next/image";
import HoldProcessCard from "./HoldProcessCard";
import { HoldShadow } from "./svgs/HoldShadow";
import { ShieldCheckIcon } from "./svgs/ShieldCheckIcon";
import { CartCheckIcon } from "./svgs/CartCheckIcon";
import { ShelvesIcon } from "./svgs/ShelvesIcon";
import { SearchIcon } from "./svgs/SearchIcon";
import { RecyclingIcon } from "./svgs/RecyclingIcon";
import { WorkSpaceIcon } from "./svgs/WorkSpaceIcon";
import Link from "next/link";

const Hold = () => {
  return (
    <article className="lg:flex lg:gap-x-[60px] lg:items-start 3xl:gap-x-[135px]">
      <div className="flex justify-center items-center mb-[53px] lg:order-2 lg:flex-1">
        <div className="inline-block relative z-0 lg:hidden">
          <Image
            src="/images/landing-hold-mobile.png"
            width={301}
            height={199}
          />
          <div className="absolute -top-4 left-0 -z-10 lg:hidden">
            <HoldShadow mobile />
          </div>
        </div>
        <div className="hidden lg:block lg:relative 2xl:w-[747px] 2xl:h-[497px]">
          <Image
            src="/images/landing-hold-desktop.png"
            width={747}
            height={497}
          />
          <div className="hidden 2xl:block 2xl:absolute 2xl:-top-10 2xl:-left-6 2xl:-z-10">
            <HoldShadow />
          </div>
        </div>
      </div>
      <div className="lg:order-1 lg:flex-1">
        <div>
          <h2 className="hold-process__title">انبار منعطف</h2>
          <h5 className="hold-process__subtitle">هر شلف روزانه ۲ هزار تومان</h5>
          <p className="hold-process__text">
            هزینه انبارش به صورت روزانه و براساس فضای واقعی اشغال شده توسط کالای
            هر مشتری محاسبه می شود.
          </p>
        </div>
        <div className="flex flex-col gap-y-[10px] xl:flex-row xl:gap-x-6 xl:mb-10">
          <div className="flex flex-col gap-y-[10px]">
            <HoldProcessCard text="بیمه رایگان نگهداری">
              <ShieldCheckIcon />
            </HoldProcessCard>
            <HoldProcessCard text="کنترل موجودی">
              <CartCheckIcon />
            </HoldProcessCard>
            <HoldProcessCard text="جایگذاری بر اساس ویژگی کالا">
              <ShelvesIcon />
            </HoldProcessCard>
          </div>
          <div className="flex flex-col gap-y-[10px] mb-[22px]">
            <HoldProcessCard text="کنترل کیفی کالاها">
              <SearchIcon />
            </HoldProcessCard>
            <HoldProcessCard text="نرخ ضایعات کمتر از ۰.۵%">
              <RecyclingIcon />
            </HoldProcessCard>
            <HoldProcessCard text="استانداردهای LIFO و FIFO">
              <WorkSpaceIcon />
            </HoldProcessCard>
          </div>
        </div>
        <div className="mb-[93px] lg:mb-0">
          <Link href="/services">
            <button className="hold-process__btn">
              خدمات ارائه شده به کسب و کارها
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Hold;
