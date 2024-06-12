import Image from "next/image";
import Link from "next/link";

const NetworkLogistics = () => {
  return (
    <section className="bg-backgroundSecondary flex flex-col pt-[27px] px-[29px] pb-[51px] gap-y-[41px] md:px-20 md:items-center lg:flex-row lg:items-center lg:justify-center lg:py-[34px] gap-x-36 lg:pr-[55px] lg:pl-[180px] 2xl:pr-[155px] 2xl:pl-[262px] 2xl:gap-x-[351px]">
      <div className="lg:order-2 lg:w-[654px]">
        <h2 className="logistics-network__heading">شبکه همکاران روناد</h2>
        <p className="logistics-network__text">
روناد جهت گسترش کمی و کیفی ساختار خدمات لجستیکی در سطح کشور و ایجاد یک پلتفرم هوشمند لجستیک اقدام به اتصال در لایه API به فعالین بخش‌های مختلف اکوسیستم فروش آنلاین نموده است. در همین راستا روناد قصد دارد در بخش‌های مختلف زنجیره فروش آنلاین کشور از طریق پلتفرم خود اتصال و هم‌افزایی ایجاد کند.
        </p>
        <div className="hidden">
          <Link href="/">
            <a className="logistics-network__btn">بیشتر بخوانید</a>
          </Link>
        </div>
      </div>
      <div className="mb-1 lg:mb-0 lg:order-1">
        <Image
          alt=""
          src="/images/logistics-network.png"
          width={498}
          height={498}
        />
      </div>
    </section>
  );
};

export default NetworkLogistics;
