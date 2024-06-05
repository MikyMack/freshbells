import axios from "../axios";
import { API_URLS } from '../constants/config';

export const USER_LOGIN = async (dat) => {
  try {
    const response = await axios.post(API_URLS.SIGNUP_API_PATH, dat);
    return response.data;
  } catch (error) {
    console.error("Error sending form data for login");
    throw error;
  }
};

export const LOGIN_ACTION = async (dat) => {
  try {
    const response = await axios.post(API_URLS.LOGIN_API_PATH, dat);
    if (response.data.status === true) {
      localStorage.setItem("authToken", response.data.token);
    } 
    return response.data;
  } catch (error) {
    console.error("Error sending form data for login", error.response ? error.response : error);
    throw error;
  }
};


