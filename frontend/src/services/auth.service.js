import { apiRequest } from "./api";
import { setToken } from "../utils/token";

export const signupUser = (data) => {
  return apiRequest("/auth/signup", {
    method: "POST",
    body: JSON.stringify(data)
  });
};

export const loginUser = async (data) => {

  const res = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(data)
  });

  setToken(res.token);

  return res;
};