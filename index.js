const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World! 2");
});

app.listen(process.env.PORT, () =>
  console.log("Example app listening on port 3000!")
);
