export const VideoIcon = ({ mobile }) => {
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
          <circle cx="9.6167" cy="10.0477" r="9.49105" fill="white" />
          <circle cx="9.6167" cy="10.0477" r="9.49105" fill="white" />
          <path
            d="M7.71849 7.6533V12.4422C7.71849 12.7302 8.01155 12.9132 8.25289 12.7751L12.5263 10.325C12.7353 10.2053 12.7353 9.89021 12.5263 9.77048L8.25289 7.32038C8.01155 7.18233 7.71849 7.3653 7.71849 7.6533Z"
            fill="#24388D"
            stroke="#24388D"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
        </svg>
      ) : (
        <svg
          width="63"
          height="63"
          viewBox="0 0 63 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="31.472" cy="31.6249" r="30.681" fill="white" />
          <circle cx="31.472" cy="31.6249" r="30.681" fill="white" />
          <path
            d="M25.3358 23.8846V39.3652C25.3358 40.2962 26.2831 40.8877 27.0633 40.4414L40.8777 32.5212C41.5531 32.1342 41.5531 31.1156 40.8777 30.7286L27.0633 22.8084C26.2831 22.3621 25.3358 22.9536 25.3358 23.8846Z"
            fill="#24388D"
            stroke="#24388D"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
        </svg>
      )}
    </>
  );
};
