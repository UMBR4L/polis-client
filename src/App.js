// App.js

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.js";
import BillsListPage from "./pages/BillsListPage/BillsListPage"; // Import the BillsListPage component
import BillDetailsPage from "./pages/BillDetailsPage/BillDetailsPage.js";

import billsData from "./assets/data/bills-list.json";

function App() {
  return (
    <BrowserRouter>
      <div classname="background">
        {/* <div className="background__header"></div> */}
        <Header />
        <Routes>
          <Route
            path="/"
            element={<BillsListPage bills={billsData.objects} />}
          />
          <Route
            path="/bill/:billId"
            element={<BillDetailsPage bills={billsData.objects} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
