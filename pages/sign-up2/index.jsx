import Image from "next/image";
import Link from "next/link";
import Page from "../../components/Page";
import {useRouter} from "next/router";
import { useState, useEffect } from "react";

const SignUp = () => {
  
  const [queryCode, setQueryCode] = useState('T800');
  const [customerPhoneNum, setCustomerPhoneNum] = useState(undefined)
  
  const router = useRouter();
  
  useEffect(() => {
    if (router.isReady) {
      setQueryCode(router.query.code);
      setCustomerPhoneNum(router.query.phoneNum);
    }
  }, [router.isReady]);


  return (
    
    <Page isSignUp={true} isQR={true} title="همکاری با ما | روناد | سریع و هوشمند" content="جهت شروع همکاری با شرکت خدمات هوشمند لجستیک و انبارداری روناد، فرم ثبت نام را تکمیل کنید.">
    <div className="bg-[#192146] h-full w-[100vw] text-white main-size pb-[8px] md:w-full">
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
          <Link href={`/sign-up?code=${queryCode}&phoneNum=${customerPhoneNum}`}>
            <a className="opacity-100 text-[14px] leading-[21.88px] md:text-[18px] md:leading-[28.13px]">
              بازگشت
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className="flex gap-[7px]">
              <div className="w-[86px] h-[52px] md:w-[130px] md:h-[52px]">
                <Image src="/images/logo-desktop.png" width={130} height={52} />
              </div>
            </a>
          </Link>
        </div>
      </header>
      <main className="h-full w-full md:h-[100vh]">
        <div className="relative block w-full h-[1px] bg-gray-500">
          <div className="absolute block -top-[1px] h-[4px] rounded-lg bg-white w-1/2 md:w-[35%] 2xl:w-[36%] 3xl:w-[38%]"></div>
        </div>
        <div className="hidden md:w-full md:px-6 md:block md:pt-[10px]">
          <ul className="flex md:justify-around 2xl:px-[302px] 2xl:gap-x-[318px]">
            <li className="sign-up__link opacity-100">اطلاعات تماس</li>
            <li className="sign-up__link opacity-100">اطلاعات فروش</li>
            <li className="sign-up__link">اطلاعات سفارش</li>
            <li className="sign-up__link">تائید و تکمیل ثبت‌نام
</li>
          </ul>
        </div>
        <div className="sign-up__container pt-[49px] bg-[#192146] px-[14px] flex flex-col justify-center items-center">
          <div className="sign-up__section">
            <h2 className="sign-up__heading">
              محصولات خود را از چه طریقی می‌فروشید؟
            </h2>
            <div className="flex flex-col gap-y-[15px] lg:flex-row">
              <div className="flex gap-x-[7px] px-[25px]">
                <label className="checkbox-container">
                  <input className="checkbox" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <span className="whitespace-nowrap leading-[25px] md:text-[18px] md:leading-[28.13px]">
                  سایت
                </span>
              </div>
              <div className="flex gap-x-[7px] px-[25px]">
                <label className="checkbox-container">
                  <input className="checkbox" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <span className="whitespace-nowrap leading-[25px] md:text-[18px] md:leading-[28.13px]">
                  بازار اینترنتی ( دیجی‌کالا، باسلام و ...)
                </span>
              </div>
              <div className="flex gap-x-[7px] px-[25px]">
                <label className="checkbox-container">
                  <input className="checkbox" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <span className="whitespace-nowrap leading-[25px] md:text-[18px] md:leading-[28.13px]">
                  فضای مجازی (اینستاگرام، تلگرام و ...)
                </span>
              </div>
              <div className="flex gap-x-[7px] px-[25px]">
                <label className="checkbox-container">
                  <input className="checkbox" type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <span className="whitespace-nowrap leading-[25px] md:text-[18px] md:leading-[28.13px]">
                  فروشگاه یا شرکت
                </span>
              </div>
            </div>
          </div>
          <div className="sign-up__section md:pb-[25px]">
            <h2 className="sign-up__heading">در چه زمینه‌ای فعالیت می‌کنید؟</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-[13px] justify-center mb-[33px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:grid-rows-2 xl:gap-5 xl:mb-[33px] xl:xl:grid-cols-[repeat(5,200px)]">
              <div className="sign-up__card ">
                <div className="lg:hidden">
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
                <div className="hidden lg:block lg:mb-[21px]">
                  <svg
                    width="77"
                    height="77"
                    viewBox="0 0 77 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.0567 23.9454L44.7939 8.54544C44.3988 8.37609 44.0623 8.09394 43.8266 7.73444C43.591 7.37495 43.4665 6.95403 43.4688 6.52417V5.42043C43.4686 5.13028 43.5256 4.84297 43.6365 4.57487C43.7474 4.30677 43.9101 4.06323 44.1153 3.85807C44.3204 3.65291 44.564 3.49022 44.8321 3.37928C45.1002 3.26835 45.3876 3.21135 45.6777 3.21156H58.9282C59.5135 3.21326 60.0743 3.44653 60.4882 3.86042C60.9021 4.27431 61.1354 4.8351 61.1371 5.42043V6.52417C61.1354 6.95582 61.0081 7.37767 60.7709 7.73826C60.5336 8.09886 60.1965 8.38262 59.8008 8.55503L64.5379 23.955M37.9473 68.5091V68.3872"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M66.6554 34.1366V69.4587C66.6554 70.63 66.1901 71.7533 65.3619 72.5815C64.5337 73.4097 63.4104 73.875 62.2392 73.875H42.3635C41.1923 73.875 40.069 73.4097 39.2408 72.5815C38.4126 71.7533 37.9473 70.63 37.9473 69.4587V68.5091C40.031 66.3438 41.4504 63.6267 42.0375 60.6796C42.6246 57.7324 42.3548 54.6787 41.2599 51.8803C40.4952 50.0148 39.3695 48.3188 37.9473 46.8898V34.1366C37.9483 31.9364 38.2759 29.7485 38.9194 27.6446L40.0567 23.9453H64.5283L65.6656 27.6446C66.3203 29.7465 66.654 31.9351 66.6554 34.1366Z"
                      fill="#FFE2D8"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M44.7969 8.547H59.8023"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M16.4159 43.4007C16.4047 43.3894 16.3935 43.3894 16.3935 43.4118C14.0587 44.4888 12.0138 46.106 10.4277 48.1298C8.84168 50.1535 7.76001 52.5256 7.27218 55.0501C5.87014 63.3212 12.0975 70.7067 19.0756 73.1258C22.3383 74.194 25.8347 74.3279 29.1694 73.5123C32.5042 72.6967 35.5442 70.9642 37.9455 68.5107"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M37.9385 46.8899C37.2306 46.1778 36.4578 45.5333 35.6301 44.9648C33.9363 43.8302 32.0329 43.0454 30.0316 42.6564L29.7012 42.5906"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M34.655 44.3552C34.28 43.5413 33.7156 42.829 33.0091 42.2778C31.0821 40.9976 28.7703 40.4266 26.4689 40.6624C26.4689 40.6624 31.2236 37.9353 30.3462 34.0147C25.7615 34.5537 22.3751 38.9235 21.7142 39.6775C20.7668 38.4285 19.5218 37.4365 18.0928 36.792C16.6638 36.1476 15.0962 35.8712 13.5329 35.9879C13.9019 39.0503 15.4402 41.1212 17.3187 41.742C16.0858 41.9142 14.9359 42.462 14.0254 43.3108C14.0138 43.3128 14.0031 43.3184 13.9949 43.3269C12.4121 44.847 11.1826 46.6964 10.3936 48.7442C14.1303 48.1551 17.671 46.6774 20.718 44.4354C20.4544 46.1766 20.7322 47.9567 21.5137 49.5348C22.2953 51.1129 23.543 52.4128 25.0877 53.2584C26.3917 50.2905 26.469 46.9274 25.3027 43.9028C26.7152 44.7111 28.299 45.1735 29.9245 45.2521C31.55 45.3307 33.171 45.0233 34.655 44.3552Z"
                      fill="white"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <span className="sign-up__card__text">مواد غذایی</span>
                <label className="radio-button__container">
                  <input type="checkbox" name="food"/>
                  <span className="radio-button__checkmark"></span>
                </label>
              </div>
              <div className="sign-up__card ">
                <div className="lg:hidden">
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
                <div className="hidden lg:block lg:mb-[21px]">
                  <svg
                    width="54"
                    height="61"
                    viewBox="0 0 54 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.2764 20.9166V24.4167C52.2751 25.5761 51.8139 26.6877 50.9941 27.5076C50.1742 28.3275 49.0625 28.7886 47.903 28.7899H42.0697V55.6233C42.0704 56.1978 41.9576 56.7668 41.7381 57.2977C41.5185 57.8286 41.1964 58.311 40.7902 58.7172C40.384 59.1234 39.9016 59.4455 39.3707 59.6651C38.8398 59.8846 38.2708 59.9973 37.6963 59.9966H15.8297C15.2563 59.9957 14.6889 59.882 14.1595 59.6617C13.6302 59.4415 13.1493 59.119 12.7446 58.7128C12.3398 58.3067 12.019 57.8249 11.8005 57.2948C11.5821 56.7647 11.4703 56.1967 11.4714 55.6233V28.7933H5.63802C5.06352 28.794 4.49452 28.6813 3.96363 28.4618C3.43273 28.2422 2.95038 27.9201 2.54415 27.5139C2.13792 27.1077 1.81582 26.6252 1.59628 26.0943C1.37673 25.5634 1.26399 24.9945 1.26465 24.42V20.92C1.26465 8.2533 8.26466 4.77502 11.8113 3.53502C12.183 3.39502 12.5248 3.30167 12.8115 3.20167C14.2382 2.76667 18.3948 1.24834 18.3948 1.24834C19.0839 2.90161 20.2469 4.31392 21.7373 5.30738C23.2276 6.30084 24.9787 6.83102 26.7698 6.83102C28.561 6.83102 30.312 6.30084 31.8024 5.30738C33.2927 4.31392 34.4556 2.90161 35.1447 1.24834C35.1447 1.24834 39.3115 2.76833 40.7282 3.20167C41.0082 3.295 41.3481 3.38835 41.7281 3.53502C41.7402 3.53588 41.7513 3.54119 41.7596 3.54997C45.328 4.79331 52.2764 8.27661 52.2764 20.9166Z"
                      fill="#FFE2D8"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.201 28.795H11.4727"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M42.0711 28.795H41.3428"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M42.0713 28.7933V21.505"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.4727 28.7933V21.505"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="sign-up__card__text">پوشاک</span>
                <label className="radio-button__container">
                  <input type="checkbox" name="clothing"/>
                  <span className="radio-button__checkmark"></span>
                </label>
              </div>
              <div className="sign-up__card ">
                <div className="lg:hidden">
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
                <div className="hidden lg:block lg:mb-[21px]">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.03 14.17V5.61163M39.44 14.17V5.61163M45.145 22.7267H22.3251C19.3016 22.7355 16.4046 23.9404 14.2667 26.0782C12.1288 28.2161 10.9238 31.1132 10.915 34.1366V42.695H56.5567V34.145C56.5501 31.1204 55.3463 28.2214 53.2085 26.0818C51.0708 23.9422 48.1729 22.7359 45.1483 22.7267H45.145Z"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M56.5567 35.5V65.5167C56.5523 67.0284 55.9498 68.4769 54.8809 69.5458C53.812 70.6148 52.3634 71.2172 50.8517 71.2216H16.62C15.1083 71.2172 13.6598 70.6148 12.5909 69.5458C11.5219 68.4769 10.9194 67.0284 10.915 65.5167V35.5"
                      fill="#FFE2D8"
                    />
                    <path
                      d="M56.5567 35.5V65.5167C56.5523 67.0284 55.9498 68.4769 54.8809 69.5458C53.812 70.6148 52.3634 71.2172 50.8517 71.2216H16.62C15.1083 71.2172 13.6598 70.6148 12.5909 69.5458C11.5219 68.4769 10.9194 67.0284 10.915 65.5167V35.5"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M12.3418 5.60996C14.3957 3.9941 16.8717 3.00408 19.4734 2.7583C22.275 2.88343 24.9676 3.8804 27.1751 5.60996H42.2935"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M42.2948 22.725V14.1667H25.1797V22.725"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M40.9551 46.975C41.1023 46.2334 41.4498 45.5461 41.9598 44.9879C42.4699 44.4297 43.123 44.0217 43.8483 43.8083C45.0617 43.4266 56.1984 40.5517 53.7 35.5767C53.3482 34.9565 52.814 34.4595 52.17 34.1534C52.67 34.1117 53.1867 34.1534 53.7 34.1534C61.5167 34.1534 68.2301 40.3616 68.2301 46.2566"
                      fill="white"
                    />
                    <path
                      d="M40.9551 46.975C41.1023 46.2334 41.4498 45.5461 41.9598 44.9879C42.4699 44.4297 43.123 44.0217 43.8483 43.8083C45.0617 43.4266 56.1984 40.5517 53.7 35.5767C53.3482 34.9565 52.814 34.4595 52.17 34.1534C52.67 34.1117 53.1867 34.1534 53.7 34.1534C61.5167 34.1534 68.2301 40.3616 68.2301 46.2566"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M69.8353 51.7866H70.7269C71.9796 51.7866 73.1811 52.2843 74.0669 53.1701C74.9527 54.0559 75.4503 55.2573 75.4503 56.5101V72.735C75.4503 73.9877 74.9527 75.1891 74.0669 76.0749C73.1811 76.9607 71.9796 77.4583 70.7269 77.4583H38.4587C37.206 77.4583 36.0045 76.9607 35.1187 76.0749C34.2329 75.1891 33.7354 73.9877 33.7354 72.735V56.5101C33.7354 55.2573 34.2329 54.0559 35.1187 53.1701C36.0045 52.2843 37.206 51.7866 38.4587 51.7866H39.3503"
                      fill="white"
                    />
                    <path
                      d="M69.8353 51.7866H70.7269C71.9796 51.7866 73.1811 52.2843 74.0669 53.1701C74.9527 54.0559 75.4503 55.2573 75.4503 56.5101V72.735C75.4503 73.9877 74.9527 75.1891 74.0669 76.0749C73.1811 76.9607 71.9796 77.4583 70.7269 77.4583H38.4587C37.206 77.4583 36.0045 76.9607 35.1187 76.0749C34.2329 75.1891 33.7354 73.9877 33.7354 72.735V56.5101C33.7354 55.2573 34.2329 54.0559 35.1187 53.1701C36.0045 52.2843 37.206 51.7866 38.4587 51.7866H39.3503"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M74.0254 59.6883H35.1621V69.42H74.0254V59.6883Z"
                      fill="#FFE2D8"
                    />
                    <path
                      d="M69.8321 51.7866H39.3538C39.1404 51.7862 38.9359 51.7013 38.785 51.5504C38.6342 51.3996 38.5493 51.1951 38.5488 50.9817V47.7784C38.5493 47.565 38.6342 47.3605 38.785 47.2096C38.9359 47.0587 39.1404 46.9738 39.3538 46.9733H69.8321C70.0455 46.9738 70.25 47.0587 70.4008 47.2096C70.5517 47.3605 70.6367 47.565 70.6371 47.7784V50.9817C70.6367 51.1951 70.5517 51.3996 70.4008 51.5504C70.25 51.7013 70.0455 51.7862 69.8321 51.7866Z"
                      fill="white"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="sign-up__card__text">آرایشی و بهداشتی</span>
                <label className="radio-button__container">
                  <input type="checkbox" name="radio" />
                  <span className="radio-button__checkmark"></span>
                </label>
              </div>
              <div className="sign-up__card ">
                <div className="lg:hidden">
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
                <div className="hidden lg:block lg:mb-[21px]">
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.7001 1.0368L23.397 1.3536L23.3696 21.546L23.3278 41.7254L21.2326 41.7665L19.1238 41.8075V41.3525C19.1238 41.1041 19.496 37.2449 19.951 32.7658C20.4061 28.3003 20.7783 24.2892 20.7783 23.8752C20.7783 22.5799 19.9654 21.4495 18.6421 20.898L18.146 20.6914L18.9178 20.1125C21.0958 18.445 22.1982 15.4814 21.5919 12.8484C21.2334 11.2774 20.0209 9.5544 18.5874 8.57592C16.6578 7.26624 16.2445 5.99832 17.264 4.482C17.6499 3.93048 17.6773 3.72384 17.457 3.32424C17.1812 2.81448 16.7398 2.77271 15.4719 3.13127C10.8819 4.46832 7.9184 8.20368 7.6016 13.0414C7.50512 14.6268 7.79456 16.308 8.37344 17.4931C8.86952 18.4853 9.97256 19.7539 10.7991 20.291L11.378 20.6496L10.689 20.898C9.90343 21.1738 8.99336 22.0147 8.69024 22.7448C8.5664 23.0342 8.4836 23.5584 8.4836 23.9443C8.4836 24.3166 8.86952 28.3414 9.32456 32.8759C9.79327 37.3968 10.1655 41.256 10.1655 41.449C10.1655 41.7938 10.1518 41.7938 9.07687 41.7938C8.09839 41.7938 7.94648 41.8212 7.7672 42.097C7.57424 42.3727 7.54688 43.7234 7.54688 53.8675C7.54688 60.9106 7.60232 65.6107 7.6844 66.0521C8.0012 67.7477 9.31088 69.539 10.8819 70.4354C12.4666 71.3448 10.923 71.3038 36.367 71.262L59.4401 71.221L60.2257 70.9042C61.8932 70.2288 63.4095 68.7125 64.0849 67.045L64.4017 66.2594L64.4434 54.3506C64.4708 43.8617 64.4571 42.4145 64.2641 42.125C64.0712 41.8219 63.961 41.7938 62.5001 41.7665L60.9565 41.7254L60.8873 29.0448L60.8182 16.3642L56.9036 10.5754C54.7537 7.39152 52.9062 4.67639 52.7823 4.53815C52.6585 4.40063 52.3827 4.30416 52.1206 4.30416C51.5417 4.30416 51.6656 4.13856 46.9935 11.1542L43.382 16.5708V29.1823V41.7938H41.7973H40.2118V21.6014V1.39536L39.867 1.06487L39.5358 0.720001H31.7634H23.9895L23.7001 1.0368ZM38.2822 22.7045V42.7594L31.7763 42.732L25.2567 42.691L25.2157 42.2359L25.1746 41.7946H28.5378C32.1075 41.7946 32.3142 41.7535 32.1903 41.1466C32.1493 40.9118 31.8735 40.8982 28.7034 40.8298L25.2574 40.7606L25.2164 39.1342L25.1754 37.5214H27.0214C28.5514 37.5214 28.91 37.4803 29.0612 37.301C29.185 37.1491 29.1987 37.0253 29.0886 36.8597C28.9784 36.6667 28.6472 36.6257 27.0625 36.5839L25.1739 36.5429L25.215 34.9301L25.256 33.3173L27.1028 33.2482C28.6191 33.1934 28.9777 33.138 29.0878 32.945C29.198 32.7794 29.1843 32.6556 29.0605 32.5037C28.9086 32.3244 28.5507 32.2834 27.0207 32.2834H25.1739L25.215 30.6569L25.256 29.0441L28.7019 28.975C31.9686 28.9058 32.1478 28.8922 32.1889 28.6445C32.299 28.0793 31.9405 28.0102 28.4672 28.0102H25.1732L25.2142 26.3837L25.2553 24.7709L27.1849 24.7018L29.1145 24.6326V24.2878V23.9429L27.1849 23.8738L25.2553 23.8046L25.2142 22.1782L25.1732 20.5654H28.4686C31.9419 20.5654 32.3005 20.4962 32.1903 19.931C32.1493 19.6826 31.97 19.669 28.7034 19.6006L25.2574 19.5314L25.2164 17.905L25.1754 16.2922H27.0214C28.5514 16.2922 28.91 16.2511 29.0612 16.0718C29.185 15.9199 29.1987 15.7961 29.0886 15.6305C28.9784 15.4375 28.6472 15.3965 27.0625 15.3547L25.1876 15.3137V13.6735V12.0197H28.4816C30.301 12.0197 31.8721 11.9786 31.9966 11.9369C32.2587 11.8404 32.2861 11.4545 32.0521 11.2205C31.9282 11.0966 30.9634 11.0549 28.537 11.0549H25.1739L25.215 9.4284L25.256 7.8156L27.1856 7.74648C28.9496 7.67736 29.1152 7.65 29.1562 7.416C29.2664 6.90624 28.8258 6.78168 26.9509 6.78168H25.1869V4.71456V2.6496H31.7338H38.2822V22.7045ZM15.2509 7.52903C15.6642 8.48015 16.1746 9.07272 17.3461 9.9684C19.3167 11.471 19.8682 12.4769 19.8682 14.6412C19.8682 15.8126 19.8272 16.0337 19.4823 16.7638C18.3382 19.1066 15.5958 20.2644 13.0729 19.4789C10.6882 18.7344 9.42032 16.5982 9.434 13.3315C9.434 10.1059 11.1296 7.19784 13.8174 5.7924L14.7822 5.28264L14.8786 6.09552C14.9334 6.55056 15.099 7.19783 15.2509 7.52903ZM52.8925 7.956C53.2647 8.5212 53.5815 9.01728 53.5815 9.05832C53.5815 9.09935 52.9335 9.12743 52.1343 9.12743C51.3351 9.12743 50.6871 9.10007 50.6871 9.05832C50.6871 8.94815 52.0652 6.92207 52.1343 6.92207C52.1624 6.92279 52.5065 7.3908 52.8925 7.956ZM56.6422 13.4971L58.9578 16.9157L58.1031 17.7703L57.2348 18.6386L56.0634 17.4672C55.4154 16.8192 54.8228 16.2958 54.7537 16.2958C54.6846 16.2958 54.092 16.8192 53.444 17.4672L52.2726 18.6386L51.1011 17.4672C50.4531 16.8192 49.8606 16.2958 49.7778 16.2958C49.695 16.2958 49.1024 16.8192 48.4681 17.4672L47.3103 18.6523L46.3729 17.7012L45.4491 16.7638L47.6818 13.428L49.9282 10.1059L52.1336 10.0922H54.339L56.6422 13.4971ZM50.8664 18.5832L51.7902 19.5617V31.1674V42.7594H49.7914H47.7927V40.5814C47.7927 38.2658 47.6962 37.8526 47.1584 37.9627C46.91 38.0038 46.8963 38.1557 46.8553 40.3884L46.8279 42.7594H46.0698H45.3116V30.3955V18.0317L46.0698 18.7762L46.8279 19.5206L46.8553 27.9281C46.897 36.1289 46.9107 36.3499 47.1584 36.391C47.7927 36.5148 47.7927 36.4464 47.7927 27.6797V19.4098L48.7165 18.4586C49.2399 17.9489 49.7223 17.5493 49.8051 17.563C49.8742 17.591 50.3566 18.0454 50.8664 18.5832ZM55.815 18.4594L56.7524 19.3831V31.0709V42.7594H54.7537H52.755V31.0846V19.4098L53.6787 18.4723C54.1885 17.9489 54.6709 17.5349 54.74 17.5349C54.8221 17.5356 55.3045 17.9489 55.815 18.4594ZM59.0953 30.492V42.7594H58.4062H57.7172V31.1537V19.548L58.3652 18.8863C58.7237 18.5278 59.0406 18.2246 59.0542 18.2246C59.0816 18.2246 59.0953 23.7384 59.0953 30.492ZM18.4621 22.801C18.655 22.9248 18.8617 23.2006 18.9034 23.4072C18.9862 23.6966 17.3598 40.7743 17.1114 42.3043L17.0422 42.7594H16.0911H15.1263V37.8108C15.1263 33.4692 15.099 32.8486 14.906 32.6837C14.7541 32.5598 14.6302 32.5454 14.4646 32.6563C14.258 32.7802 14.2306 33.3043 14.1889 37.7834L14.1615 42.7594H13.1967C12.3147 42.7594 12.2319 42.732 12.1765 42.4426C12.1347 42.2777 11.6804 37.9354 11.1699 32.8082L10.2462 23.4634L10.5219 23.0911C10.6875 22.8845 10.9633 22.6642 11.1418 22.6087C11.3211 22.5533 12.9613 22.5259 14.7807 22.5396C17.6348 22.5662 18.159 22.5943 18.4621 22.801ZM62.5412 46.4803V49.3747H36.0085H9.47575V46.4803V43.5996H36.0085H62.5412V46.4803ZM12.5 50.3402H13.0599H13.5H38H62.5556L62.5145 58.3618L62.4728 66.3977L62.0732 67.1285C61.6181 67.9558 61.0256 68.521 60.1573 68.9753L59.5784 69.2921H36.0085H12.4386L11.7078 68.8925C10.8805 68.4374 10.316 67.8449 9.86095 66.9766L9.54416 66.3977L9.50312 58.3618L9.46207 50.3402H10.8538H12.5Z"
                      fill="#EC6839"
                    />
                    <path d="M61 52H11V63H61V52Z" fill="#FFE2D8" />
                    <path
                      d="M56 57H16C13.2386 57 11 59.2386 11 62V63C11 65.7614 13.2386 68 16 68H56C58.7614 68 61 65.7614 61 63V62C61 59.2386 58.7614 57 56 57Z"
                      fill="#FFE2D8"
                    />
                    <path
                      d="M18.572 13.5245C18.5029 13.6764 18.4345 14.1307 18.4345 14.531C18.4345 16.0337 17.3178 17.4665 15.8295 17.8942C14.7956 18.1973 14.6581 18.2801 14.6027 18.6106C14.4507 19.6171 17.235 18.6106 18.2963 17.2598C19.4267 15.84 19.8126 13.2624 18.9025 13.2624C18.8067 13.2631 18.6548 13.387 18.572 13.5245Z"
                      fill="#EC6839"
                    />
                  </svg>
                </div>
                <span className="sign-up__card__text">لوازم تحریر</span>
                <label className="radio-button__container">
                  <input type="checkbox" name="radio" />
                  <span className="radio-button__checkmark"></span>
                </label>
              </div>
              <div className="sign-up__card ">
                <div className="lg:hidden">
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
                <div className="hidden lg:block lg:mb-[21px]">
                  <svg
                    width="74"
                    height="54"
                    viewBox="0 0 74 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1697_19867)">
                      <path
                        d="M67.4354 1.6875H6.56522C3.74944 1.6875 1.4668 3.96397 1.4668 6.77215V39.6341C1.4668 42.4423 3.74944 44.7188 6.56522 44.7188H67.4354C70.2512 44.7188 72.5339 42.4423 72.5339 39.6341V6.77215C72.5339 3.96397 70.2512 1.6875 67.4354 1.6875Z"
                        stroke="#EC6839"
                        strokeWidth="3"
                        strokeLinejoin="round"
                      />
                      <path d="M66 8H8V39H66V8Z" fill="#FFE2D8" />
                      <path
                        d="M16.6953 52.3125H57.3051H16.6953Z"
                        fill="#EC6839"
                      />
                      <path
                        d="M16.6953 52.3125H57.3051"
                        stroke="#EC6839"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1697_19867">
                        <rect width="74" height="54" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="sign-up__card__text">لوازم برقی</span>
                <label className="radio-button__container">
                  <input type="checkbox" name="radio" />
                  <span className="radio-button__checkmark"></span>
                </label>
              </div>
              <div className="sign-up__card ">
                <div className="lg:hidden">
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
                <div className="hidden lg:block lg:mb-[21px]">
                  <svg
                    width="74"
                    height="74"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M63.8377 15.0236H70.766V60.7787H3.26562V15.0236H10.4991"
                      fill="#EC6839"
                    />
                    <path
                      d="M63.8377 15.0236H70.766V60.7787H3.26562V15.0236H10.4991"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M37.0161 19.4513C37.0161 14.5596 31.7467 10.5959 25.2439 10.5959H10.5303V53.4003H25.2455C30.7307 53.4003 35.3403 56.2231 36.6538 60.0418"
                      fill="white"
                    />
                    <path
                      d="M37.0161 19.4513C37.0161 14.5596 31.7467 10.5959 25.2439 10.5959H10.5303V53.4003H25.2455C30.7307 53.4003 35.3403 56.2231 36.6538 60.0418"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M37.0156 60.0418V19.4513C37.0156 14.5611 42.285 10.5959 48.7878 10.5959H63.5015V53.4003H48.7878C43.3025 53.4003 38.693 56.2231 37.3795 60.0418"
                      fill="white"
                    />
                    <path
                      d="M37.0156 60.0418V19.4513C37.0156 14.5611 42.285 10.5959 48.7878 10.5959H63.5015V53.4003H48.7878C43.3025 53.4003 38.693 56.2231 37.3795 60.0418"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="sign-up__card__text">کتاب</span>
                <label className="radio-button__container">
                  <input type="checkbox" name="radio" />
                  <span className="radio-button__checkmark"></span>
                </label>
              </div>
              <div className="sign-up__card ">
                <div className="lg:hidden">
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
                <div className="hidden lg:block lg:mb-[21px]">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M62.1462 16.7388C61.829 16.7388 61.5188 16.8328 61.255 17.0091C60.9912 17.1854 60.7855 17.4359 60.6641 17.729C60.5427 18.0221 60.5109 18.3447 60.5728 18.6559C60.6347 18.9671 60.7875 19.2529 61.0119 19.4773C61.2362 19.7016 61.5221 19.8544 61.8333 19.9163C62.1444 19.9782 62.4669 19.9464 62.76 19.825C63.0532 19.7036 63.3038 19.498 63.48 19.2342C63.6563 18.9704 63.7504 18.6602 63.7504 18.3429C63.7504 17.9175 63.5813 17.5094 63.2805 17.2086C62.9796 16.9077 62.5717 16.7388 62.1462 16.7388Z"
                      fill="#EC6839"
                    />
                    <path
                      d="M51.9424 26.406C47.4915 29.8375 47.6461 37.1467 47.6461 37.1467V61.8523C47.6461 62.422 47.4199 62.9684 47.017 63.3712C46.6142 63.7741 46.0678 64.0004 45.4981 64.0004H42.2751C41.7054 64.0004 41.159 63.7741 40.7562 63.3712C40.3533 62.9684 40.127 62.422 40.127 61.8523V37.1481C40.127 26.4075 40.127 5.99814 55.1653 5.99814C57.6737 5.957 60.155 6.5212 62.3989 7.64304C64.6429 8.76487 66.5832 10.4113 68.0555 12.4425V25.3327C66.8512 27.6877 64.9967 29.6479 62.7119 30.9806C60.4271 32.3134 57.808 32.9628 55.1653 32.8519C52.9643 32.8555 50.8082 32.2296 48.9514 31.0479M50.8691 10.2958C49.5057 11.0358 48.3862 12.1554 47.6461 13.5187"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M7.36596 16.7388C7.04868 16.7388 6.73851 16.8328 6.4747 17.0091C6.2109 17.1854 6.00527 17.4359 5.88386 17.729C5.76244 18.0221 5.73064 18.3447 5.79253 18.6559C5.85443 18.9671 6.00727 19.2529 6.23162 19.4773C6.45596 19.7016 6.74182 19.8544 7.053 19.9163C7.36418 19.9782 7.68664 19.9464 7.97977 19.825C8.27289 19.7036 8.5235 19.498 8.69977 19.2342C8.87603 18.9704 8.97009 18.6602 8.97009 18.3429C8.97009 17.9175 8.80105 17.5094 8.50021 17.2086C8.19937 16.9077 7.79141 16.7388 7.36596 16.7388Z"
                      fill="#EC6839"
                    />
                    <path
                      d="M20.5622 31.0464C18.7054 32.2281 16.5492 32.854 14.3482 32.8504C11.7055 32.9613 9.08638 32.3119 6.80161 30.9791C4.51684 29.6464 2.6623 27.6862 1.45801 25.3312V12.441C2.93031 10.4098 4.87074 8.76345 7.11466 7.64161C9.35858 6.51978 11.8398 5.95549 14.3482 5.99663C29.3865 5.99663 29.3866 26.4046 29.3866 37.1467V61.8523C29.3866 62.422 29.1603 62.9684 28.7574 63.3712C28.3546 63.7741 27.8082 64.0004 27.2385 64.0004H24.0155C23.4458 64.0004 22.8994 63.7741 22.4966 63.3712C22.0937 62.9684 21.8674 62.422 21.8674 61.8523V37.1481C21.8674 37.1481 22.0205 29.8375 17.5711 26.4075M21.8674 13.5173C21.1273 12.154 20.0079 11.0344 18.6445 10.2944"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <span className="sign-up__card__text">کالای دیجیتال</span>
                <label className="radio-button__container">
                  <input type="checkbox" name="radio" />
                  <span className="radio-button__checkmark"></span>
                </label>
              </div>
              <div className="sign-up__card ">
                <div className="lg:hidden">
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
                <div className="hidden lg:block lg:mb-[21px]">
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.8448 32.8047C36.6987 32.5386 36.5164 32.2941 36.303 32.0782L33.8672 29.6756C33.617 29.4209 33.3215 29.2151 32.9959 29.0687C32.4835 28.8401 31.914 28.772 31.3621 28.8732C30.8103 28.9744 30.302 29.2403 29.9041 29.6358C29.0594 30.4672 27.5134 31.9839 24.7244 34.7398C19.3906 40.0164 9.4868 48.8604 5.00836 52.6323C4.78272 52.8211 4.59875 53.0547 4.4681 53.3183C4.33744 53.5819 4.26295 53.8698 4.24934 54.1637C4.23574 54.4576 4.28331 54.7511 4.38904 55.0257C4.49478 55.3002 4.65637 55.5498 4.8636 55.7587L10.0433 60.9955C10.2519 61.2047 10.5015 61.3685 10.7764 61.4767C11.0514 61.5848 11.3457 61.6349 11.641 61.6238C11.9362 61.6127 12.226 61.5406 12.492 61.4122C12.7581 61.2837 12.9947 61.1016 13.187 60.8773C17.0704 56.3125 25.9768 46.4007 31.2495 41.1905C33.9575 38.5263 35.4755 36.9963 36.3348 36.1516C36.761 35.7182 37.0397 35.1615 37.1312 34.5606C37.2228 33.9598 37.1226 33.3453 36.8448 32.8047V32.8047ZM63.5415 26.6953L58.9847 22.1797C58.9152 22.1102 58.8322 22.0556 58.7408 22.0193C58.6495 21.983 58.5517 21.9657 58.4534 21.9685C58.3553 21.9669 58.2579 21.9847 58.1667 22.0209C58.0755 22.0572 57.9924 22.1111 57.9222 22.1797C57.7582 22.3445 57.5586 22.4694 57.3386 22.5447C57.1187 22.62 56.8844 22.6437 56.6538 22.614C56.0588 22.5489 55.4253 22.3643 55.0162 21.9685C54.0866 21.0574 55.161 19.2645 54.3429 18.117C53.4086 16.8612 52.3841 15.6752 51.2776 14.5682C50.3399 13.6385 46.6544 10.123 40.4467 7.59156C38.4657 6.78 36.3453 6.36314 34.2045 6.36438C30.7049 6.36438 28.0141 7.92625 27.0327 8.82273C26.2517 9.5293 25.4389 10.6516 25.4389 10.6516C25.9083 10.4805 26.3877 10.3385 26.8746 10.2266C27.8899 10.009 28.9317 9.94231 29.9665 10.0287C32.0331 10.2 34.5233 11.1695 35.8594 12.2188C38.0123 13.9453 38.938 16.2549 39.0827 19.2352C39.189 21.4519 37.06 24.2502 35.0399 26.532C34.8622 26.7326 34.7686 26.9939 34.7785 27.2618C34.7883 27.5296 34.901 27.7833 35.0931 27.9703L37.914 30.7899C38.1105 30.984 38.3749 31.0939 38.6511 31.0964C38.9273 31.0989 39.1935 30.9937 39.3935 30.8032C41.2436 29.0089 43.5227 27.022 44.8149 26.2265C46.1072 25.4309 47.1498 25.2065 47.6505 25.152C48.6343 25.0568 49.6234 25.2713 50.4794 25.7656C50.6301 25.8509 50.7679 25.9574 50.8884 26.0817C51.7464 26.953 51.6946 28.3767 50.822 29.2347L50.5564 29.4857C50.4873 29.5537 50.4325 29.6347 50.395 29.7241C50.3576 29.8135 50.3383 29.9094 50.3383 30.0063C50.3383 30.1032 50.3576 30.1992 50.395 30.2886C50.4325 30.3779 50.4873 30.459 50.5564 30.527L55.1132 35.0426C55.1831 35.1114 55.2662 35.1655 55.3575 35.2016C55.4487 35.2376 55.5463 35.2549 55.6445 35.2524C55.8423 35.2552 56.0332 35.1798 56.1757 35.0426L63.5415 27.7578C63.6773 27.6143 63.753 27.4242 63.753 27.2266C63.753 27.029 63.6773 26.8389 63.5415 26.6953V26.6953Z"
                      stroke="#EC6839"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="sign-up__card__text">ابزارآلات</span>
                <label className="radio-button__container">
                  <input type="checkbox" name="radio" />
                  <span className="radio-button__checkmark"></span>
                </label>
              </div>
              <div className="sign-up__card ">
                <div className="lg:hidden">
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
                <div className="hidden lg:block lg:mb-[21px]">
                  <svg
                    width="66"
                    height="66"
                    viewBox="0 0 66 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.75 63.2129V37.0879H41.25V63.2129"
                      fill="#FFE2D8"
                    />
                    <path
                      d="M24.75 63.2129V37.0879H41.25V63.2129"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M60.5 24.7129V63.2129H5.5V24.7129"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M1.375 27.4629L33 2.78575L48.1181 14.5818C48.125 14.5818 48.125 8.21291 48.125 8.21291H53.625C53.625 8.21291 53.625 18.755 53.625 18.8801L64.625 27.4629"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M35.75 48.0879C35.478 48.0879 35.2122 48.1685 34.9861 48.3196C34.76 48.4707 34.5838 48.6855 34.4797 48.9367C34.3756 49.188 34.3484 49.4644 34.4014 49.7311C34.4545 49.9978 34.5854 50.2429 34.7777 50.4352C34.97 50.6275 35.215 50.7584 35.4818 50.8115C35.7485 50.8645 36.0249 50.8373 36.2762 50.7333C36.5274 50.6292 36.7422 50.4529 36.8933 50.2268C37.0443 50.0007 37.125 49.7349 37.125 49.4629C37.125 49.0982 36.9802 48.7484 36.7223 48.4906C36.4644 48.2327 36.1146 48.0879 35.75 48.0879Z"
                      fill="#FFE2D8"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <span className="sign-up__card__text">لوازم خانه</span>
                <label className="radio-button__container">
                  <input type="checkbox" name="radio" />
                  <span className="radio-button__checkmark"></span>
                </label>
              </div>
              <div className="sign-up__card ">
                <div className="lg:hidden">
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
                <div className="hidden lg:block lg:mb-[21px]">
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.4512 33.1771C47.4512 31.3839 48.1635 29.6641 49.4315 28.3961C50.6995 27.1281 52.4193 26.4158 54.2125 26.4158V26.4158C56.0057 26.4158 57.7255 27.1281 58.9935 28.3961C60.2615 29.6641 60.9739 31.3839 60.9739 33.1771C60.9739 34.065 60.799 34.9442 60.4592 35.7646C60.1194 36.5849 59.6214 37.3303 58.9935 37.9581C58.3657 38.586 57.6203 39.084 56.8 39.4238C55.9797 39.7636 55.1004 39.9385 54.2125 39.9385V39.9385C53.3246 39.9385 52.4454 39.7636 51.6251 39.4238C50.8047 39.084 50.0594 38.586 49.4315 37.9581C48.8037 37.3303 48.3056 36.5849 47.9658 35.7646C47.6261 34.9442 47.4512 34.065 47.4512 33.1771V33.1771Z"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.37988 33.1771C5.37988 31.3839 6.09224 29.6641 7.36024 28.3961C8.62824 27.1281 10.348 26.4158 12.1412 26.4158V26.4158C13.9345 26.4158 15.6542 27.1281 16.9222 28.3961C18.1902 29.6641 18.9026 31.3839 18.9026 33.1771C18.9026 34.065 18.7277 34.9442 18.3879 35.7646C18.0481 36.5849 17.5501 37.3303 16.9222 37.9581C16.2944 38.586 15.549 39.084 14.7287 39.4238C13.9084 39.7636 13.0292 39.9385 12.1412 39.9385V39.9385C11.2533 39.9385 10.3741 39.7636 9.55378 39.4238C8.73345 39.084 7.98809 38.586 7.36024 37.9581C6.73239 37.3303 6.23435 36.5849 5.89456 35.7646C5.55477 34.9442 5.37988 34.065 5.37988 33.1771Z"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.415 33.1771C26.415 31.3839 27.1274 29.6641 28.3954 28.3961C29.6634 27.1281 31.3832 26.4158 33.1764 26.4158V26.4158C34.9696 26.4158 36.6894 27.1281 37.9574 28.3961C39.2254 29.6641 39.9377 31.3839 39.9377 33.1771C39.9377 34.065 39.7629 34.9442 39.4231 35.7646C39.0833 36.5849 38.5852 37.3303 37.9574 37.9581C37.3295 38.586 36.5842 39.084 35.7639 39.4238C34.9435 39.7636 34.0643 39.9385 33.1764 39.9385V39.9385C32.2885 39.9385 31.4093 39.7636 30.5889 39.4238C29.7686 39.084 29.0232 38.586 28.3954 37.9581C27.7675 37.3303 27.2695 36.5849 26.9297 35.7646C26.5899 34.9442 26.415 34.065 26.415 33.1771V33.1771Z"
                      stroke="#EC6839"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="sign-up__card__text">سایر</span>
                <label className="radio-button__container">
                  <input type="checkbox" name="radio" />
                  <span className="radio-button__checkmark"></span>
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href={`/sign-up3?code=${queryCode}&phoneNum=${customerPhoneNum}`}>
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
