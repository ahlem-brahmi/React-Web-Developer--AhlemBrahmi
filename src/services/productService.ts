import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';



export const fetchProducts = async (sortBy: string = '', category: string = '') => {
    let url = API_URL;
    if (sortBy) url += `?sort=${sortBy}`;
    if (category) url += `&category=${category}`;
    const response = await axios.get(url);
    return response.data.products;
  };