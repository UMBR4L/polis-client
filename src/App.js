// App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.js";
import BillsListPage from "./pages/BillsListPage/BillsListPage"; // Import the BillsListPage component
import BillDetailsPage from "./pages/BillDetailsPage/BillDetailsPage.js";
import billsData from "./assets/data/bills-list.json";

function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<BillsListPage bills={billsData} />} />
        <Route path="/bill/:billId/:session" element={<BillDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
