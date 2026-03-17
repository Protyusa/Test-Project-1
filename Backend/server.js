const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let emails = [];

// Add email
app.post("/add-email", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).send("Email required");

  emails.push(email);
  res.send("Email added");
});

// Get emails
app.get("/emails", (req, res) => {
  res.json(emails);
});

app.listen(5000, () => console.log("Server running on port 5000"));
