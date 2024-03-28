import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BillsList.scss";
import BillDetailsPage from "../../pages/BillDetailsPage/BillDetailsPage";
import { formatDate } from "../../utils/dateUtils";

const BillsList = ({ bills }) => {
  const [selectedBill, setSelectedBill] = useState(null);

  const handleBillSelect = (bill) => {
    setSelectedBill(bill);
  };

  return (
    <div>
      <ul className="bill__container">
        {bills.map((bill, index) => (
          <li key={index} className="bill">
            <Link
              to={`/bill/${bill.bill_ID}/${bill.session_ID}?introduced=${bill.introduced}`}
              key={bill.number}
              onClick={() => handleBillSelect(bill)} // Handle bill click
            >
              <h3>{bill.title}</h3>
              <p>Bill Number: {bill.bill_ID}</p>
              <p>Session: {bill.session_ID}</p>
              <p>Introduced: {formatDate(bill.introduced)}</p>
            </Link>
          </li>
        ))}
      </ul>
      {selectedBill && <BillDetailsPage bill={selectedBill} />}{" "}
      {/* Pass selectedBill */}
    </div>
  );
};

export default BillsList;
