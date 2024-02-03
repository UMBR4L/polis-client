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
      <style jsx>{`
        .bills-list {
          font-family: Arial, sans-serif;
          color: #333;
        }
        h2 {
          color: #444;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li.bill {
          border-bottom: 1px solid #eee;
          padding: 10px 0;
        }
        li.bill h3 {
          margin: 0 0 5px 0;
          color: #0074d9;
        }
        li.bill p {
          margin: 5px 0;
        }
        li.bill a {
          color: #0074d9;
          text-decoration: none;
        }
        li.bill a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default BillsList;

// Example usage (would typically be placed in a parent component)
// Assuming 'data' is the JSON object containing the bills list from the provided file
// <BillsList bills={data.objects} />