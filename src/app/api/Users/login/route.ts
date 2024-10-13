import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';


connect();


interface UserRequestBody {
    email: string;
    name: string;
    phone: string;
    long: number;  
    lat: number;
}

export async function POST(request: NextRequest) {
    try {
        const reqBody: UserRequestBody = await request.json();
        
        const { email, name, phone, long, lat } = reqBody;

        const newUser = new User({ email, name, phone, long, lat });

        const savedUser = await newUser.save();


        return NextResponse.json({ user: savedUser }, { status: 201 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
