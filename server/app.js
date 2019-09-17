const express = require("express");
const app = express();
let jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const users = [{ username: "johndoe", password: "password" }];

// Middleware
app.all("/api/*", (req, res, next) => {
  console.log("middleware called..");

  let headers = req.headers["authorization"];

  if (headers) {
    const token = headers.split(" ")[1];
    let decoded = jwt.verify(token, "someprivatekey");
    if (decoded) {
      const username = decoded.username;

      const persistedUser = users.find(u => u.username == username);
      if (persistedUser) {
        next();
      } else {
        console.log("Error");
        res.join({ error: "Invalid credintials" });
      }
    } else {
      console.log("Error");
      res.json({ error: "Unauthorized access" });
    }
  } else {
    console.log("Error");
    res.json({ error: "Unauthorized access" });
  }
});

//Route that add books
app.get("/api/add-books", (req, res) => {
  res.json({ message: "Books added.." });
});

// Route that gets my books
app.get("/api/my-books", (req, res) => {
  console.log("You got It");
  res.json([{ title: "Atomic Habits" }]);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let persistedUser = users.find(
    u => u.username == username && u.password == password
  );

  if (persistedUser) {
    // credentials are valid

    var token = jwt.sign({ username: username }, "someprivatekey");
    res.json({ token: token });
  } else {
    // credentials are not valid
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.listen(3001, () => {
  console.log("Server is running....");
});
