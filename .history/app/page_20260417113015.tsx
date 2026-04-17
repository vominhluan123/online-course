import { ConnectToDatabase } from "@/lib/db";

export default async function Home() {
  const conectet = ConnectToDatabase();
  console.log("🚀 ~ Home ~ conectet:", conectet)
  return <div className="p-6 space-y-6">Home page</div>;
}
