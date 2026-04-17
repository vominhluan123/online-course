import mongoose from "mongoose";

const url = process.env.MONGODB_URL;
const isConnected: boolean = false;
export const ConnectToDatabase = async () => {
  if (!url) {
    throw new Error("❌ MONGODB_URL chưa được cấu hình trong .env.local");
  }
  if (isConnected) {
    console.log(object);
  }
  try {
    console.log("MONGODB_URL đã sẵn sàng kết nối");
    await mongoose.connect(url, {
      dbName: "Khoa-hoc-online",
    });
  } catch (error) {
    console.error("❌ Lỗi kết nối DB:", error);
  }
};
