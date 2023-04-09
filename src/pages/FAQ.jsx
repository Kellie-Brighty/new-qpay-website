import React from "react";
import Header from "../components/Header";
import Hero from "../components/FAQcomponent/Hero";
import FaqTab from "../components/FAQcomponent/FaqTab";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

const FAQ = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FaqTab />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default FAQ;
