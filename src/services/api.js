import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://8a46-223-187-119-198.ngrok-free.app/",
});

export default axiosInstance;