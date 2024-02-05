import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BillsList.scss";
import BillDetailsPage from "../../pages/BillDetailsPage/BillDetailsPage";

const BillsList = ({ bills }) => {
  const [selectedBill, setSelectedBill] = useState(null);

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    const day = date.getDate();
    const formattedDate = date
      .toLocaleDateString(undefined, options)
      .replace(day, day + getDaySuffix(day));
    return formattedDate;
  };

  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

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
