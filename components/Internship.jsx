import { useState } from "react";
import { InternshipEllipse } from "./svgs/InternshipEllipse";
import { LogisticsPanelCheckIcon } from "./svgs/LogisticsPanelCheckIcon";
import { DropFileIcon } from "./svgs/DropFileIcon";

const Internship = () => {
  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    career: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { fullName, email, phoneNumber, career, message } = inputValues;

  return (
    <section className="bg-backgroundSecondary px-[19px] pt-[29px] pb-[71px] flex flex-col justify-center items-center gap-y-[26px] xl:flex-row xl:gap-x-[86px] xl:pt-[80px] xl:px-[70px] xl:pb-[60px] 3xl:pt-[101px] 3xl:pb-[81px] 3xl:px-[209px] 3xl:pl-[273px]">
      <div className="lg:w-[645px]">
        <h2 className="text-primary text-[20px] leading-[31.25px] font-bold lg:text-[32px] lg:leading-[50px]">
          کارآموزی در روناد
        </h2>
        <span className="block h-[3px] w-6 bg-orange rounded-md mb-[9px] lg:w-7 lg:mb-[13px]"></span>
        <p className="text-[14px] leading-[32px] text-justify mb-2 lg:text-[20px] lg:leading-[40px] lg:mb-[41px]">
          ما به صورت دوره‌ای، رویدادهای آموزشی متنوعی را برگزار می‌کنیم، از
          سمینارها و کارگاه‌های تخصصی گرفته تا رویدادهای انتقال تجربه و اشتراک
          دانش. پس اگر مایلین در این رویدادها حضور داشته باشید، اینجا ثبت‌نام
          کنید و حوزه‌های مورد علاقه‌تان را برایمان بنویسید.
        </p>
        <ul className="flex flex-col gap-y-4 lg:gap-y-[22px]">
          <li className="flex items-center gap-x-2">
            <div className="lg:hidden">
              <LogisticsPanelCheckIcon mobile />
            </div>
            <div className="hidden lg:block">
              <LogisticsPanelCheckIcon />
            </div>
            <span className="text-[14px] leading-[28.88px] lg:text-[18px] lg:leading-[28.13px]">
              امکان پیگیری لحظه‌ای و تاریخچه پردازش هر سفارش
            </span>
          </li>
          <li className="flex items-center gap-x-2">
            <div className="lg:hidden">
              <LogisticsPanelCheckIcon mobile />
            </div>
            <div className="hidden lg:block">
              <LogisticsPanelCheckIcon />
            </div>
            <span className="text-[14px] leading-[28.88px] lg:text-[18px] lg:leading-[28.13px]">
              ثبت سفارش بصورت تکی و گروهی
            </span>
          </li>
          <li className="flex items-center gap-x-2">
            <div className="lg:hidden">
              <LogisticsPanelCheckIcon mobile />
            </div>
            <div className="hidden lg:block">
              <LogisticsPanelCheckIcon />
            </div>
            <span className="text-[14px] leading-[28.88px] lg:text-[18px] lg:leading-[28.13px]">
              امکان رصد وضعیت کلی تمام سفارش‌ها
            </span>
          </li>
        </ul>
      </div>
      <div className="relative z-0">
        <form className="form-container z-20" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-[20px] items-center sm:grid sm:grid-cols-2 sm:gap-x-[26px] 2xl:gap-y-8">
            <div className="relative">
              <input
                className="contact-us__input"
                type="text"
                id="full-name"
                value={fullName}
                onChange={handleOnChange}
                name="fullName"
              />
              <label
                className={`question__input__label ${
                  fullName.length ? "question__input__label--shrink" : ""
                }`}
                htmlFor="full-name"
              >
                نام و نام خانوادگی
              </label>
            </div>
            <div className="relative">
              <input
                className="contact-us__input"
                type="email"
                id="email"
                value={email}
                onChange={handleOnChange}
                name="email"
              />
              <label
                className={`question__input__label ${
                  email.length ? "question__input__label--shrink" : ""
                }`}
                htmlFor="email"
              >
                ایمیل
              </label>
            </div>
            <div className="relative">
              <input
                className="contact-us__input number-arrow"
                type="number"
                id="phone-number"
                value={phoneNumber}
                onChange={handleOnChange}
                name="phoneNumber"
              />
              <label
                className={`question__input__label  ${
                  phoneNumber.length ? "question__input__label--shrink" : ""
                }`}
                htmlFor="phone-number"
              >
                تلفن تماس
              </label>
            </div>
            <div className="relative">
              <input
                className="contact-us__input"
                type="text"
                id="career"
                value={career}
                onChange={handleOnChange}
                name="career"
              />
              <label
                className={`question__input__label ${
                  career.length ? "question__input__label--shrink" : ""
                }`}
                htmlFor="career"
              >
                تخصص شما
              </label>
            </div>
          </div>
          <div className="relative text-center">
            <textarea
              className="contact-us__textarea"
              id="message"
              value={message}
              onChange={handleOnChange}
              name="message"
            ></textarea>
            <label
              className={`textarea__label ${
                message.length ? "textarea__label--shrink" : ""
              }`}
              htmlFor="message"
            >
              دلیل علاقه به کارآموزی در روناد را توضیح دهید
            </label>
          </div>
          <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-[17px] xl:gap-x-[10px] 2xl:gap-x-[17px]">
            <input type="file" id="choose-btn" hidden />
            <label
              htmlFor="choose-btn"
              className="bg-backgroundSecondary cursor-pointer flex justify-center items-center gap-x-2 text-[14px] px-2 rounded border-2 border-dashed text-primary w-[277px] h-[49px] md:w-[370px] lg:w-[445px] lg:h-[56px] xl:w-[310px] 2xl:w-[310px] 3xl:w-[445px]"
            >
              <div>
                <DropFileIcon />
              </div>
              <span className="hidden lg:block">
                فایل خود را به اینجا بکشید{" "}
              </span>
              <span className="hidden lg:block lg:opacity-50"> یا </span>
              <span className="border-b border-primary">انتخاب فایل</span>
            </label>
            <div className="contact-us__btn 3xl:w-[168px]">
              <button>ثبت درخواست</button>
            </div>
          </div>
        </form>
        <div className="hidden xl:flex xl:absolute xl:-left-10 xl:-top-8 xl:-z-50">
          <InternshipEllipse />
        </div>
      </div>
    </section>
  );
};

export default Internship;
