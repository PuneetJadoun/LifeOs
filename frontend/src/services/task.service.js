import { apiRequest } from "./api";

export const getTasks = () => {
  return apiRequest("/tasks");
};

export const createTask = (task) => {
  return apiRequest("/tasks", {
    method: "POST",
    body: JSON.stringify(task)
  });
};

