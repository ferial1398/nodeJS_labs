const mongoose = require("mongoose");
const express = require("express");

const userRouter = require("./routes/user")

const app = express();

const port = process.env.PORT || 4000

// middlewares
app.use("/users", userRouter)

mongoose
  .connect("mongodb://localhost:27017/mansouraDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to Mansoura database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  // console.log("connected");
});
