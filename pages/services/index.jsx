import { useState } from "react";
import RonadNetworkSection from "../../components/RonadNetworkSection";
import TransportSection from "../../components/TransportSection";
import LogisticsPanelSection from "../../components/LogisticsPanelSection";
import NetworkLogistics from "../../components/NetworkLogistics";
import ScrollTop from "../../components/ScrollTop";
import Page from "../../components/Page";
import FreeLogistics from "../../components/FreeLogistics";

const Services = () => {
  const [sticky, setSticky] = useState(true);
  const [height, setHeight] = useState(null);

  return (
    <Page
      title="خدمات ارائه شده به کسب و کارها | روناد | سریع و هوشمند"
      content="با پیشرفت تجارت الکترونیک و نیازمندی به خدمات زنجیره لجستیک، روناد با استفاده از تخصص و علم روز دنیا، در کنار کسب و کارها و فروشگاه‌های اینترنتی ایستاده‌است."
      sticky={sticky}
    >
      <ScrollTop height={height} />
      <RonadNetworkSection setHeight={setHeight} />
      <FreeLogistics />
      <TransportSection />
      <LogisticsPanelSection />
      <NetworkLogistics />
    </Page>
  );
};

export default Services;
