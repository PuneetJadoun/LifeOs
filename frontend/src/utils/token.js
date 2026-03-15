
// Utility file when backend store token on frontend , to get , set and remvoe token use these functions

export function setToken(token){
  localStorage.setItem("token", token);
}

export function getToken(){
  return localStorage.getItem("token");
}

export function removeToken(){
  localStorage.removeItem("token");
}

