const express = require("express");

const app = express();
const port = 3002;

app.get("/chat", (req, res) => {
  console.log(`Received request to /api/data: ${req.method} ${req.url} `);
  res.status(200).send("Response from chat Service");
});

app.listen(port, () => {
  console.log(`Service chat listening on port ${port}`);
});
