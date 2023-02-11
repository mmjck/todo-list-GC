import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:${process.env.PORT_BACK}`,
});

export default api;
