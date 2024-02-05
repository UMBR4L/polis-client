import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { formatDate } from "../../utils/dateUtils";
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
          <li key={index}>
            <p>{item}</p>
          </li>
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

    // Convert progress string to lowercase
    const lowercaseProgress = progress.toLowerCase();

    // Create a regular expression pattern to match major stages (with lowercase)
    const pattern = new RegExp(majorStages.join("|"), "gi");

    // Use regular expression to find matches in the lowercase progress string
    const matches = lowercaseProgress.match(pattern);

    console.log("matches: " + matches);

    return (
      <ul>
        {matches &&
          matches.map((stage, index) => (
            <li key={index}>
              <p>{stage}</p>
            </li>
          ))}
      </ul>
    );
  };

  // Render the bill details
  return (
    <div className="bill-details">
      {parsedOpenaiResponse ? (
        <div className="bill-details__container">
          <div className="bill-details__section bill-details__section-heading">
            <h1 className="bill-details__heading">
              {parsedOpenaiResponse.Name}
            </h1>
          </div>
          <section className="bill-details__section bill-details__section--half">
            {/* <h3>Bill ID: {billId}</h3> */}
            <h4 className="bill-details__section-heading">Session ID</h4>{" "}
            <p>{session}</p>
            <h4 className="bill-details__section-heading">Introduced</h4>{" "}
            <p>{formatDate(introduced)}</p>
          </section>
          <section className="bill-details__section">
            <h3 className="bill-details__section-heading">Intent</h3>{" "}
            <p>{parsedOpenaiResponse.Intent}</p>
          </section>
          <section className="bill-details__section bill-details__changes">
            <h3 className="bill-details__section-heading">Proposed Changes</h3>
            {renderList(parsedOpenaiResponse.Changes)}
          </section>
          <section className="bill-details__section bill-details__section--half bill-details__pros">
            <h3 className="bill-details__section-heading">Pros</h3>
            {renderList(parsedOpenaiResponse.Pros)}
          </section>
          <section className="bill-details__section bill-details__section--half bill-details__cons">
            <h3 className="bill-details__section-heading">Cons</h3>{" "}
            {renderList(parsedOpenaiResponse.Cons)}
          </section>
          <section className="bill-details__section">
            <h3 className="bill-details__section-heading">Progress:</h3>{" "}
            {renderMajorStages(parsedOpenaiResponse.Progress)}
          </section>
        </div>
      ) : (
        <p className="bill-details__not-found">Bill not found.</p>
      )}
    </div>
  );
};

export default BillDetail;
