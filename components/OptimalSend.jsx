import Image from "next/image";

const OptimalSend = () => {
  return (
    <section className="bg-backgroundSecondary pt-[32px] pb-[61px] px-[30px] lg:px-[100px] xl:px-[150px] 2xl:px-[250px] 3xl:px-[380px]">
      <h2 className="optimal__title">بهینه ترین ارسال</h2>
      <p className="optimal__text">
        انتخاب هوشمندانه ناوگان ارسال بر اساس قیمت و کیفیت و فوریت ارسال کالا
      </p>
      <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 lg:gap-y-12 2xl:grid-cols-6">
        {mobileData.map(({ id, image, width, height }) => (
          <div key={id} className="self-center justify-self-center lg:hidden">
            <Image
              src={`/images/${image}-desktop.png`}
              width={width}
              height={height}
            />
          </div>
        ))}

        {desktopData.map(({ id, image, width, height }) => (
          <div
            key={id}
            className="hidden lg:flex lg:self-center lg:justify-self-center "
          >
            <Image
              src={`/images/${image}-desktop.png`}
              width={width}
              height={height}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OptimalSend;

const mobileData = [
  {
    id: 1,
    image: "post",
    width: 108,
    height: 54,
  },
  {
    id: 2,
    image: "snapp",
    width: 135,
    height: 43,
  },
  {
    id: 3,
    image: "link",
    width: 77,
    height: 44,
  },
  {
    id: 4,
    image: "peik",
    width: 58,
    height: 55,
  },
  {
    id: 5,
    image: "chapar",
    width: 100,
    height: 54,
  },

  {
    id: 6,
    image: "taarof",
    width: 44,
    height: 48,
  },
];

const desktopData = [
  {
    id: 1,
    image: "post",
    width: 124,
    height: 63,
  },
  {
    id: 2,
    image: "snapp",
    width: 176,
    height: 57,
  },
  {
    id: 3,
    image: "link",
    width: 89,
    height: 50,
  },
  {
    id: 4,
    image: "peik",
    width: 65,
    height: 64,
  },
  {
    id: 5,
    image: "chapar",
    width: 114,
    height: 61,
  },

  {
    id: 6,
    image: "taarof",
    width: 49,
    height: 56,
  },
];
