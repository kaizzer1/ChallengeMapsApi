import axios from "axios";

const api = axios.create({
  baseURL: "desafiounicad-production.up.railway.app",
});

export default api;
