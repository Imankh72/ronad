import Link from "next/link";

const Button = ({ text, primary, href = "/" }) => {
  return (
    <Link href={href}>
      <a
        className={`inline-block py-[14px] px-[56px] text-center leading-[25px] rounded-[5px] whitespace-nowrap w-full sm:w-auto lg:transition-all lg:duration-200 ${
          primary
            ? "text-white bg-primary lg:hover:bg-darkBlue lg:hover:font-bold"
            : "text-primary border border-primary lg:hover:font-bold lg:hover:outline lg:hover:outline-1 lg:hover:outline-primary"
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
