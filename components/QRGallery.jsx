import Image from "next/image";

const QRGallery = () => {
  return (
    <section className="py-5 flex flex-col items-center md:grid md:grid-cols-3 md:grid-row-2 md:pb-0 2xl:grid-rows-2 2xl:grid-cols-3 2xl:pt-[163px]">
      <div className="w-[313px] h-[526px] md:relative md:z-0 md:w-full md:h-full md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3">
        <img
          className="w-full object-cover h-full"
          src="/images/qr-image1.jpg"
        />
        <div className="hidden md:flex md:opacity-0 md:absolute md:top-0 md:left-0 md:bg-primary md:text-white md:font-bold md:justify-center md:items-center md:text-[28px] md:leading-[40px] md:w-full md:h-full md:z-30 md:transition-all md:duration-300">
          انبارش و نگه داری
        </div>
      </div>
      <div className="w-[313px] h-[151px] md:relative md:z-0 md:w-full md:h-full md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2">
        <img
          className="w-full object-cover h-full"
          src="/images/qr-image2.png"
        />
        <div className="hidden md:flex md:opacity-0 md:absolute md:top-0 md:left-0 md:bg-primary md:text-white md:font-bold md:justify-center md:items-center md:text-[28px] md:leading-[40px] md:w-full md:h-full md:z-30 md:transition-all md:duration-300">
          ارسال به مشتری
        </div>
      </div>
      <div className="w-[313px] h-[313px] md:relative md:z-0 md:w-full md:h-full md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
        <img
          className="w-full object-cover h-full"
          src="/images/qr-image3.png"
        />
        <div className="hidden md:flex md:opacity-0 md:absolute md:top-0 md:left-0 md:bg-primary md:text-white md:font-bold md:justify-center md:items-center md:text-[28px] md:leading-[40px] md:w-full md:h-full md:z-30 md:transition-all md:duration-300">
          بسته‌بندی
        </div>
      </div>
      <div className="w-[313px] h-[313px] md:relative md:z-0 md:w-full md:h-full md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
        <img
          className="w-full object-cover h-full"
          src="/images/qr-image4.png"
        />
        <div className="hidden md:flex md:opacity-0 md:absolute md:top-0 md:left-0 md:bg-primary md:text-white md:font-bold md:justify-center md:items-center md:text-[28px] md:leading-[40px] md:w-full md:h-full md:z-30 md:transition-all md:duration-300">
          بررسی و کنترل کیفیت کالا
        </div>
      </div>
    </section>
  );
};

export default QRGallery;
