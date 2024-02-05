import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BillDetail from "../../components/BillDetails/BillDetails.js"; // Import your BillDetail component

const BillDetailsPage = (selectedBill) => {
  const { billId, session } = useParams();
  const [openaiResponse, setOpenaiResponse] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  console.log("billId:", billId);
  console.log("session:", session);

  const apiUrl = `http://localhost:8080/api/openai?`;

  useEffect(() => {
    const fetchBillDetails = async (billId, session) => {
      try {
        const response = await axios.get(
          `${apiUrl}billNumber=${billId}&session=${session}`
        );
        // Set loading to false when the data is fetched
        console.log(response)

        setOpenaiResponse(response.data);
        setLoading(false);
        return openaiResponse; // This should contain the OpenAI response
      } catch (error) {
        console.error("Error fetching bill details:", error);
        throw error;
      }
    };

    // Call the function to fetch OpenAI data
    fetchBillDetails(billId, session);
  },[]);

  return (
    <div className="bill-details-page">
      {loading ? ( // Conditionally render based on the loading state
        <p>Loading...</p> // You can customize the loading UI here
      ) : (
        <BillDetail openaiResponse={openaiResponse} />
      )}
    </div>
  );
};

export default BillDetailsPage;
