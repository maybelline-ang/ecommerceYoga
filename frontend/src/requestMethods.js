import axios from "axios";

const BASE_URL = "http://localhost:5001/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmM0ZjIzYjg1NDFiYjJmYzczYzI0MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODE1ODE2NiwiZXhwIjoxNjY5MzY3NzY2fQ.wXRms46v6r-qV56wLIIABk1hm_781Ax2BG6teYbozxI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
