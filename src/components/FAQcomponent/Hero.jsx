import React from "react";
import SVG from "../../svgs/svg_one.svg";
import QuestionMark from "../../assets/question-mark.png";

const Hero = () => {
  const backgroundStyle = {
    backgroundImage:
      "linear-gradient(302.07deg, #000000 31.22%, #1B1B1B 75.02%)",
  };

  const utmostOverlay = {
    backgroundImage:
      "linear-gradient(302.07deg, #090909f7 31.22%, #1b1b1bf9 100.02%)",
  };

  const backgroundImage = {
    backgroundImage: `url("${SVG}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "-100px -100px",
  };

  return (
    <div
      className={`w-[100%] h-[100vh] relative overflow-hidden`}
      style={backgroundStyle}
    >
      <div
        className={`relative top-0 left-0 h-[100%] w-[100%]`}
        style={backgroundImage}
      >
        <div
          className={`absolute top-0 left-0 h-[100%] w-[100%] text-white`}
          style={utmostOverlay}
        >
          <div
            className={`mt-[200px] px-[80px] flex items-center space-x-[200px]`}
          >
            <div className={`w-[700px]`}>
              <p className={`text-[42px] font-semibold`}>
                Frequently Asked Questions
              </p>
              <p className={`text-[22px] font-normal mt-[20px]`}>
                You’ve got questions? Here are some answers and advice from the
                QPay Team
              </p>
            </div>

            <div>
              <img src={QuestionMark} alt="" className={`w-[192px]`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
