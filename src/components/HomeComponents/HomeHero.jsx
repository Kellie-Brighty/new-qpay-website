import React from "react";
import SVG from "../../svgs/svg_one.svg";
import Illust from "../../assets/home-hero-illust.png";
import Buttons from "../Buttons";

const HomeHero = () => {
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
      className={`w-[100%] h-[1000px] relative overflow-hidden`}
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
          <div className={`mt-[200px] `}>
            <p className={`text-[42px] font-semibold text-center`}>
              Borderless Payment Solution for African Digital Workers
            </p>
            <p className={`text-[22px] font-normal text-center mt-[20px]`}>
              Snap your fingers! That’s how quick you can receive and exchange
              your foreign funds with Qpay.
            </p>

            <div className={`mt-[40px] flex justify-center`}>
              <Buttons />
            </div>
          </div>
          <div className={`w-full mt-[50px] flex justify-center`}>
            <img src={Illust} alt="" className={`w-[1000px]`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
