import Image from "next/image";
import Link from "next/link";

const QRFooter = () => {
  return (
    <section className="bg-[#192146] text-white lg:max-w-[1920px] lg:mx-auto">
      <div className="pr-[29px] pl-9 py-[31px] lg:flex lg:gap-x-[80px] 3xl:flex-row 3xl:pt-[34px] 3xl:pb-[35px] 3xl:pr-[155px] 3xl:pl-[163px]">
        <div>
          <div className="lg:flex lg:gap-x-5">
            <div className="lg:flex-1">
              <div className="lg:hidden">
                <Image src="/images/footer-logo.svg" width={41} height={55} />
              </div>
              <div className="hidden lg:block">
                <Image src="/images/footer-logo.svg" width={61} height={81} />
              </div>
            </div>
            <div className="lg:flex-[10]">
              <div className="lg:flex-[10]">
                <div className="mb-[39px] lg:mb-[26px]">
                  <p className="footer__text">
                    با پیشرفت تجارت الکترونیک در کشـور و نیازمنـدی به خدمـات
                    زنجیره لجستیک، روناد با استفاده از تخصص و علم روز دنـیا در
                    کنار کسب‌و‌کارها و فروشگاه‌های اینترنتی ایستاده است. ما
                    افتخار می‌کنیم با در اختیار داشتن یکی از تخصصی‌ترین مراکز
                    پردازش در سراسر ایران، سفارشات شما را در سریع‌ترین زمان و با
                    بهینه‌ترین هزینه به دست خریداران می‌رسانیم.
                  </p>
                </div>
              </div>
              <div className="lg:mb-[34px]">
                <div className="flex mb-3 gap-x-[10px] lg:items-center lg:mb-[6px]">
                  <div className="mt-2 lg:mt-1 lg:self-start">
                    <svg
                      width="15"
                      height="21"
                      viewBox="0 0 15 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2390_1197)">
                        <path
                          d="M7.5 1.15625C3.92871 1.15625 1.03125 3.914 1.03125 7.31055C1.03125 11.2188 5.34375 17.4121 6.92725 19.5513C6.99298 19.6416 7.07913 19.7151 7.17866 19.7658C7.2782 19.8164 7.38831 19.8428 7.5 19.8428C7.61169 19.8428 7.7218 19.8164 7.82134 19.7658C7.92088 19.7151 8.00702 19.6416 8.07275 19.5513C9.65625 17.413 13.9688 11.2219 13.9688 7.31055C13.9688 3.914 11.0713 1.15625 7.5 1.15625Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 9.78125C8.69086 9.78125 9.65625 8.81586 9.65625 7.625C9.65625 6.43414 8.69086 5.46875 7.5 5.46875C6.30914 5.46875 5.34375 6.43414 5.34375 7.625C5.34375 8.81586 6.30914 9.78125 7.5 9.78125Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2390_1197">
                          <rect width="15" height="21" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex-[20] lg:flex-initial">
                    <p className="footer__text leading-[28.13px] 3xl:whitespace-nowrap">
                      ایران، تهران، محله شادآباد، خیابان ١٧ شهریور، بین شهدای
                      اسلامی و بسیج مستضعفین، شرکت روناد
                    </p>
                  </div>
                </div>
                <div className="mb-[39px] lg:flex lg:items-center lg:gap-x-7 lg:mb-0">
                  <div className="flex items-center gap-x-[10px] mb-[10px] lg:mb-0">
                    <div className="3xl:mt-1">
                      <Image src="/images/phone.svg" width={15} height={21} />
                    </div>
                    <div>
                      <p className="footer__text lg:leading-[28.13px]">
                        ۰۲۱-۹۱۰۷۰۷۶۱
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-[10px]">
                    <div className="3xl:mt-1">
                      <Image src="/images/at-outline.svg" width={19} height={19} />
                    </div>
                    <div>
                      <p className="footer__text lg:leading-[28.13px]">
                        info@ronad.ir
                      </p>
                    </div>
                  </div>
                    <div className="flex items-center gap-x-[10px]">
                    <div className="3xl:mt-1">
                      <Image src="/images/mail.svg" width={19} height={15} />
                    </div>
                    <div>
                      <p className="footer__text lg:leading-[28.13px]">
                        13787-95599
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="hidden lg:flex lg:gap-x-[10px]">
                <Link href="https://tehran.irannsr.org/trade_unit/2382747/swd_id/104366/%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D9%BE%DB%8C%D8%B4%D8%AA%D8%A7%D8%B2%D8%A7%D9%86-%D8%AA%D9%88%D8%B2%DB%8C%D8%B9-%D9%81%D8%B1%D8%AF%D8%A7.html">
                  <a className="footer__logo" target="_blank">
                    <Image src="/images/nezam.png" width={86} height={86} />
                  </a>
                </Link>
                <Link href="https://logo.saramad.ir/verify.aspx?CodeShamad=1-2-788558-65-0-1">
                  <a className="footer__logo" target="_blank">
                    <Image src="/images/samandehi.png" width={86} height={86} />
                  </a>
                </Link>
                <Link href="https://trustseal.enamad.ir/?id=199049&code=C7n8uGAe7npUyLpElDyo">
                  <a className="footer__logo" target="_blank">
                    <Image
                      src="/images/elec-etemad.png"
                      width={86}
                      height={86}
                    />
                  </a>
                </Link>
                <div className="footer__logo">
                  <Image src="/images/etehad.png" width={86} height={86} />
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="footer__map">
          <div className="flex flex-col">
            <embed width="328" height="328" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=51.288948655128486%2C35.66788279804327%2C51.29790723323823%2C35.67188780025331&amp;layer=mapnik&amp;marker=35.669885324266126%2C51.29342794418335" style={{ border: "1px solid black", borderRadius: "5px" }}
            ></embed>
            <br />
            <small className="hidden">
              <a href="https://www.openstreetmap.org/?mlat=35.6696&amp;mlon=51.2936#map=16/35.6696/51.2936">
                دیدن نقشه بزرگتر
              </a>
            </small>

                    {/*}<div className="myFooter">
          <Link href="https://www.google.com/maps?ll=35.669599,51.293568&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=4014197639562869620">
          <Image src="/../public/images/googleMapRonad.jpg"  width={328} height={328} />
          </Link>
          
        </div>
        */}
        </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-6 border-t border-gray-500 pt-[21px] lg:relative 3xl:pt-[30px]">
        <div className="flex gap-x-[14px] lg:absolute lg:top-8 lg:left-40 3xl:left-80 3xl:top-9">
          <Link href="https://www.instagram.com/ronad_ir">
            <a target="_blank">
              <Image src="/images/instagram.svg" width={19} height={20} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/ronad">
            <a target="_blank">
              <Image src="/images/linkedin.svg" width={19} height={20} />
            </a>
          </Link>
        </div>
        <div>
          <p className="text-base">تمامی حقوق برای روناد محفوظ است.</p>
        </div>
      </div>
    </section>
  );
};

export default QRFooter;
