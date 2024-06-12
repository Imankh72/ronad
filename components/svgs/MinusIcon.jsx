export const MinusIcon = ({ selected, id }) => {
  return (
    <svg
      width="17"
      height="4"
      viewBox="0 0 17 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2H15.0926"
        stroke={`${selected === id ? "#fff" : "#24388D"} `}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
