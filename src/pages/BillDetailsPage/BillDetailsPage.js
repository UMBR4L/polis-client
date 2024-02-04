// BillDetailsPage.js

import React from "react";
import { Link } from "react-router-dom";
import BillDetail from "../../components/BillDetail/BillDetail.js";

function BillDetailsPage({ bills }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <BillDetail bills={bills} />
    </div>
  );
}

export default BillDetailsPage;
