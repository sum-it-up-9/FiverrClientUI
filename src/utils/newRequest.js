import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://fiverr-api-alpha.vercel.app",
  withCredentials: true,
});

export default newRequest;