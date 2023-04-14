require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const programRoutes = require("./routes/programs");
const userRoutes = require("./routes/users");

//middleware

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//ROUTES
app.use("/api/programs", programRoutes);
app.use("/api/users", userRoutes);

//connect to db
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port ", process.env.PORT);
      console.log("connected to database");
    });
  })
  .catch((error) => {
    console.error(error);
  });
