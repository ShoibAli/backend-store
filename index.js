const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("hello there");
});

app.listen(3000, () => {
  console.log("listening");
});
