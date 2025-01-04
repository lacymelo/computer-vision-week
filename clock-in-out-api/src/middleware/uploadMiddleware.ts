import { NextFunction, Request, Response } from "express";
import multer from "multer"
import multerConfig from "../config/multer";

const upload = multer(multerConfig)

const uploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
    upload.single("avatar_url")(req, res, (err) => {
        if (!req.file) {
            res.status(400).json({ message: "file is required!" })
        }

        if (err) {
            next(err)
        }

        next()
    })
}

export { uploadMiddleware }