import { useRef, useState } from "react";
import { VideoIcon } from "./svgs/VideoIcon";

const Video = ({ isQR }) => {
  const videoRef = useRef(null);
  const [isPlayedVideo, setIsPlayedVideo] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlayedVideo(true);
  };

  return (
    <div className="w-full">
      <video
        poster={
          !isQR
            ? "/images/introPoster-transformed.jpeg"
            : "/images/QR_poster.jpg"
        }
        ref={videoRef}
        className="rounded-2xl"
        src={isQR ? "/videos/QR_Intro.mp4" : "/videos/intro.mp4"}
        controls
      ></video>
      {!isPlayedVideo && (
        <>
          <div className="video__icon" onClick={handlePlay}>
            <div className="md:hidden">
              <VideoIcon mobile />
            </div>
            <div className="hidden md:flex md:items-center  md:justify-center relative">
              <VideoIcon />
            </div>
          </div>
          <span className="video__animation"></span>
        </>
      )}
    </div>
  );
};

export default Video;
