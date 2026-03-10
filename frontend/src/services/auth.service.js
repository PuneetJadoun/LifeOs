import { apiRequest } from "./api.js";
import { clearToken, setToken } from "../utils/token.js";

export async function signup({ name, email, password }) {
  return apiRequest("/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, password })
  });
}

export async function login({ email, password }) {
  const data = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });

  if (data?.token) setToken(data.token);
  return data;
}

export function logout() {
  clearToken();
}

