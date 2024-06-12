import { animated, useTransition as useTrans } from "react-spring";

const ModalVideoPlayer = ({ showModal, setShowModal, video }) => {
  const transitions = useTrans(showModal, {
    config: { duration: "200" },
    from: { opacity: 0, display: "hidden" },
    enter: { opacity: 1, display: "flex" },
    leave: { opacity: 0, display: "hidden" },
  });

  return transitions(
    (styles, item) =>
      item && (
        <animated.div
          style={styles}
          className={`${
            showModal
              ? "overlay main-size opacity-100 flex"
              : "opacity-0 hidden"
          }`}
        >
          <animated.div
            style={styles}
            className={`modal__container ${
              showModal ? "opacity-100 flex" : "opacity-0 hidden"
            }`}
          >
            <div className="close__btn" onClick={() => setShowModal(false)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.25"
                  y="1.25"
                  width="45.5"
                  height="45.5"
                  rx="5.75"
                  stroke="#24388D"
                  strokeWidth="2.5"
                />
                <path
                  d="M32 32L16 16M32 16L16 32"
                  stroke="#24388D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <video
              className="w-[95%] h-[50%] lg:h-[80%] rounded-xl 2xl:h-[70%] 2xl:w-[70%]"
              controls
            >
              <source src={`/videos/${video}.mp4`} type="video/mp4" />
            </video>
          </animated.div>
        </animated.div>
      )
  );
};

export default ModalVideoPlayer;
