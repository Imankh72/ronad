import { useState } from "react";
import BeyondServices from "../../components/BeyondServices";
import HoldProcess from "../../components/HoldProcess";
import LandingPanel from "../../components/LandingPanel";
import LandingProperties from "../../components/LandingProperties";
import LandingSend from "../../components/LandingSend";
import OptimalSend from "../../components/OptimalSend";
import RonadSuggestions from "../../components/RonadSuggestions";
import ScrollTop from "../../components/ScrollTop";
import QRFooter from "../../components/QRFooter";

const LandingAds = () => {
  const [height, setHeight] = useState(null);

  return (
    <>
      <main className="main-size">
        <ScrollTop height={height} />
        <BeyondServices />
        <OptimalSend />
        <HoldProcess />
        <LandingSend />
        <LandingPanel />
        <LandingProperties />
        <RonadSuggestions />
      </main>
      <footer>
        <QRFooter />
      </footer>
    </>
  );
};

export default LandingAds;
