import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://locations-1lyx.onrender.com/",
});

export default axiosInstance;