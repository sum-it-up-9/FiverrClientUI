import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://ecommercebackend-7wg2.onrender.com",
  withCredentials: true,
});

export default newRequest;