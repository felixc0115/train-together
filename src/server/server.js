require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const workoutRoutes = require("./routes/programs");

//middleware

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//ROUTES
app.use("/api/programs", workoutRoutes);

//connect to db
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port ", process.env.PORT);
      console.log("connected to db");
    });
  })
  .catch((error) => {
    console.error(error);
  });
