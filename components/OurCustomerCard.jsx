import Image from "next/image";

const OurCustomerCard = ({
  image,
  mobileWidth,
  badgeText,
  title,
  text,
  orangeText,
  onClick,
  hour,
}) => {
  return (
    <div className="our-customer__card">
      <div className="relative md:mb-2 lg:mb-4">
        <div className="lg:hidden">
          <Image
            src={`/images/${image}-poster.png`}
            width={mobileWidth}
            height={160}
            className="rounded-lg"
          />
        </div>
        <div className="hidden lg:block rounded-lg">
          <Image
            src={`/images/${image}-poster.png`}
            width={489}
            height={275}
            className="rounded-xl"
          />
        </div>
        <div
          className="video__icon"
          onClick={() => {
            onClick(true);
          }}
        >
          <div className="lg:hidden">
            <Image src="/images/play-icon.svg" width={10} height={9} />
          </div>
          <div className="hidden lg:flex lg:items-center  lg:justify-center">
            <Image src="/images/play-icon.svg" width={20} height={19} />
          </div>
        </div>
        <span className="video__animation"></span>
        <span className="customer__badge">{badgeText}</span>
      </div>
      {hour ? (
        <h3 className="customer__heading">
          {title}
          <span className="customer__number">{orangeText}</span> ساعت
        </h3>
      ) : (
        <h3 className="customer__heading">
          <span className="customer__number"> {orangeText} </span>
          {title}
        </h3>
      )}

      <p className="customer__text">{text}</p>
    </div>
  );
};

export default OurCustomerCard;
