export const JobCodeSlashIcon = ({ mobile }) => {
  return (
    <>
      {mobile ? (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.81718 17.5576L1.86694 12.3511L7.81718 7.14467M16.7425 17.5576L22.6928 12.3511L16.7425 7.14467M14.5112 4.91333L10.0485 19.7889"
            stroke="#EC6839"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="52"
          height="38"
          viewBox="0 0 52 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 31.25L1.5 19L15.5 6.75M36.5 31.25L50.5 19L36.5 6.75M31.25 1.5L20.75 36.5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};
