import { CheckMarkIcon } from "./svgs/CheckMarkIcon";

const Benefit = ({ title, post = true, intermediary = true }) => {
  return (
    <div className="grid grid-cols-[1.1fr,1fr] items-center justify-center pt-[23px] pb-[22px] border-b border-[#1921461a] lg:pt-[27px] lg:pb-[25px]">
      <div className="leading-[25px] lg:text-[22px] lg:leading-[34.38px]">
        {title}
      </div>
      <div className="grid grid-cols-3 justify-items-center">
        <div className={post ? "" : "opacity-[0.15]"}>
          <CheckMarkIcon />
        </div>
        <div className={intermediary ? "" : "opacity-[0.15]"}>
          <CheckMarkIcon />
        </div>
        <div>
          <CheckMarkIcon />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
