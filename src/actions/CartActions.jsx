import axios from "../axios";
import { API_URLS } from '../constants/config';

export const FetchCart = async () => {
  try {
    const response = await axios.get(API_URLS.CART);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart", error);
    throw error;
  }
}
export const DeleteCart = async (id) => {
  try {
   const response=await axios.delete(`${API_URLS.DELETE_CART}/${id}`); 
   return response.data;
  } catch (error) {
    console.error("Error deleting cart", error);
    throw error;
  }
}

export const AddCart = async (data) => {
  try {
    console.log(data, "data");
    const response = await axios.post(API_URLS.ADDCART, data);
    return response.data;
  } catch (error) {
    console.error("Error adding to cart", error);
    throw error;
  }
}

export const ADD_Billing_Address = async (data) => {
  try {
    const response = await axios.post(API_URLS.SUBMIT_ADDRESS, data);
    console.log(response, "billing");
    return response.data;
  } catch (error) {
    console.error("Error submitting billing address", error);
    throw error;
  }
}

export const Get_Address = async () => {
  try {
    const response = await axios.get(API_URLS.CHECKOUT)
    return response.data;
  } catch (error) {
    console.error("Error fetching address", error);
    throw error;
  }
}