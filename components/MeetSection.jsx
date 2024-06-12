import Link from "next/link";
import { useState } from "react";
import { DatePicker } from "react-advance-jalaali-datepicker";

const MeetSection = () => {
  const [inputValues, setInputValues] = useState({
    phoneNumber: "",
    email: "",
    date: "",
    timeSpan: "",
    message: "",
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const customInputComponent = (props) => {
    return (
      <input
        className="hero-modal__input"
        id="date"
        value={date}
        onChange={handleOnChange}
        name="date"
        {...props}
      />
            );
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const toggle = (id, value) => {
    if (selected === id) {
      setShowDropdown(false);
      setInputValues({ ...inputValues, timeSpan: value });
      return setSelected(null);
    }

    setSelected(id);
    setShowDropdown(false);
    setInputValues({ ...inputValues, timeSpan: value });
  };

  const { phoneNumber, email, date, timeSpan, message } = inputValues;

  return (
    <section className="relative z-30 pt-[34px] px-6 pb-6 flex flex-col gap-y-[38px] lg:flex-row lg:gap-x-[75px] 2xl:pb-[159px] 2xl:gap-x-[116px] 2xl:pt-[135px] 2xl:pr-[235px] 2xl:pl-[274px]">
      <div className="bg-white lg:flex-1">
        <h2 className="text-[18px] font-semibold leading-[28.13px] text-primary text-right mb-[9px] lg:text-[32px] lg:leading-[50px] lg:font-bold lg:mb-3">
          نیاز به جلسه حضوری دارید؟
        </h2>
        <p className="text-[14px] leading-[32px] text-justify mb-5 lg:text-[20px] lg:leading-[40px] lg:mb-[41px]">
          جهت موافقت با برگزاری جلسه پیرامون همکاری دو مجموعه و تعیین نوع
          همکاری، راه ارتباطی خود را نوشته و زمان پیشنهادی جلسه را مشخص کنید.
        </p>
        <p className="text-[14px] leading-[32px] text-justify mb-3 lg:text-[20px] lg:leading-[40px] lg:mb-[30px]">
          برای آشنایی بیشتر با روناد و خدمات ارائه شده لطفا به وب سایت شرکت
          مراجعه فرمایید.
        </p>
        <Link href="/">
          <a className="faq__btn font-normal">ورود به سایت شرکت</a>
        </Link>
      </div>
      <div className="relative z-30 bg-white">
        <form className="question__form z-30" onSubmit={handleSubmit}>
          <div className="flex flex-col relative z-10 bg-white items-center gap-y-3 md:grid md:grid-cols-2 md:gap-x-[22px] md:gap-y-7">
            <div className="relative">
              <input
                className="hero-modal__input number-arrow"
                type="number"
                id="phone-number"
                value={phoneNumber}
                onChange={handleOnChange}
                name="phoneNumber"
              />
              <div
                className={`${
                  phoneNumber ? "hidden" : "hero-modal__input__icon"
                }`}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2413_2724)">
                    <path
                      d="M17.498 14.3399C16.8467 13.6836 15.2692 12.7259 14.5039 12.3399C13.5072 11.8379 13.4252 11.7969 12.6418 12.3789C12.1192 12.7673 11.7718 13.1143 11.1603 12.9839C10.5488 12.8534 9.21985 12.118 8.05624 10.9581C6.89263 9.79819 6.11456 8.43073 5.98372 7.82124C5.85288 7.21175 6.20562 6.86845 6.59034 6.34468C7.13257 5.6064 7.09155 5.48335 6.62808 4.48667C6.26673 3.71147 5.28112 2.14878 4.62241 1.50073C3.91776 0.804696 3.91776 0.927743 3.46372 1.11641C3.09408 1.27194 2.73945 1.46099 2.40429 1.6812C1.74804 2.1172 1.38382 2.47936 1.12911 3.02364C0.874405 3.56792 0.759971 4.84392 2.07534 7.23349C3.39071 9.62306 4.31356 10.8449 6.22366 12.7497C8.13376 14.6544 9.60253 15.6786 11.7497 16.8828C14.4059 18.3705 15.4247 18.0805 15.9706 17.8262C16.5165 17.5719 16.8803 17.2109 17.3172 16.5547C17.5379 16.2201 17.7274 15.8659 17.8832 15.4965C18.0723 15.0441 18.1953 15.0441 17.498 14.3399Z"
                      stroke="#24388D"
                      strokeOpacity="0.5"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2413_2724">
                      <rect width="19" height="19" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <label
                className={`hero-modal__label right-8 ${
                  phoneNumber.length ? "hero-modal__label--shrink" : ""
                }`}
                htmlFor="phone-number"
              >
                تلفن تماس
              </label>
            </div>
            <div className="relative">
              <input
                className="hero-modal__input"
                type="email"
                id="email"
                value={email}
                onChange={handleOnChange}
                name="email"
              />
              <div
                className={`${email ? "hidden" : "hero-modal__input__icon"}`}
              >
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2413_2743)">
                    <path
                      d="M18.0469 1.3125H2.95312C1.96074 1.3125 1.15625 2.11699 1.15625 3.10938V13.8906C1.15625 14.883 1.96074 15.6875 2.95312 15.6875H18.0469C19.0393 15.6875 19.8438 14.883 19.8438 13.8906V3.10938C19.8438 2.11699 19.0393 1.3125 18.0469 1.3125Z"
                      stroke="#24388D"
                      strokeOpacity="0.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.03125 4.1875L10.5 9.21875L16.9688 4.1875"
                      stroke="#24388D"
                      strokeOpacity="0.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2413_2743">
                      <rect width="21" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <label
                className={`hero-modal__label right-8 ${
                  email.length ? "hero-modal__label--shrink" : ""
                }`}
                htmlFor="email"
              >
                ایمیل
              </label>
            </div>
            <div>
              <DatePicker
                placeholder="تاریخ"
                inputComponent={customInputComponent}
                format="jYYYY/jMM/jDD"
                cancelOnBackgroundClick={true}
              />
                
            </div>
            {/*<div className="relative w-full">
              <input
                className="hero-modal__input"
                type="text"
                id="date"
                placeholder="1401/01/01"
                value={date}
                onChange={handleOnChange}
                name="date"
              />
              
            </div>*/}
            <div className="relative font-[IRANSansWeb]">
              <input
                className="hero-modal__input"
                type="text"
                id="time-span"
                onChange={handleOnChange}
                name="timeSpan"
                value={timeSpan}
                onClick={() => setShowDropdown(true)}
              />
              <div
                className={`absolute top-16 border border-primary text-primary font-semibold flex flex-col gap-y-1 left-0 rounded-lg shadow-md overflow-hidden bg-white z-20 w-full ${
                  showDropdown ? "block" : "hidden"
                }`}
              >
                {options.map(({ id, option }) => (
                  <div
                    key={id}
                    className="cursor-pointer transition-all duration-300 hover:bg-gray-100 px-3 py-2"
                    onClick={() => toggle(id, option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 left-3 z-10 translate-y-[-50%] transition-all duration-300">
                <svg
                  className={`transition-all duration-300 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M1 1L6 6L11 1"
                    stroke="#24388D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                className={` ${
                  timeSpan.length ? "hidden" : "hero-modal__input__icon"
                }`}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0001 1.76953C5.9039 1.76953 1.76929 5.90415 1.76929 11.0003C1.76929 16.0965 5.9039 20.2311 11.0001 20.2311C16.0962 20.2311 20.2308 16.0965 20.2308 11.0003C20.2308 5.90415 16.0962 1.76953 11.0001 1.76953Z"
                    stroke="#24388D"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M11 4.8457V11.7688H15.6154"
                    stroke="#24388D"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <label
                className={`hero-modal__label right-8 ${
                  timeSpan.length ? "hero-modal__label--shrink" : ""
                }`}
                htmlFor="time-span"
              >
                بازه زمانی
              </label>
            </div>
          </div>
          <div className="relative">
            <textarea
              className="textarea"
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
              پیام شما ( اختیاری )
            </label>
          </div>
          <div>
            <button className="question__btn">ثبت درخواست</button>
          </div>
        </form>
        <div className="hidden xl:block xl:absolute xl:-left-4 xl:-top-5 xl:-z-10">
          <svg
            width="269"
            height="132"
            viewBox="0 0 269 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.75">
              <circle cx="265.934" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="265.934" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="265.934" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="265.934" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="265.934" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="265.934" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="265.934" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="265.934" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="55.069" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="55.0689" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="55.0689" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="55.0689" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="55.0689" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="55.0689" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="55.0689" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="55.0689" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="160.501" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="160.501" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="160.501" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="160.501" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="160.501" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="160.501" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="160.501" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="160.501" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="213.218" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="213.218" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="213.218" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="213.218" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="213.218" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="213.218" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="213.218" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="213.218" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="2.35283" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="2.35283" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="2.35283" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="2.35283" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="2.35283" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="2.35283" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="2.35283" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="2.35283" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="107.785" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="107.785" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="107.785" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="107.785" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="107.785" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="107.785" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="107.785" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="107.785" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="252.755" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="252.755" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="252.755" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="252.755" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="252.755" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="252.755" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="252.755" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="252.755" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="41.8899" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="41.8899" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="41.8899" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="41.8899" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="41.8899" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="41.8899" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="41.8899" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="41.8899" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="147.322" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="147.322" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="147.322" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="147.322" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="147.322" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="147.322" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="147.322" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="147.322" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="200.038" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="200.038" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="200.038" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="200.038" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="200.038" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="200.038" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="200.038" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="200.038" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="94.6062" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="94.6061" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="94.6061" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="94.6061" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="94.6061" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="94.6061" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="94.6061" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="94.6061" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="239.576" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="239.576" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="239.576" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="239.576" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="239.576" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="239.576" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="239.576" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="239.576" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="28.7109" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="28.7109" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="28.7109" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="28.7109" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="28.7109" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="28.7109" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="28.7109" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="28.7109" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="134.143" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="134.143" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="134.143" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="134.143" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="134.143" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="134.143" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="134.143" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="134.143" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="186.859" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="186.859" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="186.859" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="186.859" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="186.859" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="186.859" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="186.859" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="186.859" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="81.4272" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="81.4273" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="81.4273" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="81.4273" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="81.4273" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="81.4273" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="81.4273" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="81.4273" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="226.397" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="226.397" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="226.397" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="226.397" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="226.397" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="226.397" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="226.397" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="226.397" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="15.5319" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="15.5319" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="15.5319" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="15.5319" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="15.5319" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="15.5319" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="15.5319" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="15.5319" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="120.964" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="120.964" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="120.964" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="120.964" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="120.964" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="120.964" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="120.964" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="120.964" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="173.68" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="173.68" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="173.68" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="173.68" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="173.68" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="173.68" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="173.68" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="173.68" cy="129.406" r="2.35283" fill="#24388D" />
              <circle cx="68.2481" cy="2.35283" r="2.35283" fill="#24388D" />
              <circle cx="68.2481" cy="38.6536" r="2.35283" fill="#24388D" />
              <circle cx="68.2481" cy="74.9544" r="2.35283" fill="#24388D" />
              <circle cx="68.2481" cy="20.5032" r="2.35283" fill="#24388D" />
              <circle cx="68.2481" cy="56.804" r="2.35283" fill="#24388D" />
              <circle cx="68.2481" cy="93.1048" r="2.35283" fill="#24388D" />
              <circle cx="68.2481" cy="111.255" r="2.35283" fill="#24388D" />
              <circle cx="68.2481" cy="129.406" r="2.35283" fill="#24388D" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MeetSection;

const options = [
  { id: 1, option: "۸ الی ۱۲" },
  { id: 2, option: "۱۲ الی ۱۶" },
];
