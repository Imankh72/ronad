export const JobPenIcon = ({ mobile }) => {
  return (
    <>
      {mobile ? (
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.12979 0.854004C4.90453 0.854004 1.47949 4.27905 1.47949 8.50431C1.47949 12.7296 4.90453 16.1546 9.12979 16.1546C13.3551 16.1546 16.7801 12.7296 16.7801 8.50431C16.7801 4.27905 13.3551 0.854004 9.12979 0.854004Z"
            stroke="#EC6839"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.06909 15.5181V10.0344L9.12921 4.6792L12.1893 10.0344V15.5181"
            stroke="#EC6839"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.06909 10.0347C6.06909 10.0347 6.93128 10.7997 7.59915 10.7997C8.26702 10.7997 9.12921 10.0347 9.12921 10.0347C9.12921 10.0347 9.9914 10.7997 10.6593 10.7997C11.3271 10.7997 12.1893 10.0347 12.1893 10.0347"
            stroke="#EC6839"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 1C9.0586 1 1 9.0586 1 19C1 28.9414 9.0586 37 19 37C28.9414 37 37 28.9414 37 19C37 9.0586 28.9414 1 19 1Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.7988 35.5024V22.6L18.9988 10L26.1988 22.6V35.5024"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.7988 22.6006C11.7988 22.6006 13.8274 24.4006 15.3988 24.4006C16.9702 24.4006 18.9988 22.6006 18.9988 22.6006C18.9988 22.6006 21.0274 24.4006 22.5988 24.4006C24.1702 24.4006 26.1988 22.6006 26.1988 22.6006"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};
