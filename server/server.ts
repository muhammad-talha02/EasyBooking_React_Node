import dotenv from "dotenv";
import mongoose from "mongoose";
import { app } from "./app";
dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL as string)
    .then(() => console.log("Database Connected"))
    .catch(() => {
      console.log("Error In Database Connection");
    });
};

mongoose.connection.on("connected", ()=>console.log("connection stable"))

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`App is Running at ${process.env.PORT}`);
});
