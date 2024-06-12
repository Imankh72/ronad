import Video from "./Video";
import { VideoSectionEllipseTop } from "./svgs/VideoSectionEllipseTop";
import { VideoSectionEllipseBottom } from "./svgs/VideoSectionEllipseBottom";

const VideoSection = ({ isQR }) => {
  return (
    <>
      <section className="py-[18px] px-6 sm:pt-[33px] sm:text-center md:pb-7 md:px-[100px] xl:px-[150px]">
        <h2 className="heading--primary mb-3 sm:mb-8 md:mb-12 md:whitespace-nowrap lg:text-center lg:mb-14 2xl:mb-16">
          نسل جدید خدمات فرا ارسال برای فروشگاه‌های آنلاین
        </h2>
        <div className="video">
          <div className="mb-2 relative z-0 w-full lg:w-[1012px] lg:h-[568px]">
            <Video isQR={isQR} />
            <div className="absolute -left-1 -top-[6px] -z-10 md:hidden">
              <VideoSectionEllipseTop mobile />
            </div>
            <div className="hidden md:block md:absolute md:-left-6 md:-top-8 md:-z-10">
              <VideoSectionEllipseTop />
            </div>
            <div className="absolute -right-[10px] -bottom-[6px] -z-10 md:hidden">
              <VideoSectionEllipseBottom mobile />
            </div>
            <div className="hidden md:block md:absolute md:-right-[3.25rem] md:-bottom-6 md:-z-10 lg:bottom-16 lg:-right-8 xl:-bottom-6 xl:-right-[3.25rem]">
              <VideoSectionEllipseBottom />
            </div>
          </div>
        </div>
        <p className="text md:text-center">
          روناد بازوی لجستیکی برای فروش آنلاین است که از انبارش تا بسته‌بندی و
          ارسال را بر عهده می‌گیرد. ما اینجاییم تا با مدیریت بار عملیاتی، به رشد
          کسب‌وکار شما سرعت ببخشیم.
        </p>
      </section>
    </>
  );
};

export default VideoSection;
