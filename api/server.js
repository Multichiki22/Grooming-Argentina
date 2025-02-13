const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
const cors = require("cors");
const morgan = require('morgan');
const corsOptions = require("./config/corsOptions");
const initDB = require('./config/db');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");

initDB();

//fixing credentials errors blocking cookies from cross-site
app.use(credentials)
//Cross Origin Resource Service
app.use(cookieParser())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(cors(corsOptions));

app.use(morgan("dev"));

app.use(express.urlencoded({extended :false}));

app.use(express.json());

app.use('/', require("./routes/MainRouter"))

mongoose.connection.once("open", async() => {
  console.log("Connected to database")
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})



