import { prisma } from "../../database/prismaClient"

interface UserType {
    name: string
    bio?: string
    email: string
    avatar_url: string
}

export class UserUseCase {
    async create({ name, bio, email, avatar_url }: UserType) {
        // verificar se usuário existe
        const userExists = await prisma.user.findFirst({
            where: {
                email
            }
        })
        // disparar mensagem
        if (userExists) {
            throw new Error("User already exists!")
        }

        // registrar usuário
        const user = await prisma.user.create({
            data: {
                name,
                bio,
                email,
                avatar_url
            }
        })

        return user
    }

    async list() {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                avatar_url: true
            }
        })

        return users
    }
}