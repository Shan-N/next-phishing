import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = request.json();
        const { email,name,phone,long,lat }:any = reqBody;

       const newUser =  new User({ email, name, phone, long, lat});

       const savedUser = await newUser.save();
    } catch (error:any) {
        return NextResponse.json({error: error.message},
        {status: 500});
    }
}