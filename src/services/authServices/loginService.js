import axios from "axios";

export const loginService = (user) =>{
    return axios.post("/api/auth/login", {
          email: user.email,
          password: user.password,
        })
    };
