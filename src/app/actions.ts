'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

// READ actions
export async function getUsers() {
    try {
        const users = await prisma.user.findMany({
            include: {
                
            }
        })
    } catch (e) {

    }
}
