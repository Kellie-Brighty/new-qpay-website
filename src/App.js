import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoneyTransfer from "./pages/MoneyTransfer";
import CurrencyExchange from "./pages/CurrencyExchange";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/money-transfer" element={<MoneyTransfer />} />
        <Route path="/currency-exchange" element={<CurrencyExchange />} />
      </Routes>
    </Router>
  );
}

export default App;
