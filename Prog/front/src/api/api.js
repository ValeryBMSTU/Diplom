import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080/",
  headers: {},
});

export const UserDAL = {
  getUsers(page) {
    return instance.get(`users?current_page=${page}&count=4`).then(response => {
      return response.data;
    })
  }
};

export const AuthDAL = {
  SignIn(email, password) {
    return instance.post(`users/login?email=${email}&password=${password}`).then(response => {
      debugger;
      return response.data.body.auth_info
    })
  },
  SignUp(nickname, email, password) {
    return instance.post(`users/reg?nickname=${nickname}&email=${email}&password=${password}`).then(response => {
      return response.data.body.auth_info
    })
  }
};