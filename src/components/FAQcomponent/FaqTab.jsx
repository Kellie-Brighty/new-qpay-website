import React from "react";
import Faq from "react-faq-component";
import './faq.css'

const data = {
  rows: [
    {
      title: "Why should I use Qpay?",
      content:
        "- QPay should be your choice because QPay offers better rates, spending options with fast and secure transactions in an all-in-one solution.",
    },
    {
      title: "Is Qpay secure?",
      content:
        " - The QPay team holds the security of your money and personal credentials as our top priority, for this reason we have partnered with the best institutions to implement top notch encryption and security measures to protect your information.",
    },
    {
      title: "What is the current exchange rate?",
      content:
        "QPay exchange rate depends on the current market rate, feel free to check today's rate on the QPay app.",
    },
    {
      title: "What is the minimum deposit?",
      content:
        "The minimum deposit for Dollar transactions is $50 while maximum is $5000.",
    },
    {
      title: "How much is the service charge?",
      content:
        "Qpay has a deposit charge of 1% for USD transactions, and a  0.5% percent charge on currency exchange.",
    },
    {
      title: "Why can’t I withdraw more than N5,000,000 at once?",
      content:
        "In order to adhere to the policies on money transfer for payment solution providers within Nigeria, QPay has a one-time transaction of #2,000,000",
    },
  ],
};

const FaqTab = () => {
  return (
    <div className={`px-[80px] py-[80px]`}>
      <Faq
        data={data}
        styles={{
          bgColor: "#f9f9f9",
          titleTextColor: "#323232",
          rowTitleColor: "#323232",
          rowTitleTextSize: "20px",
          rowContentColor: "#565656",
          rowContentTextSize: "16px",
          rowContentPaddingTop: "20px",
          rowContentPaddingBottom: "20px",
          rowContentPaddingLeft: "20px",
          rowContentPaddingRight: "20px",
          arrowColor: "#0FB043",
          padding: "40px"
        }}
        config={{
          animate: true,
        }}
      />
    </div>
  );
};

export default FaqTab;
