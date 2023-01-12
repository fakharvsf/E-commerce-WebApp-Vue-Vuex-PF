import axios from 'axios';

const baseUrl = 'https://dummyjson.com/';
// Getting data from API Function

export async function getProducts(limit, skip) {
  return await axios.get(`${baseUrl}products?limit=${limit}&skip=${skip}`);
}

export async function deleteFromCart(prodId) {
  return await axios.delete(`${baseUrl}products/${prodId}`);
}

export async function getProductsCatagories() {
  return await axios.get(`${baseUrl}products/categories`);
}
export async function getProductsByCatagories(cat) {
  return await axios.get(`${baseUrl}products/category/${cat}`);
}
export async function productsOfCategory(prodCata) {
  return await axios.get(`${baseUrl}products/category/${prodCata}`);
}

export async function getLatestProduct(newProduct) {
  return await axios.post(`${baseUrl}products/add`, newProduct);
}

export async function logIn(userCredentials) {
  return await axios.post(`${baseUrl}auth/login`, userCredentials);
}
