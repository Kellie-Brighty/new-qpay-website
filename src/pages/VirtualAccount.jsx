import React from "react";
import Header from "../components/Header";
import Hero from "../components/VirtualAccountsComps/Hero";
import BelowHero from "../components/BelowHero";
import DepositInformation from "../assets/deposit_information.png";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

const VirtualAccount = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BelowHero image={DepositInformation} page="VirtualAccounts" />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default VirtualAccount;
