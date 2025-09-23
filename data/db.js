import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("Db connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDB;
