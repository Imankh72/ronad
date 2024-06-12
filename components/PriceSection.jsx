import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "./Input";
import seperatorNumber from "../utils/text/seperatorNumber";
import {
  warehousingCostCalc,
  boxCostCalc,
  warehouseProcessCalc,
  deliveryCostCalc,
} from "../utils/calculator";
import ExlamationIcon from "../components/Exclamation";
import { OrangeCheckMarkIcon } from "../components/svgs/OrangeCheckMarkIcon";
import { ResetIcon } from "./svgs/ResetIcon";
import { ShieldCheckBlueIcon } from "./svgs/ShieldCheckBlueIcon";
import { ExclamationMarkIcon } from "./svgs/ExclamationMarkIcon";
import { SquareCheckBlueIcon } from "./svgs/SquareCheckBlueIcon";
import { BoxBlueIcon } from "./svgs/BoxBlueIcon";
import { TruckBlueIcon } from "./svgs/TruckBlueIcon";
import { PriceTagIcon } from "./svgs/PriceTagIcon";

const PriceSection = ({ setHeight }) => {
  const [isActive, setIsActive] = useState(true);
  const [warehousingCost, setWarehousingCost] = useState(0);
  const [boxCost, setBoxCost] = useState("0");
  const [processCost, setProcessCost] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [error, setError] = useState(null);
  const [inputValues, setInputValues] = useState({
    length: "",
    width: "",
    height: "",
    weight: "",
  });
  const [isHoldSelected, setIsHoldSelected] = useState(false);
  const [isProcessSelected, setIsProcessSelected] = useState(false);
  const [isSendSelected, setIsSendSelected] = useState(false);
  const priceRef = useRef(null);

  useEffect(() => {
    const { width, height, length, weight } = inputValues;
    if (width && height && length && weight) {
      if (weight > 50000) {
        setError(
          "حداکثر وزن کالا ۵۰ کیلوگرم می‌باشد، برای اطلاعات بیشتر با تیم فروش تماس بگیرید"
        );
      } else {
        setError(null);
      }
      setDeliveryCost(
        deliveryCostCalc(width, height, length, weight, isActive)
      );
      setBoxCost(boxCostCalc(width, height, length));
      setProcessCost(warehouseProcessCalc(weight));
      setWarehousingCost(warehousingCostCalc(width, height, length));
    }

    // Get Height Of Price Section
    setHeight(priceRef.current?.clientHeight);
  }, [inputValues, isActive]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name == "weight" && value > 99999) {
      return;
    }
    setInputValues({ ...inputValues, [name]: value });
  };

  const reset = () =>
    setInputValues({ length: "", width: "", height: "", weight: "" });

  const handleHoldTooltipClick = () => {
    setIsHoldSelected(!isHoldSelected);
    document.body.classList.toggle("body-overflow");
  };

  const handleProcessTooltipClick = () => {
    setIsProcessSelected(!isProcessSelected);
    document.body.classList.toggle("body-overflow");
  };

  const handleSendTooltipClick = () => {
    setIsSendSelected(!isSendSelected);
    document.body.classList.toggle("body-overflow");
  };

  return (
    <section
      ref={priceRef}
      className="mt-[72px] pt-[34px] px-6 pb-[83px] flex flex-col items-center gap-y-[50px] md:gap-y-0 md:py-[20px] xl:flex-row xl:items-start xl:justify-start xl:gap-x-[120px] xl:pt-[100px] xl:pb-[130px] xl:px-[50px] 2xl:gap-x-[75px] 3xl:pr-[221px] 3xl:pl-[329px] 3xl:pt-[147px] 3xl-[191px] 3xl:gap-x-[236px]"
    >
      <div
        className={`hidden ${
          isHoldSelected || isProcessSelected || isSendSelected
            ? "price-tooltip__overlay"
            : ""
        }`}
      ></div>
      <div className="lg:flex-1 lg:w-[550px] 3xl:w-[731px]">
        <div>
          <h2 className="price__heading mb-[6px]">قیمت‌گذاری منعطف</h2>
          <p className="text md:leading-[40px] 2xl:w-[685px]">
            قیمت‌گذاری روناد منعکس‌کننده هزینه "تحقق سفارش" شامل کلیه هزینه‌های
            زنجیره لجستیک تا لحظه رسیدن سفارش به خریدار نهایی است، بنابراین شما
            دقیقاً می‌دانید که هزینه‌هایتان چقدر خواهد بود. هزینه‌های استاندارد
            برای روناد عبارت است از :
          </p>
          <ul className="text mb-[33px] md:mb-[30px]">
            <li className="price__link">
              <div>
                <OrangeCheckMarkIcon />
              </div>
              <span> انبارش و نگهداری</span>
            </li>
            <li className="price__link">
              <div>
                <OrangeCheckMarkIcon />
              </div>
              <span> فرا ارسال ( پردازش، بسته‌بندی و ارسال )</span>
            </li>
          </ul>
          <div className="flex flex-col items-center gap-y-2 mb-[54px] sm:items-start md:flex-row md:gap-x-3 2xl:mb-[74px]">
            <Link href="/sign-up?code=T800">
              <a className="network__btn network__btn--primary">
                همکاری با روناد
              </a>
            </Link>
            <Link href="/contact-us">
              <a className="network__btn network__btn--outline">
                درخواست بازدید از انبار
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-[22px] lg:w-[550px] 2xl:w-[660px] 3xl:w-[731px]">
            <h3 className="price__heading">تخمین هزینه نگهداری و ارسال</h3>
            <div className="self-center cursor-pointer" onClick={reset}>
              <ResetIcon />
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start md:flex-wrap md:gap-x-[15px] 2xl:gap-x-[25px] 3xl:flex-nowrap">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-wrap justify-center gap-x-[18px] gap-y-8 mb-5 sm:justify-start md:gap-x-[15px] 2xl:mb-0 md:flex-nowrap"
            >
              <Input
                type="number"
                className={`price__input number-arrow ${
                  inputValues.length.length ? "price__input--full" : ""
                }`}
                label="طول"
                placeholder="سانتی متر"
                id="length"
                name="length"
                value={inputValues.length}
                onChange={handleOnChange}
              />
              <Input
                type="number"
                className={`price__input number-arrow ${
                  inputValues.width.length ? "price__input--full" : ""
                }`}
                label="عرض"
                placeholder="سانتی متر"
                id="width"
                name="width"
                value={inputValues.width}
                onChange={handleOnChange}
              />
              <Input
                type="number"
                className={`price__input number-arrow ${
                  inputValues.height.length ? "price__input--full" : ""
                }`}
                label="ارتفاع"
                placeholder="سانتی متر"
                id="height"
                name="height"
                value={inputValues.height}
                onChange={handleOnChange}
              />
              <Input
                type="number"
                className={`price__input number-arrow ${
                  inputValues.weight.length ? "price__input--full" : ""
                }`}
                label="وزن"
                placeholder="گرم"
                id="weight"
                name="weight"
                min="0"
                max="99999"
                value={inputValues.weight}
                onChange={handleOnChange}
              />
            </form>
            <div className="border-2 border-primary w-[312px] h-[50px] flex justify-center gap-x-1 items-center rounded-md leading-[25px] py-[3px] px-[3px] font-medium md:w-[187px] lg:justify-start">
              <button
                className={`price__btn price__btn--primary ${
                  isActive ? "price__btn--primary--active" : ""
                }`}
                onClick={() => setIsActive(true)}
              >
                تهران
              </button>
              <button
                className={`price__btn price__btn--outline ${
                  isActive ? "" : "price__btn--outline--active"
                }`}
                onClick={() => setIsActive(false)}
              >
                شهرستان
              </button>
            </div>
          </div>
          <div className="flex items-start mt-10 gap-x-2 h-[48px]">
            {boxCost === 0 && (
              <>
                <ExlamationIcon />
                <p>
                  حداکثر سایز کارتن موجود در روناد ۳۵^۴۵^۵۵ سانتی‌متر (سایز ۹
                  پستی) بوده و در صورت نیاز به بسته‌بندی با ابعاد بزرگ‌تر، با
                  واحد فروش تماس بگیرید!
                </p>
              </>
            )}
          </div>
          <div className="flex mt-10 gap-x-2 h-[27px] font-[IRANSansWeb]">
            {error && (
              <>
                <ExlamationIcon />
                <p>{error}</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="lg:flex-1 lg:justify-center 2xl:relative 2xl:z-0">
        <div className="md:w-[449px] md:h-[580px] 2xl:relative 2xl:z-0">
          <div className="price__bill">
            <div
              className={`tooltip ${isHoldSelected ? "z-[70]" : "z-0"}`}
              onClick={handleHoldTooltipClick}
            >
              <h3 className="price__bill__heading">انبارش</h3>
              <div className="price__bill__section">
                <div className="flex items-center gap-x-[10px]">
                  <div className="-mr-1">
                    <Image src="/images/house.png" width={23} height={23} />
                  </div>
                  <span>انبارداری</span>
                </div>
                <span>{seperatorNumber(warehousingCost)} تومان</span>
              </div>
              <div className="price__bill__section border-b border-[#24388D0D] pb-[13px] lg:pb-[29px]">
                <div className="flex items-center gap-x-[10px]">
                  <div>
                    <ShieldCheckBlueIcon />
                  </div>
                  <span>بیمه نگهداری</span>
                </div>
                <span>رایگان</span>
              </div>
              <div className="absolute -top-1 -left-2 lg:top-0 lg:left-0">
                <ExclamationMarkIcon />
              </div>
              <div
                className={`tooltip__content ${
                  isHoldSelected ? "tooltip__content--mobile" : ""
                }`}
              >
                <div>
                  <Image
                    className="tooltip__image"
                    src="/images/tooltip1.png"
                    width={307}
                    height={193}
                  />
                </div>
                <p>
                  هزینه اعلامی مربوط به انبارش و نگهداری یک روزه یک کالا با
                  مشخصات ثبت شده توسط شما در محاسبه‌گر می‌باشد. همچنین لازم به
                  توضیح می‌باشد که در ابتدای همکاری شما می‌توانید از یک ماه
                  انبارش رایگان روناد استفاده کنید.
                </p>
              </div>
            </div>
            <div
              className={`tooltip ${isProcessSelected ? "z-[70]" : "z-0"}`}
              onClick={handleProcessTooltipClick}
            >
              <h3 className="price__bill__heading">پردازش</h3>
              <div className="price__bill__section">
                <div className="flex items-center gap-x-[10px]">
                  <div>
                    <SquareCheckBlueIcon />
                  </div>
                  <span>آماده‌سازی</span>
                </div>
                <span>{seperatorNumber(processCost)} تومان</span>
              </div>
              <div className="price__bill__section border-b border-[#24388D0D] pb-[13px] lg:pb-[29px]">
                <div className="flex items-center gap-x-[10px]">
                  <div>
                    <BoxBlueIcon />
                  </div>
                  <span>بسته‌بندی</span>
                </div>
                <span>
                  {boxCost === 0
                    ? "تماس بگیرید"
                    : `${seperatorNumber(boxCost)} تومان`}
                </span>
              </div>
              <div className="absolute -top-1 -left-2 lg:top-0 lg:left-0">
                <ExclamationMarkIcon />
              </div>
              <div
                className={`tooltip__content ${
                  isProcessSelected ? "tooltip__content--mobile" : ""
                }`}
              >
                <div>
                  <Image
                    className="tooltip__image"
                    src="/images/tooltip2.png"
                    width={307}
                    height={193}
                  />
                </div>
                <p>
                  هزینه اعلامی آماده‌سازی تا ۴ آیتم در یک سفارش ثابت بوده و با
                  افزایش آیتم در سفارش و یا افزایش وزن و حجم سفارش مشمول هزینه
                  مازاد خواهد شد. همچنین لازم به ذکر می‌باشد این هزینه در
                  برگیرنده کلیه عملیات و مواد مصرفی در یک سفارش (بسته‌بندی،
                  لفافه‌بندی، کارتن، ضربه‌گیر، پلاستیک حبابدار، چسب و ...)
                  می‌باشد. در صورت تمایل، می‌توانید کارتن بسته‌بندی را خودتان
                  تامین نمایید.
                </p>
              </div>
            </div>
            <div
              className={`tooltip ${isSendSelected ? "z-[70]" : "z-0"}`}
              onClick={handleSendTooltipClick}
            >
              <h3 className="price__bill__heading">ارسال</h3>
              <div className="price__bill__section">
                <div className="flex items-center gap-x-[10px]">
                  <div>
                    <TruckBlueIcon />
                  </div>
                  <span>تحویل مرسوله</span>
                </div>
                <span>{seperatorNumber(deliveryCost)} تومان</span>
              </div>
              <div className="price__bill__section border-b relative -z-10 border-[#24388D0D] pb-[13px] lg:pb-[29px]">
                <div className="flex items-center gap-x-[10px]">
                  <div>
                    <ShieldCheckBlueIcon />
                  </div>
                  <span>بیمه ارسال</span>
                </div>
                <span>{seperatorNumber(2000)} تومان</span>
              </div>
              <div className="absolute -top-1 -left-2 lg:top-0 lg:left-0">
                <ExclamationMarkIcon />
              </div>
              <div
                className={`tooltip__content ${
                  isSendSelected ? "tooltip__content--mobile" : ""
                }`}
              >
                <div>
                  <Image
                    className="tooltip__image"
                    src="/images/tooltip3.png"
                    width={307}
                    height={193}
                  />
                </div>
                <p>
                  هزینه اعلامی ارسال تا وزن ۵ کیلوگرم و ابعاد ۳۵ سانتی‌متر ثابت
                  بوده و برای ابعاد و اوزان بالاتر مشمول هزینه مازاد خواهد شد.
                  همچنین روناد امکان توزیع سفارشات به صورت ویژه با تعهد تحویل ۲
                  ساعته را نیز دارد. شما می‌توانید جهت استفاده از این سرویس در
                  بخش ثبت نام سایت اطلاعات خود را ثبت کرده و با همکاران ما در
                  ارتباط باشید.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-[13px] relative text-primary font-bold z-0">
              <div className="price__bill__section">
                <div className="flex items-center gap-x-[10px]">
                  <div>
                    <PriceTagIcon />
                  </div>
                  <span>هزینه نگهداری</span>
                </div>
                <span>{seperatorNumber(warehousingCost)} تومان</span>
              </div>
              <div className="price__bill__section">
                <div className="flex items-center gap-x-[10px]">
                  <div>
                    <PriceTagIcon />
                  </div>
                  <span>هزینه فرا ارسال</span>
                </div>
                <span>
                  {seperatorNumber(
                    +processCost + +boxCost + +deliveryCost + 1000
                  )}{" "}
                  تومان
                </span>
              </div>
            </div>
          </div>
          <div className="hidden 2xl:block 2xl:absolute 2xl:-left-24 2xl:-top-10 2xl:-z-10 2xl:w-[417px] 2xl:h-[656px]">
            <Image src="/images/blue.png" width={417} height={656} />
          </div>
          <div className="hidden 2xl:block 2xl:absolute 2xl:-right-8 2xl:-top-1 2xl:-z-10">
            <svg
              width="172"
              height="238"
              viewBox="0 0 172 238"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="168.037"
                cy="87.7372"
                r="3.05441"
                transform="rotate(90 168.037 87.7372)"
                fill="#2747CD"
              />
              <circle
                cx="120.912"
                cy="87.7372"
                r="3.05441"
                transform="rotate(90 120.912 87.7372)"
                fill="#2747CD"
              />
              <circle
                cx="73.7867"
                cy="87.7372"
                r="3.05441"
                transform="rotate(90 73.7867 87.7372)"
                fill="#2747CD"
              />
              <circle
                cx="144.474"
                cy="87.7372"
                r="3.05441"
                transform="rotate(90 144.474 87.7372)"
                fill="#2747CD"
              />
              <circle
                cx="97.3492"
                cy="87.7372"
                r="3.05441"
                transform="rotate(90 97.3492 87.7372)"
                fill="#2747CD"
              />
              <circle
                cx="50.2241"
                cy="87.7372"
                r="3.05441"
                transform="rotate(90 50.2241 87.7372)"
                fill="#2747CD"
              />
              <circle
                cx="26.6614"
                cy="87.7372"
                r="3.05441"
                transform="rotate(90 26.6614 87.7372)"
                fill="#2747CD"
              />
              <circle
                cx="3.09866"
                cy="87.7372"
                r="3.05441"
                transform="rotate(90 3.09866 87.7372)"
                fill="#2747CD"
              />
              <circle
                cx="168.037"
                cy="3.95896"
                r="3.05441"
                transform="rotate(90 168.037 3.95896)"
                fill="#2747CD"
              />
              <circle
                cx="120.912"
                cy="3.95896"
                r="3.05441"
                transform="rotate(90 120.912 3.95896)"
                fill="#2747CD"
              />
              <circle
                cx="73.7867"
                cy="3.95895"
                r="3.05441"
                transform="rotate(90 73.7867 3.95895)"
                fill="#2747CD"
              />
              <circle
                cx="144.474"
                cy="3.95896"
                r="3.05441"
                transform="rotate(90 144.474 3.95896)"
                fill="#2747CD"
              />
              <circle
                cx="97.3492"
                cy="3.95895"
                r="3.05441"
                transform="rotate(90 97.3492 3.95895)"
                fill="#2747CD"
              />
              <circle
                cx="50.2241"
                cy="3.95895"
                r="3.05441"
                transform="rotate(90 50.2241 3.95895)"
                fill="#2747CD"
              />
              <circle
                cx="26.6614"
                cy="3.95895"
                r="3.05441"
                transform="rotate(90 26.6614 3.95895)"
                fill="#2747CD"
              />
              <circle
                cx="3.09866"
                cy="3.95895"
                r="3.05441"
                transform="rotate(90 3.09866 3.95895)"
                fill="#2747CD"
              />
              <circle
                cx="168.037"
                cy="171.515"
                r="3.05441"
                transform="rotate(90 168.037 171.515)"
                fill="#2747CD"
              />
              <circle
                cx="120.912"
                cy="171.515"
                r="3.05441"
                transform="rotate(90 120.912 171.515)"
                fill="#2747CD"
              />
              <circle
                cx="73.7867"
                cy="171.515"
                r="3.05441"
                transform="rotate(90 73.7867 171.515)"
                fill="#2747CD"
              />
              <circle
                cx="144.474"
                cy="171.515"
                r="3.05441"
                transform="rotate(90 144.474 171.515)"
                fill="#2747CD"
              />
              <circle
                cx="97.3492"
                cy="171.515"
                r="3.05441"
                transform="rotate(90 97.3492 171.515)"
                fill="#2747CD"
              />
              <circle
                cx="50.2241"
                cy="171.515"
                r="3.05441"
                transform="rotate(90 50.2241 171.515)"
                fill="#2747CD"
              />
              <circle
                cx="26.6614"
                cy="171.515"
                r="3.05441"
                transform="rotate(90 26.6614 171.515)"
                fill="#2747CD"
              />
              <circle
                cx="3.09866"
                cy="171.515"
                r="3.05441"
                transform="rotate(90 3.09866 171.515)"
                fill="#2747CD"
              />
              <circle
                cx="168.037"
                cy="66.7926"
                r="3.05441"
                transform="rotate(90 168.037 66.7926)"
                fill="#2747CD"
              />
              <circle
                cx="120.912"
                cy="66.7926"
                r="3.05441"
                transform="rotate(90 120.912 66.7926)"
                fill="#2747CD"
              />
              <circle
                cx="73.7867"
                cy="66.7926"
                r="3.05441"
                transform="rotate(90 73.7867 66.7926)"
                fill="#2747CD"
              />
              <circle
                cx="144.474"
                cy="66.7926"
                r="3.05441"
                transform="rotate(90 144.474 66.7926)"
                fill="#2747CD"
              />
              <circle
                cx="97.3492"
                cy="66.7926"
                r="3.05441"
                transform="rotate(90 97.3492 66.7926)"
                fill="#2747CD"
              />
              <circle
                cx="50.2241"
                cy="66.7926"
                r="3.05441"
                transform="rotate(90 50.2241 66.7926)"
                fill="#2747CD"
              />
              <circle
                cx="26.6614"
                cy="66.7926"
                r="3.05441"
                transform="rotate(90 26.6614 66.7926)"
                fill="#2747CD"
              />
              <circle
                cx="3.09866"
                cy="66.7926"
                r="3.05441"
                transform="rotate(90 3.09866 66.7926)"
                fill="#2747CD"
              />
              <circle
                cx="168.037"
                cy="234.349"
                r="3.05441"
                transform="rotate(90 168.037 234.349)"
                fill="#2747CD"
              />
              <circle
                cx="120.912"
                cy="234.349"
                r="3.05441"
                transform="rotate(90 120.912 234.349)"
                fill="#2747CD"
              />
              <circle
                cx="73.7867"
                cy="234.349"
                r="3.05441"
                transform="rotate(90 73.7867 234.349)"
                fill="#2747CD"
              />
              <circle
                cx="144.474"
                cy="234.349"
                r="3.05441"
                transform="rotate(90 144.474 234.349)"
                fill="#2747CD"
              />
              <circle
                cx="97.3492"
                cy="234.349"
                r="3.05441"
                transform="rotate(90 97.3492 234.349)"
                fill="#2747CD"
              />
              <circle
                cx="50.2241"
                cy="234.349"
                r="3.05441"
                transform="rotate(90 50.2241 234.349)"
                fill="#2747CD"
              />
              <circle
                cx="26.6614"
                cy="234.349"
                r="3.05441"
                transform="rotate(90 26.6614 234.349)"
                fill="#2747CD"
              />
              <circle
                cx="3.09866"
                cy="234.349"
                r="3.05441"
                transform="rotate(90 3.09866 234.349)"
                fill="#2747CD"
              />
              <circle
                cx="168.037"
                cy="150.571"
                r="3.05441"
                transform="rotate(90 168.037 150.571)"
                fill="#2747CD"
              />
              <circle
                cx="120.912"
                cy="150.571"
                r="3.05441"
                transform="rotate(90 120.912 150.571)"
                fill="#2747CD"
              />
              <circle
                cx="73.7867"
                cy="150.571"
                r="3.05441"
                transform="rotate(90 73.7867 150.571)"
                fill="#2747CD"
              />
              <circle
                cx="144.474"
                cy="150.571"
                r="3.05441"
                transform="rotate(90 144.474 150.571)"
                fill="#2747CD"
              />
              <circle
                cx="97.3492"
                cy="150.571"
                r="3.05441"
                transform="rotate(90 97.3492 150.571)"
                fill="#2747CD"
              />
              <circle
                cx="50.2241"
                cy="150.571"
                r="3.05441"
                transform="rotate(90 50.2241 150.571)"
                fill="#2747CD"
              />
              <circle
                cx="26.6614"
                cy="150.571"
                r="3.05441"
                transform="rotate(90 26.6614 150.571)"
                fill="#2747CD"
              />
              <circle
                cx="3.09866"
                cy="150.571"
                r="3.05441"
                transform="rotate(90 3.09866 150.571)"
                fill="#2747CD"
              />
              <circle
                cx="168.037"
                cy="45.8481"
                r="3.05441"
                transform="rotate(90 168.037 45.8481)"
                fill="#2747CD"
              />
              <circle
                cx="120.912"
                cy="45.8481"
                r="3.05441"
                transform="rotate(90 120.912 45.8481)"
                fill="#2747CD"
              />
              <circle
                cx="73.7867"
                cy="45.8481"
                r="3.05441"
                transform="rotate(90 73.7867 45.8481)"
                fill="#2747CD"
              />
              <circle
                cx="144.474"
                cy="45.8481"
                r="3.05441"
                transform="rotate(90 144.474 45.8481)"
                fill="#2747CD"
              />
              <circle
                cx="97.3492"
                cy="45.8481"
                r="3.05441"
                transform="rotate(90 97.3492 45.8481)"
                fill="#2747CD"
              />
              <circle
                cx="50.2241"
                cy="45.8481"
                r="3.05441"
                transform="rotate(90 50.2241 45.8481)"
                fill="#2747CD"
              />
              <circle
                cx="26.6614"
                cy="45.8481"
                r="3.05441"
                transform="rotate(90 26.6614 45.8481)"
                fill="#2747CD"
              />
              <circle
                cx="3.09866"
                cy="45.8481"
                r="3.05441"
                transform="rotate(90 3.09866 45.8481)"
                fill="#2747CD"
              />
              <circle
                cx="168.037"
                cy="213.405"
                r="3.05441"
                transform="rotate(90 168.037 213.405)"
                fill="#2747CD"
              />
              <circle
                cx="120.912"
                cy="213.405"
                r="3.05441"
                transform="rotate(90 120.912 213.405)"
                fill="#2747CD"
              />
              <circle
                cx="73.7867"
                cy="213.405"
                r="3.05441"
                transform="rotate(90 73.7867 213.405)"
                fill="#2747CD"
              />
              <circle
                cx="144.474"
                cy="213.405"
                r="3.05441"
                transform="rotate(90 144.474 213.405)"
                fill="#2747CD"
              />
              <circle
                cx="97.3492"
                cy="213.405"
                r="3.05441"
                transform="rotate(90 97.3492 213.405)"
                fill="#2747CD"
              />
              <circle
                cx="50.2241"
                cy="213.405"
                r="3.05441"
                transform="rotate(90 50.2241 213.405)"
                fill="#2747CD"
              />
              <circle
                cx="26.6614"
                cy="213.405"
                r="3.05441"
                transform="rotate(90 26.6614 213.405)"
                fill="#2747CD"
              />
              <circle
                cx="3.09866"
                cy="213.405"
                r="3.05441"
                transform="rotate(90 3.09866 213.405)"
                fill="#2747CD"
              />
              <circle
                cx="168.037"
                cy="129.626"
                r="3.05441"
                transform="rotate(90 168.037 129.626)"
                fill="#2747CD"
              />
              <circle
                cx="120.912"
                cy="129.626"
                r="3.05441"
                transform="rotate(90 120.912 129.626)"
                fill="#2747CD"
              />
              <circle
                cx="73.7867"
                cy="129.626"
                r="3.05441"
                transform="rotate(90 73.7867 129.626)"
                fill="#2747CD"
              />
              <circle
                cx="144.474"
                cy="129.626"
                r="3.05441"
                transform="rotate(90 144.474 129.626)"
                fill="#2747CD"
              />
              <circle
                cx="97.3492"
                cy="129.626"
                r="3.05441"
                transform="rotate(90 97.3492 129.626)"
                fill="#2747CD"
              />
              <circle
                cx="50.2241"
                cy="129.626"
                r="3.05441"
                transform="rotate(90 50.2241 129.626)"
                fill="#2747CD"
              />
              <circle
                cx="26.6614"
                cy="129.626"
                r="3.05441"
                transform="rotate(90 26.6614 129.626)"
                fill="#2747CD"
              />
              <circle
                cx="3.09866"
                cy="129.626"
                r="3.05441"
                transform="rotate(90 3.09866 129.626)"
                fill="#2747CD"
              />
              <circle
                cx="168.037"
                cy="24.9035"
                r="3.05441"
                transform="rotate(90 168.037 24.9035)"
                fill="#2747CD"
              />
              <circle
                cx="120.912"
                cy="24.9035"
                r="3.05441"
                transform="rotate(90 120.912 24.9035)"
                fill="#2747CD"
              />
              <circle
                cx="73.7867"
                cy="24.9035"
                r="3.05441"
                transform="rotate(90 73.7867 24.9035)"
                fill="#2747CD"
              />
              <circle
                cx="144.474"
                cy="24.9035"
                r="3.05441"
                transform="rotate(90 144.474 24.9035)"
                fill="#2747CD"
              />
              <circle
                cx="97.3492"
                cy="24.9035"
                r="3.05441"
                transform="rotate(90 97.3492 24.9035)"
                fill="#2747CD"
              />
              <circle
                cx="50.2241"
                cy="24.9035"
                r="3.05441"
                transform="rotate(90 50.2241 24.9035)"
                fill="#2747CD"
              />
              <circle
                cx="26.6614"
                cy="24.9035"
                r="3.05441"
                transform="rotate(90 26.6614 24.9035)"
                fill="#2747CD"
              />
              <circle
                cx="3.09866"
                cy="24.9035"
                r="3.05441"
                transform="rotate(90 3.09866 24.9035)"
                fill="#2747CD"
              />
              <circle
                cx="168.037"
                cy="192.46"
                r="3.05441"
                transform="rotate(90 168.037 192.46)"
                fill="#2747CD"
              />
              <circle
                cx="120.912"
                cy="192.46"
                r="3.05441"
                transform="rotate(90 120.912 192.46)"
                fill="#2747CD"
              />
              <circle
                cx="73.7867"
                cy="192.46"
                r="3.05441"
                transform="rotate(90 73.7867 192.46)"
                fill="#2747CD"
              />
              <circle
                cx="144.474"
                cy="192.46"
                r="3.05441"
                transform="rotate(90 144.474 192.46)"
                fill="#2747CD"
              />
              <circle
                cx="97.3492"
                cy="192.46"
                r="3.05441"
                transform="rotate(90 97.3492 192.46)"
                fill="#2747CD"
              />
              <circle
                cx="50.2241"
                cy="192.46"
                r="3.05441"
                transform="rotate(90 50.2241 192.46)"
                fill="#2747CD"
              />
              <circle
                cx="26.6614"
                cy="192.46"
                r="3.05441"
                transform="rotate(90 26.6614 192.46)"
                fill="#2747CD"
              />
              <circle
                cx="3.09866"
                cy="192.46"
                r="3.05441"
                transform="rotate(90 3.09866 192.46)"
                fill="#2747CD"
              />
              <circle
                cx="168.037"
                cy="108.682"
                r="3.05441"
                transform="rotate(90 168.037 108.682)"
                fill="#2747CD"
              />
              <circle
                cx="120.912"
                cy="108.682"
                r="3.05441"
                transform="rotate(90 120.912 108.682)"
                fill="#2747CD"
              />
              <circle
                cx="73.7867"
                cy="108.682"
                r="3.05441"
                transform="rotate(90 73.7867 108.682)"
                fill="#2747CD"
              />
              <circle
                cx="144.474"
                cy="108.682"
                r="3.05441"
                transform="rotate(90 144.474 108.682)"
                fill="#2747CD"
              />
              <circle
                cx="97.3492"
                cy="108.682"
                r="3.05441"
                transform="rotate(90 97.3492 108.682)"
                fill="#2747CD"
              />
              <circle
                cx="50.2241"
                cy="108.682"
                r="3.05441"
                transform="rotate(90 50.2241 108.682)"
                fill="#2747CD"
              />
              <circle
                cx="26.6614"
                cy="108.682"
                r="3.05441"
                transform="rotate(90 26.6614 108.682)"
                fill="#2747CD"
              />
              <circle
                cx="3.09866"
                cy="108.682"
                r="3.05441"
                transform="rotate(90 3.09866 108.682)"
                fill="#2747CD"
              />
            </svg>
          </div>
          <div className="hidden 2xl:block 2xl:absolute 2xl:-left-4 2xl:-bottom-0 2xl:-z-10">
            <svg
              width="172"
              height="259"
              viewBox="0 0 172 259"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <circle
                  cx="168.037"
                  cy="87.7372"
                  r="3.05441"
                  transform="rotate(90 168.037 87.7372)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="87.7372"
                  r="3.05441"
                  transform="rotate(90 120.912 87.7372)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="87.7372"
                  r="3.05441"
                  transform="rotate(90 73.7867 87.7372)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="87.7372"
                  r="3.05441"
                  transform="rotate(90 144.475 87.7372)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="87.7372"
                  r="3.05441"
                  transform="rotate(90 97.3493 87.7372)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="87.7372"
                  r="3.05441"
                  transform="rotate(90 50.224 87.7372)"
                  fill="white"
                />
                <circle
                  cx="26.6614"
                  cy="87.7372"
                  r="3.05441"
                  transform="rotate(90 26.6614 87.7372)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="87.7372"
                  r="3.05441"
                  transform="rotate(90 3.09878 87.7372)"
                  fill="white"
                />
                <circle
                  cx="168.037"
                  cy="255.294"
                  r="3.05441"
                  transform="rotate(90 168.037 255.294)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="255.294"
                  r="3.05441"
                  transform="rotate(90 120.912 255.294)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="255.294"
                  r="3.05441"
                  transform="rotate(90 73.7867 255.294)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="255.294"
                  r="3.05441"
                  transform="rotate(90 144.475 255.294)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="255.294"
                  r="3.05441"
                  transform="rotate(90 97.3493 255.294)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="255.294"
                  r="3.05441"
                  transform="rotate(90 50.224 255.294)"
                  fill="white"
                />
                <circle
                  cx="26.6613"
                  cy="255.294"
                  r="3.05441"
                  transform="rotate(90 26.6613 255.294)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="255.294"
                  r="3.05441"
                  transform="rotate(90 3.09878 255.294)"
                  fill="white"
                />
                <circle
                  cx="168.037"
                  cy="3.95896"
                  r="3.05441"
                  transform="rotate(90 168.037 3.95896)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="3.95896"
                  r="3.05441"
                  transform="rotate(90 120.912 3.95896)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="3.95896"
                  r="3.05441"
                  transform="rotate(90 73.7867 3.95896)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="3.95896"
                  r="3.05441"
                  transform="rotate(90 144.475 3.95896)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="3.95896"
                  r="3.05441"
                  transform="rotate(90 97.3493 3.95896)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="3.95896"
                  r="3.05441"
                  transform="rotate(90 50.224 3.95896)"
                  fill="white"
                />
                <circle
                  cx="26.6614"
                  cy="3.95896"
                  r="3.05441"
                  transform="rotate(90 26.6614 3.95896)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="3.95896"
                  r="3.05441"
                  transform="rotate(90 3.09878 3.95896)"
                  fill="white"
                />
                <circle
                  cx="168.037"
                  cy="171.515"
                  r="3.05441"
                  transform="rotate(90 168.037 171.515)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="171.515"
                  r="3.05441"
                  transform="rotate(90 120.912 171.515)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="171.515"
                  r="3.05441"
                  transform="rotate(90 73.7867 171.515)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="171.515"
                  r="3.05441"
                  transform="rotate(90 144.475 171.515)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="171.515"
                  r="3.05441"
                  transform="rotate(90 97.3493 171.515)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="171.515"
                  r="3.05441"
                  transform="rotate(90 50.224 171.515)"
                  fill="white"
                />
                <circle
                  cx="26.6614"
                  cy="171.515"
                  r="3.05441"
                  transform="rotate(90 26.6614 171.515)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="171.515"
                  r="3.05441"
                  transform="rotate(90 3.09878 171.515)"
                  fill="white"
                />
                <circle
                  cx="168.037"
                  cy="66.7926"
                  r="3.05441"
                  transform="rotate(90 168.037 66.7926)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="66.7926"
                  r="3.05441"
                  transform="rotate(90 120.912 66.7926)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="66.7926"
                  r="3.05441"
                  transform="rotate(90 73.7867 66.7926)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="66.7926"
                  r="3.05441"
                  transform="rotate(90 144.475 66.7926)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="66.7926"
                  r="3.05441"
                  transform="rotate(90 97.3493 66.7926)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="66.7926"
                  r="3.05441"
                  transform="rotate(90 50.224 66.7926)"
                  fill="white"
                />
                <circle
                  cx="26.6614"
                  cy="66.7926"
                  r="3.05441"
                  transform="rotate(90 26.6614 66.7926)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="66.7926"
                  r="3.05441"
                  transform="rotate(90 3.09878 66.7926)"
                  fill="white"
                />
                <circle
                  cx="168.037"
                  cy="234.349"
                  r="3.05441"
                  transform="rotate(90 168.037 234.349)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="234.349"
                  r="3.05441"
                  transform="rotate(90 120.912 234.349)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="234.349"
                  r="3.05441"
                  transform="rotate(90 73.7867 234.349)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="234.349"
                  r="3.05441"
                  transform="rotate(90 144.475 234.349)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="234.349"
                  r="3.05441"
                  transform="rotate(90 97.3493 234.349)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="234.349"
                  r="3.05441"
                  transform="rotate(90 50.224 234.349)"
                  fill="white"
                />
                <circle
                  cx="26.6613"
                  cy="234.349"
                  r="3.05441"
                  transform="rotate(90 26.6613 234.349)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="234.349"
                  r="3.05441"
                  transform="rotate(90 3.09878 234.349)"
                  fill="white"
                />
                <circle
                  cx="168.037"
                  cy="150.571"
                  r="3.05441"
                  transform="rotate(90 168.037 150.571)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="150.571"
                  r="3.05441"
                  transform="rotate(90 120.912 150.571)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="150.571"
                  r="3.05441"
                  transform="rotate(90 73.7867 150.571)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="150.571"
                  r="3.05441"
                  transform="rotate(90 144.475 150.571)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="150.571"
                  r="3.05441"
                  transform="rotate(90 97.3493 150.571)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="150.571"
                  r="3.05441"
                  transform="rotate(90 50.224 150.571)"
                  fill="white"
                />
                <circle
                  cx="26.6614"
                  cy="150.571"
                  r="3.05441"
                  transform="rotate(90 26.6614 150.571)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="150.571"
                  r="3.05441"
                  transform="rotate(90 3.09878 150.571)"
                  fill="white"
                />
                <circle
                  cx="168.037"
                  cy="45.8481"
                  r="3.05441"
                  transform="rotate(90 168.037 45.8481)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="45.8481"
                  r="3.05441"
                  transform="rotate(90 120.912 45.8481)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="45.8481"
                  r="3.05441"
                  transform="rotate(90 73.7867 45.8481)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="45.8481"
                  r="3.05441"
                  transform="rotate(90 144.475 45.8481)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="45.8481"
                  r="3.05441"
                  transform="rotate(90 97.3493 45.8481)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="45.8481"
                  r="3.05441"
                  transform="rotate(90 50.224 45.8481)"
                  fill="white"
                />
                <circle
                  cx="26.6614"
                  cy="45.8481"
                  r="3.05441"
                  transform="rotate(90 26.6614 45.8481)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="45.8481"
                  r="3.05441"
                  transform="rotate(90 3.09878 45.8481)"
                  fill="white"
                />
                <circle
                  cx="168.037"
                  cy="213.405"
                  r="3.05441"
                  transform="rotate(90 168.037 213.405)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="213.405"
                  r="3.05441"
                  transform="rotate(90 120.912 213.405)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="213.405"
                  r="3.05441"
                  transform="rotate(90 73.7867 213.405)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="213.405"
                  r="3.05441"
                  transform="rotate(90 144.475 213.405)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="213.405"
                  r="3.05441"
                  transform="rotate(90 97.3493 213.405)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="213.405"
                  r="3.05441"
                  transform="rotate(90 50.224 213.405)"
                  fill="white"
                />
                <circle
                  cx="26.6614"
                  cy="213.405"
                  r="3.05441"
                  transform="rotate(90 26.6614 213.405)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="213.405"
                  r="3.05441"
                  transform="rotate(90 3.09878 213.405)"
                  fill="white"
                />
                <circle
                  cx="168.037"
                  cy="129.626"
                  r="3.05441"
                  transform="rotate(90 168.037 129.626)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="129.626"
                  r="3.05441"
                  transform="rotate(90 120.912 129.626)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="129.626"
                  r="3.05441"
                  transform="rotate(90 73.7867 129.626)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="129.626"
                  r="3.05441"
                  transform="rotate(90 144.475 129.626)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="129.626"
                  r="3.05441"
                  transform="rotate(90 97.3493 129.626)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="129.626"
                  r="3.05441"
                  transform="rotate(90 50.224 129.626)"
                  fill="white"
                />
                <circle
                  cx="26.6614"
                  cy="129.626"
                  r="3.05441"
                  transform="rotate(90 26.6614 129.626)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="129.626"
                  r="3.05441"
                  transform="rotate(90 3.09878 129.626)"
                  fill="white"
                />
                <circle
                  cx="168.037"
                  cy="24.9035"
                  r="3.05441"
                  transform="rotate(90 168.037 24.9035)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="24.9035"
                  r="3.05441"
                  transform="rotate(90 120.912 24.9035)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="24.9035"
                  r="3.05441"
                  transform="rotate(90 73.7867 24.9035)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="24.9035"
                  r="3.05441"
                  transform="rotate(90 144.475 24.9035)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="24.9035"
                  r="3.05441"
                  transform="rotate(90 97.3493 24.9035)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="24.9035"
                  r="3.05441"
                  transform="rotate(90 50.224 24.9035)"
                  fill="white"
                />
                <circle
                  cx="26.6614"
                  cy="24.9035"
                  r="3.05441"
                  transform="rotate(90 26.6614 24.9035)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="24.9035"
                  r="3.05441"
                  transform="rotate(90 3.09878 24.9035)"
                  fill="white"
                />
                <circle
                  cx="168.037"
                  cy="192.46"
                  r="3.05441"
                  transform="rotate(90 168.037 192.46)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="192.46"
                  r="3.05441"
                  transform="rotate(90 120.912 192.46)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="192.46"
                  r="3.05441"
                  transform="rotate(90 73.7867 192.46)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="192.46"
                  r="3.05441"
                  transform="rotate(90 144.475 192.46)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="192.46"
                  r="3.05441"
                  transform="rotate(90 97.3493 192.46)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="192.46"
                  r="3.05441"
                  transform="rotate(90 50.224 192.46)"
                  fill="white"
                />
                <circle
                  cx="26.6614"
                  cy="192.46"
                  r="3.05441"
                  transform="rotate(90 26.6614 192.46)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="192.46"
                  r="3.05441"
                  transform="rotate(90 3.09878 192.46)"
                  fill="white"
                />
                <circle
                  cx="168.037"
                  cy="108.682"
                  r="3.05441"
                  transform="rotate(90 168.037 108.682)"
                  fill="white"
                />
                <circle
                  cx="120.912"
                  cy="108.682"
                  r="3.05441"
                  transform="rotate(90 120.912 108.682)"
                  fill="white"
                />
                <circle
                  cx="73.7867"
                  cy="108.682"
                  r="3.05441"
                  transform="rotate(90 73.7867 108.682)"
                  fill="white"
                />
                <circle
                  cx="144.475"
                  cy="108.682"
                  r="3.05441"
                  transform="rotate(90 144.475 108.682)"
                  fill="white"
                />
                <circle
                  cx="97.3493"
                  cy="108.682"
                  r="3.05441"
                  transform="rotate(90 97.3493 108.682)"
                  fill="white"
                />
                <circle
                  cx="50.224"
                  cy="108.682"
                  r="3.05441"
                  transform="rotate(90 50.224 108.682)"
                  fill="white"
                />
                <circle
                  cx="26.6614"
                  cy="108.682"
                  r="3.05441"
                  transform="rotate(90 26.6614 108.682)"
                  fill="white"
                />
                <circle
                  cx="3.09878"
                  cy="108.682"
                  r="3.05441"
                  transform="rotate(90 3.09878 108.682)"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <div className="hidden 2xl:block 2xl:absolute 2xl:-left-40 2xl:-top-14 2xl:-z-10">
            <svg
              width="516"
              height="700"
              viewBox="0 0 516 744"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.1" filter="url(#filter0_d_1037_1287)">
                <rect
                  width="418.286"
                  height="654.103"
                  rx="20"
                  transform="matrix(0.989101 -0.147241 0.106096 0.994356 16 74.5891)"
                  fill="#24388D"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1037_1287"
                  x="0.00671387"
                  y="0.725314"
                  width="515.111"
                  height="742.549"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="3"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1037_1287"
                  />
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="7.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0919705 0 0 0 0 0.334948 0 0 0 0 0.679167 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1037_1287"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1037_1287"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
