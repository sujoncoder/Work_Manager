import connectDB from "@/helper/db";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

connectDB();


// DELETE USER BY ID 
export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        const user = await User.findById(id);

        return NextResponse.json({
            message: "User found succesfull",
            user
        });

    } catch (error) {
        return NextResponse.json({
            message: "failed to get a user",
            status: false
        })
    }
};


// DELETE USER BY ID 
export const DELETE = async (request, { params }) => {
    const { id } = params;
    try {
        await User.deleteOne({
            _id: id
        });

        return NextResponse.json({
            message: "user delete succesfull",
            status: true
        })
    } catch (error) {
        return NextResponse.json({
            message: "User delete fail",
            status: "false"
        })
    }
};


// UPDATE USER BY ID 
export const PUT = async (request, { params }) => {
    const { id } = params;
    try {
        const { name, email, password, about, profileURL } = await request.json();
        const updateUser = await User.findByIdAndUpdate(id, { name, email, password, about, profileURL });

        return NextResponse.status(200).json({
            message: "user update successfull",
            updateUser
        });

    } catch (error) {
        return NextResponse.json({
            message: "user profile update failed.",
            status: false
        })
    }
};