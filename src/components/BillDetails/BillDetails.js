import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "./BillDetails.scss";

const BillDetail = ({ openaiResponse }) => {
  const { billId, session } = useParams();
  const location = useLocation();
  const introduced = new URLSearchParams(location.search).get("introduced");

  const parsedOpenaiResponse = JSON.parse(openaiResponse);

  // Function to render a list of items from an array
  const renderList = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  // Function to filter and render major stages of progress
  const renderMajorStages = (progress) => {
    // Define the major stages you want to filter
    const majorStages = [
      "law-making process",
      "introduced",
      "first reading in the Senate",
      "second reading in the Senate",
      "consideration in committee in the Senate",
      "report stage in the Senate",
      "third reading in the Senate",
      "first reading in the House of Commons",
      "second reading in the House of Commons",
      "consideration in committee in the House of Commons",
      "report stage in the House of Commons",
      "third reading in the House of Commons",
      "Royal Assent",
    ];

    // Create a regular expression pattern to match major stages
    const pattern = new RegExp(majorStages.join("|"), "gi");

    // Use regular expression to find matches in the progress string
    const matches = progress.match(pattern);

    console.log("matches: " + matches);

    return (
      <ul>
        {matches && matches.map((stage, index) => <li key={index}>{stage}</li>)}
      </ul>
    );
  };

  // Render the bill details
  return (
    <div className="bill-details">
      {parsedOpenaiResponse ? (
        <div className="bill-details__container">
          <div className="bill-details__heading-container">
            <h2 className="bill-details__heading">
              {parsedOpenaiResponse.Name}
            </h2>
          </div>
          <section className="bill-details__intro-section">
            <h3>Bill ID: {billId}</h3>
            <h3>Session ID: {session}</h3>
            <h3>Introduced: {introduced}</h3>
            <h3>Intent: {parsedOpenaiResponse.Intent}</h3>
          </section>
          <section>
            Proposed Changes: {renderList(parsedOpenaiResponse.Changes)}
          </section>
          <section>Pros: {renderList(parsedOpenaiResponse.Pros)}</section>
          <section>Cons: {renderList(parsedOpenaiResponse.Cons)}</section>
          <section>
            Progress: {renderMajorStages(parsedOpenaiResponse.Progress)}
          </section>
        </div>
      ) : (
        <p>Bill not found.</p>
      )}
    </div>
  );
};

export default BillDetail;
