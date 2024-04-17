const express = require("express");

const app = express();
const port = 3003;

app.get("/payment", (req, res) => {
  console.log(`Received request to /api/data: ${req.method} ${req.url} `);
  res.status(200).send("Response from payment Service");
});

app.listen(port, () => {
  console.log(`Service payment listening on port ${port}`);
});
