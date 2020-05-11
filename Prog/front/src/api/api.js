import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080/",
  headers: {},
});

export const getUsers = (page) => {
  return instance.get(`users?current_page=${page}&count=4`).then((response) => {
    return response.data;
  })
};

// export const