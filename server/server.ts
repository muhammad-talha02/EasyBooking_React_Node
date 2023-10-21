import { configDotenv } from "dotenv";
configDotenv()
import { app } from "./app";

app.listen(process.env.PORT , ()=>{
    console.log(`App is Running at ${process.env.PORT}`)
})