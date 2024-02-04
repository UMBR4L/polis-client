// BillDetailsPage.js

import React from "react";
import { Link } from "react-router-dom";
import BillDetails from "../../components/BillDetails/BillDetails.js";

function BillDetailsPage({ bills }) {
  return (
    <div>
      <BillDetails bills={bills} />
    </div>
  );
}

export default BillDetailsPage;
