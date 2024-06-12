import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import baseURL from "../utils/baseURL";
import ConfirmedModal from "../components/ConfirmedModal";

const QRCode = () => {
  const [showModal, setShowModal] = useState(false);
  
  const handleClickModal = () => {
    document.body.classList.add("body-overflow");
    setShowModal(true);
    emailConfirmation(); 
  };
  

  const router = useRouter();

  const [customerId, setCID] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);

  useEffect(() => {
    if (router.isReady) {
      setCID(router.query.code);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (customerId) {
      setIsLoading(true);
      getCode();
    }
  }, [customerId]);

  const getCode = async () => {
    try {
      const res = await fetch(`${baseURL}/landing.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `code=${customerId}`,
      });
      const json = await res.json();
      setName(json.name);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const emailConfirmation = async () => {
    try {
      const res = await fetch(`${baseURL}/lading_mail.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `code=${customerId}`,
      });
      const json = await res.json();
      setName(json.name);
    } catch (err) {
      console.log(err);
    } finally {
      console.log('setting false:');
      setIsLoading(false);
      console.log(isLoading);
    }
  };

  
     return (
    <div>
      <div className="relative block w-full h-[1px] bg-gray-500">
            <div
              className={`absolute block -top-[1px] h-[4px] rounded-lg bg-white ${
                showModal ? "w-full" : "w-4/5 md:w-[85%] 3xl:w-[82%]"
              } `}
            ></div>
          </div>

      <section className="bg-backgroundSecondary flex flex-col lg:flex-row" hidden={isLoading}>
        <div className="mb-3 lg:mb-0 lg:flex-[2.75] lg:order-2">
          <Image src="/images/qr-code-image.jpg" width={1183} height={862} />
        </div>
        <div className="flex flex-col px-[30px] pb-[20px] lg:pb-0 lg:justify-center lg:flex-1 lg:order-1 2xl:px-[158px]">
          <h2 className="font-bold text-[24px] leading-[30px] text-center text-primary mb-3 lg:text-[32px] lg:leading-[50px] lg:text-right lg:mb-[30px]">
            سلام{" "}
            <mark className="bg-backgroundSecondary text-orange">{name}</mark>
          </h2>
          <p className="text-justify mb-7 lg:text-[20px] lg:leading-[40px] lg:mb-[50px]">
            با توجه به مدل کسب‌و‌کاری شما و نیازی که از مشتریانش رفع می‌کند،
            روناد احتمال می‌دهد یکپارچه‌سازی محصولات برند شما و روناد
            فرصت‌های رشد برای طرفین ایجاد می‌کند.
          </p>
          <div className="flex flex-col gap-y-[10px] md:justify-center md:flex-row md:gap-x-[19px]">
            <button onClick={handleClickModal}>
              <a className="qr-code__btn qr-code__btn--primary">
                ثبت موافقت همکاری
              </a>
            </button>
            <Link href="/">
              <a className="qr-code__btn qr-code__btn--outline">
                آشنایی بیشتر با روناد
              </a>
            </Link>
          </div>
        </div>
        
      </section>
      
      <ConfirmedModal showModal={showModal} setShowModal={setShowModal} />
      </div>
)
}


export default QRCode;
