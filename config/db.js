const gradient = require("gradient-string")
const mongoose = require("mongoose");
// const config = require("./default.json");
const db = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log(gradient.summer(`Connected to MongoDB`));
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
