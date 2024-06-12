import Image from "next/image";
import Link from "next/link";
import Page from "../../components/Page";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

const CustomizedMark = (props) => {
  return (
    <div className="select-none rotate-[-70deg] md:rotate-0 pt-4 text-primary text-sm md:text-md lg:text-lg">
      <div>
  <p>{props.price}</p>
  </div>
        <div>
    <p className="whitespace-nowrap">{!props.million ? 'هزار ' : 'میلیون '}تومان</p>
    </div>
  </div>  
  ) 
}

const SignUp = () => {
  
  const [queryCode, setQueryCode] = useState('T800');
  const [formDisabled, setFormDisabled] = useState(false);
  
  const [customerPhoneNum, setCustomerPhoneNum] = useState(undefined)
  
  const router = useRouter();

  const toggleFormDisabled = () => {
    if(formDisabled === false) {
      setFormDisabled(true);
    }
    else {
      setFormDisabled(false);
    }
  }

  const sliderMarks = {
    0: <CustomizedMark price="99 - 0" />,
    1: <CustomizedMark price="499 - 100" />,
                    2: <CustomizedMark price="999 - 500"/>,
                    3: <CustomizedMark million={true} price="1.499 - 1" />,
                    4: <CustomizedMark million={true} price="1.999 - 1.5"/>,
                    5: <CustomizedMark million={true} price="5 - 2" />,
                    6: <CustomizedMark million={true} price="5+" />
  }
  
  useEffect(() => {
    if (router.isReady) {
      setQueryCode(router.query.code);
      setCustomerPhoneNum(router.query.phoneNum);
   }
  }, [router.isReady]);



  return (
    <Page
      isSignUp={true}
      isQR={true}
      title="همکاری با ما | روناد | سریع و هوشمند"
      content="جهت شروع همکاری با شرکت خدمات هوشمند لجستیک و انبارداری روناد، فرم ثبت نام را تکمیل کنید."
    >
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
            <Link href={`/sign-up2?code=${queryCode}&phoneNum=${customerPhoneNum}`}>
              <a className="opacity-100 text-[14px] leading-[21.88px] md:text-[18px] md:leading-[28.13px]">
                بازگشت
              </a>
            </Link>
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
            <div className="absolute block -top-[1px] h-[4px] rounded-lg bg-white w-2/3 md:w-[58%] xl:w-[59%] 2xl:w-[60%] 3xl:w-[59%]"></div>
          </div>
          <div className="hidden md:w-full md:px-6 md:block md:pt-[10px]">
            <ul className="flex md:justify-around 2xl:px-[302px] 2xl:gap-x-[318px]">
              <li className="sign-up__link opacity-100">اطلاعات تماس</li>
              <li className="sign-up__link opacity-100">اطلاعات فروش</li>
              <li className="sign-up__link opacity-100">اطلاعات سفارش</li>
              <li className="sign-up__link">تائید و تکمیل ثبت‌نام
</li>
            </ul>
          </div>
          <div className="sign-up__container pt-[19px] bg-[#192146] px-[14px] sm:pt-[80px] 2xl:pt-[161px] 2xl:px-[200px] 2xl:pb-[286px] 3xl:px-[370px]">
            <div className="bg-white pt-[29px] px-[20px] pb-[45px] text-primary rounded-[10px] md:pt-10 md:pr-[50px] md:pb-[70px]">
              <h2 className="sign-up__heading text-center md:text-right md:mb-[30px]">
                میانگین تعداد سفارشات ماهانه خود را انتخاب کنید
              </h2>
              <div
                
                dir="ltr"
                className="grid grid-cols-2 grid-rows-3 gap-x-[13px] gap-y-[18px] mb-5 md:grid-cols-3 md:grid-rows-2  md:mb-6 lg:grid-cols-4 xl:grid-cols-5 lg:grid-rows-1"
              >
                <div className="sign-up__card ">
                  <div className="md:hidden">
                    <svg
                      width="36"
                      height="24"
                      viewBox="0 0 36 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.6546 1.35547H4.54907V16.3941H19.6546V1.35547Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M12.0066 1.35547V6.30514"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M31.7918 4.41553H19.7651V16.3941H31.7918V4.41553Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M25.6992 4.41504V8.35704"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M7.08402 16.3945H1.23706V22.2152H7.08402V16.3945Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M21.1153 16.3945H15.2683V22.2152H21.1153V16.3945Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M34.9649 16.3945H29.1179V22.2152H34.9649V16.3945Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1.23706 16.3945H34.9648"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <div className="hidden md:block">
                    <svg
                      width="54"
                      height="34"
                      viewBox="0 0 54 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.2543 1H6.08105V24.0706H29.2543V1Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M17.5215 1V8.59325"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M47.8738 5.69434H29.4238V24.0706H47.8738V5.69434Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M38.5273 5.69287V11.7403"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M9.96977 24.0706H1V33H9.96977V24.0706Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M31.4952 24.0706H22.5254V33H31.4952V24.0706Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M52.7413 24.0706H43.7715V33H52.7413V24.0706Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1 24.0706H52.7415"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <span className="sign-up__card__text">۰ - ۴۹۹</span>
                  <label class="radio-button__container">
                    <input type="radio" name="radio" />
                    <span class="radio-button__checkmark"></span>
                  </label>
                </div>
                <div className="sign-up__card ">
                  <div className="md:hidden">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.03345 1.31885H19.9529V13.1993H8.03345V1.31885Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M14.0688 1.31885V5.22939V1.31885Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M14.0688 1.31885V5.22939"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M19.9526 15.897H33.4826V29.3816H19.9526V15.897Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M26.8018 15.897V20.3349V15.897Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M26.8018 15.897V20.3349"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M19.9526 5.12109H30.7285V15.8618H19.9526V5.12109Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M25.4075 5.12109V8.65606"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M3.71558 13.1992H19.9516V29.3807H3.71558V13.1992Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M11.9358 13.1992V18.5211"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M7.49125 29.3877H1.64429V35.215H7.49125V29.3877Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M21.5225 29.3877H15.6755V35.215H21.5225V29.3877Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M35.3719 29.3877H29.5249V35.215H35.3719V29.3877Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1.64429 29.3877H35.3721"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <div className="hidden md:block">
                    <svg
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8018 1H29.0873V19.2257H10.8018V1Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path d="M20.0605 1V6.99913V1Z" fill="#FFE2D8" />
                      <path
                        d="M20.0605 1V6.99913"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M29.0869 23.3645H49.8432V44.0511H29.0869V23.3645Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M39.5938 23.3645V30.1727V23.3645Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M39.5938 23.3645V30.1727"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M29.0869 6.83374H45.6181V23.311H29.0869V6.83374Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M37.4551 6.83374V12.2567"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M4.17773 19.2256H29.0853V44.0495H4.17773V19.2256Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M16.7881 19.2256V27.3899"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M9.96977 44.0603H1V53H9.96977V44.0603Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M31.4952 44.0603H22.5254V53H31.4952V44.0603Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M52.7413 44.0603H43.7715V53H52.7413V44.0603Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1 44.0603H52.7415"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <span className="sign-up__card__text">۵۰۰ - ۹۹۹</span>
                  <label class="radio-button__container">
                    <input type="radio" name="radio" />
                    <span class="radio-button__checkmark"></span>
                  </label>
                </div>
                <div className="sign-up__card">
                  <div className="md:hidden">
                    <svg
                      width="36"
                      height="55"
                      viewBox="0 0 36 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.8211 13.7471H16.3425V30.2202H32.8211V13.7471Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M24.4773 13.7471V19.169V13.7471Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M24.4773 13.7471V19.169"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M16.3426 33.6968H2.66626V47.3698H16.3426V33.6968Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M9.41846 33.6968V38.197V33.6968Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M9.41846 33.6968V38.197"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M28.3742 1.71973H16.3425V13.7478H28.3742V1.71973Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M22.2815 1.71826V5.67653"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M16.3265 20.8101H3.44092V33.6927H16.3265V20.8101Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M9.80273 20.8101V25.0498"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M16.3429 6.5249H2.05322V20.8101H16.3429V6.5249Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M9.11108 6.5249V11.2245V6.5249Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M9.11108 6.5249V11.2245"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M33.3211 30.3848H16.3264V47.3699H33.3191L33.3211 30.3848Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M24.7158 30.3848V35.97"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M7.08402 47.3696H1.23706V53.2143H7.08402V47.3696Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M21.1155 47.3696H15.2686V53.2143H21.1155V47.3696Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M34.9681 47.3696H29.1211V53.2143H34.9681V47.3696Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1.23706 47.3696H34.9648"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <div className="hidden md:block">
                    <svg
                      width="54"
                      height="81"
                      viewBox="0 0 54 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M49.4525 19.4536H24.1729V44.7249H49.4525V19.4536Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M36.6523 19.4536V27.7713V19.4536Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M36.6523 19.4536V27.7713"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M24.1731 50.0581H3.19238V71.0338H24.1731V50.0581Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M13.5508 50.0581V56.9619V50.0581Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M13.5508 50.0581V56.9619"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M42.6305 1.00146H24.1729V19.4536H42.6305V1.00146Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M33.2842 1V7.07234"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M24.1485 30.2888H4.38086V50.0519H24.1485V30.2888Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M14.1406 30.2888V36.793"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M24.1736 8.37402H2.25195V30.2888H24.1736V8.37402Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M13.0791 8.37402V15.5837V8.37402Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M13.0791 8.37402V15.5837"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M50.2198 44.9771H24.1484V71.0338H50.2167L50.2198 44.9771Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M37.0186 44.9771V53.5453"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M9.96977 71.0337H1V80H9.96977V71.0337Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M31.4952 71.0337H22.5254V80H31.4952V71.0337Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M52.7462 71.0337H43.7764V80H52.7462V71.0337Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1 71.0337H52.7415"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <span className="sign-up__card__text">۱۰۰۰ - ۱۴۹۹</span>
                  <label class="radio-button__container">
                    <input type="radio" name="radio" />
                    <span class="radio-button__checkmark"></span>
                  </label>
                </div>
                <div className="sign-up__card">
                  <div className="md:hidden">
                    <svg
                      width="71"
                      height="46"
                      viewBox="0 0 71 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.4161 7.32471H20.27V20.386H33.4161V7.32471Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M26.7595 7.32471V11.623V7.32471Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M26.7595 7.32471V11.623"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M50.4236 1.19238H37.0439V14.4847H50.4236V1.19238Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M43.6484 1.19238V5.56737V1.19238Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M43.6484 1.19238V5.56737"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M20.262 23.3999H5.15649V38.4077H20.262V23.3999Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M12.6101 23.3999V28.3395V23.3999Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M12.6101 23.3999V28.3395"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M50.423 26.4478H38.3914V38.4019H50.423V26.4478Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M44.3308 26.4468V30.3807V26.4468Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M44.3308 26.4468V30.3807"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M62.455 11.3306H50.4233V23.2847H62.455V11.3306Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M56.3625 11.3296V15.2635V11.3296Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M56.3625 11.3296V15.2635"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M50.423 14.4937H38.3914V26.4478H50.423V14.4937Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M44.3308 14.4927V18.4266"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M65.628 23.2842H50.4233V38.3926H65.628V23.2842Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M57.9309 23.2842V28.2516"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M20.2705 11.4463H8.23877V23.4004H20.2705V11.4463Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M14.1787 11.4463V15.3802"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M38.3917 20.3862H20.2625V38.3971H38.3917V20.3862Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M29.2112 20.3862V26.3135"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M7.54302 38.4077H1.69604V44.2145H7.54302V38.4077Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M21.5745 38.4077H15.7275V44.2145H21.5745V38.4077Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M35.4239 38.4077H29.5769V44.2145H35.4239V38.4077Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1.69604 38.4077H35.4238"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M41.2742 38.4077H35.4272V44.2145H41.2742V38.4077Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M55.3047 38.4077H49.4578V44.2145H55.3047V38.4077Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M69.1516 38.4077H63.3047V44.2145H69.1516V38.4077Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M35.4238 38.4077H69.1516"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <div className="hidden md:block">
                    <svg
                      width="54"
                      height="81"
                      viewBox="0 0 54 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M49.4525 19.4536H24.1729V44.7249H49.4525V19.4536Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path d="M36.6523 19.4536V27.7713Z" fill="#FFE2D8" />
                      <path
                        d="M36.6523 19.4536V27.7713"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M24.1731 50.0581H3.19238V71.0338H24.1731V50.0581Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path d="M13.5508 50.0581V56.9619Z" fill="#FFE2D8" />
                      <path
                        d="M13.5508 50.0581V56.9619"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M42.6305 1.00146H24.1729V19.4536H42.6305V1.00146Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M33.2842 1V7.07234"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M24.1485 30.2888H4.38086V50.0519H24.1485V30.2888Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M14.1406 30.2888V36.793"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M24.1736 8.37402H2.25195V30.2888H24.1736V8.37402Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path d="M13.0791 8.37402V15.5837Z" fill="#FFE2D8" />
                      <path
                        d="M13.0791 8.37402V15.5837"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M50.2198 44.9771H24.1484V71.0338H50.2167L50.2198 44.9771Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M37.0186 44.9771V53.5453"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M9.96977 71.0337H1V80H9.96977V71.0337Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M31.4952 71.0337H22.5254V80H31.4952V71.0337Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M52.7462 71.0337H43.7764V80H52.7462V71.0337Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1 71.0337H52.7415"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <span className="sign-up__card__text">۱۵۰۰ - ۱۹۹۹</span>
                  <label class="radio-button__container">
                    <input type="radio" name="radio" />
                    <span class="radio-button__checkmark"></span>
                  </label>
                </div>
                <div className="sign-up__card col-start-1 col-end-3 w-full -mt-[7px] md:col-start-1 md:col-end-2 md:row-start-2 md:w-auto md:-mt-0 lg:row-start-2 xl:col-start-5 xl:col-end-6 xl:row-start-1">
                  <div className="md:hidden">
                    <svg
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.3781 28.3872H18.6418V44.2128H34.3781V28.3872Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M26.4104 28.3872V33.5929"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M16.3326 47.2427H1.29761V62.364H16.3326V47.2427Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M8.7207 47.2427V52.2196"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M34.3813 16.9795H23.0352V28.387H34.3813V16.9795Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path d="M28.636 16.979V20.734V16.979Z" fill="#FFE2D8" />
                      <path
                        d="M28.636 16.979V20.734"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M57.613 1.0752H41.7988V16.9791H57.613V1.0752Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M49.6121 1.07422V6.30996"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M41.7992 5.44287H30.3274V16.9798H41.7992V5.44287Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M35.991 5.44287V9.24403"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M14.7067 25.4629H5.06641V35.1589H14.7077L14.7067 25.4629Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M9.82544 25.4629V28.6541V25.4629Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M9.82544 25.4629V28.6541"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M14.7076 35.1592H2.72705V47.2037H14.7076V35.1592Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M8.64404 35.1592V39.1218"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M34.3779 44.2168H16.3333V62.3638H34.3779V44.2168Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M25.2397 44.2168V50.1889V44.2168Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M25.2397 44.2168V50.1889"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M65.8133 27.7212H49.4116V44.2169H65.8133V27.7212Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M57.5085 27.7212V33.1505"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M49.4125 47.2427H34.3774V62.364H49.4125V47.2427Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M41.7998 47.2427V52.2196"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M60.0923 16.979H49.4116V27.7214H60.0923V16.979Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M54.6846 16.979V20.5143V16.979Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M54.6846 16.979V20.5143"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M49.4074 32.0913H34.3813V47.2036H49.4074V32.0913Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M41.7988 32.0913V37.0652V32.0913Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M41.7988 32.0913V37.0652"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M49.4074 16.979H34.3813V32.0913H49.4074V16.979Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M41.7988 16.979V21.9529"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M67.4562 44.2168H49.4116V62.3638H67.4562V44.2168Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M58.3186 44.2168V50.1889V44.2168Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M58.3186 44.2168V50.1889"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M7.10852 62.3638H1.28882V68.2145H7.10852V62.3638Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M21.0743 62.3638H15.2546V68.2145H21.0743V62.3638Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M34.8593 62.3638H29.0396V68.2145H34.8593V62.3638Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1.28882 62.3638H34.8593"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M40.6786 62.3638H34.8589V68.2145H40.6786V62.3638Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M54.6444 62.3638H48.8247V68.2145H54.6444V62.3638Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M68.4288 62.3638H62.6091V68.2145H68.4288V62.3638Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M34.8589 62.3638H68.4293"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <div className="hidden md:block">
                    <svg
                      width="105"
                      height="105"
                      viewBox="0 0 105 105"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M51.762 42.9011H27.6211V67.179H51.762V42.9011Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M39.5391 42.9011V50.8871"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M24.0788 71.8269H1.01367V95.0244H24.0788V71.8269Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M12.4014 71.8269V79.4619"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M51.7673 25.4009H34.3613V42.901H51.7673V25.4009Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M42.9531 25.3994V31.16V25.3994Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M42.9531 25.3994V31.16"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M87.4068 1.00146H63.1465V25.3994H87.4068V1.00146Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M75.1328 1V9.0321"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M63.1466 7.70239H45.5479V25.401H63.1466V7.70239Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M54.2363 7.70239V13.5337"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M21.584 38.415H6.79492V53.2896H21.5855L21.584 38.415Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M14.0957 38.415V43.3106V38.415Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M14.0957 38.415V43.3106"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M21.5862 53.2896H3.20703V71.7669H21.5862V53.2896Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M12.2842 53.2896V59.3686"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M51.7612 67.1853H24.0791V95.0245H51.7612V67.1853Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M37.7432 67.1853V76.3471V67.1853Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M37.7432 67.1853V76.3471"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M99.9869 41.8794H74.8252V67.1854H99.9869V41.8794Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M87.2461 41.8794V50.2085"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M74.8268 71.8269H51.7617V95.0244H74.8268V71.8269Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M63.1484 71.8269V79.4619"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M91.2104 25.3994H74.8252V41.8792H91.2104V25.3994Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M82.9141 25.3994V30.8229V25.3994Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M82.9141 25.3994V30.8229"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M74.8189 48.5833H51.7676V71.7669H74.8189V48.5833Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M63.1465 48.5833V56.2137V48.5833Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M63.1465 48.5833V56.2137"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M74.8189 25.3994H51.7676V48.5831H74.8189V25.3994Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M63.1465 25.3994V33.0299"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M102.507 67.1853H74.8252V95.0245H102.507V67.1853Z"
                        fill="#FFE2D8"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M88.4893 67.1853V76.3471V67.1853Z"
                        fill="#FFE2D8"
                      />
                      <path
                        d="M88.4893 67.1853V76.3471"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M9.92796 95.0244H1V104H9.92796V95.0244Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M31.3528 95.0244H22.4248V104H31.3528V95.0244Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M52.5002 95.0244H43.5723V104H52.5002V95.0244Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M1 95.0244H52.5001"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M61.4279 95.0244H52.5V104H61.4279V95.0244Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M82.8527 95.0244H73.9248V104H82.8527V95.0244Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M103.999 95.0244H95.0713V104H103.999V95.0244Z"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M52.5 95.0244H104"
                        stroke="#EC6839"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <span className="sign-up__card__text">+ ۲۰۰۰</span>
                  <label class="radio-button__container">
                    <input type="radio" name="radio" />
                    <span class="radio-button__checkmark"></span>
                  </label>
                </div>
              </div>
              <h2 className="sign-up__heading text-center md:text-right md:mb-[33px]">
                ارزش تقریبی سفارشات خود را انتخاب کنید
              </h2>
                <div className="justify-center justify-items-center">
              <div className="flex justify-center pb-12" >
                  {/*  */}
                  
                   
                <Slider
                  disabled={formDisabled}               
                  className="mb-14 max-w-xs flex justify-center xl:max-w-4xl lg:max-w-6xl md:max-w-lg sm:max-w-lg"
                  min={0}
                  step={1}
                  max={6}
                  marks={sliderMarks}
                   
                  
                  dots
                  trackStyle={{ backgroundColor: "#ec6839" }}
                  activeDotStyle={{
                    borderColor: "#EC6839",
                    backgroundColor:"white",
                  }}
                  handleStyle={{
                    backgroundColor: "white",
                    borderColor: "#EC6839",
                    color: "#EC6839",
                  }}
                  dotStyle={{ borderColor: "#e9e9e9" }}
                />
              </div>
              </div>
              <div className="flex gap-x-[7px] px-[25px] mb-[27px] md:mb-6">
                <label class="checkbox-container">
                  <input className="checkbox" type="checkbox" onChange={toggleFormDisabled}/>
                  <span class="checkmark -mt-0 md:mt-1"></span>
                </label>
                <span className="text-[14px] leading-[21.88px] md:text-[18px] md:leading-[28.13px]">
                  اطلاع دقیقی از سفارشات ماهانه ندارم.
                </span>
              </div>
              <div className="flex justify-center">
                <Link href={`/sign-up4?code=${queryCode}&phoneNum=${customerPhoneNum}`}>
                  <a className="sign-up__btn">مرحله بعد</a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Page>
  );
};

export default SignUp;
