import React from "react";
import Hero from "../components/CurrencyExchangeComps/Hero";
import Header from "../components/Header";
import BelowHero from "../components/BelowHero";
import ExchangersImage from "../assets/exchangers.png";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

const CurrencyExchange = () => {
  return (
    <div className={`max-w-[1400px] m-auto`}>
      <Header />
      <Hero />
      <BelowHero image={ExchangersImage} page="CurrencyExchange" />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default CurrencyExchange;
