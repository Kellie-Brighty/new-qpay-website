import React from "react";
import PlayStore from "../assets/play_store.png";
import Apple from "../assets/apple.png";

const GreyButtons = () => {
  return (
    <div className={`flex items-center space-x-3 justify-center text-white`}>
      <div
        className={`flex items-center bg-blog_text px-[32px] py-[18px] rounded-[16px] space-x-4 cursor-pointer`}
      >
        <img src={PlayStore} alt="" className={`w-[20px]`} />
        <div className={`text-left`}>
          <p className={`text-[16px] font-medium font-inter`}>Get it on</p>
          <p className={`text-[20px] font-medium font-inter`}>Play store</p>
        </div>
      </div>
      <div
        className={`flex items-center bg-blog_text px-[32px] py-[18px] rounded-[16px] space-x-4 cursor-pointer`}
      >
        <img src={Apple} alt="" className={`w-[20px]`} />
        <div className={`text-left`}>
          <p className={`text-[16px] font-medium font-inter`}>Get it on</p>
          <p className={`text-[20px] font-medium font-inter`}>App store</p>
        </div>
      </div>
    </div>
  );
};

export default GreyButtons;
