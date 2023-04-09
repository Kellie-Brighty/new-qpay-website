import React, { useEffect, useState } from "react";
import Logo from "../assets/qpay-logo.png";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  const [navBackground, setNavBackground] = useState("normal-bg");

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setNavBackground("overlaid-bg");
      } else {
        setNavBackground("normal-bg");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        navBackground === "normal-bg"
          ? `max-w-[1400px] my-0 mx-auto px-[80px] py-[40px] fixed w-[100%] z-10`
          : `max-w-[1400px] my-0 mx-auto px-[80px] py-[40px] fixed w-[100%] z-10 bg-black`
      }
    >
      <div className={`flex items-center justify-between`}>
        <div>
          <img src={Logo} alt="" className={`w-[120px]`} />
        </div>

        <div
          className={`flex items-center space-x-[80px] text-white text-[18px] font-medium`}
        >
          <div className={`flex items-center space-x-1 cursor-pointer`}>
            <p>PRODUCTS</p>
            <AiOutlineDown />
          </div>
          <p className={`cursor-pointer`}>BLOG</p>
          <p className={`cursor-pointer`}>FAQ</p>
          <p className={`cursor-pointer`}>HELP CENTER</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
