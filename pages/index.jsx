import { useState } from "react";
import FAQSection from "../components/FAQSection";
import HeroSection from "../components/HeroSection";
import OnlineStoreSection from "../components/OnlineStoreSection";
import OurCustomersSection from "../components/OurCustomersSection";
import OnlineSaleSection from "../components/OnlineSaleSection";
import VideoSection from "../components/VideoSection";
import ScrollTop from "../components/ScrollTop";
import Page from "../components/Page";

const Home = () => {
  const [sticky, setSticky] = useState(false);
  const [height, setHeight] = useState(null);

  return (
    <Page title="خدمات هوشمند انبارداری، بسته‌بندی و ارسال | روناد | سریع و هوشمند" sticky={sticky} setSticky={setSticky} content="ما در روناد با بهینه‌سازی فرآیند نگهداری و آماده‌سازی سفارشات، سرعت ارسال به خریداران را افزایش داده و با کاهش هزینه‌ها به رشد کسب و کار شما کمک می‌کنیم.">
      <ScrollTop height={height} />
      <HeroSection
        height={height}
        setHeight={setHeight}
        sticky={sticky}
        setSticky={setSticky}
      />
      <VideoSection />
      <OnlineStoreSection height={height} />
      <OnlineSaleSection />
      <OurCustomersSection />
      <FAQSection />
    </Page>
  );
};

export default Home;
