import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_PORT_BACK}`,
});
console.log(process.env.REACT_APP_PORT_BACK);
export default api;