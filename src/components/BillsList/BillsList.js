// Dummy base URL for demonstration
import React from 'react';
import { Link } from 'react-router-dom';

const BillsList = ({ bills }) => {
  return (
    <div className="bills-list">
      <h2>Bills List</h2>
      <ul>
        {bills.map((bill, index) => (
          <li key={index} className="bill">
            <h3>{bill.name.en}</h3>
            <p>Number: {bill.number}</p>
            <p>Session: {bill.session}</p>
            <p>Introduced: {bill.introduced}</p>
            <Link to={`/bill/${bill.number}`} key={bill.number}>
                View Bill
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillsList;

// Example usage (would typically be placed in a parent component)
// Assuming 'data' is the JSON object containing the bills list from the provided file
// <BillsList bills={data.objects} />