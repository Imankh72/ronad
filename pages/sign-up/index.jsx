import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Router, { withRouter } from 'next/router'
import Page from '../../components/Page';
import baseURL from '../../utils/baseURL';
import {useRouter} from 'next/router';


const SignUp = () => {
  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    webOrStore: "",
    storeAddress: "",
  });
  const [rangeInputValues, setRangeInputValues] = useState(0);
  const [queryCode, setQueryCode] = useState('T800');

  const router = useRouter();
  
  useEffect(() => {
    if (router.isReady) {
      setQueryCode(router.query.code);
    }
  }, [router.isReady]);



  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  
  const handleSubmit = (e) => {
    var details = {
      'fullName': inputValues.fullName,
      'email': inputValues.email,
      'phone': inputValues.phoneNumber,
      'website': inputValues.webOrStore,
      'address': inputValues.storeAddress
    };
  
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
    e.preventDefault();
    fetch(`${baseURL}/signup.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 
        formBody
      
    }).then(res => {
      router.push({
        pathname: '/sign-up2',
          query: {code: queryCode, phoneNum: phoneNumber}
    })
    })
    .catch(res => console.log(res))
  };

  const { fullName, email, phoneNumber, webOrStore, storeAddress } =
    inputValues;

  return (
    <Page isSignUp={true} title="همکاری با ما | روناد | سریع و هوشمند" content="جهت شروع همکاری با شرکت خدمات هوشمند لجستیک و انبارداری روناد، فرم ثبت نام را تکمیل کنید." isQR={true}>
    <div className="bg-[#192146] h-full w-[100vw] text-white main-size pb-[8px] md:w-full md:h-[100vh] md:overflow-y-hidden">
      <header className="flex items-center justify-center relative py-[20px]">
        <div className="absolute opacity-50 right-[14px] flex items-center gap-x-[9px] md:right-14 md:transition-all md:hover:opacity-50">
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
          <button disabled>
            <a className="opacity-50 text-[14px] leading-[21.88px] md:text-[18px] md:leading-[28.13px]">
              بازگشت
            </a>
          </button>
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
      <main className="h-[100vh] w-full md:h-full">
        <div className="relative block w-full h-[1px] bg-gray-500">
          <div className="absolute block -top-[1px] h-[4px] rounded-lg bg-white w-1/4 md:w-[13%] 2xl:w-[11%] 3xl:w-[17%]"></div>
        </div>
        <div className="hidden md:w-full md:px-6 md:block md:pt-[10px]">
          <ul className="flex md:justify-around 2xl:px-[302px] 2xl:gap-x-[318px]">
            <li className="sign-up__link opacity-100">اطلاعات تماس</li>
            <li className="sign-up__link">اطلاعات فروش</li>
            <li className="sign-up__link">اطلاعات سفارش</li>
            <li className="sign-up__link">تائید و تکمیل ثبت‌نام
</li>
          </ul>
        </div>
        <div className="sign-up__container h-full pt-20 px-[14px] pb-[102px] md:pt-0 md:flex md:justify-center md:items-center">
          <div className="bg-white pt-[25px] pr-5 pl-[19px] pb-[25px] rounded-[10px] text-primary lg:pt-10 lg:px-[50px]">
            <h2 className="sign-up__heading">مشخصات خود را وارد کنید.</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-y-7 mb-[35px] "
            >
              <div className="flex flex-col gap-y-[15px] md:grid md:grid-cols-2 md:grid-rows-3 md:gap-5 lg:grid-cols-[repeat(2,406px)]">
                <div className="relative">
                  <input
                    className="sign-up__input"
                    type="text"
                    id="full-name"
                    value={fullName}
                    onChange={handleOnChange}
                    name="fullName"
                    required
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
                    className="sign-up__input"
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleOnChange}
                    name="email"
                    required
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
                    className="sign-up__input number-arrow"
                    type="number"
                    id="phone-number"
                    value={phoneNumber}
                    onChange={handleOnChange}
                    name="phoneNumber"
                    required
                  />
                  <label
                    className={`question__input__label ${
                      phoneNumber.length ? "question__input__label--shrink" : ""
                    }`}
                    htmlFor="phone-number"
                  >
                    تلفن تماس
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="sign-up__input"
                    type="text"
                    id="web-or-store"
                    value={webOrStore}
                    onChange={handleOnChange}
                    name="webOrStore"
                    required
                  />
                  <label
                    className={`question__input__label ${
                      webOrStore.length ? "question__input__label--shrink" : ""
                    }`}
                    htmlFor="web-or-store"
                  >
                    وب سایت یا فروشگاه
                  </label>
                </div>
                <div className="relative md:col-start-1 md:col-end-3">
                  <input
                    className="sign-up__input"
                    type="text"
                    id="store-address"
                    value={storeAddress}
                    onChange={handleOnChange}
                    name="storeAddress"
                    required
                  />
                  <label
                    className={`question__input__label ${
                      storeAddress.length
                        ? "question__input__label--shrink"
                        : ""
                    }`}
                    htmlFor="store-address"
                  >
                    آدرس فروشگاه
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                  <button type="submit" className="sign-up__btn">مرحله بعد</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
    </Page>
  );
};

export default SignUp;
