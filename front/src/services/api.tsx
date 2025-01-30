import axios from "axios";

const server = "http://localhost:5000";



export const api = axios.create({
  baseURL: server,
  headers: {
    "Content-Type": "application/json",
  },
});


