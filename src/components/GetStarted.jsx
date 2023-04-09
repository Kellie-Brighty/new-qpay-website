import React from "react";
import OneImage from "../assets/one.png";
import TwoImage from "../assets/two.png";
import ThreeImage from "../assets/three.png";
import GreyButtons from "./GreyButtons";
import GetStartedIllust from "../assets/get_started_illust.png";

const GetStarted = () => {
  return (
    <div className={``}>
      <div
        className={`flex items-center w-full justify-between space-x-5 py-[251px] px-[80px]`}
      >
        <div>
          <p className={`text-[48px] font-semibold text-title_text`}>
            How to get started
          </p>
          <p className={`text-[18px] font-normal text-subtext w-[500px]`}>
            Opening an account has never been this seamless. From registration
            to withdrawal in three easy steps.
          </p>
        </div>

        <div className={`w-[600px]`}>
          <div className={`flex items-center space-x-[40px]`}>
            <img src={OneImage} alt="" className={`w-[60px] h-[60px]`} />
            <div>
              <p className={`text-[30px] font-semibold text-title_text`}>
                Register in minutes
              </p>
              <p className={`text-[18px] font-normal text-subtext`}>
                Sign up and create a Qpay account with your basic details to get
                started.
              </p>
            </div>
          </div>

          <div className={`flex items-center space-x-[40px] mt-[80px]`}>
            <img src={TwoImage} alt="" className={`w-[60px] h-[60px]`} />
            <div>
              <p className={`text-[30px] font-semibold text-title_text`}>
                Verify your identity
              </p>
              <p className={`text-[18px] font-normal text-subtext`}>
                Complete the easy KYC verification levels to start transacting.
              </p>
            </div>
          </div>

          <div className={`flex items-center space-x-[40px] mt-[80px]`}>
            <img src={ThreeImage} alt="" className={`w-[60px] h-[60px]`} />
            <div>
              <p className={`text-[30px] font-semibold text-title_text`}>
                Top up your account
              </p>
              <p className={`text-[18px] font-normal text-subtext`}>
                Whether it’s in USD from Payoneer, Paypal or NGN from a local
                bank.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`px-[80px] pt-[140px] text-center h-[1000px] overflow-hidden`}
      >
        <p className={`text-[48px] font-semibold text-title_text`}>
          Get Started now, it is free
        </p>
        <p
          className={`text-[18px] font-normal text-blog_text w-[800px] m-auto mt-[20px]`}
        >
          Get our mobile app on any device you use on the App Store or Play
          Store It's Quick, It's Better and it's for You.
        </p>

        <div className={`mt-[40px]`}>
          <GreyButtons />
        </div>

        <div className={`mt-[80px] justify-center flex`} >
          <img src={GetStartedIllust} alt="" className={`w-[483px]`} />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
