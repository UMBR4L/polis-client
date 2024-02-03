import React from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";

import BillsList from "./BillsList"; // Import the BillsList component
import BillDetail from "./BillDetail";

import billsData from "./assets/data/bills-list.json"; // Adjust the path as necessary

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BillsList bills={billsData.objects} />} />
          <Route path="/bill/:billId" element={<BillDetail bills={billsData.objects} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
