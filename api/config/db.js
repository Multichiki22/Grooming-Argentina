require("dotenv").config();
const mongoose = require("mongoose");

const connectionString = process.env.MONGO_DB_URI;

mongoose.set("strictQuery", false);

module.exports = () => {
  const connect = async () => {
    try {
      mongoose.connect(connectionString, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("execution of connection");
     
    } catch (error) {
      console.log(error);
    }
  };
  connect();
};
