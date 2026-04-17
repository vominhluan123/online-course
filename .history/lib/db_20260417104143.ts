import { MongoClient } from "mongodb";



const url = process.env.MONGODB_URI;



export const ConnectToDatabase = ()=>{
  if (!url) {
    throw new Error("❌ MONGODB_URI chưa được cấu hình trong .env.local");
  }
  if (url) {
    console.log("");
  }
}
