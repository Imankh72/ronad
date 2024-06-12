import Link from "next/link";
import { CheckMarkIcon } from "./svgs/CheckMarkIcon";

const RonadSuggestionsCard = ({
  option,
  price,
  perOrder,
  text,
  processText,
  btnText,
  primary,
}) => {
  return (
    <div
      className={`ronad-suggestions__card ${
        primary ? "bg-[#192146] text-white pb-[40px] pt-[34px] px-10" : ""
      }`}
    >
      <span className="leading-[32px] lg:text-[20px] lg:leading-[40px]">
        پکیج
      </span>
      <h4
        className={`font-bold text-[21px] leading-[42px] pb-[11px] mb-[5px] border-b lg:mb-1 lg:pb-4 lg:text-[32px] lg:leading-[64px] ${
          primary ? "border-white" : "border-primary"
        }`}
      >
        {option}
      </h4>
      <p
        className={`text-[18px] leading-[36px] pb-[5px] border-b mb-[18px] sm:whitespace-nowrap lg:pt-3 ${
          primary ? "border-white" : "border-primary"
        } lg:text-[21px] lg:leading-[42px] lg:pb-1 lg:mb-[29px]`}
      >
        <bold className="font-bold text-[32px] leading-[64px] lg:text-[32px] lg:leading-[64px]">
          {price}
        </bold>{" "}
        {perOrder ? perOrder : ""}
      </p>
      <ul
        className={`flex flex-col gap-y-[10px] mb-12 lg:gap-y-6 ${
          primary ? "lg:mb-[130px]" : "lg:mb-[79px]"
        }`}
      >
        <li className="flex gap-x-2 lg:gap-x-[11px]">
          <div className="mt-2 lg:hidden">
            <CheckMarkIcon primary={primary ? primary : null} mobile />
          </div>
          <div className="hidden lg:block lg:mt-2 2xl:mt-[6px]">
            <CheckMarkIcon primary={primary ? primary : null} />
          </div>
          <p className="text-[14px] leading-[30px] lg:text-[20px] lg:leading-[30px]">
            {text ? text : "کنترل کیفی در لحظه ورود (بررسی کالا)"}
          </p>
        </li>
        <li className="flex gap-x-2 lg:gap-x-[11px]">
          <div className="mt-2 lg:hidden">
            <CheckMarkIcon primary={primary ? primary : null} mobile />
          </div>
          <div className="hidden lg:block lg:mt-2 2xl:mt-[6px]">
            <CheckMarkIcon primary={primary ? primary : null} />
          </div>
          <p className="text-[14px] leading-[30px] lg:text-[20px] lg:leading-[30px]">
            نصب لیبل بر روی کالا
          </p>
        </li>
        <li className="flex gap-x-2 lg:gap-x-[11px]">
          <div className="mt-2 lg:hidden">
            <CheckMarkIcon primary={primary ? primary : null} mobile />
          </div>
          <div className="hidden lg:block lg:mt-2 2xl:mt-[6px]">
            <CheckMarkIcon primary={primary ? primary : null} />
          </div>
          <p className="text-[14px] leading-[30px] lg:text-[20px] lg:leading-[30px]">
            ۱۵ روز انبارش و نگهداری رایگان
          </p>
        </li>
        <li className="flex gap-x-2 lg:gap-x-[11px]">
          <div className="mt-2 lg:hidden">
            <CheckMarkIcon primary={primary ? primary : null} mobile />
          </div>
          <div className="hidden lg:block lg:mt-2 2xl:mt-[6px]">
            <CheckMarkIcon primary={primary ? primary : null} />
          </div>
          <p className="text-[14px] leading-[30px] lg:text-[20px] lg:leading-[30px]">
            {processText}
          </p>
        </li>
        <li className="flex gap-x-2 lg:gap-x-[11px]">
          <div className="mt-2 lg:hidden">
            <CheckMarkIcon primary={primary ? primary : null} mobile />
          </div>
          <div className="hidden lg:block lg:mt-2 2xl:mt-[6px]">
            <CheckMarkIcon primary={primary ? primary : null} />
          </div>
          <p className="text-[14px] leading-[30px] lg:text-[20px] lg:leading-[30px]">
            {primary
              ? "تحویل به خریدار نهایی طبق زمان‌بندی"
              : " تحویل به خریدار نهایی تا حداکثر یک ساعت پس از پردازش ( تهران )"}
          </p>
        </li>
      </ul>
      <div>
        <Link href="contact-us">
          <button
            className={`ronad-suggestions__card__btn ${
              primary
                ? "bg-[#F0774C] text-white border-0 lg:hover:bg-[#E25100]"
                : ""
            }`}
          >
            {btnText}
          </button>
        </Link>
      </div>
      {primary && (
        <div className="ronad-suggestions__card__badge">پیشنهاد روناد</div>
      )}
    </div>
  );
};

export default RonadSuggestionsCard;
