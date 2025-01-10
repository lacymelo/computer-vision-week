import { Router } from "express";
import { uploadMiddleware } from "../middleware/uploadMiddleware";
import { UserController } from "../modules/user/UserController";
import { PresenceController } from "../modules/presence/PresenceController";

const routes = Router()
const userController = new UserController()
const presenceController = new PresenceController()


routes.post('/user/create', uploadMiddleware, userController.createUser)
routes.get('/user/list', userController.listUsers)
routes.post('/presence/create', presenceController.createPresence)

export { routes }