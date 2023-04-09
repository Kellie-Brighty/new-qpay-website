import React from "react";
import PlayStore from "../assets/play_store.png";
import Apple from "../assets/apple.png";

const Buttons = () => {
  return (
    <div className={`flex items-center space-x-3`}>
      <div
        className={`flex items-center bg-primary px-[32px] py-[24px] rounded-[16px] space-x-4 cursor-pointer`}
      >
        <img src={PlayStore} alt="" className={`w-[20px]`} />
        <p className={`text-[20px] font-medium font-inter`}>Play store</p>
      </div>
      <div
        className={`flex items-center bg-primary px-[32px] py-[24px] rounded-[16px] space-x-4 cursor-pointer`}
      >
        <img src={Apple} alt="" className={`w-[20px]`} />
        <p className={`text-[20px] font-medium font-inter`}>App store</p>
      </div>
    </div>
  );
};

export default Buttons;
