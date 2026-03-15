// centralized api request function , to make api request to backend

import { getToken } from "../utils/token";

const BASE_URL = "http://localhost:5000/api";

export async function apiRequest(endpoint, options = {}) {

  const token = getToken();

  const res = await fetch(BASE_URL + endpoint, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    }
  });

  const data = await res.json();

  if(!res.ok){
    throw new Error(data.message || "Request failed");
  }

  return data;
}