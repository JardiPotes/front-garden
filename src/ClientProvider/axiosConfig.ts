import axios from "axios";

const schema = "http";
const host = "188.165.238.74:8000/api";
const baseURL = `${schema}://${host}`;

export const instance = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default instance;
