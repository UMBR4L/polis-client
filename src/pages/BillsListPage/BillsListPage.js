// BillsListPage.js

import React from "react";
import { Link } from "react-router-dom";
import BillsList from "../../components/BillsList/BillsList.js";

function BillsListPage({ bills }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <BillsList bills={bills} />
    </div>
  );
}

export default BillsListPage;
