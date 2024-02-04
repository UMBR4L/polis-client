import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./BillsList.scss";
import { fetchBillsWithFilter } from '../../utils/api';

const BillsList = () => {
  const [bills, setBills] = useState([]);
  const [filterName, setFilterName] = useState('introducedAfter2020'); // Set your filter as needed

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

  useEffect(() => {
    // Fetch bills when the component mounts or when the filter changes
    fetchBillsWithFilter(filterName)
      .then((data) => {
        // Sort the data by 'introduced' property in descending order (latest to oldest)
        data.sort((a, b) => new Date(b.introduced) - new Date(a.introduced));
        setBills(data);
      })
      .catch((error) => console.error(error));
  }, [filterName]);

  return (
    <ul className="bill__container">
      {bills.map((bill, index) => (
        <li key={index} className="bill">
          <Link to={`/bill/${bill.number}`} key={bill.number}>
            <h3>{bill.title}</h3>
            <p>Bill Number: {bill.bill_ID}</p>
            <p>Session: {bill.session_ID}</p>
            <p>Introduced: {formatDate(bill.introduced)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BillsList;
