import Image from "next/image";
import Link from "next/link";
import { FooterLocationIcon } from "./svgs/FooterLocationIcon";

const Footer = ({ isQR }) => {
  return (
    <section className="bg-[#192146] text-white lg:max-w-[1920px] lg:mx-auto">
      <div className="pr-[29px] pl-9 py-[31px] lg:flex lg:gap-y-[80px] 3xl:flex-row 3xl:pt-[34px] 3xl:pb-[35px] 3xl:pr-[155px] 3xl:pl-[163px]">
        <div className="3xl:w-[813px]">
          <div className="lg:flex lg:gap-x-5">
            <div className="lg:flex-1">
              <div className="lg:hidden">
                <Image src="/images/footer-logo.svg" width={41} height={55} />
              </div>
              <div className="hidden lg:block">
                <Image src="/images/footer-logo.svg" width={61} height={81} />
              </div>
            </div>
            <div className="lg:flex-[10] xl:flex-auto">
              <div className="lg:flex-[10] xl:flex-auto">
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
              <div className="mb-[42px] lg:hidden">
                <div>
                  <h5 className="text-[16px] leading-[25px] font-semibold border-b border-white inline-block mb-1">
                    منوی سایت
                  </h5>
                  <ul className="flex items-center gap-x-[37px]">
                    <li>
                      <Link href="/services">
                        <a className="footer__link">خدمات</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/price">
                        <a className="footer__link">تعرفه‌</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a className="footer__link">سوالات متداول</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
                        <a className="footer__link">تماس با ما</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:mb-[34px]">
                <div className="flex mb-3 gap-x-[10px] lg:items-center lg:mb-[6px]">
                  <div className="mt-2 lg:mt-1 lg:self-start">
                    <FooterLocationIcon />
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
                  <div className="flex items-center gap-x-[9px]">
                    <div className="3xl:mt-1">
                      <Image
                        src="/images/at-outline.svg"
                        width={19}
                        height={19}
                      />
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
        {!isQR && (
          <div className="hidden lg:flex md:gap-x-[15px] lg:mr-[30px] xl:mr-[60px] xl:gap-x-[35px] 3xl:gap-x-[77px] 3xl:mr-[84px] 3xl:w-[271px]">
            <div>
              <div>
                <h5 className="footer__heading">
                  <span className="footer__heading--border">منوی</span> سایت
                </h5>
                <ul className="flex gap-y-[11px] lg:flex-col">
                  <li>
                    <Link href="/services">
                      <a className="footer__link">خدمات</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/price">
                      <a className="footer__link">تعرفه‌</a>
                    </Link>
                  </li>
                  <li className="hidden">
                    <Link href="/faq">
                      <a className="footer__link">سوالات متداول</a>
                    </Link>
                  </li>
                  <li className="hidden">
                    <Link href="/blog">
                      <a className="footer__link">بلاگ</a>
                    </Link>
                  </li>
                  <li className="hidden">
                    <Link href="/career">
                      <a className="footer__link">فرصت‌های شغلی</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a className="footer__link">تماس با ما</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="hidden">
                <h5 className="footer__heading">
                  <span className="footer__heading--border">خدمات</span> روناد
                </h5>
                <ul className="flex gap-y-[11px] lg:flex-col">
                  <li>
                    <Link href="/">
                      <a className="footer__link">انبارش</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="footer__link">پردازش</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="footer__link">ارسال</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        )}
        <div className="footer__map">
          <div className="flex flex-col">
            <embed
              width="328"
              height="328"
              frameborder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=51.288948655128486%2C35.66788279804327%2C51.29790723323823%2C35.67188780025331&amp;layer=mapnik&amp;marker=35.669885324266126%2C51.29342794418335"
              style={{ border: "1px solid black", borderRadius: "5px" }}
            ></embed>
            <br />
            <small className="hidden">
              <a href="https://www.openstreetmap.org/?mlat=35.6696&amp;mlon=51.2936#map=16/35.6696/51.2936">
                دیدن نقشه بزرگتر
              </a>
            </small>
          </div>
          {/* <iframe width="425" height="328" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=51.2808108329773%2C35.6634504775896%2C51.30634546279908%2C35.67565292918312&amp;layer=mapnik&amp;marker=35.669551936552395%2C51.293578147888184" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=35.6696&amp;mlon=51.2936#map=16/35.6696/51.2936">View Larger Map</a></small>
          {/*<iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3006478272823!2d51.29137911574049!3d35.669598480197074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dff7481168ed3%3A0x37b54b7c2c5b3b74!2sRONAD!5e0!3m2!1sen!2s!4v1667310837259!5m2!1sen!2s"
            width="328"
            height="328"
            style={{ border: 0, borderRadius: "5px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          */}
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

export default Footer;
