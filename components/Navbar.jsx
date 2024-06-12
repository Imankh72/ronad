import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ sticky, setSticky }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    if (!sticky) {
      setSticky(true);
    }
    setOpenMenu(!openMenu);
    document.body.classList.toggle("body-overflow");
  };

  const handleLinkClick = () => {
    setOpenMenu(false);
    document.body.classList.remove("body-overflow");
  };

  return (
    <nav className={`navbar ${sticky ? "navbar--sticky" : ""}`}>
      <div className="flex items-center cursor-pointer">
        <button className="hamburger-menu__container" onClick={handleClick}>
          <span
            className={`hamburger-menu__line ${openMenu ? "rotate-right" : ""}`}
          ></span>
          <span
            className={`hamburger-menu__line ${openMenu ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`hamburger-menu__line ${openMenu ? "rotate-left" : ""}`}
          ></span>
        </button>
        <div className="flex items-center gap-x-[63px] lg:gap-x-5 2xl:gap-x-[63px]">
          <Link href="/">
            <a onClick={handleLinkClick}>
              <div className="mt-2 mr-[21px] lg:hidden">
                <Image
                  src={
                    sticky
                      ? "/images/logo-desktop-sticky.png"
                      : "/images/logo-mobile.png"
                  }
                  width={75}
                  height={30.17}
                />
              </div>
              <div className="hidden lg:block">
                <Image
                  src={
                    sticky
                      ? "/images/logo-desktop-sticky.png"
                      : "/images/logo-desktop.png"
                  }
                  width={130}
                  height={52}
                />
              </div>
            </a>
          </Link>
          <div className="lg:flex">
            <ul
              className={`nav__link--container ${
                openMenu ? "right-0 opacity-100" : "-right-full opacity-0"
              } md:opacity-100`}
            >
              <li className="nav__link" onClick={handleLinkClick}>
                <Link href="/services">
                  <a className="nav__link">خدمات</a>
                </Link>
                <span className="nav__link__underline"></span>
              </li>
              <li className="nav__link" onClick={handleLinkClick}>
                <Link href="/price">
                  <a className="nav__link">تعرفه</a>
                </Link>
                <span className="nav__link__underline"></span>
              </li>
              <li className="nav__link hidden">
                <Link href="/faq">
                  <a className="nav__link">سوالات متداول</a>
                </Link>
                <span className="nav__link__underline"></span>
              </li>
              <li className="nav__link hidden">
                <Link href="/blog">
                  <a className="nav__link">بلاگ</a>
                </Link>
                <span className="nav__link__underline"></span>
              </li>
              <li className="nav__link hidden">
                <Link href="/job">
                  <a className="nav__link">فرصت‌های شغلی</a>
                </Link>
                <span className="nav__link__underline"></span>
              </li>
              <li className="nav__link" onClick={handleLinkClick}>
                <Link href="/contact-us">
                  <a className="nav__link">تماس با ما</a>
                </Link>
                <span className="nav__link__underline"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:flex md:gap-5">
        <Link href="http://partner.ronad.ir/">
          <a className="nav__btn nav__btn--outline hidden md:flex">
            ورود به پنل
          </a>
        </Link>
        <Link href="/sign-up?code=T800">
          <a className="nav__btn nav__btn--primary">همکاری با روناد</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
