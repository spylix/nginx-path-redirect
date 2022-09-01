const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  res.send(JSON.stringify({ data: { sorpresa: true, name: "Docky" } }));
});

app.get("/wildcard", (req, res) => {
  res.send(JSON.stringify({ data: { wildcard: true } }));
});

app.get("/server", (req, res) => {
  res.send(JSON.stringify({ data: { error: "Wrong path" } }));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
