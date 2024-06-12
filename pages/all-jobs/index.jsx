import { useState } from "react";
import Page from "../../components/Page";
import ScrollTop from "../../components/ScrollTop";
import { GroupIcon } from "../../components/svgs/GroupIcon";
import { PenIcon } from "../../components/svgs/PenIcon";
import { CodeSlashIcon } from "../../components/svgs/CodeSlashIcon";
import LastJobCard from "../../components/LastJobCard";

const AllJobs = () => {
  const [sticky, setSticky] = useState(true);
  const [height, setHeight] = useState(null);
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
    <Page title="روناد | سریع و هوشمند" sticky={sticky}>
      <ScrollTop height={height} />
      <section className="pt-[72px] pb-[51px] lg:pt-[86px] 2xl:pb-[211px]">
        <div className="bg-backgroundSecondary pt-[19px] px-[30px] pb-[55px] 2xl:pr-[154px] 2xl:pt-[25px] 2xl:pb-[59px]">
          <p className="text-[12px] leading-[18.75px] mb-4 text-darkBlue lg:text-[16px] lg:leading-[25px] lg:mb-[29px]">
            <span className="text-primary border-b border-primary">
              فرصت‌های شغلی
            </span>{" "}
            / همه فرصت‌های شغلی
          </p>
          <h2 className="text-[20px] leading-[31.25px] text-primary font-bold lg:text-[32px] lg:leading-[50px] lg:pr-[54px]">
            همه فرصت‌های شغلی
          </h2>
        </div>
        <div className="flex flex-col gap-y-[26px] px-[14px] -mt-10 2xl:px-[209px]">
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
    </Page>
  );
};

export default AllJobs;
