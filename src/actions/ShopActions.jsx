import axios from "../axios";
import { API_URLS } from '../constants/config';

export const ShopDetails= async()=>{
 try {
     const response=await axios.get(API_URLS.SHOP_API);
     return response.data;
 } catch (error) {
    console.error("Error fetching shop details");
    throw error;
 }
}