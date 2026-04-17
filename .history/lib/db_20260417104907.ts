import mongoose from "mongoose";

const url = process.env.MONGODB_URL;

export const ConnectToDatabase = async () => {
  if (!url) {
    throw new Error("❌ MONGODB_URL chưa được cấu hình trong .env.local");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Khoa-hoc-online",
    });
  } catch (error) {}
};
