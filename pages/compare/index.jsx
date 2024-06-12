import CompareSection from "../../components/CompareSection";
import LandingPanel from "../../components/LandingPanel";
import LandingSend from "../../components/LandingSend";
import OnlineBusiness from "../../components/OnlineBusiness";
import RonadVsNationalPost from "../../components/RonadVsNationalPost";
import SendDeliveryOrders from "../../components/SendDeliveryOrders";
import RonadSuggestions from "../../components/RonadSuggestions";
import RonadBenefits from "../../components/RonadBenefits";
import Footer from "../../components/Footer";

const Compare = () => {
  return (
    <>
      <main className="main-size">
        <CompareSection />
        <OnlineBusiness />
        <RonadVsNationalPost />
        <SendDeliveryOrders />
        <LandingPanel />
        <RonadBenefits />
        <LandingSend />
        <RonadSuggestions />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Compare;
