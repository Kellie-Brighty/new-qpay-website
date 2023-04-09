import React from "react";

const BelowHero = ({ image, page }) => {
  const HomePage = () => {
    return (
      <div className={`flex items-center w-full justify-between space-x-5`}>
        <img src={image} alt="" className={`md:w-[517px] md:h-[800px]`} />

        <div className={`md:w-[610px]`}>
          <div>
            <p className={`text-[32px] font-semibold`}>
              Get access to a free local bank account
            </p>
            <p className={`text-blog_text text-[18px] font-normal`}>
              Spend and send your local currency to your friends and family from
              Qpay directly to their local bank.
            </p>
          </div>

          <div className={`mt-[80px]`}>
            <p className={`text-[30px] font-semibold text-subtext`}>
              Top up with any of three deposit options
            </p>
            <p className={`text-blog_text text-[18px] font-normal`}>
              On Qpay you can fund your Qpay account from either Payoneer,
              PayPal or your local bank.
            </p>
          </div>

          <div className={`mt-[80px]`}>
            <p className={`text-[30px] font-semibold text-subtext`}>
              Withdraw from marketplaces in minutes
            </p>
            <p className={`text-blog_text text-[18px] font-normal`}>
              Deposit funds from Payoneer or Paypal to your Qpay wallet in five
              minutes.
            </p>
          </div>

          <div className={`mt-[80px]`}>
            <p className={`text-[30px] font-semibold text-subtext`}>
              Exchange your foreign currency securely
            </p>
            <p className={`text-blog_text text-[18px] font-normal`}>
              Convert your foreign funds (USD, EUR & GBP) within the app at
              better market rates in minutes.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const MoneyTransferPage = () => {
    return (
      <div className={`flex items-center w-full justify-between space-x-5`}>
        <img src={image} alt="" className={`md:w-[517px] md:h-[800px]`} />

        <div className={`md:w-[610px]`}>
          <div>
            <p className={`text-[32px] font-semibold`}>
              Quickly send money to another Qpay user.
            </p>
            <p className={`text-blog_text text-[18px] font-normal`}>
              Make fast transaction to another Qpay user using a User’s Qpay
              tag.
            </p>
          </div>

          <div className={`mt-[80px]`}>
            <p className={`text-[30px] font-semibold text-subtext`}>
              Get your money wired to naira in seconds.
            </p>
            <p className={`text-blog_text text-[18px] font-normal`}>
              Send money to Qpay’s Exchanger and get it wired into your Naira
              wallets in minutes.
            </p>
          </div>

          <div className={`mt-[80px]`}>
            <p className={`text-[30px] font-semibold text-subtext`}>
              Request and get your global account.
            </p>
            <p className={`text-blog_text text-[18px] font-normal`}>
              Create a personal foreign virtual account for your USD, EUR and
              GBP payments.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const CurrencyExchangePage = () => {
    return (
      <div className={`flex items-center w-full justify-between space-x-5`}>
        <img src={image} alt="" className={`md:w-[517px] md:h-[800px]`} />

        <div className={`md:w-[610px]`}>
          <div>
            <p className={`text-[32px] font-semibold`}>
              Meet with verified currency exchangers
            </p>
            <p className={`text-blog_text text-[18px] font-normal`}>
              Meet with our Peer-to-Peer currency exchangers at highly
              competitive exchange rate.
            </p>
          </div>

          <div className={`mt-[80px]`}>
            <p className={`text-[30px] font-semibold text-subtext`}>
              Get your money wired to naira in seconds.
            </p>
            <p className={`text-blog_text text-[18px] font-normal`}>
              Send money to Qpay’s Exchanger and get it wired into your Naira
              wallets in minutes.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const VirtualCurrencyPage = () => {
    return (
      <div className={`flex items-center w-full justify-between space-x-5`}>
        <img src={image} alt="" className={`md:w-[517px] md:h-[800px]`} />

        <div className={`md:w-[610px]`}>
          <div>
            <p className={`text-[32px] font-semibold`}>
              Make money move across borders
            </p>
            <p className={`text-blog_text text-[18px] font-normal`}>
              Create a personal foreign virtual accounts for USD, EUR and GBP
              payments.
            </p>
          </div>

          <div className={`mt-[80px]`}>
            <p className={`text-[30px] font-semibold text-subtext`}>
              Make seamless transactions with virtual cards
            </p>
            <p className={`text-blog_text text-[18px] font-normal`}>
              Shop online, pay your international bills with ease.
            </p>
          </div>

          <div className={`mt-[80px]`}>
            <p className={`text-[30px] font-semibold text-subtext`}>
              Get the freedom to switch between currencies
            </p>
            <p className={`text-blog_text text-[18px] font-normal`}>
              With Qpay’s multicurrency wallet there’s no limit to spending .
              Just Swipe!
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`py-[91px] px-[80px]`}>
      {page === "Home" && <HomePage />}
      {page === "MoneyTransfer" && <MoneyTransferPage />}
      {page === "CurrencyExchange" && <CurrencyExchangePage />}
      {page === "VirtualAccounts" && <VirtualCurrencyPage />}
    </div>
  );
};

export default BelowHero;
