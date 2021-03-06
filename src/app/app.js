import morgan from "morgan";
import bodyParser from "body-parser";
import express from "express";
//databse
import { connect } from "../config/database";
connect();

//server
const app = express();

//setting
app.set("port", process.env.PORT || 5000);

//middelware
app.use(morgan("dev"));
app.use(bodyParser.json());

//Routes
import {
  users,
  students,
  countrys,
  cities,
  roles,
  requests,
  drivers,
  routes,
  schools
} from "../routes/index";

app.use("/users", users);
app.use("/students", students);
app.use("/countrys", countrys);
app.use("/cities", cities);
app.use("/roles", roles);
app.use("/requests", requests);
app.use("/drivers", drivers);
app.use("/routes", routes);
app.use("/schools", schools);

// catch 404 Errors and Forward them to Error Handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error Handler Function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = error.status || 300;

  // response to client
  res.status(status).json({
    error: {
      message: error.message
    }
  });

  // show in console
  console.error(err);
});
module.exports = app;
