const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connect Success");
  } catch (error) {
    console.log("Connect Failure");
    process.exit(1);
  }
}

module.exports = { connectDB };
