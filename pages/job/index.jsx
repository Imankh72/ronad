import { useState } from "react";
import Page from "../../components/Page";
import ScrollTop from "../../components/ScrollTop";
import { JobBriefCaseIcon } from "../../components/svgs/JobBriefCaseIcon";
import { JobCashIcon } from "../../components/svgs/JobCashIcon";
import { JobClockIcon } from "../../components/svgs/JobClockIcon";
import { JobGraduateIcon } from "../../components/svgs/JobGraduateIcon";
import { JobMapIcon } from "../../components/svgs/JobMapIcon";
import { JobMedalIcon } from "../../components/svgs/JobMedalIcon";
import { JobNewsPaperIcon } from "../../components/svgs/JobNewsPaperIcon";
import { PenBlueIcon } from "../../components/svgs/PenBlueIcon";
import { OrangeCheckMarkIcon } from "../../components/svgs/OrangeCheckMarkIcon";

const Job = () => {
  const [sticky, setSticky] = useState(true);
  const [height, setHeight] = useState(null);

  return (
    <Page title="روناد | سریع و هوشمند" sticky={sticky}>
      <ScrollTop height={height} />
      <section className="">
        <div className="pt-[91px] px-[30px] pb-6 bg-backgroundSecondary mb-[15px] lg:pt-[111px] 2xl:pr-[154px] 2xl:pl-[181px] lg:pb-5">
          <h6 className="text-[12px] leading-[18.75px] text-darkBlue mb-4 lg:text-[16px] lg:leading-[25px] lg:mb-[25px]">
            <span className="border-b border-primary text-primary font-bold">
              فرصت‌های شغلی
            </span>{" "}
            / طراح محصول ( UI/UX Designer )
          </h6>
          <div className="flex flex-col gap-y-[15px] lg:flex-row lg:justify-between lg:items-center">
            <div className="flex gap-x-9">
              <div className="hidden lg:block lg:-mb-10">
                <PenBlueIcon />
              </div>
              <div className="self-center">
                <span className="text-orange text-[14px] leading-[21.88px] mb-2 lg:text-[18px] lg:leading-[28.13px] lg:mb-[3px]">
                  تمام وقت / حضوری
                </span>
                <h2 className="font-bold text-primary lg:text-[32px] lg:leading-[50px]">
                  طراح محصول ( UI/UX Designer )
                </h2>
              </div>
            </div>
            <div>
              <button className="text-primary border border-primary flex justify-center items-center text-[14px] leading-[21.88px] w-[97px] h-[44px] rounded-[5px] lg:text-[16px] lg:leading-[25px] lg:w-[122px] lg:h-[49px] lg:transition-all lg:duration-200 lg:hover:font-bold lg:hover:outline lg:hover:outline-1 lg:hover:outline-primary">
                ارسال رزومه
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-7 pb-[61px] lg:flex-row lg:gap-x-[60px] lg:pt-[30px] 2xl:gap-x-[92px] 2xl:pr-[155px] 2xl:pl-[162px] 2xl:pt-[45px] 2xl:pb-[155px]">
          <div className="px-[14px] lg:order-2 lg:flex-1 2xl:flex-1">
            <div className="bg-backgroundSecondary rounded-[10px] pt-[22px] pr-[27px] pl-[29px] pb-6 mb-[15px] lg:pt-6 lg:px-[27px] lg:pb-[30px] lg:mb-[27px]">
              <h4 className="text-darkBlue leading-[25px] mb-4 ">
                اطلاعات تکمیلی
              </h4>
              <div className="h-[1px] opacity-10 bg-darkBlue mb-5"></div>
              <div>
                <div className="flex flex-col gap-y-5 text-darkBlue text-[14px] leading-[21.88px] mb-[15px] lg:text-[18px] lg:leading-[28.13px] lg:gap-y-[25px]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="lg:hidden">
                        <JobClockIcon mobile />
                      </div>
                      <div className="hidden lg:block">
                        <JobClockIcon />
                      </div>
                      <span>تاریخ ایجاد</span>
                    </div>
                    <span className="opacity-50">۱۱ شهریور ۱۴۰۱</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="lg:hidden">
                        <JobMapIcon mobile />
                      </div>
                      <div className="hidden lg:block">
                        <JobMapIcon />
                      </div>
                      <span>موقعیت</span>
                    </div>
                    <span className="opacity-50">تهران</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="lg:hidden">
                        <JobCashIcon mobile />
                      </div>
                      <div className="hidden lg:block">
                        <JobCashIcon />
                      </div>
                      <span>حقوق پیشنهادی</span>
                    </div>
                    <span className="opacity-50">۱۰ میلیون تومان</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="lg:hidden">
                        <JobBriefCaseIcon mobile />
                      </div>
                      <div className="hidden lg:block">
                        <JobBriefCaseIcon />
                      </div>
                      <span>دپارتمان</span>
                    </div>
                    <span className="opacity-50">تیم محصول</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="lg:hidden">
                        <JobNewsPaperIcon mobile />
                      </div>
                      <div className="hidden lg:block">
                        <JobNewsPaperIcon />
                      </div>
                      <span>سابقه مرتبط</span>
                    </div>
                    <span className="opacity-50">۱ سال</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="lg:hidden">
                        <JobGraduateIcon mobile />
                      </div>
                      <div className="hidden lg:block">
                        <JobGraduateIcon />
                      </div>
                      <span>مدرک تحصیلی</span>
                    </div>
                    <span className="opacity-50">گرافیک / کامپیوتر</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="lg:hidden">
                        <JobMedalIcon mobile />
                      </div>
                      <div className="hidden lg:block">
                        <JobMedalIcon />
                      </div>
                      <span>وضعیت نظام وظیفه</span>
                    </div>
                    <span className="opacity-50">انجام شده</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-backgroundSecondary pt-[22px] px-[27px] pb-[30px] rounded-[10px] text-[#192146">
              <h3 className="leading-[25px] mb-4 lg:text-[18px] lg:leading-[28.13px] lg:mb-[18px]">
                مهارت‌های مورد نیاز
              </h3>
              <div className="h-[1px] opacity-10 bg-darkBlue mb-[26px] lg:mb-5"></div>
              <div className="flex gap-x-[10px]">
                <div className="job__category">فیگما</div>
                <div className="job__category">ادوبی فتوشاپ</div>
                <div className="job__category">تجربه کاربری</div>
              </div>
            </div>
          </div>
          <div className="text-darkBlue px-[29px] lg:order-1 lg:flex-[1.5] 2xl:flex-[1.75] 3xl:flex-[2.5]">
            <h3 className="text-primary font-bold text-[20px] leading-[31.25px] mb-2 lg:text-[26px] lg:leading-[40.63px]">
              شرح موقعیت شغلی
            </h3>
            <div className="h-[3px] bg-orange rounded-lg w-[30px] mb-[10px]"></div>
            <p className="text-justify text-[14px] leading-[40px] lg:text-[20px] mb-[18px] lg:mb-[31px]">
              ما در راستای توسعه تیم محصول در جستجوی طراح رابط کاربری UI و
              کارشناس UX با تجربه و خلاق هستیم. شما قرار است در تعامل با تیم‌های
              برنامه نویسی و سایر تیم‌های شرکت به ما در راستای طراحی تجربه
              کاربری و رابط کاربری کمک کنید. عمده زمینه محصولات اپلیکیشن موبایل
              و وب است. ما انتظار داریم شما قدرت تصمیم گیری و انتخاب مناسب ترین
              طرح با توجه به نوع پروژه و نیاز بازار را داشته باشید.
            </p>
            <h3 className="text-primary font-bold text-[20px] leading-[31.25px] mb-2 lg:text-[26px] lg:leading-[40.63px]">
              مسئولیت‌ها
            </h3>
            <div className="h-[3px] bg-orange rounded-lg w-[30px] mb-[10px]"></div>
            <ul className="mb-[14px] lg:mb-[31px]">
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  در این فرصت شغلی نیاز است که شما در تعامل با تیم‌های برنامه
                  نویسی و سایر تیم‌های شرکت علاوه بر کار در محیط Agile توانایی
                  حفظ یکپارچگی تصمیمات طراحی و UI را داشته باشید.
                </p>
              </li>
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  توانایی ایجاد, بهینه سازی و استفاده از وایرفریم ها، Prototype
                  ،Style guide ،User-flow را داشته باشید و بتوانید ایده های خود
                  را پیاده سازی کنید.
                </p>
              </li>
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  توانایی پیاده سازی طرح بر اساس نیاز پروژه و رعایت دید کلی و
                  هدف تایین شده در تک تک بخشهایی که طراحی میکنید مانند ترکیب رنگ
                  و سایز و .... که نیازمند دید کلی طراح به پروژه است.
                </p>
              </li>
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  توانایی آپدیت بودن با جدید ترین استانداردهای طراحی رابط کاربری
                  و نرم افزارهای مرتبط با آن.
                </p>
              </li>
            </ul>
            <h3 className="text-primary font-bold text-[20px] leading-[31.25px] mb-2 lg:text-[26px] lg:leading-[40.63px]">
              الزامات
            </h3>
            <div className="h-[3px] bg-orange rounded-lg w-[30px] mb-[10px]"></div>
            <ul className="mb-[1px] lg:mb-[31px]">
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  داشتن تجربه در ایجاد Wireframe , Prototype , Storyboard ,
                  User-flow, Mockup و ....
                </p>
              </li>
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  تجربه استفاده از نرم افزارهای طراحی مانند Adobe XD، Figma،
                  Sketch و ...
                </p>
              </li>
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  انجام تست‌های کاربردپذیری (Usability Test) و تسلط بر مفاهیم
                  کاربردپذیری
                </p>
              </li>
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  داشتن ایده های خلاقانه برای رفع مشکلات و ارائه راه حل
                </p>
              </li>
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  دریافت انتقادات و پیشنهادات از اعضای تیم و اعمال آن برای بهبود
                  کیفیت محصول
                </p>
              </li>
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  تحقیق و طراحی نمونه‌های جدید UX با همکاری مدیر محصول
                </p>
              </li>
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  توانایی ارائه طرح‌ها و برنامه‌های اجرایی به تیم فنی، مارکتینگ
                  و مدیران‎
                </p>
              </li>
            </ul>
            <h3 className="text-primary font-bold text-[20px] leading-[31.25px] mb-2 lg:text-[26px] lg:leading-[40.63px]">
              موارد زیر مزیت محسوب می‌گردد
            </h3>
            <div className="h-[3px] bg-orange rounded-lg w-[30px] mb-[10px]"></div>
            <ul className="mb-[14px]">
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  آشنایی با زبان‌های برنامه نویسی تحت وب مانند JavaScript , CSS3
                  , HTML5
                </p>
              </li>
              <li className="flex gap-x-[9px]">
                <div className="mt-2">
                  <OrangeCheckMarkIcon />
                </div>
                <p className="text-justify text-[14px] leading-[40px] lg:text-[20px]">
                  آشنایی با مفاهیم اسکرام
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Job;
