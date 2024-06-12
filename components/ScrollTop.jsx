import { useEffect, useState } from "react";
import Image from "next/image";

const ScrollTop = ({ height }) => {
  const [showToScrollTop, setShowToScrollTop] = useState(false);

  // Function To Scroll Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling
    const toggleVisibility = () => {
      if (window.pageYOffset > height / 3) {
        setShowToScrollTop(true);
      } else {
        setShowToScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {showToScrollTop && (
        <div
          className="w-[50px] h-[50px] bg-[#24388D] drop-shadow-2xl p-4 flex justify-center items-center fixed rounded-full bottom-10 right-10 z-40 cursor-pointer lg:w-[55px]
            lg:h-[55px] lg:transition-all lg:duration-300 lg:hover:bg-[#1d3180]"
          onClick={scrollToTop}
        >
          <div className="mt-1">
            <Image
              src="/images/arrow-top.svg"
              width={36}
              height={36}
              className="z-40"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollTop;
