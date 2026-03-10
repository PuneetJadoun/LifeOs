import { getToken } from "../utils/token.js";

const DEFAULT_API_BASE = "http://localhost:5000/api";

export function getApiBase() {
  return import.meta?.env?.VITE_API_URL || DEFAULT_API_BASE;
}

export async function apiRequest(path, options = {}) {
  const url = `${getApiBase()}${path.startsWith("/") ? path : `/${path}`}`;

  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(url, {
    ...options,
    headers
  });

  const text = await res.text();
  const data = text ? JSON.parse(text) : null;

  if (!res.ok) {
    const message = data?.message || `Request failed (${res.status})`;
    const err = new Error(message);
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return data;
}

