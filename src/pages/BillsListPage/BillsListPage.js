// BillsListPage.js

import React, { useState, useEffect } from "react";
import BillsList from "../../components/BillsList/BillsList.js";
import "./BillsListPage.scss";
import Header from "../../components/Header/Header.js";
import { fetchBillsWithFilter } from "../../utils/api.js";
import "./BillsListPage.scss";

function BillsListPage({ billsData }) {
  const [bills, setBills] = useState([]);
  const [filterName, setFilterName] = useState("introducedAfter2020"); // Set your filter as needed

  useEffect(() => {
    // Fetch bills when the component mounts or when the filter changes
    fetchBillsWithFilter(filterName)
      .then((data) => {
        // Sort the data by 'introduced' property in descending order (latest to oldest)
        data.sort((a, b) => new Date(b.introduced) - new Date(a.introduced));
        setBills(data);
      })
      .catch((error) => console.error(error));
  }, [filterName]);

  return (
    <div className="bills-list-page">
      <Header className="bill-list__header" pageHeading={`POLIS`}/>
      <BillsList bills={bills} />
    </div>
  );
}

export default BillsListPage;
