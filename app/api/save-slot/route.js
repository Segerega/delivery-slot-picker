import prisma from '../../../prisma/prisma';

export async function POST(req) {
    const { date, timeSlot, userId } = await req.json();

    try {
        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
            return new Response(JSON.stringify({ error: "Invalid date" }), { status: 400 });
        }

        console.log(`Checking slot for UserId: ${userId}, Date: ${parsedDate}`);

        const existingSlot = await prisma.deliverySlot.findFirst({
            where: {
                userId: userId,
                date: parsedDate,
            },
        });

        if (existingSlot) {
            console.log(`Existing slot found: ${existingSlot.id}, updating it.`);
            const updatedSlot = await prisma.deliverySlot.update({
                where: { id: existingSlot.id },
                data: {
                    timeSlot,
                },
            });
            return new Response(JSON.stringify(updatedSlot), { status: 200 });
        } else {
            console.log(`No existing slot found, creating a new one.`);
            const newSlot = await prisma.deliverySlot.create({
                data: {
                    date: parsedDate,
                    timeSlot,
                    userId,
                },
            });
            return new Response(JSON.stringify(newSlot), { status: 200 });
        }
    } catch (error) {
        console.error("Error saving slot:", error);
        return new Response(JSON.stringify({ error: "Error saving slot" }), { status: 500 });
    }
}
