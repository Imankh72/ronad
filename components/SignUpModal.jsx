import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { animated, useTransition as useTrans } from "react-spring";
import useClickOutside from "./useClickOutside";
import {useRouter} from "next/router";

const SignUpModal = ({ showModal, setShowModal }) => {
  const transitions = useTrans(showModal, {
    config: { duration: "200" },
    from: { opacity: 0, display: "hidden" },
    enter: { opacity: 1, display: "flex " },
    leave: { opacity: 0, display: "hidden" },
  });
  
  const [queryCode, setQueryCode] = useState('T800');
  const [customerPhoneNum, setCustomerPhoneNum] = useState(undefined)

  const ref = useRef(null);
  useClickOutside(ref, () => setShowModal(false));

  const handleReturnToHome = () => {
        document.body.classList.remove("body-overflow");
    router.push('/');
  }

  const router = useRouter();
  
  useEffect(() => {
    if (router.isReady) {
      if(router.query.code){
      setQueryCode(router.query.code);
      }
      if(router.query.phoneNum){
        setCustomerPhoneNum(router.query.phoneNum);        
      }
    }
    console.log("router: ",router.query.code);
    console.log("queryCode: ", queryCode);
  }, [router.isReady]);

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
                { queryCode === "T800" &&
                "به جمع دوستان روناد خوش آمدید!!!"
                }
                
                { queryCode === "T1001" &&
                "دوست گرامی"
                }
              </p>
              <p className="sign-up__text mb-10 font-normal lg:whitespace-nowrap lg:mb-[66px]">
                {" "}
                { queryCode === "T800" &&
                  "کارشناسان ما طی ۲۴ ساعت آینده با شما تماس خواهند گرفت."
                }
                
                { queryCode === "T1001" &&
                "برای ورود به پنل دمو بر روی دکمه زیر کلیک نمائید."
                }
              </p>
              <div className="flex flex-col items-center gap-y-[10px] px-10 md:flex-row md:gap-x-[10px] lg:gap-x-[20px] lg:justify-center">
                <Link href={`https://partner.sb.ronad.ir/login?phoneNum=${customerPhoneNum}`}>
                  <a className="sign-up__btn w-full md:w-[190px]">
                    ورود به پنل دمو
                  </a>
                </Link>
                  <button onClick={handleReturnToHome}>
                  <a className="flex items-center justify-center h-12 leading-[25px] bg-white text-primary rounded-[5px] transition-all border border-primary w-full md:w-[168px] md:h-14 md:hover:font-bold">
                    بازگشت به خانه
                  </a>
                  </button>
              </div>
            </div>
          </animated.div>
        </animated.div>
      )
  );
};

export default SignUpModal;
