const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let emails = [];

// Health Check (IMPORTANT for rollback)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Add email
app.post("/add-email", (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send("Email required");
    }

    emails.push(email);
    res.send("Email added");

  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Get emails
app.get("/emails", (req, res) => {
  try {
    res.json(emails);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Default route (optional)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(5000, () => console.log("Server running on port 5000"));
