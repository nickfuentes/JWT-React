const express = require("express");
const app = express();
let jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const authenticate = require("./authMiddleware");

global.users = [{ username: "johndoe", password: "password" }];

app.use(cors());
app.use(express.json());
app.all("/api/*", authenticate);

//Route that add books
app.get("/api/add-books", (req, res) => {
  res.json({ message: "Books added.." });
});

// Route that gets my books
app.get("/api/my-books", (req, res) => {
  console.log("You got It");
  res.json([{ title: "Atomic Habits" }]);
});

// Creates JWT is user exist in database
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let persistedUser = users.find(
    u => u.username == username && u.password == password
  );

  if (persistedUser) {
    // credentials are valid

    var token = jwt.sign({ username: username }, process.env.JWT_SECRET_KEY);
    res.json({ token: token });
  } else {
    // credentials are not valid
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running....");
});
