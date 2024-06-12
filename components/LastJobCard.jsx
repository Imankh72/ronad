import { BriefCaseIcon } from "./svgs/BriefCaseIcon";
import { CashIcon } from "./svgs/CashIcon";
import { MapIcon } from "./svgs/MapIcon";
import { TimeIcon } from "./svgs/TimeIcon";

const LastJobCard = ({ children, title, categories }) => {
  return (
    <div className="last-job__card">
      <div className="last-job__card__image">
        <div>{children}</div>
      </div>
      <div className="w-full">
        <h3 className="last-job__card__title">{title}</h3>
        <div className="flex justify-between items-center text-darkBlue lg:mb-[25px]">
          <div className="flex gap-x-[5px] lg:gap-x-[10px]">
            {categories.map(({ category, id }) => (
              <div key={id} className="last-job__card__category">
                {category}
              </div>
            ))}
          </div>
          <span className="text-center text-[10px] leading-[15.63px] lg:text-[18px] lg:leading-[28.13px]">
            تمام وقت <br className="lg:hidden" />{" "}
            <span className="hidden lg:inline">/</span> حضوری
          </span>
        </div>
        <div className="flex gap-x-3 text-darkBlue lg:gap-x-[50px]">
          <div className="flex items-center gap-x-1 lg:gap-x-2">
            <div className="lg:hidden">
              <BriefCaseIcon mobile />
            </div>
            <div className="hidden lg:block">
              <BriefCaseIcon />
            </div>
            <span className="text-[10px] leading-[15.63px] lg:text-[18px] lg:leading-[28.13px]">
              تیم محصول
            </span>
          </div>
          <div className="flex items-center gap-x-1 lg:gap-x-2">
            <div className="lg:hidden">
              <MapIcon mobile />
            </div>
            <div className="hidden lg:block">
              <MapIcon />
            </div>
            <span className="text-[10px] leading-[15.63px] lg:text-[18px] lg:leading-[28.13px]">
              تهران
            </span>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-x-2">
            <div>
              <TimeIcon />
            </div>
            <span className="text-[10px] leading-[15.63px] lg:text-[18px] lg:leading-[28.13px]">
              ۱۱ شهریور ۱۴۰۱
            </span>
          </div>
          <div className="flex items-center gap-x-1 lg:gap-x-2">
            <div className="lg:hidden">
              <CashIcon mobile />
            </div>
            <div className="hidden lg:block">
              <CashIcon />
            </div>
            <span className="text-[10px] leading-[15.63px] lg:text-[18px] lg:leading-[28.13px]">
              ۱۰ میلیون تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastJobCard;
