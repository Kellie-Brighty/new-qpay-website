import Header from "../components/Header";
import BelowHero from "../components/BelowHero";
import HomeHero from "../components/HomeComponents/HomeHero";
import LocalBankImage from "../assets/local_banks.png";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className={`max-w-[1400px] m-auto`}>
      <Header />
      <HomeHero />
      <BelowHero image={LocalBankImage} page="Home" />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default Home;
