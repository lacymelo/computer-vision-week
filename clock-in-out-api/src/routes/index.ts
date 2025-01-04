import { Router } from "express";
import { uploadMiddleware } from "../middleware/uploadMiddleware";
import { UserController } from "../modules/user/UserController";

const routes = Router()
const userController = new UserController()

routes.post('/user/create', uploadMiddleware, userController.createUser)
routes.get('/user/list', userController.listUsers)

export { routes }