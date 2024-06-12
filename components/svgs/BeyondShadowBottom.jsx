export const BeyondShadowBottom = ({ mobile }) => {
  return (
    <>
      {mobile ? (
        <svg
          width="225"
          height="420"
          viewBox="0 0 225 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_2727_2651)">
            <ellipse
              cx="232.224"
              cy="210.005"
              rx="113.405"
              ry="87.6395"
              transform="rotate(-165 232.224 210.005)"
              fill="url(#paint0_linear_2727_2651)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2727_2651"
              x="0.336548"
              y="0.382812"
              width="463.775"
              height="419.243"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="60"
                result="effect1_foregroundBlur_2727_2651"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2727_2651"
              x1="155.881"
              y1="206.621"
              x2="305.948"
              y2="288.433"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9F71E9" stop-opacity="0.13" />
              <stop offset="1" stop-color="#0091FF" stop-opacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="573"
          height="825"
          viewBox="0 0 573 825"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_2661_1326)">
            <ellipse
              cx="454.792"
              cy="412.373"
              rx="214.241"
              ry="165.565"
              transform="rotate(-165 454.792 412.373)"
              fill="url(#paint0_linear_2661_1326)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2661_1326"
              x="0.419121"
              y="0.0634766"
              width="908.746"
              height="824.62"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="121.5"
                result="effect1_foregroundBlur_2661_1326"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2661_1326"
              x1="310.569"
              y1="405.981"
              x2="594.07"
              y2="560.537"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9F71E9" stop-opacity="0.13" />
              <stop offset="1" stop-color="#0091FF" stop-opacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </>
  );
};
