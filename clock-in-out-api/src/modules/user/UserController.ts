import { NextFunction, Request, Response } from "express";
import { UserUseCase } from "./UserUseCase";
import fs from "fs"

interface UserType {
    id: string
    name: string
    avatar_url: string
}

export class UserController {
    async createUser(req: Request, res: Response, next: NextFunction) {
        const { name, bio, email } = req.body
        const { file } = req

        const userUseCase = new UserUseCase()

        try {
            const result = await userUseCase.create({
                name,
                bio,
                email,
                avatar_url: file.filename
            })

            res.status(200).json(result)
        } catch (error) {
            if (file) {
                fs.unlink(file.path, (err) => { console.log("Error removing file: ", err) })
            }
        }
    }

    async listUsers(req: Request, res: Response, next: NextFunction) {
        const userUseCase = new UserUseCase()

        try {
            const users = await userUseCase.list()

            const usersRefactor = users.map((user: UserType) => {
                return {
                    ...user,
                    avatar_url: `${process.env.URL_LOCAL}/uploads/${user.avatar_url}`
                }
            })

            res.status(200).json(usersRefactor)
        } catch (error) {
            next(error)
        }
    }
}