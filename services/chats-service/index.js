const express = require("express");

const app = express();
const port = 3002;

app.get("/api/chat", (req, res) => {
  console.log(`Received request to /api/data: ${req.method} ${req.url} `);
  res.status(200).send("Response from chat Service");
});

app.listen(port, () => {
  console.log(`Service A listening on port ${port}`);
});
