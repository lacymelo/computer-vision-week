import express, { NextFunction, Request, Response } from "express"
import { routes } from "./routes"
import cors from "cors"
import path from "path"

const app = express()

app.use(cors())

app.use(express.json())

const uploadPath = path.join(__dirname, "../uploads")
app.use('/uploads', express.static(uploadPath))

app.use(routes)

// middleware interceptador de errors
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        response.status(400).json({
            message: err.message
        })
    }

    response.status(500).json({
        message: 'Sever internal error.'
    })

    next()
})

app.listen(3333, () => console.log("Server is running!"))