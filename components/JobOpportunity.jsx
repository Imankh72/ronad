import { useState } from "react";
import { JobAccountBalanceIcon } from "./svgs/JobAccountBalanceIcon";
import { JobCodeSlashIcon } from "./svgs/JobCodeSlashIcon";
import { JobCogIcon } from "./svgs/JobCogIcon";
import { JobNumberTwo } from "./svgs/JobNumberTwo";
import { HumanResourceIcon } from "./svgs/HumanResourceIcon";
import { JobStatsChartIcon } from "./svgs/JobStatsChartIcon";
import { JobPenIcon } from "./svgs/JobPenIcon";
import { JobShakeHandIcon } from "./svgs/JobShakeHandIcon";
import { JobMegaPhoneIcon } from "./svgs/JobMegaPhoneIcon";
import { PenIcon } from "./svgs/PenIcon";
import { GroupIcon } from "./svgs/GroupIcon";
import { CodeSlashIcon } from "./svgs/CodeSlashIcon";
import LastJobCard from "./LastJobCard";

const JobOpportunity = () => {
  const [designerCategories, setDesignerCategories] = useState([
    { id: 1, category: "فیگما" },
    { id: 2, category: "ادوبی فتوشاپ" },
    { id: 3, category: "تجربه کاربری" },
  ]);
  const [humanExperCategories, setHumanExperCategories] = useState([
    { id: 1, category: "اکسل" },
  ]);
  const [frontEndCategories, setFrontEndCategories] = useState([
    { id: 1, category: "Next" },
  ]);

  return (
    <section className="pt-9 px-6 pb-[41px] lg:px-12 lg:pb-16 2xl:pt-[95px] 2xl:pr-[208px] 2xl:pl-[225px] 2xl:pb-[181px]">
      <h2 className="font-bold text-primary text-[20px] leading-[31.25px] mb-[14px] lg:text-[32px] lg:leading-[50px] lg:mb-7 2xl:mb-[37px]">
        دسته‌بندی فرصت‌های شغلی
      </h2>
      <div className="grid grid-cols-2 gap-3 mb-7 md:grid-cols-3 lg:mb-[47px] xl:grid-cols-4 2xl:gap-7">
        <div className="opportunity__card">
          <div className="opportunity__card__icon">
            <div className="lg:hidden">
              <JobAccountBalanceIcon mobile />
            </div>
            <div className="hidden opportunity__card__icon--primary lg:block">
              <JobAccountBalanceIcon />
            </div>
            <span className="opportunity__card__title">مالی و حسابداری</span>
          </div>
          <div className="lg:hidden">
            <JobNumberTwo mobile />
          </div>
          <div className="opportunity__card__number">
            <JobNumberTwo />
          </div>
        </div>
        <div className="opportunity__card">
          <div className="opportunity__card__icon">
            <div className="lg:hidden">
              <JobCodeSlashIcon mobile />
            </div>
            <div className="hidden opportunity__card__icon--secondary lg:block">
              <JobCodeSlashIcon />
            </div>
            <span className="opportunity__card__title">فنی و مهندسی</span>
          </div>
          <div className="lg:hidden">
            <JobNumberTwo mobile />
          </div>
          <div className="opportunity__card__number">
            <JobNumberTwo />
          </div>
        </div>
        <div className="opportunity__card">
          <div className="opportunity__card__icon">
            <div className="lg:hidden">
              <JobCogIcon mobile />
            </div>
            <div className="hidden opportunity__card__icon--primary lg:block">
              <JobCogIcon />
            </div>
            <span className="opportunity__card__title">عملیات</span>
          </div>
          <div className="lg:hidden">
            <JobNumberTwo mobile />
          </div>
          <div className="opportunity__card__number">
            <JobNumberTwo />
          </div>
        </div>
        <div className="opportunity__card">
          <div className="opportunity__card__icon">
            <div className="lg:hidden">
              <HumanResourceIcon mobile />
            </div>
            <div className="hidden opportunity__card__icon--primary lg:block">
              <HumanResourceIcon />
            </div>
            <span className="opportunity__card__title">منابع انسانی</span>
          </div>
          <div className="lg:hidden">
            <JobNumberTwo mobile />
          </div>
          <div className="opportunity__card__number">
            <JobNumberTwo />
          </div>
        </div>
        <div className="opportunity__card">
          <div className="opportunity__card__icon">
            <div className="lg:hidden">
              <JobStatsChartIcon mobile />
            </div>
            <div className="hidden opportunity__card__icon--secondary lg:block">
              <JobStatsChartIcon />
            </div>
            <span className="opportunity__card__title">هوش تجاری</span>
          </div>
          <div className="lg:hidden">
            <JobNumberTwo mobile />
          </div>
          <div className="opportunity__card__number">
            <JobNumberTwo />
          </div>
        </div>
        <div className="opportunity__card">
          <div className="opportunity__card__icon">
            <div className="lg:hidden">
              <JobPenIcon mobile />
            </div>
            <div className="hidden opportunity__card__icon--secondary lg:block">
              <JobPenIcon />
            </div>
            <span className="opportunity__card__title">محصول</span>
          </div>
          <div className="lg:hidden">
            <JobNumberTwo mobile />
          </div>
          <div className="opportunity__card__number">
            <JobNumberTwo />
          </div>
        </div>
        <div className="opportunity__card">
          <div className="opportunity__card__icon">
            <div className="lg:hidden">
              <JobShakeHandIcon mobile />
            </div>
            <div className="hidden opportunity__card__icon--primary lg:block">
              <JobShakeHandIcon />
            </div>
            <span className="opportunity__card__title">فروش و بازاریابی</span>
          </div>
          <div className="lg:hidden">
            <JobNumberTwo mobile />
          </div>
          <div className="opportunity__card__number">
            <JobNumberTwo />
          </div>
        </div>
        <div className="opportunity__card">
          <div className="opportunity__card__icon">
            <div className="lg:hidden">
              <JobMegaPhoneIcon mobile />
            </div>
            <div className="hidden opportunity__card__icon--primary lg:block">
              <JobMegaPhoneIcon />
            </div>
            <span className="opportunity__card__title">دیجیتال مارکتینگ</span>
          </div>
          <div className="lg:hidden">
            <JobNumberTwo mobile />
          </div>
          <div className="opportunity__card__number">
            <JobNumberTwo />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 justify-center items-center mb-[38px] sm:flex-row sm:gap-x-4 lg:mb-12 lg:gap-x-7 2xl:mb-[118px]">
        <button className="opportunity__btn opportunity__btn--primary">
          همه فرصت‌های شغلی
        </button>
        <button className="opportunity__btn opportunity__btn--secondary">
          کارآموزی در روناد
        </button>
      </div>
      <div className="flex justify-between items-center text-primary mb-6">
        <h3 className="font-bold text-[20px] leading-[31.25px] lg:text-[32px] lg:leading-[50px]">
          آخرین فرصت‌های شغلی
        </h3>
        <span className="text-[10px] leading-[15.63px] lg:text-[16px] lg:leading-[25px]">
          مشاهده همه
        </span>
      </div>
      <div className="flex flex-col gap-y-[11px] lg:gap-y-[26px]">
        <LastJobCard
          title="طراح محصول ( UI/UX Designer )"
          categories={designerCategories}
        >
          <PenIcon />
        </LastJobCard>
        <LastJobCard
          title="کارشناس نیروی انسانی"
          categories={humanExperCategories}
        >
          <GroupIcon />
        </LastJobCard>
        <LastJobCard
          title="برنامه نویس فرونت-اند ( Front-End Developer )"
          categories={frontEndCategories}
        >
          <CodeSlashIcon />
        </LastJobCard>
      </div>
    </section>
  );
};

export default JobOpportunity;
