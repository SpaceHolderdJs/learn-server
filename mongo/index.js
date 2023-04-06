import mongoose from "mongoose";

const uri = `mongodb+srv://Igor:somepassword1999@main.2p6yd.mongodb.net/?retryWrites=true&w=majority`;

const connectMongoDb = () => {
  mongoose
    .connect(uri, { useNewUrlParser: true, dbName: "learning_db",  })
    .then(() => {
      console.log("DB Connected");
    })
    .catch((e) => console.log("DB connection error ", e));
};

export default connectMongoDb;
