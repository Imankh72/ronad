import { useState } from "react";
import EmploymentSection from "../../components/EmploymentSection";
import GallerySection from "../../components/GallerySection";
import Internship from "../../components/Internship";
import JobOpportunity from "../../components/JobOpportunity";
import LifeSection from "../../components/LifeSection";
import OrganizationCulture from "../../components/OrganizationCulture";
import Page from "../../components/Page";
import ScrollTop from "../../components/ScrollTop";

const index = () => {
  const [sticky, setSticky] = useState(true);
  const [height, setHeight] = useState(null);

  return (
    <Page
      title="روناد | سریع و هوشمند"
      content="قیمت‌گذاری روناد منعکس‌کننده کلیه هزینه‌ها از لحظه تامین کالا تا نگهداری و تحویل سفارش به خریدار است. هزینه‌ها منعطف و بر اساس نیازمندی هر کسب و کاری محاسبه می‌شوند."
      sticky={sticky}
    >
      <ScrollTop height={height} />
      <LifeSection />
      <GallerySection />
      <EmploymentSection />
      <OrganizationCulture />
      <JobOpportunity />
      <Internship />
    </Page>
  );
};

export default index;
