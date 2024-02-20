import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB);
    console.log(`MongoDB connected on host : ${connect.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection failed: ${error}`.red);
    process.exit(1);
  }
};

export default connectDB;
