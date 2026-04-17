// lib/db.js
import { MongoClient } from "mongodb";



const url = process.env.MONGODB_URI;

if (!url) {
  throw new Error("❌ MONGODB_URI chưa được cấu hình trong .env.local");
}

if (process.env.NODE_ENV === "development") {
  // Giữ kết nối trong bộ nhớ khi hot reload
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
