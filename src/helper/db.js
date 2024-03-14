import mongoose from "mongoose";
import colors from "colors";
import User from "../models/user.model";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database is connect succesfull.".bgBlue)

        const user = new User({
            name: "sujon",
            email: "sujon@gmail.com",
            password: "iamsujon",
            about: "this is testing"
        });

        await user.save();
        console.log("user create successfull");

    } catch (error) {
        console.log(`Database connect fail ${error.message}`.bgRed)
    }
};

export default connectDB;