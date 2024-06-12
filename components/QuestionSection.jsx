import { useState } from "react";
import Image from "next/image";
import { QuestionFormEllipse } from "./svgs/QuestionFormEllipse";

const QuestionSection = () => {
  const [inputValues, setInputValues] = useState({
    fullName: "",
    phoneNumber: "",
    monthlyOrder: "",
    webOrStore: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    var details = {
      fullName: inputValues.fullName,
      orderCount: inputValues.monthlyOrder,
      phone: inputValues.phoneNumber,
      website: inputValues.webOrStore,
      message: inputValues.message,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    e.preventDefault();
    fetch(`${baseURL}/question.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    })
      .then((res) => {
        setInputValues({
          fullName: "",
          email: "",
          phoneNumber: "",
          webOrStore: "",
          message: "",
        });
      })
      .catch((res) => console.log(res));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <section className="pt-[34px] px-6 relative z-0 md:flex md:gap-x-10 2xl:pt-[201px] 2xl:pr-[222px] 2xl:pl-[267px] 2xl:pb-[170px] 2xl:gap-x-[159px]">
      <div className="md:flex-1 md:self-center">
        <h2 className="question__heading">سوالات خود را از روناد بپرسید...</h2>
        <p className="question__text">
          ما در روناد برای موفقیت مشتریان خود ارزش قائلیم و از این رو قیمت‌گذاری
          بر اساس نیازهای منحصر به فرد شما سفارشی می‌شود. شرایط و مختصات کسب و
          کار و نیازمندی‌های شما تعیین کننده هزینه‌های زنجیره لجستیک شما از نبار
          تا خریدار نهایی خواهد بود. برای اطلاع از جزییات قیمت و تعرفه با ما در
          ارتباط باشید.
        </p>
        <div className="flex flex-col items-center justify-center gap-y-7 mb-[33px] md:flex-row md:gap-x-[35px]">
          <div className="flex gap-x-[29px] md:order-2">
            <div className="md:hidden">
              <Image src="/images/patabad.svg" width={87} height={28} />
            </div>
            <div className="hidden md:block">
              <Image src="/images/patabad.svg" width={103} height={34} />
            </div>
            <div className="md:hidden">
              <Image src="/images/taghche.svg" width={83} height={31} />
            </div>
            <div className="hidden md:block">
              <Image src="/images/taghche.svg" width={99} height={37} />
            </div>
            <div className="md:hidden">
              <Image src="/images/abzarmart.svg" width={92} height={29} />
            </div>
            <div className="hidden md:block">
              <Image src="/images/abzarmart.svg" width={110} height={35} />
            </div>
          </div>
          <div className="flex gap-x-[29px] md:order-1">
            <div className="self-center md:hidden">
              <Image src="/images/basalam.svg" width={97} height={25} />
            </div>
            <div className="self-center hidden md:block">
              <Image src="/images/basalam.svg" width={115} height={29} />
            </div>
            <div className="md:hidden">
              <Image src="/images/keshemon.svg" width={104} height={34} />
            </div>
            <div className="hidden md:block">
              <Image src="/images/keshemon.svg" width={124} height={40} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-30">
        <form className="question__form" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center relative z-30 gap-y-3 md:grid md:grid-cols-2 md:gap-x-[22px] md:gap-y-7">
            <div className="relative">
              <input
                className="question__input"
                type="text"
                id="full-name"
                value={inputValues.fullName}
                onChange={handleOnChange}
                name="fullName"
              />
              <label
                className={`question__input__label ${
                  inputValues.fullName.length
                    ? "question__input__label--shrink"
                    : ""
                }`}
                htmlFor="full-name"
              >
                نام و نام خانوادگی
              </label>
            </div>
            <div className="relative">
              <input
                className="question__input number-arrow"
                type="number"
                id="phone-number"
                value={inputValues.phoneNumber}
                onChange={handleOnChange}
                name="phoneNumber"
              />
              <label
                className={`question__input__label ${
                  inputValues.phoneNumber.length
                    ? "question__input__label--shrink"
                    : ""
                }`}
                htmlFor="phone-number"
              >
                تلفن تماس
              </label>
            </div>
            <div className="relative">
              <input
                className="question__input"
                type="text"
                id="order"
                value={inputValues.monthlyOrder}
                onChange={handleOnChange}
                name="monthlyOrder"
              />
              <label
                className={`question__input__label ${
                  inputValues.monthlyOrder.length
                    ? "question__input__label--shrink"
                    : ""
                }`}
                htmlFor="order"
              >
                تعداد سفارش ماهانه
              </label>
            </div>
            <div className="relative">
              <input
                className="question__input"
                type="text"
                id="store"
                value={inputValues.webOrStore}
                onChange={handleOnChange}
                name="webOrStore"
              />
              <label
                className={`question__input__label ${
                  inputValues.webOrStore.length
                    ? "question__input__label--shrink"
                    : ""
                }`}
                htmlFor="store"
              >
                وب سایت یا فروشگاه
              </label>
            </div>
          </div>
          <div className="relative">
            <textarea
              className="textarea"
              id="message"
              value={inputValues.message}
              onChange={handleOnChange}
              name="message"
            ></textarea>
            <label
              className={`textarea__label ${
                inputValues.message.length ? "textarea__label--shrink" : ""
              }`}
              htmlFor="message"
            >
              پیام شما ( اختیاری )
            </label>
          </div>
          <div>
            <button className="question__btn">ارسال پیام</button>
          </div>
        </form>
        <div className="hidden -z-10 xl:block xl:absolute xl:-left-4 xl:-top-5 xl:-z-10">
          <QuestionFormEllipse />
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
