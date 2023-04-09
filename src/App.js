import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoneyTransfer from "./pages/MoneyTransfer";
import CurrencyExchange from "./pages/CurrencyExchange";
import VirtualAccount from "./pages/VirtualAccount";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/money-transfer" element={<MoneyTransfer />} />
        <Route path="/currency-exchange" element={<CurrencyExchange />} />
        <Route path="/virtual-accounts" element={<VirtualAccount />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
