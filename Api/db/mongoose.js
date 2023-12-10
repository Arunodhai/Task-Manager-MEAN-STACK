const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(
  'mongodb+srv://amenp2mca22016:<Your Password></Your>@cluster0.hhalde3.mongodb.net/TaskManager', 
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
  console.log("Error while attempting to connect to MongoDB");
  console.log(e);
});

module.exports = {
  mongoose
};
