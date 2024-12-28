const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ status: "success", message: "node js server started" });
});

app.get("/test", (req, res) => {
  res.send({ status: "success", message: "aws node server" });
});
app.listen(8090, () => {
  console.log("listening on port 8090");
});
