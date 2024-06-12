import Link from "next/link";
import { useRef } from "react";
import { animated, useTransition as useTrans } from "react-spring";
import useClickOutside from "./useClickOutside";

const ConfirmedModal = ({ showModal, setShowModal }) => {
  const transitions = useTrans(showModal, {
    config: { duration: "200" },
    from: { opacity: 0, display: "hidden" },
    enter: { opacity: 1, display: "flex " },
    leave: { opacity: 0, display: "hidden" },
  });

  const ref = useRef(null);
  useClickOutside(ref, () => setShowModal(false));

  return transitions(
    (styles, item) =>
      item && (
        <animated.div
          style={styles}
          className={`${
            showModal
              ? "hero-modal__overlay bg-[#00000099] main-size opacity-100 flex px-3 md:px-0"
              : "opacity-0 hidden"
          }`}
        >
          <animated.div
            ref={ref}
            style={styles}
            className={` ${
              showModal ? "opacity-100 flex" : "opacity-0 hidden"
            }`}
          >
            <div className="bg-white rounded-[15px] py-7 px-4 sm:px-8 2xl:px-[120px] 2xl:py-[110px] 2xl:w-[812px]">
              <p className="sign-up__text mb-5 lg:mb-10">
                درخواست ثبت همکاری شما با موفقیت ثبت شد!!!
              </p>
              <p className="sign-up__text mb-10 font-normal lg:whitespace-nowrap lg:mb-[66px]">
                {" "}
                کارشناسان ما طی ۲۴ ساعت آینده با شما تماس خواهند گرفت.
              </p>
              <div className="flex flex-col items-center gap-y-[10px] px-10 md:flex-row md:gap-x-[10px] lg:gap-x-[20px] lg:justify-center">
                <Link href="/">
                  <a className="sign-up__btn w-full md:w-[190px]">
                    ورود به سایت روناد
                  </a>
                </Link>
                <button
                  className="w-full md:w-[190px]"
                  onClick={() => {
                    setShowModal(false);
                    document.body.classList.remove("body-overflow");
                  }}
                >
                  <a className="flex items-center justify-center h-12 leading-[25px] bg-white text-primary rounded-[5px] transition-all border border-primary w-full md:w-[190px] md:h-14 md:hover:font-bold">
                    بستن
                  </a>
                </button>
              </div>
            </div>
          </animated.div>
        </animated.div>
      )
  );
};

export default ConfirmedModal;
