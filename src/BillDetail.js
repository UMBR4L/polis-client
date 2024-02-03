import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BillDetail = ({ bills }) => {
  const { billId } = useParams();
  const [billData, setBillData] = useState(null);

  // Use useEffect to fetch the bill data when the component mounts
  useEffect(() => {
    const selectedBill = bills.find((bill) => bill.number === billId);
    if (selectedBill) {
      setBillData(selectedBill);
    } else {
      setBillData(null);
    }
  }, [billId, bills]);

  
  // Render the bill details
  return (
      <div className="bill-detail">
        { console.log(billData) }
      {billData ? (
        <>
          <h2>{billData.name.en}</h2>
          <p>Number: {billData.number}</p>
          <p>Session: {billData.session}</p>
          <p>Introduced: {billData.introduced}</p>
          <p>Private Member Bill: {billData.private_member_bill ? 'Yes' : 'No'}</p>
          <p>Law: {billData.law ? 'Yes' : 'No'}</p>
          <a href={billData.text_url} target="_blank" rel="noopener noreferrer">Bill Text</a>
          <br />
          <a href={billData.legisinfo_url} target="_blank" rel="noopener noreferrer">More Info</a>
        </>
      ) : (
        <p>Bill not found.</p>
      )}
      <style jsx>{`
        .bill-detail {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
          box-shadow: 0 0 10px #ccc;
        }
        h2 {
          color: #0056b3;
        }
        p {
          margin: 10px 0;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default BillDetail;
