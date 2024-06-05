import axios from "axios";

const instance = axios.create({
   baseURL: 'http://192.168.29.80:8000/api',
   headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Access-Control-Allow-Origin': '*'
   }
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access:', error);
    } else if (error.code === 'ERR_NETWORK') {
      console.error('Network error:', error);
    } else if (!error.response) {
      console.error('CORS error:', error);
    } else if (error.message === 'Network Error') {
      console.error('Error sending form data for login:', error);
    }
    return Promise.reject(error);
  }
);

export default instance;
