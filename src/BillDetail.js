import React, { useState, useEffect } from 'react';


const PARLIAMENT_API_BASE = "https://api.openparliament.ca"

const BillDetail = ({ data }) => {
  const [bill, setBill] = useState([]);

  useEffect(() => {
    // Fetch the bills data from the local JSON file
    fetch(`${PARLIAMENT_API_BASE}${data.url}`)
      .then(response => response.json())
      .then(data => setBill(data)) // Assuming the list is under 'objects' key
      .catch(error => console.error("Failed to load bills data:", error));
  }, []);
    
  return (
    <div className="bill-detail">
      <h2>{bill.name.en}</h2>
      <p>Status: {bill.status.en}</p>
      <p>Number: {bill.number}</p>
      <p>Session: {bill.session}</p>
      <p>Introduced: {bill.introduced}</p>
      <p>Private Member Bill: {bill.private_member_bill ? 'Yes' : 'No'}</p>
      <p>Law: {bill.law ? 'Yes' : 'No'}</p>
      <a href={bill.text_url} target="_blank" rel="noopener noreferrer">Bill Text</a>
      <br/>
      <a href={bill.legisinfo_url} target="_blank" rel="noopener noreferrer">More Info</a>
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