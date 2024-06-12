import QRCode from "../../components/QRCode";
import { useState } from "react";
import ScrollTop from "../../components/ScrollTop";
import VideoSection from "../../components/VideoSection";
import NetworkLogistics from "../../components/NetworkLogistics";
import MeetSection from "../../components/MeetSection";
import QRGallery from "../../components/QRGallery";
import Head from "next/head";
import QRFooter from "../../components/QRFooter";
import { useEffect } from "react";
import Page from "../../components/Page";

const index = () => {
  const [height, setHeight] = useState(null);
  
  
    return (
    <>
      <Page title=" دعوت به همکاری | روناد | سریع و هوشمند" isQR={true}>
      <Head>
      </Head>
      <main className="main-size">
        <ScrollTop height={height} />
        <QRCode />
        <VideoSection isQR={true} />
        <NetworkLogistics />
        <MeetSection />
        <QRGallery />
      </main>
      </Page>
    </>
  );
};

export default index;
