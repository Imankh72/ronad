import { useRef, useState } from "react";
import { animated, useTransition as useTrans } from "react-spring";
import useClickOutside from "./useClickOutside";
import { DatePicker, RangeDatePicker } from "jalali-react-datepicker";

const HeroModal = ({ showModal, setShowModal }) => {
  const [inputValues, setInputValues] = useState({
    fullName: "",
    webOrStore: "",
    phoneNumber: "",
    email: "",
    date: "",
    timeSpan: "",
    message: "",
  });

  const { fullName, webOrStore, phoneNumber, email, date, timeSpan, message } =
    inputValues;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const transitions = useTrans(showModal, {
    config: { duration: "200" },
    from: { opacity: 0, display: "hidden" },
    enter: { opacity: 1, display: "flex " },
    leave: { opacity: 0, display: "hidden" },
  });

  const modalRef = useRef(null);

  useClickOutside(modalRef, () => setShowModal(false));

  return transitions(
    (styles, item) =>
      item && (
        <animated.div
          style={styles}
          className={`${
            showModal
              ? "hero-modal__overlay main-size opacity-100 flex"
              : "opacity-0 hidden"
          }`}
        >
          <animated.div
            ref={modalRef}
            style={styles}
            className={`hero-modal__container ${
              showModal ? "opacity-100 flex" : "opacity-0 hidden"
            }`}
          >
            <form className="flex flex-col lg:gap-y-[30px] lg:py-[30px] lg:pr-[30px] lg:pl-[33px]">
              <div className="flex flex-wrap gap-x-[23px] gap-y-[30px]">
                <div className="relative">
                  <input
                    className="hero-modal__input"
                    type="text"
                    id="full-name"
                    value={fullName}
                    onChange={handleOnChange}
                    name="fullName"
                  />
                  <label
                    className={`hero-modal__label ${
                      fullName.length ? "hero-modal__label--shrink" : ""
                    }`}
                    htmlFor="full-name"
                  >
                    نام و نام خانوادگی
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="hero-modal__input"
                    type="text"
                    id="store"
                    value={webOrStore}
                    onChange={handleOnChange}
                    name="webOrStore"
                  />
                  <label
                    className={`hero-modal__label ${
                      webOrStore.length ? "hero-modal__label--shrink" : ""
                    }`}
                    htmlFor="store"
                  >
                    وب سایت یا فروشگاه
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="hero-modal__input number-arrow"
                    type="number"
                    id="phone-number"
                    value={phoneNumber}
                    onChange={handleOnChange}
                    name="phoneNumber"
                  />
                  <div className="hero-modal__input__icon">
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
                  <div className="hero-modal__input__icon">
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
                {/* <div className="relative">
                  <input
                    className="hero-modal__input"
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleOnChange}
                    name="date"
                  />
                  <div className="hero-modal__input__icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2413_2728)">
                        <path
                          d="M16.8402 2.47589H3.15994C2.02664 2.47589 1.10791 3.39462 1.10791 4.52792V16.8401C1.10791 17.9734 2.02664 18.8921 3.15994 18.8921H16.8402C17.9735 18.8921 18.8922 17.9734 18.8922 16.8401V4.52792C18.8922 3.39462 17.9735 2.47589 16.8402 2.47589Z"
                          stroke="#24388D"
                          strokeOpacity="0.5"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.7101 10C12.2768 10 12.7361 9.54064 12.7361 8.97398C12.7361 8.40733 12.2768 7.94797 11.7101 7.94797C11.1434 7.94797 10.6841 8.40733 10.6841 8.97398C10.6841 9.54064 11.1434 10 11.7101 10Z"
                          fill="#24388D"
                          fillOpacity="0.5"
                        />
                        <path
                          d="M15.13 10C15.6967 10 16.156 9.54064 16.156 8.97398C16.156 8.40733 15.6967 7.94797 15.13 7.94797C14.5634 7.94797 14.104 8.40733 14.104 8.97398C14.104 9.54064 14.5634 10 15.13 10Z"
                          fill="#24388D"
                          fillOpacity="0.5"
                        />
                        <path
                          d="M11.7101 13.42C12.2768 13.42 12.7361 12.9607 12.7361 12.394C12.7361 11.8274 12.2768 11.368 11.7101 11.368C11.1434 11.368 10.6841 11.8274 10.6841 12.394C10.6841 12.9607 11.1434 13.42 11.7101 13.42Z"
                          fill="#24388D"
                          fillOpacity="0.5"
                        />
                        <path
                          d="M15.13 13.42C15.6967 13.42 16.156 12.9607 16.156 12.394C16.156 11.8274 15.6967 11.368 15.13 11.368C14.5634 11.368 14.104 11.8274 14.104 12.394C14.104 12.9607 14.5634 13.42 15.13 13.42Z"
                          fill="#24388D"
                          fillOpacity="0.5"
                        />
                        <path
                          d="M4.87001 13.42C5.43666 13.42 5.89603 12.9607 5.89603 12.394C5.89603 11.8274 5.43666 11.368 4.87001 11.368C4.30336 11.368 3.84399 11.8274 3.84399 12.394C3.84399 12.9607 4.30336 13.42 4.87001 13.42Z"
                          fill="#24388D"
                          fillOpacity="0.5"
                        />
                        <path
                          d="M8.28993 13.42C8.85659 13.42 9.31595 12.9607 9.31595 12.394C9.31595 11.8274 8.85659 11.368 8.28993 11.368C7.72328 11.368 7.26392 11.8274 7.26392 12.394C7.26392 12.9607 7.72328 13.42 8.28993 13.42Z"
                          fill="#24388D"
                          fillOpacity="0.5"
                        />
                        <path
                          d="M4.87001 16.8401C5.43666 16.8401 5.89603 16.3808 5.89603 15.8141C5.89603 15.2474 5.43666 14.7881 4.87001 14.7881C4.30336 14.7881 3.84399 15.2474 3.84399 15.8141C3.84399 16.3808 4.30336 16.8401 4.87001 16.8401Z"
                          fill="#24388D"
                          fillOpacity="0.5"
                        />
                        <path
                          d="M8.28993 16.8401C8.85659 16.8401 9.31595 16.3808 9.31595 15.8141C9.31595 15.2474 8.85659 14.7881 8.28993 14.7881C7.72328 14.7881 7.26392 15.2474 7.26392 15.8141C7.26392 16.3808 7.72328 16.8401 8.28993 16.8401Z"
                          fill="#24388D"
                          fillOpacity="0.5"
                        />
                        <path
                          d="M11.7101 16.8401C12.2768 16.8401 12.7361 16.3808 12.7361 15.8141C12.7361 15.2474 12.2768 14.7881 11.7101 14.7881C11.1434 14.7881 10.6841 15.2474 10.6841 15.8141C10.6841 16.3808 11.1434 16.8401 11.7101 16.8401Z"
                          fill="#24388D"
                          fillOpacity="0.5"
                        />
                        <path
                          d="M4.52783 1.10785V2.47587M15.472 1.10785V2.47587"
                          stroke="#24388D"
                          strokeOpacity="0.5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.8922 5.89594H1.10791"
                          stroke="#24388D"
                          strokeOpacity="0.5"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2413_2728">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <label
                    className={`hero-modal__label right-8 ${
                      date.length ? "hero-modal__label--shrink" : ""
                    }`}
                    htmlFor="date"
                  >
                    تاریخ
                  </label>
                </div> */}
                <DatePicker />
                <div className="relative">
                  <input
                    className="hero-modal__input"
                    type="time-span"
                    id="time-span"
                    value={timeSpan}
                    onChange={handleOnChange}
                    name="time-span"
                  />
                  <div className="hero-modal__input__icon">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.0001 1.76923C5.9039 1.76923 1.76929 5.90384 1.76929 11C1.76929 16.0961 5.9039 20.2308 11.0001 20.2308C16.0962 20.2308 20.2308 16.0961 20.2308 11C20.2308 5.90384 16.0962 1.76923 11.0001 1.76923Z"
                        stroke="#24388D"
                        strokeOpacity="0.5"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M11 4.84616V11.7692H15.6154"
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
              <div className="relative text-center">
                <textarea
                  className="hero-modal__textarea"
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
              <button className="hero-modal__btn">ثبت درخواست</button>
            </form>
          </animated.div>
        </animated.div>
      )
  );
};

export default HeroModal;
