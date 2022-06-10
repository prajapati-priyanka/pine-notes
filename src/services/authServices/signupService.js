import axios from "axios";

export const signUpService = (user) => {
  return axios.post("/api/auth/signup", user);
};


