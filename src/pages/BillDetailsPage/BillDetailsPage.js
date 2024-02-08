import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BillDetail from "../../components/BillDetails/BillDetails.js"; // Import your BillDetail component
import legislativeProcessImage from "../../assets/images/legislative-process.png";
import Header from "../../components/Header/Header.js";
import "./BillDetailsPage.scss";

const BillDetailsPage = (selectedBill) => {
  const { billId, session } = useParams();
  const [openaiResponse, setOpenaiResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = `http://localhost:8080/api/openai?`;

  useEffect(() => {
    const fetchBillDetails = async (billId, session) => {
      try {
        // Check if the response is already cached in localStorage
        const cachedResponse = localStorage.getItem(
          `bill_${billId}_${session}`
        );

        if (cachedResponse) {
          // If cached response exists, use it and avoid making a new API call
          setOpenaiResponse(JSON.parse(cachedResponse));
          setLoading(false);
        } else {
          // If not cached, make the API call
          const response = await axios.get(
            `${apiUrl}billNumber=${billId}&session=${session}`
          );

          setOpenaiResponse(response.data);
          setLoading(false);

          // Cache the API response in localStorage
          localStorage.setItem(
            `bill_${billId}_${session}`,
            JSON.stringify(response.data)
          );
        }
      } catch (error) {
        console.error("Error fetching bill details:", error);
        throw error;
      }
    };

    // Call the function to fetch OpenAI data
    fetchBillDetails(billId, session);
  }, []);

  return (
    <div className="bill-details-page">
      {loading ? (
        <div className="loading-screen">
          <Header pageHeading={`Loading...`}/>
          <div className="loading-screen__animation">
            <div className="loading-screen__spinner"></div>
          </div>
          <img
            className="loading-screen__image"
            src={legislativeProcessImage}
            alt="Legislative process loading screen"
          />
        </div>
      ) : (
        <BillDetail openaiResponse={openaiResponse} />
      )}
    </div>
  );
};

export default BillDetailsPage;
