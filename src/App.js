import React, { Component, useState } from "react";

import Dashboard from "./components/Dashboard";
import StockContext from "./components/context/StockContext";

function App() {
  const [stockSymbol, setStockSymbol] = useState("GOOG");

  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <Dashboard />
    </StockContext.Provider>
  );
}

export default App;
