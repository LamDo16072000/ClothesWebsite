const mongoose = require("mongoose");
const MONGODB_HOST = "mongodb+srv://Lam167:Lam167@cluster1.nciykbb.mongodb.net/test"
// const connectDatabase = () => {
//   mongoose.set('strictQuery', false);
//   mongoose.connect(`${process.env.DB_LOCAL_URI}`, { useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true,
//     useFindAndModify: false, }, () => {
//     console.log("mongodb is connected")
//   });
// };



const connectDatabase = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(`${MONGODB_HOST}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((con) => {
      console.log(`MongoDB connected with host: ${con.connection.host}`);
    });
};
module.exports = connectDatabase;
