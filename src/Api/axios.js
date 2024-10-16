import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-1aa54/us-central1/api",
  //baseURL: "https://amazon-clone-api-mzqc.onrender.com/",
  baseURL: "https://amazon-clone-api-glo2.onrender.com/",
});
export { axiosInstance };
