// components/auth/auth-service.js

import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_APIURL || ""}/auth`,
      withCredentials: true
    });
    this.service = service;
  }

  login = (email, password) => {
    console.log(email, password)
    return this.service
      .post("/login", { email, password })
      .then(response => response.data);
  };

  signup = (email, password) => {
    return this.service
      .post("/signup", {
        email,
        password
      })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/loggedin").then(response => response.data);
  };

  logout = () => {
    return this.service.post("/logout", {}).then(response => response.data);
  };

  edit = (fullname, picture, occupation, city) => {
    return this.service
      .post("/edit", {
        fullname,
        picture,
        occupation,
        city
      })
      .then(response => response.data);
  };

  upload = formdata => {
    return this.service
      .post("/upload", formdata)
      .then(response => response.data);
  };

  // find = userId => {
  //   return this.service
  //   .get(`/user/${userId}`)
  //   .then(response => response.data)
  //   .catch(err => { console.log("user not found :(")})
  // }
}

export default AuthService;
