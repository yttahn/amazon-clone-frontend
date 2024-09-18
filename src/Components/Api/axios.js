import axios from "axios";

const axiosInstance = axios.create({
    // baseURL:"http://127.0.0.1:5001/clone-cf240/us-central1/api",
    baseURL:"https://api-ctpacb5pmq-uc.a.run.app/",
});

export {axiosInstance}