import axios from "axios";
const isProduction = process.env.NODE_ENV === "production";
//const base_url = "http://localhost:3000/api";

const base_url = isProduction
  ? "https://wonderfull.herokuapp.com/api"
  : "http://localhost:3000/api";

export const getPlaces = () => {
  const token = localStorage.getItem("token");
  return axios.get(`${base_url}/place`, {
    headers: {
      Authorization: token
    }
  });
};

export const createPlace = data => {
  const token = localStorage.getItem("token");
  return axios.post(`${base_url}/place`, data, {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data"
    }
  });
};
