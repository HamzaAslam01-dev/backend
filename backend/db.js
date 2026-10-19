import mongoose from "mongoose";
import dns from "node:dns";

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI is not configured. Add it to backend/.env.");
    }

    const dnsServers = process.env.MONGO_DNS_SERVERS
      ?.split(",")
      .map((server) => server.trim())
      .filter(Boolean);
    if (dnsServers?.length) {
      dns.setServers(dnsServers);
    }

    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;