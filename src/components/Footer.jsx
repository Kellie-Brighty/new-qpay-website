import React from "react";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

const Footer = () => {
  const backgroundStyle = {
    backgroundImage:
      "linear-gradient(302.07deg, #000000 31.22%, #1B1B1B 75.02%)",
  };
  return (
    <div style={backgroundStyle} className={`pt-[250px] pb-[80px] px-[80px]`}>
      <div className={`flex justify-between`}>
        <div>
          <p className={`text-white text-[20px] font-semibold`}>PRODUCTS</p>
          <p
            className={`mt-[40px] text-primary text-[20px] font-normal cursor-pointer`}
          >
            Money Transfer
          </p>
          <p
            className={`mt-[40px] text-primary text-[20px] font-normal cursor-pointer`}
          >
            Currency Exchange
          </p>
          <p
            className={`mt-[40px] text-primary text-[20px] font-normal cursor-pointer`}
          >
            Multicurrency Wallets
          </p>
        </div>

        <div>
          <p className={`text-white text-[20px] font-semibold`}>RESOURCES</p>
          <p
            className={`mt-[40px] text-primary text-[20px] font-normal cursor-pointer`}
          >
            Blog
          </p>
          <p
            className={`mt-[40px] text-primary text-[20px] font-normal cursor-pointer`}
          >
            FAQs
          </p>
          <p
            className={`mt-[40px] text-primary text-[20px] font-normal cursor-pointer`}
          >
            Help Center
          </p>
        </div>

        <div>
          <p className={`text-white text-[20px] font-semibold`}>LEGAL</p>
          <p
            className={`mt-[40px] text-primary text-[20px] font-normal cursor-pointer`}
          >
            Privacy Policy
          </p>
          <p
            className={`mt-[40px] text-primary text-[20px] font-normal cursor-pointer`}
          >
            Terms and Conditions
          </p>
        </div>

        <div>
          <p className={`text-white text-[20px] font-semibold`}>CONTACT</p>
          <p
            className={`mt-[40px] text-primary text-[20px] font-normal cursor-pointer`}
          >
            hello@myqpay.app
          </p>
          <p
            className={`mt-[40px] text-primary text-[20px] font-normal cursor-pointer`}
          >
            +234-816-9153-675
          </p>
        </div>
      </div>

      <div className={`mt-[390px] flex justify-between`}>
        <p className={`text-[18px] font-normal text-white`}>
          © Aza Technology, 2023
        </p>

        <div className={`flex items-center space-x-[50px]`}>
          <img src={Twitter} alt="" className={`w-[25px] cursor-pointer`} />
          <img src={Facebook} alt="" className={`w-[25px] cursor-pointer`} />
          <img src={Linkedin} alt="" className={`w-[25px] cursor-pointer`} />
          <img src={Instagram} alt="" className={`w-[25px] cursor-pointer`} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
