import { useRef, useState } from "react";
import Image from "next/image";
import ModalVideoPlayer from "./ModalVideoPlayer";
import { VideoIcon } from "./svgs/VideoIcon";

const LifeSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="pb-[55px] mt-[71px] xl:relative 2xl:pb-[135px]">
        <div className="bg-primary pt-[34px] px-6 pb-4 2xl:pt-[138px] 2xl:pr-[225px]">
          <h2 className="career__heading text-white">
            ارزش‌هایی برای زندگی، نه محیط کار...
          </h2>
          <p className="career__text text-white xl:w-[45%] 3xl:w-[685px]">
            روناد بیشتر از استارتاپ !!! <br /> دریچه‌ای به سمت ارزش‌های مشترک
            است که شما را به کسی که دوست دارید باشید نزدیک می‌کند. اگر برای یک
            فضای پرجنب و جوش، خلاق و سریع آماده‌اید؛ این یک دعوت‌نامه‌ی رسمی
            برای حضور شما در روناد است.
          </p>
        </div>
        <div className="bg-primary px-6 mb-[32px] pb-[141px] lg:bg-white 2xl:pt-4 2xl:pr-[225px]">
          <p className="career__text text-white lg:text-primary xl:w-[45%] 3xl:w-[685px]">
            ارزش، هستۀ مرکزی هر اتفاقی‌ست که در روناد می‌افتد. این ارزش‌ها به
            هرکار ما هویت و معنا می‌بخشد. همۀ ما راهی یک سفر مشترک برای رسیدن‌
            به ارزش‌هایمان هستیم. یک سفر قهرمانی...
          </p>
        </div>
        <div className="px-6 flex justify-center -mt-[135px] xl:absolute xl:left-1 xl:top-48 2xl:top-64 2xl:left-5 3xl:left-40">
          <div className="w-[315px] h-[210px] relative z-0 md:w-[380px] md:h-[250px] lg:w-[635px] lg:h-[423px]">
            <Image src="/images/life-desktop.png" width={635} height={423} />
            <div className="w-[315px] h-[210px] absolute -left-2 -top-2 -z-10 md:w-[380px] md:h-[250px] lg:w-[635px] lg:h-[423px] lg:-top-3 lg:-left-3">
              <Image
                src="/images/life-shadow-desktop.png"
                width={635}
                height={423}
              />
            </div>
            <div className="w-[89px] h-[65px] absolute -right-2 -bottom-2 -z-10 lg:w-[180px] lg:h-[130px] lg:-right-5 lg:-bottom-3">
              <Image src="/images/life-ellipse.png" width={180} height={130} />
            </div>
            <div
              className="video__icon"
              onClick={() => {
                setShowVideo(true);
              }}
            >
              <div className="md:hidden">
                <VideoIcon mobile />
              </div>
              <div className="hidden md:flex md:items-center  md:justify-center relative">
                <VideoIcon />
              </div>
            </div>
            <span className="video__animation"></span>
          </div>
        </div>
        <div className="px-6 mt-[52px] flex flex-col items-center gap-y-7 xl:flex-row xl:items-center xl:gap-x-8 xl:px-10 2xl:pr-[250px] 2xl:gap-x-[143px] 3xl:pl-[261px] ">
          <div className="xl:order-2">
            <h2 className="career__heading text-primary">
              قصه‌هایی برای زندگی و کار
            </h2>
            <p className="career__text lg:text-primary">
              زندگی، کار و قصه‌ها در روناد باهم گره خورده. قصه‌هایی منحصر به
              آدم‌های منحصر به فرد روناد.قصه‌ای از موفقیت‌ها، چالش‌ها و
              جذابیت‌های بودن در روناد.
            </p>
          </div>
          <div className="xl:order-1">
            <div className="w-[315px] h-[210px] relative z-0 md:w-[380px] md:h-[250px] lg:w-[635px] lg:h-[423px]">
              <Image src="/images/life-desktop.png" width={635} height={423} />
              <div className="w-[89px] h-[65px] absolute -right-3 -top-2 -z-10 lg:w-[180px] lg:h-[130px] lg:-right-5 lg:-bottom-3">
                <Image
                  src="/images/life-ellipse.png"
                  width={180}
                  height={130}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideoPlayer
        showModal={showVideo}
        setShowModal={setShowVideo}
        video="video"
      />
    </>
  );
};

export default LifeSection;
