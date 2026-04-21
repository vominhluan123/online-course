import mongoose from "mongoose";

const url = process.env.MONGODB_URL;

let connection: typeof mongoose | null = null;
let connectingPromise: Promise<typeof mongoose> | null = null;

export const ConnectToDatabase = async () => {
  if (!url) {
    throw new Error("❌ MONGODB_URL chưa được cấu hình");
  }

  // ✅ Nếu đã connect rồi → dùng lại
  if (connection) {
    console.log("⚡ Dùng lại connection");
    return connection;
  }

  // ✅ Nếu đang connect dở → chờ
  if (connectingPromise) {
    console.log("⏳ Đang connect, chờ...");
    connection = await connectingPromise;
    return connection;
  }

  try {
    console.log("🚀 Tạo connection mới...");

    connectingPromise = mongoose.connect(url, {
      dbName: "Khoa-hoc",
    });

    connection = await connectingPromise;

    return connection;
  } catch (error) {
    connectingPromise = null;
    console.error("❌ Lỗi kết nối DB:", error);
    throw error;
  }
};
