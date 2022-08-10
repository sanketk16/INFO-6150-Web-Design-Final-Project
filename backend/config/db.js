import mongoose from 'mongoose'
// import {} from 'dotenv/config'
import dotenv  from "dotenv"
// import * as path from 'path'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


// const dotenv = require ('dotenv');
dotenv.config({path:__dirname+'/.env'});

// console.log(process.env.MONGO_URI);
const connectDB = async () => {

      //database connection
      try {
            // const conn = await mongoose.connect("mongodb://localhost:27017/hotel", {
            //       useUnifiedTopology: true,
            //       useNewUrlParser: true,
            //       useCreateIndex: true
            // })

            // const conn = await mongoose.connect(process.env.MONGO_URI, {
            //       useUnifiedTopology: true,
            //       useNewUrlParser: true,
            //       useCreateIndex: true
            // })

            const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://sanketk:1234@cluster0.pism3.mongodb.net/hotel", {
                  useUnifiedTopology: true,
                  useNewUrlParser: true,
                  useCreateIndex: true
            })

            //database connected alert
            console.log(`MongoDB Connected: ${conn.connection.host}`)
      } 
      catch (error) {
            console.error(`Error: ${error.message}`) //database not connected message
            process.exit(1)
      }
}

export default connectDB