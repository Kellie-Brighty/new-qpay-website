import React from "react";
import Hero from "../components/MoneyTransferComps/Hero";
import Header from "../components/Header";
import BelowHero from "../components/BelowHero";
import WithdrawImage from "../assets/withdraw.png";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

const MoneyTransfer = () => {
  return (
    <div className={`max-w-[1400px] m-auto`}>
      <Header />
      <Hero />
      <BelowHero image={WithdrawImage} page="MoneyTransfer" />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default MoneyTransfer;
