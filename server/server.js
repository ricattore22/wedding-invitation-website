require("dotenv").config();

const express = require("express");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const cors = require("cors");

const routeWishesApi = require("./routes/wishes");
// const routeAdmin = require("./routes/admin");

const app = express();
const port = 1201;

app.engine("ejs", ejsMate);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(methodOverride("_method"));

app.use(express.json());
app.use(
  cors({ origin: ["http://localhost:1201/", `${process.env.BASE_URL}`] })
);

app.get("/", (req, res) => {
  return res.render("home");
});

app.use("/api", routeWishesApi);
// app.use("/admin", routeAdmin);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Check Connection MySQL, if using 'mysql'
// const { db } = require("./utils/dbConnect");
// db.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("SUCCESS, DATABASE CONNECTED");
// });
