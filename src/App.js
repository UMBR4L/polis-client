import React, { useParams } from 'react';
import {  Route, Routes, Link } from 'react-router-dom';

import BillsList from './BillsList'; // Import the BillsList component
import BillDetail from './BillDetail';

import billsData from './assets/data/bills-list.json'; // Adjust the path as necessary


function App() {
  return (
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route index path="/" element={<BillsList bills={billsData.objects} />}/>
          <Route path="/bill/:billId" element={<BillDetailWrapper />}/>
        </Routes>
      </div>
  );
}

// Wrapper component to load and pass the bill detail based on the URL parameter
const BillDetailWrapper = () => {
  const { billId } = useParams();
  const billData = billsData.objects.find(bill => bill.number === billId);
  return billData ? <BillDetail data={billData} /> : <p>Bill not found.</p>;
};

export default App;