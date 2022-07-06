require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const events = require("./routes/events");
const advert = require("./routes/adverts");

// initializa express app
const app = express();
const port = process.env.PORT || 3001;

// middlwares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "../client/build")));

// client routes
app.use("/api/events", events);
app.use("/api/adverts", advert);

// ANY unmatched routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
//run serer
app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server started on port " + port);
});
