import Link from "next/link";
import Accordion from "./Accordion";

const FAQSection = () => {
  return (
    <section className="py-[35px] px-[22px] md:py-[163px] md:px-[30px] 2xl:pr-[208px] 2xl:pl-[163px] 2xl:pb-[312px]">
      <h2 className="heading--primary text-center pb-8 lg:text-right">
        سوالات متداول
      </h2>
      <div className="flex flex-col lg:flex-row lg:gap-x-4 2xl:gap-x-[95px]">
        <div className="flex flex-col items-center justify-center gap-y-[18.5px] mb-[40px] lg:flex-1 lg:justify-start lg:items-start lg:gap-y-[37px]">
          <p className="text text-center md:text-right">
            برای سوالات و اطلاعات بیشتر در رابطه با جزئیات عملیاتی و همکاری، با
            ما تماس بگیرید.
          </p>
          <Link href="/contact-us">
            <a className="faq__btn">تماس با ما</a>
          </Link>
        </div>
        <div className="lg:flex-1">
          <Accordion data={data} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

const data = [
  {
    id: 1,
    title: "آیا روناد خدمات جمع‌آوری نیز ارائه می‌دهد؟",
    content:
      "سرویس جمع‌آوری برای شهر تهران طبق زمان‌بندی از پیش تعیین شده وجود دارد.",
  },
  {
    id: 2,
    title: "فرآیند پردازش روناد شامل چه مواردی می‌باشد؟",
    content:
      "پردازش کلیه فرایندهایی که از ورود کالا به انبار تا ارسال سفارش برای مشتری انجام ‌شود را در بر می‌گیرد. این موارد شامل عملیات الصاق لیبل کالا، جایگذاری و نگهداری در انبار، عملیات بسته‌بندی، الصاق لیبل خروج و ... به عبارت دیگر کلیه مراحل و پروسه‌های عملیاتی اجرایی که منجر به تحقق سفارش و رسیدن کالا به خریدار نهایی می‌شود.",
  },
  {
    id: 3,
    title: "آیا روناد کالاهای سنگین و حجیم را نیز پوشش می‌دهد؟",
    content:
      "حداکثر وزن یک قلم کالا جهت امکان پوشش سرویس پردازش و نگهداری توسط روناد وزن ۵۰ کیلوگرم می‌باشد.",
  },
  {
    id: 4,
    title: "زمان‌بندی بازه‌های ارسال روناد چگونه است؟",
    content: `روناد روزانه سفارشات را در دو بازه توزیع می‌کند :
    بازه اول ۹ الی ۱۵ که تا ساعت ۱۶ روز قبل می‌توان برای این بازه سفارش ثبت نمود.
    بازه دوم ۱۵ الی ۲۱ که تا ساعت ۱۰ هر روز می‌توان برای این بازه ثبت سفارش کرد.`,
  },
  {
    id: 5,
    title:
      "آیا امکان یکپارچه‌سازی با نرم‌افزار روناد برای فروشگاه‌های اینترنتی وجود دارد؟",
    content:
      "امکان اتصال همه سایت‌های فروش در لایه API به سامانه روناد وجود دارد. همچنین برای فروشگاه‌های ووکامرس پلاگین روناد آماده سرویس‌دهی جهت اتصال و یکپارچه‌سازی با سامانه فروش شما می‌باشد.",
  },
];
