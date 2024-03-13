import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverrbackend-hrr1.onrender.com",
  withCredentials: true,
});

export default newRequest;