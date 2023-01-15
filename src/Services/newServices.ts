// const axios = require('axios');
import axios from 'axios';

const baseUrl = 'https://dummyjson.com/';
// Getting data from API Function
export async function getProducts(limit, skip) {
  return await axios.get(`${baseUrl}products?limit=${limit}&skip=${skip}`);
}
// function getQuotes() {

//     axios
//         .request(options)
//         .then(function (response: any) {
//             console.log(response.data);
//         })
//         .catch(function (error: any) {
//             console.error(error);
//         });
// }
