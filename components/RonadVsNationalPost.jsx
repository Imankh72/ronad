import HoldProcess from "./HoldProcess";
import Signature from "./svgs/Signature";

const RonadVsNationalPost = () => {
  return (
    <section>
      <div className="px-[30px] pt-[43px] 3xl:pt-[106px]">
        <h2 className="font-black text-primary text-center leading-[30px] lg:text-[32px] lg:leading-[50px]">
          خدمات{" "}
          <span className="text-orange relative">
            روناد
            <div className="absolute left-1/2 translate-x-[-50%] -bottom-2 lg:-bottom-6">
              <Signature />
            </div>
          </span>{" "}
          در مقایسه با شرکت ملی پست
        </h2>
      </div>
      <HoldProcess />
    </section>
  );
};

export default RonadVsNationalPost;
