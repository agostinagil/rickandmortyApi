import axios from "axios";

const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
export default API;

API.interceptors.request.use((config) => {
  const jwt = localStorage.getItem("auth") ?? ""; //check the storage and if there's nothing it leaves it empty
  config.headers["Autorization"] = jwt; //send the jwt in the header
  return config;
});

/*API.interceptors.response. use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem("auth");
      window.location.href = "/login";
      return
    }
  }
);*/ // user doesn't have permissions
