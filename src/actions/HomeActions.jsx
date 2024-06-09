import axios from "../axios";
import { API_URLS } from '../constants/config';

export const Home_Details = async () => {
    try {
      const response = await axios.get(API_URLS.HOME_API);
      return response.data;
    } catch (error) {
      console.error("Error Fetching home details");
      throw error;
    }
  };