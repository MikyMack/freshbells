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

export const AddCart = async (data) => {
  try {
    const response = await axios.post(API_URLS.ADDCART, data); 
    return response.data;
  } catch (error) {
    console.error("Error adding to cart", error);
    throw error;
  }
}
// export const RemoveCartItem = async (itemId) => {
//   console.log(`Attempting to remove item with ID: ${itemId}`);
//   try {
//     const response = await axios.delete(`${API_URLS.DELETE_CART}/${itemId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error removing cart item", error);
//     if (error.response && error.response.status === 500) {
//       console.error("Internal Server Error - It might be a server-side issue.");
//     } else if (error.code === 'ERR_NETWORK') {
//       console.error("Network Error - Check if the server is reachable and CORS is configured correctly.");
//     }
//     throw error;
//   }
// }

// export const IncreaseCartItem= async(data)=>{
//     console.log(data);
//     try {
//         const response=await axios.post(API_URLS.UPDATE_QUANTITY,data)
//         return response.data;
//     } catch (error) {
//         console.error("Error Increasing cart item quantity", error);
//             throw error;
//     }
// }

// // export const DecreaseCartItem = async (itemId) => {
// //   try {
// //     const response = await axios.put(`${API_URLS.DECREASECART}/${itemId}`);
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error decreasing cart item quantity", error);
// //     throw error;
// //   }
// // }

// // export const ClearCartItems = async () => {
// //   try {
// //     const response = await axios.delete(API_URLS.CLEARCART);
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error clearing cart", error);
// //     throw error;
// //   }
// // }
