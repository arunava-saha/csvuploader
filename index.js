const express = require("express");

require("dotenv").config();
const app = express();
const connectdb = require("./config/mongoose");
const port = process.env.port || 8000;
const path = require("path");
const csv = require("csv-parser");
connectdb();
const layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "assets")));
app.use(layouts);

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
// app.set('Content-Type', 'text/css');

app.use("/", require("./routes/route"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
