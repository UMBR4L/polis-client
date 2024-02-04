import React from "react";
import { Link } from "react-router-dom";
import "./BillsList.scss";

const BillsList = ({ bills }) => {
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

  return (
    <ul className="bill__container">
      {bills.map((bill, index) => (
        <li key={index} className="bill">
          <Link to={`/bill/${bill.number}`} key={bill.number}>
            <h3>{bill.name.en}</h3>
            <p>Bill Number: {bill.number}</p>
            <p>Session: {bill.session}</p>
            <p>Introduced: {formatDate(bill.introduced)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BillsList;
