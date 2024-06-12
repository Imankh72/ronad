import Image from "next/image";
import { ConnectionEllipse } from "./svgs/ConnectionEllipse";
import { HoldEllipse } from "./svgs/HoldEllipse";
import { SendEllipse } from "./svgs/SendEllipse";
import OnlineSaleDetails from "./OnlineSaleDetails";

const SaleSection = () => {
  return (
    <section className="py-[31px] relative z-0 px-6 md:pb-[60px] lg:px-10 2xl:pt-[148px] 2xl:pb-[202px] 2xl:pr-[209px] 2xl:pl-[355px]">
      <h2 className="heading--primary mb-[52px] md:mb-[100px]">
        امکانات روناد برای فروش آنلاین
      </h2>
      <div className="flex flex-col gap-y-[60px] md:gap-y-[90px] lg:gap-y-[120px] 3xl:pr-[174px] 3xl:gap-y-[207px]">
        <div className="sale__card 3xl:gap-x-[252px]">
          <div className="lg:order-2">
            <div className="relative z-0 mb-[15px] md:hidden">
              <Image
                className="rounded-2xl"
                src="/images/image1.png"
                width={266}
                height={266}
              />
              <div className="absolute -top-3 -left-3 -z-50">
                <Image src="/images/shadow.svg" width={266} height={266} />
              </div>
              <div className="absolute top-4 -right-4 -z-50 md:hidden">
                <ConnectionEllipse mobile />
              </div>
            </div>
            <div className="hidden md:sale__card__image md:relative md:block md:w-[500px] md:h-[500px]">
              <Image
                className="rounded-2xl"
                src="/images/image1.png"
                width={500}
                height={500}
              />
              <div className="hidden md:block sale__card__animation sale__card__animation--ronad-panel md:absolute md:-top-5 md:-left-5 md:-z-50">
                <Image src="/images/shadow.svg" width={500} height={500} />
              </div>
              <div className="hidden md:block sale__card__animation sale__card__animation--ronad-panel-shadow  md:absolute md:top-7 md:-right-7 md:-z-50">
                <ConnectionEllipse />
              </div>
            </div>
          </div>
          <div className="lg:order-1">
            <div className="text-right w-full text-primary">
              <h4 className="sale__heading">اتصال به پنل روناد</h4>
              <span className="underline  h-[3px] -translate-y-2"></span>
            </div>
            <p className="text mb-[11px] md:leading-[36px]">
              با دسترسی به پنل روناد می‌توانید حداکثر نظارت و حداقل درگیری
              اجرایی را بر کلیه فرایندهای انبارداری، مدیریت سفارشات و مدیریت
              ارسال فروشگاه خود داشته باشید.
            </p>
            <OnlineSaleDetails data={connectionDetails} />
          </div>
        </div>
        <div className="sale__card 3xl:gap-x-[241px]">
          <div className="lg:self-start">
            <div className="relative mb-[15px] md:hidden">
              <Image
                className="rounded-xl"
                src="/images/image2.png"
                width={266}
                height={266}
              />
              <div className="absolute top-3 -right-3 -z-50">
                <Image src="/images/shadow.svg" width={266} height={266} />
              </div>
              <div className="absolute -top-4 -left-4 -z-50 md:hidden">
                <HoldEllipse mobile />
              </div>
            </div>
            <div className="hidden md:sale__card__image md:relative md:block md:w-[500px] md:h-[500px]">
              <Image
                className="rounded-xl"
                src="/images/image2.png"
                width={500}
                height={500}
              />
              <div className="hidden md:block sale__card__animation sale__card__animation--anbaresh md:absolute md:top-5 md:-right-5 md:-z-50">
                <Image src="/images/shadow.svg" width={500} height={500} />
                <div className="hidden md:block sale__card__animation sale__card__animation--anbaresh-shadow md:absolute md:-top-[3.25rem] md:right-32 md:-z-50">
                  <HoldEllipse />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-right w-full text-primary">
              <h4 className="sale__heading">انبارش</h4>
              <span className="underline  h-[3px] -translate-y-2"></span>
            </div>
            <p className="text mb-[11px] md:leading-[36px]">
              مرکز پردازش روناد با ۱۰,۰۰۰ متر فضا و ۵۰,۰۰۰ تنوع محصولی آماده
              نگهداری از محصولات و کالاهی شما می‌باشد.
            </p>
            <OnlineSaleDetails data={holdDetails} />
          </div>
        </div>
        <div className="sale__card 2xl:gap-x-[220px]">
          <div className="flex-1 lg:order-2">
            <div className="relative mb-[15px] md:hidden">
              <Image src="/images/image3.png" width={266} height={266} />
              <div className="absolute -top-3 -right-3 -z-50">
                <Image src="/images/shadow.svg" width={266} height={266} />
              </div>
              <div className="absolute -bottom-3 -left-3 -z-50">
                <SendEllipse mobile />
              </div>
            </div>
            <div className="hidden md:sale__card__image md:relative md:block  md:w-[500px] md:h-[500px]">
              <Image src="/images/image3.png" width={500} height={500} />
              <div className="hidden md:block sale__card__animation sale__card__animation--faraersal md:absolute md:-top-5 md:-right-5 md:-z-50">
                <Image src="/images/shadow.svg" width={500} height={500} />
              </div>
              <div className="hidden md:block sale__card__animation sale__card__animation--faraersal-shadow md:absolute md:-bottom-9 md:-left-4 md:-z-50">
                <SendEllipse />
              </div>
            </div>
          </div>
          <div className="flex-1 lg:order-1">
            <div className="text-right w-full text-primary">
              <h4 className="sale__heading">فرا ارسال</h4>
              <span className="underline  h-[3px] -translate-y-2"></span>
            </div>
            <p className="text mb-[11px] md:leading-[36px]">
              روناد شما را از درگیری با نگهداری محصولات، بسته‌بندی و ارسال
              سفارشات رها کرده و با بهینه‌سازی فرایندها و افزایش سرعت و کیفیت
              ارسال در کنار کاهش هزینه‌ها، فرصت رشد و گسترش بازار را برای
              فروشندگان آنلاین فراهم آورده است.
            </p>
            <OnlineSaleDetails data={sendDetails} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;

const connectionDetails = [
  { id: 1, title: "یکپارچگی از طریق اتصال" },
  { id: 2, title: "پلاگین ووکامرس (برای فروشگاه‌های وردپرس)" },
  { id: 3, title: "مدیریت کالاها و موجودی" },
  { id: 4, title: "مدیریت فروشندگان" },
  { id: 5, title: "مدیریت و پیگیری سفارشات" },
];

const holdDetails = [
  { id: 1, title: "کنترل کیفی وبررسی محصولات" },
  { id: 2, title: "بیمه رایگان مفقودی و آسیب دیدگی محصولات در انبار" },
  { id: 3, title: "الصاق لیبل و بارکد منحصر به فرد به هر کالا" },
  {
    id: 4,
    title: "جاگذاری در قفسه‌های از پیش تعیین شده متناسب با ویژگی هر کالا",
  },
  { id: 5, title: "امکان ردیابی کالاهای ورودی به انبار بر اساس شماره سریال" },
  { id: 6, title: "به‌روز‌رسانی آنلاین و در لحظه موجودی کالاها" },
  { id: 7, title: "ارائه کارکردس آنلاین کالاها" },
];

const sendDetails = [
  { id: 1, title: "آماده‌سازی و بسته‌بندی سفارشات" },
  { id: 2, title: "شخصی‌سازی بسته‌بندی" },
  { id: 3, title: "امکان ارسال پیامک" },
  {
    id: 4,
    title: "ارسال و تحویل سفارش به خریدار",
  },
  { id: 5, title: "پرداخت در محل" },
  { id: 6, title: "تحویل ۲۴ ساعته در تهران" },
];
