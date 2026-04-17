import mongoose from "mongoose";

const url = process.env.MONGODB_URI;

export const ConnectToDatabase = async () => {
  if (!url) {
    throw new Error("❌ MONGODB_URI chưa được cấu hình trong .env.local");
  }
  if (url) {
    console.log("MONGODD_URL đã sẵn sàng kết nối");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Khoa-hoc-online",
    });
  } catch (error) {}
};
