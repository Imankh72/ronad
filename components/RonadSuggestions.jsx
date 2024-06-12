import RonadSuggestionsCard from "./RonadSuggestionsCard";

const RonadSuggestions = () => {
  return (
    <section className="pt-10 px-[30px] pb-[118px] md:px-[50px]  lg:px-[80px] xl:px-[140px] 2xl:px-[200px] 3xl:px-[340px]">
      <h2 className="font-bold text-primary text-[18px] leading-[36px] text-center mb-10 lg:text-[32px] lg:leading-[64px] lg:font-black lg:mb-[78px]">
        بسته‌های پیشنهادی روناد برای شما
      </h2>
      <div className="flex flex-col items-center gap-y-[30px] lg:flex-row lg:justify-center lg:gap-x-[7px] 2xl:gap-x-[30px]">
        {data.map(
          ({
            id,
            option,
            price,
            perOrder,
            text,
            processText,
            btnText,
            primary,
          }) => (
            <RonadSuggestionsCard
              key={id}
              option={option}
              price={price}
              perOrder={perOrder}
              text={text}
              processText={processText}
              btnText={btnText}
              primary={primary}
            />
          )
        )}
      </div>
    </section>
  );
};

export default RonadSuggestions;

const data = [
  {
    id: 1,
    option: "اقتصادی",
    price: "۴۵ هزار تومان",
    perOrder: " ( به ازای هر سفارش )",
    processText: "پردازش پایه (آماده‌سازی سفارش، لفافه‌زنی و بسته‌بندی کالا)",
    btnText: "سفارش بسته اقتصادی",
    primary: true,
  },
  {
    id: 2,
    option: "ویژه",
    price: "۸۰ هزار تومان",
    perOrder: "( به ازای هر سفارش )",
    processText:
      "پردازش ویژه (آماده‌سازی یک ساعته سفارش، لفافه‌زنی، ضربه‌گیر و بسته‌بندی کالا)",
    btnText: "سفارش بسته ویژه",
  },
  {
    id: 3,
    option: "شخصی‌سازی‌شده",
    price: "بر اساس درخواست مشتری",
    processText:
      "پردازش ویژه (آماده‌سازی یک ساعته سفارش، لفافه‌زنی، ضربه‌گیر، الصاق لیبل و لوگو شخصی همراه با بسته‌بندی برند)",
    btnText: "سفارش بسته ویژه",
    text: "کنترل کیفی مطابق استاندارد شما",
  },
];
