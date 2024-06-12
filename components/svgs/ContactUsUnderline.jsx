export const ContactUsUnderline = ({ mobile }) => {
  return (
    <>
      {mobile ? (
        <svg
          width="24"
          height="3"
          viewBox="0 0 24 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="22.5"
            y1="1.5"
            x2="1.5"
            y2="1.5"
            stroke="#EC6839"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          width="28"
          height="3"
          viewBox="0 0 28 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="26.5"
            y1="1.5"
            x2="1.5"
            y2="1.5"
            stroke="#EC6839"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )}
    </>
  );
};
