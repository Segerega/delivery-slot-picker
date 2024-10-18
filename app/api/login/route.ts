import prisma from '../../../prisma/prisma';

export async function POST(req) {
    const { email, password } = await req.json();

    try {
        const user = await prisma.user.findUnique({
            where: { username: email }
        });

        if (!user || user.password !== password) { // Replace with hashed password comparison
            return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
        }

        return new Response(JSON.stringify({ message: "Login successful" }), { status: 200 });
    } catch (error) {
        console.error('Error during login:', error);
        return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
    }
}
