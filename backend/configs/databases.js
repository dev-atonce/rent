const mongoose = require("mongoose");
const config = require("../configs/app");

// const databases = {
//   mongoDB() {
//     const db = mongoose.connect(
//       config.mongodbUri,
//       { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
//       (error) => {
//         if (error) console.error("MongoDB error: ", error);
//         console.log("MongoDB connected");
//       }
//     );
//     return db;
//   },
// };

const connectToMongo = async () => {
  try {
    mongoose.connect(config.mongodbUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB error: ", error);
  }
};

module.exports = connectToMongo();

// module.exports = databases.mongoDB();
