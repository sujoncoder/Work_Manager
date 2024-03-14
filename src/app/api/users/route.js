import connectDB from "@/helper/db";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

connectDB();

//  GET ALL USERS 
export const GET = async (request) => {
    let users = [];
    try {
        users = await User.find();
        return NextResponse.json(users);

    } catch (error) {
        return NextResponse.json({
            message: "fail to get all users",
            status: false
        })
    }
};


//  CREATE NEW USER
export const POST = async (request) => {
    const { name, email, password, about, profileURL } = await request.json();

    try {
        const user = new User({
            name,
            email,
            password,
            about,
            profileURL
        });

        await user.save();
        const response = NextResponse.json(user, { status: 201 });
        return response;

    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: false
        })
    }
};