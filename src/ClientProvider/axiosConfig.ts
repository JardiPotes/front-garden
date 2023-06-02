import axios from "axios";

//set prod to true when api is in prod
const prod = false;
const schema = "http";
const host = prod ? "188.165.238.74:8000/api" : "127.0.0.1:8000/api/";
const baseURL = `${schema}://${host}`;
const token = sessionStorage.getItem("token");

export const instance = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
    Authorization: token && `Token ${token}`
  }
});

export default instance;
