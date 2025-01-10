import { prisma } from "../../database/prismaClient"

interface PresenceType {
    mood: string
    user_id: string
}

export class PresenceUseCase {
    async create({ mood, user_id }: PresenceType) {
        // recuperar o inicio e o fim do dia
        const date = new Date()

        const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate())

        const endOfDay = new Date(startOfDay)
        endOfDay.setDate(endOfDay.getDate() + 1)

        // contar os registros do dia
        const presenceCount = await prisma.presence.count({
            where: {
                user_id,
                created_at: {
                    gte: startOfDay,
                    lt: endOfDay
                }
            }
        })

        // verificar se tem dois registros no dia, e enviar mensagem
        if (presenceCount >= 2) {
            throw new Error("Entry and exit confirmed!")
        }

        // criar o registro
        const presence = await prisma.presence.create({
            data: {
                mood,
                user_id
            }
        })

        return presence
    }
}