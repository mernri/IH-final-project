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
    console.log(email, password);
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

  jointribe = (tribeid, userid) => {
    return this.service
      .post("/jointribe", { tribeid, userid })
      .then(response => response.data);
  };

  leavetribe = userid => {
    return this.service
      .post("/leavetribe", { userid })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/loggedin").then(response => response.data);
  };

  logout = () => {
    return this.service.post("/logout", {}).then(response => response.data);
  };

  edit = (fullname, city, occupation, tribe) => {
    return this.service
      .post("/edit", {
        fullname,
        city,
        occupation,
        tribe
      })
      .then(response => response.data);
  };

  upload = formdata => {
    return this.service
      .post("/upload", formdata)
      .then(response => response.data);
  };
}

export default AuthService;
