const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(`mongodb+srv://rishusingh13615:lq0u74YZKrzRTc2b@cluster0.vg7e7rj.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = connectToDatabase;