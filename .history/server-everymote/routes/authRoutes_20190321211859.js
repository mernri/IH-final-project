const express = require("express");
const passport = require("passport");
const authRoutes = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// LOGIN ROUTE
authRoutes.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      // We are now logged in (thats why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

// SIGNUP ROUTE
authRoutes.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    res.status(400).json({ message: "Provide email and password" });
    return;
  }

  if (password.length < 7) {
    res.status(400).json({
      message:
        "Please make your password at least 8 characters long for security purposes."
    });
    return;
  }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Username check went bad." });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "Username taken. Choose another one." });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      password: hashPass,
      campus: campus,
      course: course,
      image: image
    });

    aNewUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      }

      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }

        // Send the user's information to the frontend
        // We can use also: res.status(200).json(req.user);
        res.status(200).json(aNewUser);
      });
    });
  });
});

// LOGOUT ROUTE
authRoutes.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

// LOGGED IN ROUTE => PERMET DE SAVOIR SI ON C'EST DEJA AUTHENTIFIÉ OU PAS.
// Ex: l'utilisateur raffraichit la page => on ne va pas le relogé, on va vérifié s'il a toujours le cookie de connexion = vérifié s'il est connecté. ça va permettre par exemple de décider quels liens on va mettre dans la navbar (login ou logout links)
authRoutes.get("/loggedin", (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

// EDIT PROFILE ROUTE
authRoutes.post("/edit", (req, res, next) => {
  // 1. Check user is logged in
  if (!req.isAuthenticated()) {
    res
      .status(401)
      .json({ message: "You need to be logged in to edit your profile" });
    return;
  }

  // 2. Updating `req.user` with each `req.body` field (excluding some internal fields `cannotUpdateFields`)
  const cannotUpdateFields = ["_id", "password"];
  Object.keys(req.body)
    .filter(key => cannotUpdateFields.indexOf(key) === -1)
    .forEach(key => {
      req.user[key] = req.body[key];
    });

  // 3. Validating user with its new values (see: https://mongoosejs.com/docs/validation.html#async-custom-validators)
  req.user.validate(function(error) {
    if (error) {
      // see: https://mongoosejs.com/docs/validation.html#validation-errors
      res.status(400).json({ message: error.errors });
      return;
    }

    // 4. Validation ok, let save it
    req.user.save(function(err) {
      if (err) {
        res.status(500).json({ message: "Error while saving user into DB." });
        return;
      }

      res.status(200).json(req.user);
    });
  });
});

// UPLOAD IMAGE ROUTE
const uploader = require("../cloudinary.js");
authRoutes.post("/upload", uploader.single("photo"), (req, res, next) => {
  // Check user is logged in
  if (!req.isAuthenticated()) {
    res
      .status(401)
      .json({ message: "You need to be logged in to upload your avatar" });
    return;
  }

  // Check a file has been provided
  if (!req.file) {
    res.status(400).json({ message: "No file uploaded!" });
    return;
  }

  // Updating user's `image`
  req.user.image = req.file.secure_url;

  // Validating user before saving
  req.user.validate(function(error) {
    if (error) {
      res.status(400).json({ message: error.errors });
      return;
    }

    // Validation ok, let save it
    req.user.save(function(err) {
      if (err) {
        res.status(500).json({ message: "Error while saving user into DB." });
        return;
      }

      res.status(200).json(req.user);
    });
  });
});

module.exports = authRoutes;
