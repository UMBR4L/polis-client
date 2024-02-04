// BillsListPage.js

import React from "react";
import { Link } from "react-router-dom";
import BillsList from "../../components/BillsList/BillsList.js";
import "./BillsListPage.scss"

function BillsListPage({ bills }) {
  return (
    <div className="billsList__container">
      <BillsList bills={bills} />
    </div>
  );
}

export default BillsListPage;