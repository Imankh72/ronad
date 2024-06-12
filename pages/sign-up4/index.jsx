import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SignUpModal from "../../components/SignUpModal";
import Page from "../../components/Page";
import Router, {withRouter} from "next/router";



const index = () => {
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  

  // Function To Show Modal
  const handleClickModal = () => {
    document.body.classList.add("body-overflow");
    setShowModal(true);
  };
  
  
  return (
    <>
      
    <Page isSignUp={true} isQR={true} title="همکاری با ما | روناد | سریع و هوشمند" content="جهت شروع همکاری با شرکت خدمات هوشمند لجستیک و انبارداری روناد، فرم ثبت نام را تکمیل کنید.">
      <div className="bg-[#192146] h-full w-[100vw] text-white main-size pb-[8px] md:w-full md:overflow-x-hidden">
        <header className="flex items-center justify-center relative py-[20px]">
          <div className="absolute opacity-100 right-[14px] flex items-center gap-x-[9px] md:right-14 md:transition-all md:hover:opacity-100">
            <div>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="1"
                  d="M0.999999 13L7 7L1 1"
                  stroke="#EC6839"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <button onClick={Router.back}>
              <a className="opacity-100 text-[14px] leading-[21.88px] md:text-[18px] md:leading-[28.13px]">
                بازگشت
              </a>
            </button>
          </div>
          <div>
            <Link href="/">
              <a className="flex gap-[7px]">
                <div className="w-[86px] h-[52px] md:w-[130px] md:h-[52px]">
                  <Image
                    src="/images/logo-desktop.png"
                    width={130}
                    height={52}
                  />
                </div>
              </a>
            </Link>
          </div>
        </header>
        <main className="h-[100vh] w-full md:h-[100vh]">
          <div className="relative block w-full h-[1px] bg-gray-500">
            <div
              className={`absolute block -top-[1px] h-[4px] rounded-lg bg-white ${
                showModal ? "w-full" : "w-4/5 md:w-[85%] 3xl:w-[82%]"
              } `}
            ></div>
          </div>
          <div className="hidden md:w-full md:px-6 md:block md:pt-[10px]">
            <ul className="flex md:justify-around 2xl:px-[302px] 2xl:gap-x-[318px]">
              <li className="sign-up__link opacity-100">اطلاعات تماس</li>
              <li className="sign-up__link opacity-100">اطلاعات فروش</li>
              <li className="sign-up__link opacity-100">اطلاعات سفارش</li>
              <li className="sign-up__link opacity-100">
                تائید و تکمیل ثبت‌نام
              </li>
            </ul>
          </div>
          <div className="sign-up__container bg-[#192146] px-[14px] flex justify-center items-center pt-[75px] xl:pt-[100px] 2xl:pt-[150px] 2xl:pb-[100px]">
            <div className="bg-white rounded-[15px] text-primary px-5 pt-6 pb-4 sm:pb-8 lg:pb-10 xl:px-10 xl:pt-8 2xl:px-[50px] 2xl:pt-10 2xl:pb-[60px]">
              <h2 className="font-bold text-[20px] leading-[31.25px] mb-3 sm:mb-5 lg:text-[24px] lg:leading-[37.5px] lg:mb-[30px]">
                نیاز به توضیحات بیشتر است؟
              </h2>
              <div className="relative text-center mb-4 xl:mb-8 2xl:mb-11">
                <textarea
                  className="contact-us__textarea sm:w-[450px] md:w-[550px] lg:w-[680px] xl:w-[750px] 2xl:w-[832px] 2xl:h-[241px]"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                ></textarea>
                <label
                  className={`textarea__label ${
                    message.length ? "textarea__label--shrink" : ""
                  }`}
                  htmlFor="message"
                >
                  پیام شما
                </label>
              </div>
              <div className="flex justify-center">
                <button className="sign-up__btn" onClick={handleClickModal}>
                  تکمیل ثبت نام
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <SignUpModal showModal={showModal} setShowModal={setShowModal} />
      </Page>
    </>
  );
};

export default withRouter(index);
