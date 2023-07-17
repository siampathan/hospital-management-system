const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Express Server It's Ok, Dependenices are installed");
});

app.listen(PORT, () => {
  console.log("server running");
});
