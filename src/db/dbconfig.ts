import mongoose from "mongoose";

const DB_NAME = "nextapp";

export async function connect() {
  try {
    mongoose.connect(`${process.env.MONGODB_URI!}/${DB_NAME}`);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. please make sure MongoDB is running." + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Somethisn gose wrong");
    console.log(error);
  }
}
