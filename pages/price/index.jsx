import { useState } from "react";
import PriceSection from "../../components/PriceSection";
import BillSection from "../../components/BillSection";
import QuestionSection from "../../components/QuestionSection";
import PriceFAQSection from "../../components/PriceFAQSection";
import ScrollTop from "../../components/ScrollTop";
import Page from "../../components/Page";

const index = () => {
  const [sticky, setSticky] = useState(true);
  const [height, setHeight] = useState(null);

  return (
    <Page title="تعرفه خدمات لجستیک | روناد | سریع و هوشمند" content="قیمت‌گذاری روناد منعکس‌کننده کلیه هزینه‌ها از لحظه تامین کالا تا نگهداری و تحویل سفارش به خریدار است. هزینه‌ها منعطف و بر اساس نیازمندی هر کسب و کاری محاسبه می‌شوند." sticky={sticky}>
      <ScrollTop height={height} />
      <PriceSection setHeight={setHeight} />
      <BillSection />
      <QuestionSection />
      <PriceFAQSection />
    </Page>
  );
};

export default index;
