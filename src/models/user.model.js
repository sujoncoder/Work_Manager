import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "This email already exist"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    about: String,
    profileURL: String
});

const User = mongoose.model("User", userSchema);

export default User;