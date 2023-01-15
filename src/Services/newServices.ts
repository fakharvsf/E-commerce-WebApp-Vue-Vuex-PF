// const axios = require('axios');
import axios from 'axios';

const baseUrl = 'https://dummyjson.com/';
// Getting data from API Function just tried ts
export async function getProducts(limit, skip) {
  return await axios.get(`${baseUrl}products?limit=${limit}&skip=${skip}`);
}

