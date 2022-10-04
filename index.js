const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
const events = require("./routes/events");
const adverts = require("./routes/adverts");
const authRoute = require("./routes/authRoutes");

// initialize express app
const app = express();

// middlwares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "../client/build")));

// client routes
app.use("/api/events", events);
app.use("/api/adverts", adverts);
app.use("/api/",authRoute);

// ANY unmatched routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

mongoose.connect('mongodb://localhost:27017/RacTuk_Database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const database = mongoose.connection;
database.on('open', () => {
  console.log('Database connected successfully')
});
database.on('error', () => {
  console.log('Error connecting to database')
});


//run server
const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server started on port ${PORT}`);
});
