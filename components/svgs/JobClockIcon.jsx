export const JobClockIcon = ({ mobile }) => {
  return (
    <>
      {mobile ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2120_3086)">
            <path
              d="M8.99998 1.02295C4.59586 1.02295 1.02271 4.5961 1.02271 9.00022C1.02271 13.4043 4.59586 16.9775 8.99998 16.9775C13.4041 16.9775 16.9772 13.4043 16.9772 9.00022C16.9772 4.5961 13.4041 1.02295 8.99998 1.02295Z"
              stroke="#EC6839"
              strokeMiterlimit="10"
            />
            <path
              d="M9 3.68164V9.6646H12.9886"
              stroke="#EC6839"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2120_3086">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1882_3800)">
            <path
              d="M10.5002 1.19318C5.36204 1.19318 1.19336 5.36186 1.19336 10.5C1.19336 15.6381 5.36204 19.8068 10.5002 19.8068C15.6383 19.8068 19.807 15.6381 19.807 10.5C19.807 5.36186 15.6383 1.19318 10.5002 1.19318Z"
              stroke="#EC6839"
              strokeMiterlimit="10"
            />
            <path
              d="M10.5 4.29546V11.2756H15.1534"
              stroke="#EC6839"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1882_3800">
              <rect width="21" height="21" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};
