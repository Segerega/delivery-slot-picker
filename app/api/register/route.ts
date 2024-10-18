import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { fullname, username, password } = await request.json();

    if (!fullname || !username || !password) {
        return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
        where: { username },
    });

    if (existingUser) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await prisma.user.create({
            data: {
                fullname,
                username,
                password: hashedPassword,
            },
        });

        return NextResponse.json({ success: true, user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: 'An error occurred while creating the user' }, { status: 500 });
    }
}
