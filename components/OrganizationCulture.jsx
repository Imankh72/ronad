import Image from "next/image";
import { useState } from "react";

const OrganizationCulture = () => {
  const [selected, setSelected] = useState(1);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(id);
    }

    setSelected(id);
  };

  return (
    <section className="bg-backgroundSecondary pt-[39px] pr-[43px] pl-[44px] pb-[49px] 2xl:pr-[222px] 2xl:pl-[242px] 2xl:pb-[118px]">
      <h2 className="text-primary text-center font-bold text-[18px] leading-[28.13px] mb-7 lg:text-[32px] lg:leading-[50px] lg:mb-[54px]">
        فرهنگ سازمانی روناد
      </h2>

      <ul className="flex gap-x-6 mb-7 h-[30px] justify-center md:flex-row md:gap-x-[50px] md:mb-10 md:h-[35px]">
        {data.map(({ id, title }) => (
          <li
            key={id}
            className={`logistics__option ${
              selected === id ? "logistics__option--active" : ""
            }`}
            onClick={() => toggle(id)}
          >
            {title}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-y-[21px] lg:flex-row lg:items-center lg:gap-x-[77px]">
        {selected === 1 && (
          <>
            <p className="text-[14px] leading-[21.88px] text-justify h-[175px] lg:h-auto lg:text-[20px] lg:leading-[40px] lg:order-2 lg:flex-1">
              کار تیمی عبارت است از "فرایند کار مشترک با گروهی از افراد برای
              دستیابی به یک هدف مشترک". کار تیمی همیشه بخش مهمی از هر کسب‌وکار
              است، خصوصا در حوزه خدمات لجستیک که مستلزم هماهنگی و هم‌افزایی
              بخش‌های مختلفی از زنجیره تامین می‌باشد. ما در روناد تلاش میکنیم در
              فضایی دوستانه و صمیمی به عنوان یک تیم برای شرکای تجاریمان خلق ارزش
              کنیم.
            </p>
            <div className="md:order-1 lg:flex-1">
              <Image
                src="/images/culture-image1.png"
                width={646}
                height={364}
              />
            </div>
          </>
        )}
        {selected === 2 && (
          <>
            <p className="text-[14px] leading-[21.88px] text-justify h-[175px] lg:h-auto lg:text-[20px] lg:leading-[40px] lg:order-2 lg:flex-1">
              اگرچه ممکن است هر شخصی ابتکارات یادگیری قوی داشته باشد، بازنگری
              مجدد و اطمینان از ادامه تکامل این یادگیری برای برآورده کردن
              نیازهای در حال تغییر کسب و کارها و اعضای تیم بسیار مهم است. ما در
              روناد سعس کرده ایم به یادگیری در محل کار به عنوان راه حلی با
              کاربردهای استراتژیک، از جمله پتانسیل ایجاد تاثیر بزرگ بر رشد کسب و
              کار نگاه کنیم.
            </p>
            <div className="md:order-1 lg:flex-1">
              <Image
                src="/images/culture-image1.png"
                width={646}
                height={364}
              />
            </div>
          </>
        )}
        {selected === 3 && (
          <>
            <p className="text-[14px] leading-[21.88px] text-justify h-[175px] lg:h-auto lg:text-[20px] lg:leading-[40px] lg:order-2 lg:flex-1">
              مشتری امروز به لطف اینترنت، رسانه های اجتماعی و وب سایت های مختلف
              از سطح آگاهی نسبتا بالایی برخوردار است و در نتیجه توجیه دقیق محصول
              ارزش افزوده ای ندارد. ارزش افزوده واقعی در تجربه مشتری به دست می
              آید. بنابراین ما در روناد از قرار دادن مشتری و کارمند در مرکز و
              سرمایه گذاری روی کارمندان نمی ترسیم.
            </p>
            <div className="md:order-1 lg:flex-1">
              <Image
                src="/images/culture-image1.png"
                width={646}
                height={364}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default OrganizationCulture;

const data = [
  { id: 1, title: "کار تیمی" },
  { id: 2, title: "یادگیری" },
  { id: 3, title: "تجربه مشتری" },
];
