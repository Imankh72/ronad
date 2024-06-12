export const CheckMarkIcon = ({ mobile, primary }) => {
  return (
    <>
      {mobile ? (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="7.04367"
            cy="7.1185"
            r="6.90073"
            fill={primary ? "#fff" : "#24388D"}
          />
          <path
            d="M10.1804 4.60913L5.789 9.62784L3.90698 7.74582"
            stroke={primary ? "#24388D" : "#fff"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="9.5"
            cy="9.5"
            r="9.5"
            fill={primary ? "#fff" : "#24388D"}
          />
          <path
            d="M13.8182 6.04541L7.77273 12.9545L5.18182 10.3636"
            stroke={primary ? "#24388D" : "#fff"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};
