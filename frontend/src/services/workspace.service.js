import {apiRequest} from './api';

export const getWorkspaces = () =>{
    return apiRequest("/workspaces");
}

export const createWorkspace = (name) => {
  return apiRequest("/workspaces", {
    method: "POST",
    body: JSON.stringify({ name })
  });
};

