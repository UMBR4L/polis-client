import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { formatDate } from "../../utils/dateUtils";
import Header from "../Header/Header";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./BillDetails.scss";

const BillDetail = ({ openaiResponse }) => {
  const { billId, session } = useParams();
  const location = useLocation();
  const introduced = new URLSearchParams(location.search).get("introduced");

  const parsedOpenaiResponse = JSON.parse(openaiResponse.cleanedJson);

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

  // Function to render the DALL-E image
  const renderDALLEImage = () => {
    if (openaiResponse && openaiResponse.imageURL) {
      return (
        <div className="bill-details__section bill-details__section--half bill-details__section--image">
          <img
            className="bill-details__dalle-image"
            src={openaiResponse.imageURL}
            alt="DALL-E Generated Representation of Bill's Themes"
          />
        </div>
      );
    }
    return null;
  };

  console.log(billId);

  // Render the bill details
  return (
    <div className="bill-details">
      {parsedOpenaiResponse ? (
        <div className="bill-details__container">
          <Header pageHeading={`Bill ${ billId }`} />
          <div className="bill-details__section bill-details__section-heading">
            <h2 className="bill-details__heading">
              {parsedOpenaiResponse.Name}
            </h2>
          </div>
          <section className="bill-details__section bill-details__section--half">
            {/* <h3>Bill ID: {billId}</h3> */}
            <h4 className="bill-details__section-heading">Session ID</h4>{" "}
            <p>{session}</p>
            <h4 className="bill-details__section-heading">Introduced</h4>{" "}
            <p>{formatDate(introduced)}</p>
          </section>
          {renderDALLEImage()} {/* Render the DALL-E image */}
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
          <section className="bill-details__section bill-details__section--progress">
            <h3 className="bill-details__section-heading">Progress:</h3>{" "}
            <ProgressBar progress={parsedOpenaiResponse.Progress} />
          </section>
        </div>
      ) : (
        <p className="bill-details__not-found">Bill not found.</p>
      )}
    </div>
  );
};

export default BillDetail;
