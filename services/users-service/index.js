const express = require("express");

const app = express();
const port = 3004;

app.get("/users", (req, res) => {
  console.log(`Received request to /api/data: ${req.method} ${req.url} `);
  res.status(200).send("Response from users Service");
});

app.listen(port, () => {
  console.log(`Service users listening on port ${port}`);
});
