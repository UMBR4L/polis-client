// api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/', // Replace with your API endpoint
});

export async function fetchBillsWithFilter(filterName) {
  try {
    const response = await api.get(`bills?filter=${filterName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bills:', error);
    throw error;
  }
}
