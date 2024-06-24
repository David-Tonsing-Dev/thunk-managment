import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

const API = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "Application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("accessToken")) {
    req.headers["authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
  }
  return req;
});

export const getAllPost = () => {
  return API.get("/posts");
};
