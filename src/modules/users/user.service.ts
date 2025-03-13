import prisma from "../utilis/prisma";
import { CreateUserInput } from "./user.schema";
export async function createUser(input:CreateUserInput){
    const user = await prisma.user.create({
        data:input
    })
}