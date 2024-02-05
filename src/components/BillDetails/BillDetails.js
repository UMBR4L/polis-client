import React from "react";
import { useParams, useLocation } from "react-router-dom";

const BillDetail = ({ openaiResponse }) => {
  const { billId, session } = useParams();
  const location = useLocation();
  const introduced = new URLSearchParams(location.search).get("introduced");
  // const [billData, setBillData] = useState(null);

  // // Use useEffect to fetch the bill data when the component mounts
  // useEffect(() => {
  //   const selectedBill = .find((bill) => bill.number === billId);
  //   if (selectedBill) {
  //     setBillData(selectedBill);
  //   } else {
  //     setBillData(null);
  //   }
  // }, [billId]);

  const parsedOpenaiResponse = JSON.parse(openaiResponse);

  // Render the bill details
  return (
    <div className="bill-detail">
      {console.log(parsedOpenaiResponse)}
      {/* {console.log(parsedOpenaiResponse)} */}
      {parsedOpenaiResponse ? (
        <>
          {/* Render OpenAI-generated bill details here */}
          <h2>{parsedOpenaiResponse.Name}</h2>
          <p>Bill ID: {billId}</p>
          <p>Session ID: {session}</p>
          <p>Introduced: {introduced}</p>
          <p>Intent: {parsedOpenaiResponse.Intent}</p>
          <p>Proposed Changes: {parsedOpenaiResponse.Changes}</p>
          <p>Pros: {parsedOpenaiResponse.Pros}</p>
          <p>Cons: {parsedOpenaiResponse.Cons}</p>
          <p>Progress: {parsedOpenaiResponse.Progress}</p>
        </>
      ) : (
        <p>Bill not found.</p>
      )}
    </div>
  );
};

export default BillDetail;
