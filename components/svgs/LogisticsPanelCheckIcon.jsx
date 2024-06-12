export const LogisticsPanelCheckIcon = ({ mobile }) => {
  return (
    <>
      {mobile ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2097_3208)">
            <path
              d="M19.6441 9.97071C19.6441 4.66263 15.3375 0.356079 10.0294 0.356079C4.72135 0.356079 0.414795 4.66263 0.414795 9.97071C0.414795 15.2788 4.72135 19.5853 10.0294 19.5853C15.3375 19.5853 19.6441 15.2788 19.6441 9.97071Z"
              fill="#EC6839"
              fillOpacity="0.1"
            />
            <path
              d="M14.3024 6.40979L8.32001 13.5317L5.7561 10.683"
              stroke="#EC6839"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2097_3208">
              <rect
                width="19.9415"
                height="19.9415"
                fill="white"
                transform="translate(0.0585938)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1464_1379)">
            <path
              d="M27.5 14C27.5 6.54688 21.4531 0.5 14 0.5C6.54688 0.5 0.5 6.54688 0.5 14C0.5 21.4531 6.54688 27.5 14 27.5C21.4531 27.5 27.5 21.4531 27.5 14Z"
              fill="#EC6839"
              fillOpacity="0.1"
            />
            <path
              d="M20 9L11.6 19L8 15"
              stroke="#EC6839"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1464_1379">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};
