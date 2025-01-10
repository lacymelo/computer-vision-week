import { NextFunction, Request, Response } from "express";
import { PresenceUseCase } from "./PresenceUseCase";

export class PresenceController {
    async createPresence(req: Request, res: Response, next: NextFunction) {
        try {
            const { mood, user_id } = req.body

            const presenceUseCase = new PresenceUseCase()

            const result = await presenceUseCase.create({
                mood,
                user_id
            })

            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }
}