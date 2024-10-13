import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request: NextRequest) {
    try {
        // Await the promise to get the request body
        const reqBody = await request.json(); // <-- Added await here
        const { email, name, phone, long, lat }: any = reqBody;

        // Create a new user instance
        const newUser = new User({ email, name, phone, long, lat });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Return the saved user with a success status
        return NextResponse.json({ user: savedUser }, { status: 201 });
    } catch (error: any) {
        // Return a JSON response with the error message and a 500 status
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
