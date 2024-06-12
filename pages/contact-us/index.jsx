import { useState } from "react";
import Page from "../../components/Page";
import baseURL from "../../utils/baseURL";
import { ContactUsEllipseTop } from "../../components/svgs/ContactUsEllipseTop";
import { ContactUsUnderline } from "../../components/svgs/ContactUsUnderline";
import { ContactUsEllipseBottom } from "../../components/svgs/ContactUsEllipseBottom";
import { ContactUsLocationIcon } from "../../components/svgs/ContactUsLocationIcon";
import { ContactUsClockIcon } from "../../components/svgs/ContactUsClockIcon";
import { ContactUsMailIcon } from "../../components/svgs/ContactUsMailIcon";
import { ContactUsPhoneIcon } from "../../components/svgs/ContactUsPhoneIcon";

const index = () => {
  const [sticky, setSticky] = useState(true);
  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    webOrStore: "",
    message: "",
  });
  const { fullName, email, phoneNumber, webOrStore, message } = inputValues;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var details = {
      fullName: fullName,
      email: email,
      phone: phoneNumber,
      website: webOrStore,
      message: message,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    e.preventDefault();
    fetch(`${baseURL}/contact_us.php`, {
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

  return (
    <Page
      title="تماس با ما | روناد | سریع و هوشمند"
      sticky={sticky}
      content="شما می‌توانید از روش‌های مختلف با روناد در ارتباط باشید. همکاران ما در اسرع وقت با شما تماس خواهند گرفت."
    >
      <section className="flex flex-col mt-[72px] md:gap-y-0 2xl:pb-[223px] 2xl:relative 2xl:z-0">
        <div className="h-1/2 order-1 px-[30px] py-6 bg-backgroundSecondary sm:px-10 xl:pt-[50px] 2xl:pt-[221px] 2xl:pr-[210px] 2xl:pb-[58px]">
          <div className="flex flex-col gap-y-1 mb-[13px]">
            <h2 className="contact-us__heading">تماس با ما</h2>
            <div className="lg:hidden">
              <ContactUsUnderline mobile />
            </div>
          </div>
          <div className="hidden lg:block 2xl:mb-[13px]">
            <ContactUsUnderline />
          </div>
          <p className="text md:w-[558px] md:leading-[40px]">
            ما اینجاییم تا به رشد و گسترش کسب‌و‌کار شما کمک کنیم. هر سوالی در
            زمینه محصولات، خدمات و یا تعرفه‌های روناد دارید می‌توانید با ما در
            ارتباط باشید. تیم متخصصان روناد آماده ارائه مشاوره تخصصی در زمینه
            زنجیره لجستیک برای کسب‌و‌کار شما هستند.
          </p>
        </div>
        <div className="px-4 -mt-[260px] pb-[71px] z-40 pt-6 order-3 relative lg:pb-6 lg:-mt-0 xl:absolute xl:top-28 xl:left-10 2xl:top-48 2xl:left-32 3xl:top-56 3xl:left-[16.5rem] 3xl:z-50 3xl:p-0">
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-[20px] items-center sm:grid sm:grid-cols-2 sm:gap-x-[26px] 2xl:gap-y-8">
              <div className="relative">
                <input
                  className="contact-us__input"
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
                  className="contact-us__input"
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
                  className="contact-us__input number-arrow"
                  type="number"
                  id="phone-number"
                  value={phoneNumber}
                  onChange={handleOnChange}
                  name="phoneNumber"
                  required
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
                  id="store"
                  value={webOrStore}
                  onChange={handleOnChange}
                  name="webOrStore"
                  required
                />
                <label
                  className={`question__input__label ${
                    webOrStore.length ? "question__input__label--shrink" : ""
                  }`}
                  htmlFor="store"
                >
                  وب سایت یا فروشگاه
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
                پیام شما
              </label>
            </div>
            <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-[17px] xl:gap-x-[10px] 2xl:gap-x-[17px]">
              <input type="file" id="choose-btn" hidden />
              <div className="contact-us__btn">
                <button onSubmit={handleSubmit}>ارسال پیام</button>
              </div>
            </div>
            <div className="absolute -top-3 -right-2 -z-40 lg:hidden">
              <ContactUsEllipseTop mobile />
            </div>
            <div className="absolute -bottom-3 -left-[0.825rem] -z-40 lg:hidden">
              <ContactUsEllipseBottom mobile />
            </div>
          </form>
        </div>
        <div className="hidden 2xl:block 2xl:absolute 2xl:top-48 2xl:left-[32rem] 3xl:top-[12.75rem] 3xl:left-[50.5rem] 3xl:z-30 3xl:opacity-50">
          <ContactUsEllipseTop />
        </div>
        <div className="hidden 2xl:block 2xl:absolute 2xl:bottom-[22rem] 2xl:left-28 3xl:bottom-[22.25rem] 3xl:left-[14.75rem] 3xl:z-30">
          <ContactUsEllipseBottom />
        </div>
        <div className="pb-[285px] bg-backgroundSecondary lg:bg-white order-2 px-[30px] pt-6 sm:px-10 lg:pb-0 lg:h-1/2 xl:pb-[140px] 2xl:pr-[210px] 2xl:pb-[58px] 2xl:pt-[62px]">
          <ul className="flex flex-col gap-y-[18px] md:w-[523px]">
            <li className="contact-us__details">
              <div className="mt-2">
                <ContactUsLocationIcon />
              </div>
              <span>
                ایران، تهران، محله شادآباد، خیابان ١٧ شهریور، بین شهدای اسلامی و
                بسیج مستضعفین، شرکت روناد، پلاک ۳۴۴
              </span>
            </li>
            <li className="contact-us__details">
              <div className="self-center">
                <ContactUsClockIcon />
              </div>
              <span>شنبه الی چهارشنبه ۸ الی ۱۷ - پنجشنبه ۸ الی ۱۳</span>
            </li>
            <li className="contact-us__details">
              <div className="self-center">
                <ContactUsMailIcon />
              </div>
              <span>info@ronad.ir</span>
            </li>
            <li className="contact-us__details">
              <div className="self-center">
                <ContactUsPhoneIcon />
              </div>
              <span>۹۱۰۷۰۷۶۱ - ۰۲۱</span>
            </li>
          </ul>
        </div>
      </section>
    </Page>
  );
};

export default index;
