const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.evn" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
const dbo = require("./db/conn");

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`server is running on port: ${port}`);
});
